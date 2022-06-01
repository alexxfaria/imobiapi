import AdsRepository from '@modules/ads/typeorm/repositories/AdsRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import PeopleRepositories from '../typeorm/repositories/PeopleRepositories';

interface IRequest {
  id: string;
}

class DeletePeopleService {
  public async execute({ id }: IRequest): Promise<void> {
    const peopleRepository = getCustomRepository(PeopleRepositories);
    const adsRepository = getCustomRepository(AdsRepository);
    const people = await peopleRepository.findOne(id);
    if (!people) {
      throw new AppError('Pessoa não encontrado.');
    }

    const adsExists = await adsRepository.findById(people.id);
    if (adsExists?.id_people) {
      throw new AppError('Existe anúncio desta pessoa');
    }

    await peopleRepository.remove(people);
  }
}
export default DeletePeopleService;
