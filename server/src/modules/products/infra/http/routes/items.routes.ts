import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';

import ProductItemController from "../controllers/ProductItemController";

import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

import sizesRouter from "./sizes.routes";

const productItemController = new ProductItemController();
const itemRouter = Router();

itemRouter.use(ensureAdminUserAuthenticated);

itemRouter.use('/sizes', sizesRouter);

itemRouter.post(
  "/:id",
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      color: Joi.string().required(),
      imageColor: Joi.string().required(),
      sizes: Joi.array().items(Joi.object({
        sizeTag: Joi.string().required(),
        quantity: Joi.number().required(),
      }))
    }
  }),
  productItemController.create
);

itemRouter.put(
  "/:id",
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      color: Joi.string(),
      imageColor: Joi.string(),
      olColor: Joi.string(),
    }
  }),
  productItemController.update
);

itemRouter.delete(
  "/:id",
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      color: Joi.string().required(),
    }
  }),
  productItemController.delete
);

export default itemRouter;
