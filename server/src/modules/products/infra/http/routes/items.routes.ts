import { Router } from "express";

import ProductItemController from "../controllers/ProductItemController";

import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

const productItemRouter = Router();
const productItemController = new ProductItemController();

// productItemRouter.use('/sizes', sizesRouter);

productItemRouter.post("/:id", ensureAdminUserAuthenticated, checkIsValidMongoId, productItemController.create);

productItemRouter.put("/:id", ensureAdminUserAuthenticated, checkIsValidMongoId, productItemController.update);

productItemRouter.delete("/:id", ensureAdminUserAuthenticated, checkIsValidMongoId, productItemController.delete);

export default productItemRouter;
