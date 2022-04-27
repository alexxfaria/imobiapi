import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import PeopleInterestRepository from '../typeorm/repositories/PeopleInterestRepository';

interface IRequest {
  id: string;
}

class DeletePeopleInterestService {
  public async execute({ id }: IRequest): Promise<void> {
    const peopleInterestRepository = getCustomRepository(PeopleInterestRepository);
    const peopleInterest = await peopleInterestRepository.findOne(id);
    if (!peopleInterest) {
      throw new AppError('Não encontrado.');
    }

    await peopleInterestRepository.remove(peopleInterest);
  }
}
export default DeletePeopleInterestService;
