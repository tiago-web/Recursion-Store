import { Router } from 'express';
import multer from 'multer';
import { celebrate, Segments, Joi } from 'celebrate';

import uploadConfig from '@config/upload';

import UserController from '../controllers/UserController';
import UserPermissionController from '../controllers/UserPermissionController';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticated from '../middleware/ensureAuthenticated';
import ensureAdminUserAuthenticated from '../middleware/ensureAdminUserAuthenticated';
import checkIsValidMongoId from '@shared/infra/http/middlewares/checkIsValidObjectId';
import checkIsBodyEmpty from '../middleware/checkIsBodyEmpty';

const usersRouter = Router();
const userController = new UserController();
const userPermissionController = new UserPermissionController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig.multer);

usersRouter.get('/', userController.index);

usersRouter.get('/:id', checkIsValidMongoId, userController.index);

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phone: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    },
  }),
  userController.create,
);

usersRouter.put(
  '/:id',
  checkIsValidMongoId,
  ensureAdminUserAuthenticated,
  celebrate({
    [Segments.BODY]: {
      permission: Joi.string().required(),
    },
  }),
  userPermissionController.update,
);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  // checkIsBodyEmpty,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
