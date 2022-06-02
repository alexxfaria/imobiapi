import { Router } from 'express';
import PeopleController from '../controllers/PeopleController';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import { ensureAdmin } from '../../../shared/http/middlewares/ensureAdmin';

const peopleRouter = Router();
const peopleController = new PeopleController();

peopleRouter.get('/', isAuthenticated, ensureAdmin, peopleController.index);

peopleRouter.get(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  peopleController.show,
);
peopleRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().allow(''),
      email: Joi.string().email().allow(''),
      phone: Joi.string().allow(''),
      cnpj_cpf: Joi.string().allow(''),
      address: Joi.string().allow(''),
      number: Joi.string().allow(''),
      complements: Joi.string().allow(''),
      district: Joi.string().allow(''),
      city: Joi.string().allow(''),
      state: Joi.string().allow(''),
      country: Joi.string().allow(''),
      zip: Joi.string().allow(''),
      contact: Joi.string().allow(''),
      landline: Joi.string().allow(''),
      active: Joi.boolean().allow(''),
    },
  }),
  peopleController.create,
);
peopleRouter.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().allow(''),
      email: Joi.string().email().allow(''),
      phone: Joi.string().allow(''),
      cnpj_cpf: Joi.string().allow(''),
      address: Joi.string().allow(''),
      number: Joi.string().allow(''),
      complements: Joi.string().allow(''),
      district: Joi.string().allow(''),
      city: Joi.string().allow(''),
      state: Joi.string().allow(''),
      country: Joi.string().allow(''),
      zip: Joi.string().allow(''),
      contact: Joi.string().allow(''),
      landline: Joi.string().allow(''),
      active: Joi.boolean().allow(''),
    },
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  }),
  peopleController.update,
);
peopleRouter.delete(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  }),
  peopleController.delete,
);
export default peopleRouter;
