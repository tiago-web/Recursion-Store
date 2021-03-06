import { IOrder, IOrderProduct } from '../../infra/mongoose/models/Order';

import AppError from '@shared/errors/AppError';
import statusCodes from "@config/statusCodes";

import OrdersRepository from '../../infra/mongoose/repositories/OrdersRepository';
import ProductsRepository from '@modules/products/infra/mongoose/repositories/ProductsRepository';
import UsersRepository from '@modules/users/infra/mongoose/repositories/UsersRepository';

const ordersRepository = new OrdersRepository();
const productsRepository = new ProductsRepository();
const usersRepository = new UsersRepository();

interface IRequestAddress {
  address?: string;
  country?: string;
  state?: string;
  city?: string;
  postalCode?: string;
}

interface IRequestProduct {
  productId: string;
  items: Array<{
    color: string;
    sizeTag: string;
    quantity: number;
  }>;
}

interface IRequest {
  userId: string,
  orderId: string,
  products?: IRequestProduct[],
  shippingAddress?: IRequestAddress,
  billingAddress?: IRequestAddress,
}

class UpdateOrderByUserService {
  public async execute({
    userId,
    orderId,
    products,
    shippingAddress,
    billingAddress
  }: IRequest): Promise<IOrder> {
    const user = await usersRepository.findById(userId);

    if (!user)
      throw new AppError('User not found.', statusCodes.notFound);

    const order = await ordersRepository.findById(orderId);

    if (!order)
      throw new AppError('Order not found.', statusCodes.notFound);

    if (order.status !== 'In-Process')
      throw new AppError('This order cannot be changed anymore.', statusCodes.forbidden);

    if (!products && !shippingAddress && !billingAddress)
      throw new AppError('Bad request.', statusCodes.notFound);

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

      order.products = orderProducts;
      order.subTotal = subTotal;
      order.total = total;
    }

    if (shippingAddress) {
      const { address, country, state, city, postalCode } = shippingAddress;

      if (!address && !country && !state && !city && !postalCode)
        throw new AppError("Bad Request.")

      order.shippingAddress.address = address ?? order.shippingAddress.address;
      order.shippingAddress.country = country ?? order.shippingAddress.country;
      order.shippingAddress.state = state ?? order.shippingAddress.state;
      order.shippingAddress.city = city ?? order.shippingAddress.city;
      order.shippingAddress.postalCode = postalCode ?? order.shippingAddress.postalCode;
    }

    if (billingAddress) {

      const { address, country, state, city, postalCode } = billingAddress;

      if (!address && !country && !state && !city && !postalCode)
        throw new AppError("Bad Request.")

      order.billingAddress.address = address ?? order.billingAddress.address;
      order.billingAddress.country = country ?? order.billingAddress.country;
      order.billingAddress.state = state ?? order.billingAddress.state;
      order.billingAddress.city = city ?? order.billingAddress.city;
      order.billingAddress.postalCode = postalCode ?? order.billingAddress.postalCode;
    }

    // order.shippingAddress = shippingAddress ?? order.shippingAddress;
    // order.billingAddress = billingAddress ?? order.billingAddress;

    await ordersRepository.save(order);

    return order;
  }
}

export default UpdateOrderByUserService;
