import { getCustomRepository } from 'typeorm';
import People from '../typeorm/entities/People';
import PeopleRepositories from '../typeorm/repositories/PeopleRepositories';

class ListPeopleService {
  public async execute(): Promise<People[]> {
    const partnersRepositories = getCustomRepository(PeopleRepositories);
    const partners = await partnersRepositories.find();
    return partners;
  }
}
export default ListPeopleService;
