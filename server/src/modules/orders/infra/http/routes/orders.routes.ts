import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import OrderController from '@modules/orders/infra/http/controllers/OrderController';
import OrdersController from '../controllers/OrdersController';

import checkIsValidMongoId from '@shared/infra/http/middlewares/checkIsValidObjectId';
import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";

import userRouter from './user.routes';
import adminRouter from './admin.routes';

const ordersRouter = Router();

const orderController = new OrderController();
const ordersController = new OrdersController();

ordersRouter.use('/user', userRouter);

ordersRouter.use('/admin', adminRouter);

ordersRouter.use(ensureAuthenticated);

ordersRouter.get('/', ensureAdminUserAuthenticated, ordersController.index);

ordersRouter.get('/:id', orderController.index);

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
