import PeopleRepositories from '@modules/people/typeorm/repositories/PeopleRepositories';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import PeopleInterest from '../typeorm/entities/PeopleInterest';
import InterestRepository from '../typeorm/repositories/InterestRepository';
import PeopleInterestRepository from '../typeorm/repositories/PeopleInterestRepository';

interface IRequest {
  id_people: string;
  id_interest: string;
}

class CreatePeopleInterestService {
  public async execute({ id_people, id_interest }: IRequest): Promise<PeopleInterest> {
    const peopleInterestRepository = getCustomRepository(PeopleInterestRepository);
    const peopleRepository = getCustomRepository(PeopleRepositories);
    const interestRepository = getCustomRepository(InterestRepository);
    const peopleInterest = peopleInterestRepository.create({
      id_people,
      id_interest,
    });
    const interest = await interestRepository.findById(id_interest);
    if (!interest?.id) {
      throw new AppError('Interesse não encontrado.');
    }
    if (!interest?.active) {
      throw new AppError(`Interesse ${interest.name} esta inativo.`);
    }

    const people = await peopleRepository.findById(id_people);
    if (!people?.id) {
      throw new AppError('Parceiro não encontrado.');
    }
    if (!people?.active) {
      throw new AppError(`Parceiro ${people.name} - ${people.email} esta inativo.`);
    }
    await peopleInterestRepository.save(peopleInterest);
    return peopleInterest;
  }
}

export default CreatePeopleInterestService;
