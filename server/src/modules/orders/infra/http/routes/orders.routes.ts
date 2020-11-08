import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import OrderController from '@modules/orders/infra/http/controllers/OrderController';
import OrdersController from '../controllers/OrdersController';
import OrderDeliveredController from '../controllers/OrderDeliveredController';
import OrderShippingAddressController from '../controllers/OrderShippingAddressController';
import OrdersByUserController from '../controllers/OrdersByUserController';
import OrderStatusController from '../controllers/OrderStatusController';

import checkIsValidMongoId from '@shared/infra/http/middlewares/checkIsValidObjectId';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";

const ordersRouter = Router();
const orderController = new OrderController();
const ordersController = new OrdersController();
const orderDeliveredController = new OrderDeliveredController();
const ordersByUserController = new OrdersByUserController();
const orderStatusController = new OrderStatusController();
const orderShippingAddressController = new OrderShippingAddressController();

ordersRouter.use(ensureAuthenticated);

ordersRouter.get('/', ensureAdminUserAuthenticated, ordersController.index);

ordersRouter.get('/:id', orderController.index);

ordersRouter.get('/user/:id', checkIsValidMongoId, ordersByUserController.index);

ordersRouter.put('/:id/status',
  ensureAdminUserAuthenticated,
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      status: Joi.string().required(),
    },
  }),
  orderStatusController.update
);

ordersRouter.put('/:id/delivered',
  ensureAdminUserAuthenticated,
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      delivered: Joi.boolean().required(),
    },
  }),
  orderDeliveredController.update
);

ordersRouter.put('/:id/shippingAddress',
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      address: Joi.string(),
      country: Joi.string(),
      state: Joi.string(),
      city: Joi.string(),
      postalCode: Joi.string(),
    },
  }),
  orderShippingAddressController.update
);

ordersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      products: Joi.string().required(),
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

ordersRouter.delete('/:id', checkIsValidMongoId, orderController.delete);

export default ordersRouter;
