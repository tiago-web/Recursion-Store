import { Router } from "express";

import ProductItemController from "../controllers/ProductItemController";

import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

import sizesRouter from "./sizes.routes";

const productItemController = new ProductItemController();
const productItemRouter = Router();

productItemRouter.use(ensureAdminUserAuthenticated);

productItemRouter.use('/sizes', sizesRouter);

productItemRouter.post("/:id", checkIsValidMongoId, productItemController.create);

productItemRouter.put("/:id", checkIsValidMongoId, productItemController.update);

productItemRouter.delete("/:id", checkIsValidMongoId, productItemController.delete);

export default productItemRouter;
