import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import AdsController from '../controllers/AdsController';

const adsRouter = Router();
const adsController = new AdsController();

adsRouter.use(isAuthenticated);
adsRouter.get('/', adsController.index);
adsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().allow(''),
      type: Joi.string().allow(''),
      sale_price: Joi.number().precision(2).allow(''),
      rent_price: Joi.number().precision(2).allow(''),
      sale: Joi.boolean().allow(''),
      rent: Joi.boolean().allow(''),
      land_area: Joi.string().allow(''),
      building_area: Joi.string().allow(''),
      bedrooms: Joi.string().allow(''),
      suite: Joi.string().allow(''),
      restroom: Joi.string().allow(''),
      garage: Joi.string().allow(''),
      address: Joi.string().allow(''),
      number: Joi.string().allow(''),
      complements: Joi.string().allow(''),
      district: Joi.string().allow(''),
      city: Joi.string().allow(''),
      state: Joi.string().allow(''),
      country: Joi.string().allow(''),
      zip: Joi.string().allow(''),
      id_people: Joi.string().uuid().allow(''),
      service_area: Joi.boolean().allow(''),
      closets_room: Joi.boolean().allow(''),
      cabinets_kitchen: Joi.boolean().allow(''),
      furnished: Joi.boolean().allow(''),
      air_conditioning: Joi.boolean().allow(''),
      grill: Joi.boolean().allow(''),
      balcony: Joi.boolean().allow(''),
      gym: Joi.boolean().allow(''),
      pool: Joi.boolean().allow(''),
      servant_room: Joi.boolean().allow(''),
      gated_community: Joi.boolean().allow(''),
      elevator: Joi.boolean().allow(''),
      security: Joi.boolean().allow(''),
      concierge: Joi.boolean().allow(''),
      animals_allowed: Joi.boolean().allow(''),
      condominium_gym: Joi.boolean().allow(''),
      condominium_pool: Joi.boolean().allow(''),
      party_room: Joi.boolean().allow(''),
      exclusive: Joi.boolean().allow(''),
      active: Joi.boolean().allow(''),
      photo_ads: Joi.allow(''),
    },
  }),
  adsController.create,
);
adsRouter.put(
  '/:id',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().allow(''),
      type: Joi.string().allow(''),
      sale_price: Joi.number().precision(2).allow(''),
      rent_price: Joi.number().precision(2).allow(''),
      sale: Joi.boolean().allow(''),
      rent: Joi.boolean().allow(''),
      land_area: Joi.string().allow(''),
      building_area: Joi.string().allow(''),
      bedrooms: Joi.string().allow(''),
      suite: Joi.string().allow(''),
      restroom: Joi.string().allow(''),
      garage: Joi.string().allow(''),
      address: Joi.string().allow(''),
      number: Joi.string().allow(''),
      complements: Joi.string().allow(''),
      district: Joi.string().allow(''),
      city: Joi.string().allow(''),
      state: Joi.string().allow(''),
      country: Joi.string().allow(''),
      zip: Joi.string().allow(''),
      id_people: Joi.string().uuid().required(),
      service_area: Joi.boolean().allow(''),
      closets_room: Joi.boolean().allow(''),
      cabinets_kitchen: Joi.boolean().allow(''),
      furnished: Joi.boolean().allow(''),
      air_conditioning: Joi.boolean().allow(''),
      grill: Joi.boolean().allow(''),
      balcony: Joi.boolean().allow(''),
      gym: Joi.boolean().allow(''),
      pool: Joi.boolean().allow(''),
      servant_room: Joi.boolean().allow(''),
      gated_community: Joi.boolean().allow(''),
      elevator: Joi.boolean().allow(''),
      security: Joi.boolean().allow(''),
      concierge: Joi.boolean().allow(''),
      animals_allowed: Joi.boolean().allow(''),
      condominium_gym: Joi.boolean().allow(''),
      condominium_pool: Joi.boolean().allow(''),
      party_room: Joi.boolean().allow(''),
      exclusive: Joi.boolean().allow(''),
      active: Joi.boolean().allow(''),
      photo_ads: Joi.allow(''),
    },
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  }),
  adsController.update,
);
adsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  adsController.show,
);
adsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  }),
  adsController.delete,
);
export default adsRouter;
