import { EntityRepository, Repository } from 'typeorm';
import PeopleInterest from '../entities/PeopleInterest';

@EntityRepository(PeopleInterest)
class PeopleInterestRepository extends Repository<PeopleInterest> {
  public async findById(id: string): Promise<PeopleInterest | undefined> {
    const peopleInterest = this.findOne({
      where: {
        id,
      },
    });
    return peopleInterest;
  }
}
export default PeopleInterestRepository;
