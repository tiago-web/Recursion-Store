import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';

import ensureAuthenticated from "@modules/users/infra/http/middleware/ensureAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";
import ReviewInteractionController from "../controllers/ReviewInteractionController";

const reviewInteractionController = new ReviewInteractionController();
const interactionRouter = Router();

interactionRouter.use(ensureAuthenticated);

interactionRouter.post(
  "/:id",
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      action: Joi.string().required(),
    },
  }),
  reviewInteractionController.create,
);

interactionRouter.put("/:id", checkIsValidMongoId, reviewInteractionController.update);

interactionRouter.delete("/:id", checkIsValidMongoId, reviewInteractionController.delete);

export default interactionRouter;
