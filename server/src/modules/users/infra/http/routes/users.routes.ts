import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import UserPermissionController from '../controllers/UserPermissionController';

const usersRouter = Router();
const usersController = new UsersController();
const userPermissionController = new UserPermissionController();

usersRouter.post('/', usersController.create);

usersRouter.post('/:userId', userPermissionController.update);

export default usersRouter;
