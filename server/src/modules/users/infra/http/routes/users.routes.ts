import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import UserPermissionController from '../controllers/UserPermissionController';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();
const userPermissionController = new UserPermissionController();

usersRouter.post('/', usersController.create);

usersRouter.post('/:userId', ensureAuthenticated, userPermissionController.update);

export default usersRouter;
