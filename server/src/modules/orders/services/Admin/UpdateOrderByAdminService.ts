import { IOrder, IOrderProduct } from '../../infra/mongoose/models/Order';
import IAddress from '@shared/dtos/IAddressDTO';

import AppError from '@shared/errors/AppError';
import statusCodes from "@config/statusCodes";

import OrdersRepository from '../../infra/mongoose/repositories/OrdersRepository';
import ProductsRepository from '@modules/products/infra/mongoose/repositories/ProductsRepository';
import UsersRepository from '@modules/users/infra/mongoose/repositories/UsersRepository';

const ordersRepository = new OrdersRepository();
const productsRepository = new ProductsRepository();
const usersRepository = new UsersRepository();

interface IRequestProduct {
  productId: string;
  items: Array<{
    color: string;
    sizeTag: string;
    quantity: number;
  }>;
}

interface IRequest {
  adminId: string;
  orderId: string;
  delivered?: boolean;
  status?: string;
  products?: IRequestProduct[];
  shippingAddress?: IAddress;
  billingAddress?: IAddress;
}

class UpdateOrderByAdminService {
  public async execute({
    adminId,
    orderId,
    products,
    delivered,
    status,
    shippingAddress,
    billingAddress
  }: IRequest): Promise<IOrder | null> {
    const admin = await usersRepository.findById(adminId);

    if (!admin)
      throw new AppError("Admin not found.", statusCodes.notFound);

    const order = await ordersRepository.findById(orderId);

    if (!order)
      throw new AppError("Order not found.", statusCodes.notFound);

    if (!products && delivered === undefined && !status && !shippingAddress && !billingAddress)
      throw new AppError('Bad Request.');

    if (products) {
      for (let i = 0; i < order.products.length; i++) {
        for (let j = 0; j < order.products[i].items.length; j++) {
          await productsRepository.updateSizeQuantity({
            productId: String(order.products[i].productId),
            color: order.products[i].items[j].color,
            sizeTag: order.products[i].items[j].sizeTag,
            quantity: order.products[i].items[j].quantity,
            operator: 'add'
          });
        }
      }

      const orderProducts: IOrderProduct[] = [];
      let currentProduct, currentProductPrice;
      let subTotal = 0;
      let quantityOfItemsForCurrentProduct = 0;

      for (let i = 0; i < products.length; i++) {
        quantityOfItemsForCurrentProduct = 0;
        currentProduct = await productsRepository.findById(products[i].productId);

        if (!currentProduct)
          throw new AppError("One of the products doesn't exists in the database.");

        currentProductPrice = currentProduct.price;

        orderProducts.push({
          ...products[i],
          productId: currentProduct,
          productPrice: currentProduct.price
        });

        for (let j = 0; j < products[i].items.length; j++) {
          const stockQuantity = await productsRepository.findQuantity({
            productId: products[i].productId,
            color: products[i].items[j].color,
            sizeTag: products[i].items[j].sizeTag,
          });

          if (stockQuantity === 0)
            throw new AppError(`The product '${products[i].productId}' is out of stock.`);

          if (!stockQuantity)
            throw new AppError("The product was not found.", statusCodes.notFound);

          if (products[i].items[j].quantity > stockQuantity)
            throw new AppError(`The requested quantity is for the product '${products[i].productId}' not available in stock.`);

          await productsRepository.updateSizeQuantity({
            productId: products[i].productId,
            color: products[i].items[j].color,
            sizeTag: products[i].items[j].sizeTag,
            quantity: products[i].items[j].quantity,
            operator: 'sub'
          });

          quantityOfItemsForCurrentProduct += products[i].items[j].quantity;
        }

        subTotal += (currentProductPrice * quantityOfItemsForCurrentProduct);
      }

      const tax = 0.13;

      let total = (subTotal + order.shippingPrice) * (1 + tax);
      total = Math.round(((total + Number.EPSILON) * 100) / 100);

      order.subTotal = subTotal;
      order.products = orderProducts;
      order.total = total;
    }

    order.delivered = delivered ?? order.delivered;
    order.status = status ?? order.status;
    order.shippingAddress = shippingAddress ?? order.shippingAddress;
    order.billingAddress = billingAddress ?? order.billingAddress;

    await ordersRepository.save(order);

    return order;
  }
}

export default UpdateOrderByAdminService;
