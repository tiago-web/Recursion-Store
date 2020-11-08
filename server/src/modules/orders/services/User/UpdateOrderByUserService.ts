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
  userId: string,
  orderId: string,
  products?: IRequestProduct[],
  shippingAddress?: IAddress,
  billingAddress?: IAddress,
}

class UpdateOrderByAdminService {
  public async execute({
    userId,
    orderId,
    products,
    shippingAddress,
    billingAddress
  }: IRequest): Promise<IOrder | null> {
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
      const orderProducts: IOrderProduct[] = [];
      let currentProduct;

      for (let i = 0; i < products.length; i++) {
        currentProduct = await productsRepository.findById(products[i].productId);

        if (!currentProduct)
          throw new AppError("One of the products doesn't exists in the database.");

        orderProducts.push({
          ...products[i],
          productId: currentProduct,
          productPrice: currentProduct.price
        });
      }

      order.products = orderProducts;
    }

    order.shippingAddress = shippingAddress ?? order.shippingAddress;
    order.billingAddress = billingAddress ?? order.billingAddress;

    await ordersRepository.save(order);

    return order;
  }
}

export default UpdateOrderByAdminService;
