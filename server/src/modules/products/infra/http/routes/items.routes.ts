import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';

import multer from "multer";
import uploadConfig from "@config/upload";

import ProductItemController from "../controllers/ProductItemController";

import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

import sizesRouter from "./sizes.routes";

const productItemController = new ProductItemController();
const itemRouter = Router();
const upload = multer(uploadConfig.multer);

itemRouter.use(ensureAdminUserAuthenticated);

itemRouter.use('/sizes', sizesRouter);

itemRouter.post(
  "/:id",
  checkIsValidMongoId,
  upload.array("images"),
  productItemController.create
);

itemRouter.put(
  "/:id",
  checkIsValidMongoId,
  upload.array("images"),
  // celebrate({
  //   [Segments.BODY]: {
  //     color: Joi.string(),
  //     imageColor: Joi.string(),
  //     olColor: Joi.string(),
  //   }
  // }),
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
