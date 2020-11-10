import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import checkIsValidMongoId from '@shared/infra/http/middlewares/checkIsValidObjectId';

import OrdersByUserController from '../controllers/OrdersByUserController';
import UserOrderController from '../controllers/UserOrderController';

const ordersByUserController = new OrdersByUserController();
const userOrderController = new UserOrderController();

const userRouter = Router();

userRouter.use(ensureAuthenticated);

userRouter.get('/', ordersByUserController.index);

userRouter.put(
  '/:id',
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

export default userRouter;
