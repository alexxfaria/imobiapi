import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UserRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  admin: boolean;
  active: boolean;
}

class CreateUserService {
  public async execute({ name, email, password, admin, active }: IRequest): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);
    const emailExists = await userRepository.findByEmail(email);

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
      admin,
      active,
    });
    // ##### VALIDAÇÕES / REGRAS #####
    // Obriga campo nome e ter no minimo 3 letras
    if (!user.name || user.name.length < 4) {
      throw new AppError('Nome é obrigatório.');
    }
    if (user.name.length > 50) {
      throw new AppError('Nome é muito extenso.');
    }
    // Verifica se ja existe o email cadastrado
    if (emailExists) {
      throw new AppError('E-mail já esta sendo utilizado.');
    }

    // Obrigado digitação do email
    if (!user.email || user.email.length < 6) {
      throw new AppError('Email é obrigatório.');
    }
    if (user.email.length > 50) {
      throw new AppError('Email é muito extenso.');
    }

    await userRepository.save(user);
    return user;
  }
}
export default CreateUserService;
