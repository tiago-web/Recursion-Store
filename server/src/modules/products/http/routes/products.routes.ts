import { Router } from "express";
import ProductsController from "../controllers/ProductsController";

const productRoute = Router();
const productsController = new ProductsController();

productRoute.post("/", productsController.create);

export default productRoute;
