import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import checkIsValidMongoId from '@shared/infra/http/middlewares/checkIsValidObjectId';
import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";

import AdminOrderController from '../controllers/AdminOrderController';

const adminOrderController = new AdminOrderController();

const adminRouter = Router();

adminRouter.put(
  '/:id',
  checkIsValidMongoId,
  ensureAdminUserAuthenticated,
  celebrate({
    [Segments.BODY]: Joi.object().keys({
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
        address: Joi.string(),
        country: Joi.string(),
        state: Joi.string(),
        city: Joi.string(),
        postalCode: Joi.string(),
      }),
      billingAddress: Joi.object({
        address: Joi.string(),
        country: Joi.string(),
        state: Joi.string(),
        city: Joi.string(),
        postalCode: Joi.string(),
      }),
    }),
  }),
  adminOrderController.update
);

export default adminRouter;
