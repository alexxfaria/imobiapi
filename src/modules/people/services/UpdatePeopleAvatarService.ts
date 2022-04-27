import AppError from '@shared/errors/AppError';
import path from 'path';
import fs from 'fs';
import { getCustomRepository } from 'typeorm';
import People from '../typeorm/entities/People';
import PeopleRepositories from '../typeorm/repositories/PeopleRepositories';
import uploadConfig from '@config/upload';

interface IRequest {
  user_id: string;
  avatarFilename: string;
}

class UpdatePeopleAvatarService {
  public async execute({ user_id, avatarFilename }: IRequest): Promise<People> {
    const partnersRepository = getCustomRepository(PeopleRepositories);

    const partners = await partnersRepository.findById(user_id);

    if (!partners) {
      throw new AppError('Parceiro não encontrado.');
    }
    if (partners.avatar) {
      const partnersAvatarFilePath = path.join(uploadConfig.directory, partners.avatar);

      const partnersAvatarFileExists = await fs.promises.stat(partnersAvatarFilePath);

      if (partnersAvatarFileExists) {
        await fs.promises.unlink(partnersAvatarFilePath); //Deleta o avatar
      }
    }
    partners.avatar = avatarFilename;

    await partnersRepository.save(partners);

    return partners;
  }
}
export default UpdatePeopleAvatarService;
