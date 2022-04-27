import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import People from '../typeorm/entities/People';
import PeopleRepositories from '../typeorm/repositories/PeopleRepositories';

interface IRequest {
  id: string;
}

class ShowPeopleService {
  public async execute({ id }: IRequest): Promise<People> {
    const partnersRepository = getCustomRepository(PeopleRepositories);
    const partners = await partnersRepository.findById(id);
    if (!partners) {
      throw new AppError('Parceiro não encontrado.');
    }
    return partners;
  }
}
export default ShowPeopleService;
