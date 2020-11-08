import { Router } from "express";

import ProductItemSizeController from "../controllers/ProductItemSizeController";

import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

const productItemSizeController = new ProductItemSizeController();
const sizeRouter = Router();

sizeRouter.use(ensureAdminUserAuthenticated);

sizeRouter.post("/:id", checkIsValidMongoId, productItemSizeController.create);

sizeRouter.put("/:id", checkIsValidMongoId, productItemSizeController.update);

sizeRouter.delete("/:id", checkIsValidMongoId, productItemSizeController.delete);

export default sizeRouter;
