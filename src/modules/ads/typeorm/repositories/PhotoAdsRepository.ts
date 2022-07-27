import { EntityRepository, Repository, In } from 'typeorm';
import PhotoAds from '../entities/PhotoAds';

interface IPhoto {
  id: string;
}
@EntityRepository(PhotoAds)
class PhotoAdsRepository extends Repository<PhotoAds> {
  public async findById(id: string): Promise<PhotoAds | undefined> {
    const photoAds = this.findOne({
      where: {
        id,
      },
    });
    return photoAds;
  }
  public async findAllByIds(photo_ads: IPhoto[]): Promise<PhotoAds[]> {
    const photoAds = photo_ads.map(photo => photo.id);
    const existsPhoto = await this.find({
      where: {
        id: In(photoAds),
      },
    });
    return existsPhoto;
  }
}
export default PhotoAdsRepository;
