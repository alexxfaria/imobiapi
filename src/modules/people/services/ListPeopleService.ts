import { getCustomRepository } from 'typeorm';
import People from '../typeorm/entities/People';
import PeopleRepositories from '../typeorm/repositories/PeopleRepositories';

class ListPeopleService {
  public async execute(): Promise<People[]> {
    const peopleRepositories = getCustomRepository(PeopleRepositories);
    const people = await peopleRepositories.find();
    return people;
  }
}
export default ListPeopleService;
