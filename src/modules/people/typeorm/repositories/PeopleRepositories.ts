import { EntityRepository, Repository } from 'typeorm';
import People from '../entities/People';

@EntityRepository(People)
class PeopleRepositories extends Repository<People> {
  public async findByName(name: string): Promise<People | undefined> {
    const people = this.findOne({
      where: {
        name,
      },
    });
    return people;
  }

  public async findById(id: string): Promise<People | undefined> {
    const people = this.findOne({
      where: {
        id,
      },
    });
    return people;
  }

  public async findByEmail(email: string): Promise<People | undefined> {
    const people = this.findOne({
      where: {
        email,
      },
    });
    return people;
  }
  public async findByPhone(phone: string): Promise<People | undefined> {
    const people = this.findOne({
      where: {
        phone,
      },
    });
    return people;
  }
}
export default PeopleRepositories;
