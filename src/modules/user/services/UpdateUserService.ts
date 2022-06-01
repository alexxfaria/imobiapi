import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
  id: string;
  name: string;
  email: string;
  admin: boolean;
  active: boolean;
}

class UpdateUserService {
  public async execute({ id, name, email, admin, active }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const user = await userRepository.findById(id);
    const emailExists = await userRepository.findByName(email);

    // ##### VALIDAÇÕES / REGRAS #####
    if (!user) {
      throw new AppError('Usuario não encontrado.');
    }

    if (emailExists && email != user.email) {
      throw new AppError('E-mail já esta sendo utilizado.');
    }

    user.name = name;
    user.email = email;
    user.admin = admin;
    user.active = active;

    await userRepository.save(user);
    return user;
  }
}
export default UpdateUserService;
