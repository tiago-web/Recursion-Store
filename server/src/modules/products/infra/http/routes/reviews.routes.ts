import { Router } from "express";
import { celebrate, Joi, Segments } from 'celebrate';

import ReviewsController from "../controllers/ReviewsController";

import ensureAuthenticated from "@modules/users/infra/http/middleware/ensureAuthenticated";
import checkIsValidMongoId from "@shared/infra/http/middlewares/checkIsValidObjectId";

import interactionRouter from "./interaction.routes";

const reviewsController = new ReviewsController();
const reviewsRouter = Router();

reviewsRouter.use('/interaction', interactionRouter);

reviewsRouter.post(
  "/",
  ensureAuthenticated,
  celebrate({
    [Segments.BODY]: {
      productId: Joi.string().required(),
      title: Joi.string().required(),
      body: Joi.string().required()
    }
  }),
  reviewsController.create
);

reviewsRouter.put(
  "/:id",
  ensureAuthenticated,
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      title: Joi.string(),
      body: Joi.string()
    }
  }),
  reviewsController.update
);

reviewsRouter.delete(
  "/:id",
  ensureAuthenticated,
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      productId: Joi.string().required(),
    }
  }),
  reviewsController.delete);

export default reviewsRouter;
