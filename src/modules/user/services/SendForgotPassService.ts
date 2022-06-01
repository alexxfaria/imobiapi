import EtherealMail from '@config/mail/EtherealMail';
import AppError from '@shared/errors/AppError';
import path from 'path';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import UserTokenRepository from '../typeorm/repositories/UserTokenRepository';

interface IRequest {
  email: string;
}

class SendForgotPassService {
  public async execute({ email }: IRequest): Promise<void> {
    const userRepository = getCustomRepository(UserRepository);
    const userTokenRepository = getCustomRepository(UserTokenRepository);

    const emailExists = await userRepository.findByEmail(email);

    if (!emailExists) {
      throw new AppError('Usuario não encontrado.');
    }

    const { token } = await userTokenRepository.generate(emailExists.id);

    const forgotPasswordTemplate = path.resolve(__dirname, '..', 'views', 'forgot_password.hbs');

    await EtherealMail.sendMail({
      to: {
        name: emailExists.name,
        email: emailExists.email,
      },
      subject: 'Recuperação de senhas',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: emailExists.name,
          link: `http://localhost:3333/reset_password?token=${token}`,
        },
      },
    });
  }
}
export default SendForgotPassService;
