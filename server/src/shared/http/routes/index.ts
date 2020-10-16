import { Router } from 'express';
import usersRouter from '@modules/users/http/routes/users.routes';
import productsRouter from '@modules/products/http/routes/products.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/products', productsRouter);

export default routes;
