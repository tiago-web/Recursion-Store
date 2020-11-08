import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';

import ProductController from "../controllers/ProductController";
import ProductsController from "../controllers/ProductsController";

import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

import productItemRouter from "./items.routes";

const productController = new ProductController();
const productsController = new ProductsController();

const productsRouter = Router();

productsRouter.use('/items', productItemRouter);

productsRouter.get("/", productsController.index);

productsRouter.get("/:id", checkIsValidMongoId, productController.index);

productsRouter.post(
  "/",
  ensureAdminUserAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      type: Joi.string().required(),
      categories: Joi.array().items(Joi.string().required()).required(),
      price: Joi.number().required(),
      description: Joi.string().required(),
      items: Joi.array().items(
        Joi.object({
          color: Joi.string().required(),
          imageColor: Joi.string().required(),
          sizes: Joi.array().items(
            Joi.object({
              sizeTag: Joi.string().required(),
              quantity: Joi.number().required(),
            })),
        })),
    }
  }),
  productController.create
);

productsRouter.put(
  "/:id",
  ensureAdminUserAuthenticated,
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      type: Joi.string(),
      categories: Joi.array().items(Joi.string().required()),
      price: Joi.number(),
      description: Joi.string(),
    }
  }),
  productController.update
);

export default productsRouter;
