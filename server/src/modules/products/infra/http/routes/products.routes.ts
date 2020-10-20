import { Router } from "express";
import ProductsController from "../controllers/ProductsController";
import ReviewsController from "../controllers/ReviewsController";

const productRoute = Router();
const productsController = new ProductsController();
const reviewsController = new ReviewsController();

productRoute.post("/", productsController.create);

productRoute.post("/:product_id/review", reviewsController.create);

export default productRoute;
