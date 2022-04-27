import { EntityRepository, Repository } from 'typeorm';
import PeopleToken from '../entities/PeopleToken';

@EntityRepository(PeopleToken)
class PeopleTokenRepository extends Repository<PeopleToken> {
  public async findByToken(token: string): Promise<PeopleToken | undefined> {
    const partnersToken = this.findOne({
      where: {
        token,
      },
    });
    return partnersToken;
  }

  public async generate(user_id: string): Promise<PeopleToken> {
    const partnersToken = this.create({
      user_id,
    });
    await this.save(partnersToken);
    return partnersToken;
  }
}
export default PeopleTokenRepository;
