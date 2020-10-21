import { Router } from "express";
import ProductsController from "../controllers/ProductController";
import ReviewsController from "../controllers/ReviewsController";

const productRoute = Router();
const productsController = new ProductsController();
const reviewsController = new ReviewsController();

productRoute.post("/", productsController.create);

productRoute.put("/:product_id", productsController.update);

productRoute.get("/", productsController.index);

productRoute.post("/:product_id/review", reviewsController.create);

export default productRoute;
