import { Router } from 'express';
import PeopleController from '../controllers/PeopleController';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import PeopleAvatarController from '../controllers/PeopleAvatarController';
import { ensureAdmin } from '../../../shared/http/middlewares/ensureAdmin';

const peopleRouter = Router();
const peopleController = new PeopleController();
const peopleAvatarController = new PeopleAvatarController();
const upload = multer(uploadConfig);

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
      password: Joi.string().required(),
      phone: Joi.string().allow(''),
      admin: Joi.boolean(),
      cnpj_cpf: Joi.string(),
      address: Joi.string(),
      number: Joi.string(),
      complements: Joi.string(),
      district: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      zip: Joi.string(),
      contact: Joi.string(),
      landline: Joi.string(),
      id_plan: Joi.string(),
      stop_ads: Joi.boolean(),
      all_ads: Joi.boolean(),
      active: Joi.boolean(),
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
      admin: Joi.boolean(),
      cnpj: Joi.string().allow(''),
      cpf: Joi.string().allow(''),
      address: Joi.string(),
      number: Joi.string(),
      complements: Joi.string(),
      district: Joi.string(),
      city: Joi.string(),
      state: Joi.string(),
      country: Joi.string(),
      zip: Joi.string(),
      contact: Joi.string(),
      landline: Joi.string(),
      id_plan: Joi.string(),
      stop_ads: Joi.boolean(),
      all_ads: Joi.boolean(),
      active: Joi.boolean(),
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
peopleRouter.patch('/avatar', isAuthenticated, upload.single('avatar'), peopleAvatarController.update);

export default peopleRouter;
