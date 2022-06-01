import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import People from '../typeorm/entities/People';
import PeopleRepositories from '../typeorm/repositories/PeopleRepositories';

interface IRequest {
  id: string;
}

class ShowPeopleService {
  public async execute({ id }: IRequest): Promise<People> {
    const peopleRepository = getCustomRepository(PeopleRepositories);
    const people = await peopleRepository.findById(id);
    if (!people) {
      throw new AppError('Pessoa não encontrado.');
    }
    return people;
  }
}
export default ShowPeopleService;
