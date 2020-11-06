import { Router } from "express";

import ProductItemSizeController from "../controllers/ProductItemSizeController";

import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

const itemSizeRouter = Router();
const productItemSizeController = new ProductItemSizeController();

itemSizeRouter.post("/:id", ensureAdminUserAuthenticated, checkIsValidMongoId, productItemSizeController.create);

itemSizeRouter.put("/:id", ensureAdminUserAuthenticated, checkIsValidMongoId, productItemSizeController.update);

itemSizeRouter.delete("/:id", ensureAdminUserAuthenticated, checkIsValidMongoId, productItemSizeController.delete);

export default itemSizeRouter;
