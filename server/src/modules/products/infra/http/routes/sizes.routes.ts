import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';

import ProductItemSizeController from "../controllers/ProductItemSizeController";

import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

const productItemSizeController = new ProductItemSizeController();
const sizeRouter = Router();

sizeRouter.use(ensureAdminUserAuthenticated);

sizeRouter.post(
  "/:id",
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      color: Joi.string().required(),
      sizeTag: Joi.string().required(),
      quantity: Joi.number().required()
    }
  }),
  productItemSizeController.create);

sizeRouter.put(
  "/:id",
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      color: Joi.string().required(),
      oldSizeTag: Joi.string().required(),
      sizeTag: Joi.string(),
      quantity: Joi.number()
    }
  }),
  productItemSizeController.update);

sizeRouter.delete(
  "/:id",
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      color: Joi.string().required(),
      sizeTag: Joi.string().required(),
    }
  }),
  productItemSizeController.delete);

export default sizeRouter;
