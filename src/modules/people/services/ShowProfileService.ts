import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import People from '../typeorm/entities/People';
import PeopleRepositories from '../typeorm/repositories/PeopleRepositories';

interface IRequest {
  user_id: string;
}

class ShowProfileService {
  public async execute({ user_id }: IRequest): Promise<People> {
    const partnersRepositories = getCustomRepository(PeopleRepositories);
    const partners = await partnersRepositories.findById(user_id);
    if (!partners) {
      throw new AppError('Parceiro não encontrado');
    }
    return partners;
  }
}
export default ShowProfileService;
