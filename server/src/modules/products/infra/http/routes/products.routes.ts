import { Router } from "express";

import ProductController from "../controllers/ProductController";
import ProductsController from "../controllers/ProductsController";
import ReviewsController from "../controllers/ReviewsController";

import ensureAuthenticated from "@modules/users/infra/http/middleware/ensureAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

const productsRouter = Router();
const productController = new ProductController();
const productsController = new ProductsController();
const reviewsController = new ReviewsController();

productsRouter.post("/", ensureAuthenticated, productController.create);

productsRouter.put("/:id", ensureAuthenticated, checkIsValidMongoId, productController.update);

productsRouter.get("/:id", checkIsValidMongoId, productController.index);

productsRouter.post("/:id/review", ensureAuthenticated, checkIsValidMongoId, reviewsController.create);

productsRouter.get("/", productsController.index);

export default productsRouter;
