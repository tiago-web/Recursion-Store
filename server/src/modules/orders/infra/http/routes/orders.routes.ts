import { Router } from 'express';
import { celebrate, Segments, Joi } from "celebrate";
import checkIsValidMongoId from '@shared/infra/http/middlewares/checkIsValidObjectId';

import OrdersController from '@modules/orders/infra/http/controllers/OrdersController';
import OrderByIdController from '../controllers/OrderByIdController';
import OrderDeliveredController from '../controllers/OrderDeliveredController';
import OrdersByUserController from '../controllers/OrdersByUserController';
import OrderStatusController from '../controllers/OrderStatusController';

const ordersRouter = Router();
const ordersController = new OrdersController();
const orderByIdController = new OrderByIdController();
const orderDeliveredController = new OrderDeliveredController();
const ordersByUserController = new OrdersByUserController();
const orderStatusController = new OrderStatusController();

ordersRouter.post('/', ordersController.create);

ordersRouter.get('/:id', checkIsValidMongoId, orderByIdController.index);

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
export default ordersRouter;
