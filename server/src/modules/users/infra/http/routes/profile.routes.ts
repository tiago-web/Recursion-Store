import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ensureAuthenticated from '../middleware/ensureAuthenticated';
import ProfileController from '../controllers/ProfileController';
import UserShippingAddressController from '../controllers/UserShippingAddressController';

const profileRouter = Router();
const profileController = new ProfileController();
const userShippingAddress = new UserShippingAddressController();

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

profileRouter.post(
  '/shippingAddress',
  ensureAuthenticated,
  celebrate({
    [Segments.BODY]: {
      address: Joi.string().required(),
      country: Joi.string().required(),
      state: Joi.string().required(),
      city: Joi.string().required(),
      postalCode: Joi.string().required(),
      main: Joi.boolean(),
    },
  }),
  userShippingAddress.create
);

profileRouter.put(
  '/shippingAddress',
  ensureAuthenticated,
  celebrate({
    [Segments.BODY]: {
      address: Joi.string(),
      country: Joi.string(),
      state: Joi.string(),
      city: Joi.string(),
      oldPostalCode: Joi.string().required(),
      postalCode: Joi.string(),
      main: Joi.boolean(),
    },
  }),
  userShippingAddress.update
);

profileRouter.delete(
  '/shippingAddress',
  ensureAuthenticated,
  celebrate({
    [Segments.BODY]: {
      postalCode: Joi.string().required()
    },
  }),
  userShippingAddress.delete
);

export default profileRouter;
