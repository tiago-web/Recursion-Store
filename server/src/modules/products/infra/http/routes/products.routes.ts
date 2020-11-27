import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import ProductController from '../controllers/ProductController';
import ProductsController from '../controllers/ProductsController';

import ensureAdminUserAuthenticated from '@modules/users/infra/http/middleware/ensureAdminUserAuthenticated';
import checkIsValidMongoId from '@shared/infra/http/middlewares/checkIsValidObjectId';

import productItemRouter from './items.routes';

const productController = new ProductController();
const productsController = new ProductsController();

const productsRouter = Router();

productsRouter.use('/items', productItemRouter);

productsRouter.get(
  '/',
  celebrate({
    [Segments.PARAMS]: {
      categories: Joi.array().items(Joi.string().required()),
    },
  }),
  productsController.index,
);

productsRouter.get('/:id', checkIsValidMongoId, productController.index);

productsRouter.post(
  '/',
  ensureAdminUserAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      type: Joi.string().required(),
      categories: Joi.array().items(Joi.string().required()).required(),
      price: Joi.number().required(),
      description: Joi.string().required(),
    },
  }),
  productController.create,
);

productsRouter.put(
  '/:id',
  ensureAdminUserAuthenticated,
  checkIsValidMongoId,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      type: Joi.string(),
      categories: Joi.array().items(Joi.string().required()),
      price: Joi.number(),
      description: Joi.string(),
    },
  }),
  productController.update,
);

export default productsRouter;
