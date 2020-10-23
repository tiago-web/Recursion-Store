import { Router } from "express";

import ProductsController from "../controllers/ProductController";
import ReviewsController from "../controllers/ReviewsController";

import ensureAuthenticated from "@modules/users/infra/http/middleware/ensureAuthenticated";

const productsRouter = Router();
const productsController = new ProductsController();
const reviewsController = new ReviewsController();

productsRouter.use(ensureAuthenticated);

productsRouter.post("/", productsController.create);

productsRouter.put("/:product_id", productsController.update);

productsRouter.get("/", productsController.index);

productsRouter.post("/:product_id/review", reviewsController.create);

export default productsRouter;
