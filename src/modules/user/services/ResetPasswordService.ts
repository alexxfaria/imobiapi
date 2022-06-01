import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import UserTokenRepository from '../typeorm/repositories/UserTokenRepository';
import { isAfter, addHours } from 'date-fns';
import UserRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
  token: string;
  password: string;
}

class ResetPasswordService {
  public async execute({ token, password }: IRequest): Promise<void> {
    const userRepository = getCustomRepository(UserRepository);
    const userTokenRepository = getCustomRepository(UserTokenRepository);

    const userToken = await userTokenRepository.findByToken(token);

    if (!userToken) {
      throw new AppError('Token do usuario não encontrado.');
    }
    const user = await userRepository.findById(userToken.user_id);

    if (!user) {
      throw new AppError('Usuario não encontrado.');
    }

    const tokenCreateAt = userToken.created_at;
    const compareDate = addHours(tokenCreateAt, 2);

    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expirado');
    }
    const hashedPassword = await hash(password, 8);
    user.password = hashedPassword;

    await userRepository.save(user);
  }
}
export default ResetPasswordService;
