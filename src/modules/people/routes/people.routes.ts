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
      id_property: Joi.string().allow(null),
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
      admin: Joi.boolean().allow(''),
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
      id_property: Joi.string().allow(''),
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
peopleRouter.patch('/avatar', isAuthenticated, upload.single('avatar'), peopleAvatarController.update);

export default peopleRouter;
