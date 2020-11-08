import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import OrderController from '@modules/orders/infra/http/controllers/OrderController';
import OrdersController from '../controllers/OrdersController';
import OrdersByUserController from '../controllers/OrdersByUserController';
import AdminOrderController from '../controllers/AdminOrderController';
import UserOrderController from '../controllers/UserOrderController';

import checkIsValidMongoId from '@shared/infra/http/middlewares/checkIsValidObjectId';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";

const ordersRouter = Router();
const orderController = new OrderController();
const ordersController = new OrdersController();
const ordersByUserController = new OrdersByUserController();
const adminOrderController = new AdminOrderController();
const userOrderController = new UserOrderController();

ordersRouter.use(ensureAuthenticated);

ordersRouter.get('/', ensureAdminUserAuthenticated, ordersController.index);

ordersRouter.get('/:id', orderController.index);

ordersRouter.get('/user/:id', checkIsValidMongoId, ordersByUserController.index);

ordersRouter.put(
  '/admin/:id',
  checkIsValidMongoId,
  ensureAdminUserAuthenticated,
  celebrate({
    [Segments.BODY]: {
      delivered: Joi.boolean(),
      status: Joi.string(),
      products: Joi.array().items(Joi.object({
        productId: Joi.string().required(),
        items: Joi.array().items(Joi.object({
          color: Joi.string().required(),
          sizeTag: Joi.string().required(),
          quantity: Joi.number().required(),
        }))
      })),
      shippingAddress: Joi.object({
        address: Joi.string().required(),
        country: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        postalCode: Joi.string().required(),
      }),
      billingAddress: Joi.object({
        address: Joi.string().required(),
        country: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        postalCode: Joi.string().required(),
      }),
    },
  }),
  adminOrderController.update
);

ordersRouter.put(
  '/user/:id',
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      products: Joi.array().items(Joi.object({
        productId: Joi.string().required(),
        items: Joi.array().items(Joi.object({
          color: Joi.string().required(),
          sizeTag: Joi.string().required(),
          quantity: Joi.number().required(),
        }))
      })),
      shippingAddress: Joi.object({
        address: Joi.string().required(),
        country: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        postalCode: Joi.string().required(),
      }),
      billingAddress: Joi.object({
        address: Joi.string().required(),
        country: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        postalCode: Joi.string().required(),
      }),
    },
  }),
  userOrderController.update
);

ordersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      products: Joi.array().items(Joi.object({
        productId: Joi.string().required(),
        items: Joi.array().items(Joi.object({
          color: Joi.string().required(),
          sizeTag: Joi.string().required(),
          quantity: Joi.number().required(),
        }))
      })).required(),
      shippingPrice: Joi.number().required(),
      shippingAddress: Joi.object({
        address: Joi.string().required(),
        country: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        postalCode: Joi.string().required(),
      }).required(),
      billingAddress: Joi.object({
        address: Joi.string().required(),
        country: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        postalCode: Joi.string().required(),
      }).required(),
    },
  }),
  orderController.create);

ordersRouter.delete('/:id', checkIsValidMongoId, ensureAdminUserAuthenticated, orderController.delete);

export default ordersRouter;
