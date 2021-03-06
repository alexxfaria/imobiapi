import { EntityRepository, Repository } from 'typeorm';
import Ads from '../entities/Ads';
import People from '@modules/people/typeorm/entities/People';

interface IPhoto {
  id: string;
  photo: string;
}
interface IRequest {
  people: People;
  photo_ads: IPhoto[];
}
@EntityRepository(Ads)
class AdsRepository extends Repository<Ads> {
  public async findById(id: string): Promise<Ads | undefined> {
    const ads = this.findOne(id, {
      relations: ['photo_ads', 'people'],
    });
    return ads;
  }

  public async createAds({ people, photo_ads }: IRequest): Promise<Ads> {
    const ads = this.create({
      people,
      photo_ads,
    });
    await this.save(ads);
    return ads;
  }

  public async findByDesc(description: string): Promise<Ads | undefined> {
    const ads = this.findOne({
      where: {
        description,
      },
    });
    return ads;
  }
  public async findByStatus(active: boolean): Promise<Ads | undefined> {
    const ads = this.findOne({
      where: {
        active,
      },
    });
    return ads;
  }
  public async findByPeople(id_people: string): Promise<Ads | undefined> {
    const ads = this.findOne({
      where: {
        id_people,
      },
    });
    return ads;
  }
}
export default AdsRepository;
