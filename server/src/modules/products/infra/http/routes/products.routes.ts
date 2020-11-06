import { Router } from "express";
import productItemRouter from "./items.routes";

import ProductController from "../controllers/ProductController";
import ProductsController from "../controllers/ProductsController";

import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

const productController = new ProductController();
const productsController = new ProductsController();

const productsRouter = Router();

productsRouter.use('/items', productItemRouter);

productsRouter.post("/", ensureAdminUserAuthenticated, productController.create);

productsRouter.put("/:id", ensureAdminUserAuthenticated, checkIsValidMongoId, productController.update);

productsRouter.get("/:id", checkIsValidMongoId, productController.index);

productsRouter.get("/", productsController.index);

export default productsRouter;
