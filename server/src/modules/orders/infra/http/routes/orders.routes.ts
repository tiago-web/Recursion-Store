import { Router } from 'express';
import { celebrate, Segments, Joi } from "celebrate";

import OrderController from '@modules/orders/infra/http/controllers/OrderController';
import OrdersController from '../controllers/OrdersController';
import OrderByIdController from '../controllers/OrderByIdController';
import OrderDeliveredController from '../controllers/OrderDeliveredController';
import OrderShippingAddressController from '../controllers/OrderShippingAddressController';
import OrdersByUserController from '../controllers/OrdersByUserController';
import OrderStatusController from '../controllers/OrderStatusController';

import checkIsValidMongoId from '@shared/infra/http/middlewares/checkIsValidObjectId';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';

const ordersRouter = Router();
const orderController = new OrderController();
const ordersController = new OrdersController();
const orderByIdController = new OrderByIdController();
const orderDeliveredController = new OrderDeliveredController();
const ordersByUserController = new OrdersByUserController();
const orderStatusController = new OrderStatusController();
const orderShippingAddressController = new OrderShippingAddressController();

ordersRouter.use(ensureAuthenticated);

ordersRouter.post('/', orderController.create);

ordersRouter.delete('/:id', checkIsValidMongoId, orderController.delete);

ordersRouter.get('/', ordersController.index);

ordersRouter.get('/:orderId', orderByIdController.index);

ordersRouter.get('/user/:id', checkIsValidMongoId, ordersByUserController.index);

ordersRouter.put('/:id/status',
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      status: Joi.string().required(),
    },
  }),
  orderStatusController.update
);

ordersRouter.put('/:id/delivered',
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
      shippingAddress: {
        address: Joi.string().required(),
        country: Joi.string().required(),
        state: Joi.string().required(),
        city: Joi.string().required(),
        postalCode: Joi.string().required(),
      },
    },
  }),
  orderShippingAddressController.update
);


export default ordersRouter;
