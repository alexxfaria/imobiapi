import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import Joi from 'joi';
import PeopleInterestController from '../controllers/PeopleInterestController';

const peopleInterestRouter = Router();
const peopleInterestController = new PeopleInterestController();

peopleInterestRouter.use(isAuthenticated);
peopleInterestRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      id_people: Joi.string(),
      id_interest: Joi.string(),
    },
  }),
  peopleInterestController.create,
);
peopleInterestRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  }),
  peopleInterestController.delete,
);
export default peopleInterestRouter;
