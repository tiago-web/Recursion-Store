import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ensureAuthenticated from '../middleware/ensureAuthenticated';
import ProfileController from '../controllers/ProfileController';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(ensureAuthenticated);

profileRouter.get("/", profileController.index);

profileRouter.put(
  "/",
  celebrate({
    [Segments.BODY]: {
      firstName: Joi.string(),
      lastName: Joi.string(),
      phone: Joi.string(),
      email: Joi.string().email(),
      oldPassword: Joi.string(),
      password: Joi.string(),
      passwordConfirmation: Joi.string().valid(Joi.ref("password")),
    },
  }),
  profileController.update
);

export default profileRouter;
