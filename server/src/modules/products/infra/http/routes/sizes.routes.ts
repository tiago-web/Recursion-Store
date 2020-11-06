import { Router } from "express";

import ProductItemSizeController from "../controllers/ProductItemSizeController";

import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

const productItemSizeController = new ProductItemSizeController();
const productItemRouter = Router();

productItemRouter.use(ensureAdminUserAuthenticated);

productItemRouter.post("/:id", checkIsValidMongoId, productItemSizeController.create);

productItemRouter.put("/:id", checkIsValidMongoId, productItemSizeController.update);

productItemRouter.delete("/:id", checkIsValidMongoId, productItemSizeController.delete);

export default productItemRouter;
