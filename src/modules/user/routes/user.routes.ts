import { Router } from 'express';
import UserController from '../controllers/UserController';
import multer from 'multer';
import uploadConfig from '@config/upload';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import UserAvatarController from '../controllers/UserAvatarController';
import { ensureAdmin } from '../../../shared/http/middlewares/ensureAdmin';

const userRouter = Router();
const userController = new UserController();
const userAvatarController = new UserAvatarController();
const upload = multer(uploadConfig);

userRouter.get('/', isAuthenticated, ensureAdmin, userController.index);

userRouter.get(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  userController.show,
);
userRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().allow(''),
      email: Joi.string().email().allow(''),
      password: Joi.string().required(),
      admin: Joi.boolean(),
      active: Joi.boolean(),
    },
  }),
  userController.create,
);
userRouter.put(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().allow(''),
      email: Joi.string().email().allow(''),
      admin: Joi.boolean().allow(''),
      active: Joi.boolean().allow(''),
    },
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  }),
  userController.update,
);
userRouter.delete(
  '/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().uuid().required() },
  }),
  userController.delete,
);
userRouter.patch('/avatar', isAuthenticated, upload.single('avatar'), userAvatarController.update);

export default userRouter;
