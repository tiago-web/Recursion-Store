import { Router } from "express";

import ProductItemController from "../controllers/ProductItemController";

import ensureAdminUserAuthenticated from "@modules/users/infra/http/middleware/ensureAdminUserAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

import sizesRouter from "./sizes.routes";

const productItemController = new ProductItemController();
const itemRouter = Router();

itemRouter.use(ensureAdminUserAuthenticated);

itemRouter.use('/sizes', sizesRouter);

itemRouter.post("/:id", checkIsValidMongoId, productItemController.create);

itemRouter.put("/:id", checkIsValidMongoId, productItemController.update);

itemRouter.delete("/:id", checkIsValidMongoId, productItemController.delete);

export default itemRouter;
