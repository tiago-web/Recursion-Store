import { Router } from "express";

import ensureAuthenticated from "@modules/users/infra/http/middleware/ensureAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";
import ReviewInteractionController from "../controllers/ReviewInteractionController";

const reviewInteractionController = new ReviewInteractionController();
const interactionRouter = Router();4

interactionRouter.use(ensureAuthenticated);

interactionRouter.post("/:id", checkIsValidMongoId, reviewInteractionController.create);

interactionRouter.put("/:id", checkIsValidMongoId, reviewInteractionController.update);

interactionRouter.delete("/:id", checkIsValidMongoId, reviewInteractionController.delete);

export default interactionRouter;
