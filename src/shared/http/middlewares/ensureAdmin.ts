import { Request, Response, NextFunction } from 'express';
import UserRepository from '../../../modules/user/typeorm/repositories/UserRepository';
import { getCustomRepository } from 'typeorm';

export async function ensureAdmin(req: Request, res: Response, next: NextFunction) {
  const { users } = req;

  const userRepository = getCustomRepository(UserRepository);

  const userAdmin = await userRepository.findOne(users);

  // Verifica se usuario é admin

  if (userAdmin?.admin) {
    return next();
  }

  return res.status(401).json({
    error: 'Não autorizado',
  });
}
