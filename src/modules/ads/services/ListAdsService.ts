import { getCustomRepository } from 'typeorm';
import Ads from '../typeorm/entities/Ads';
import AdsRepository from '../typeorm/repositories/AdsRepository';
import PhotoAdsRepository from '../typeorm/repositories/PhotoAdsRepository';

class ListAdsService {
  public async execute(): Promise<Ads[]> {
    const adsRepository = getCustomRepository(AdsRepository);
    const photosAdsRepository = getCustomRepository(PhotoAdsRepository);
    const ads = await adsRepository.find();
    const result = [];
    for (const anuncio of ads) {
      const photos = await photosAdsRepository.find({
        where: {
          id_ads: anuncio.id,
        },
      });
      result.push({ ...anuncio, photos });
    }

    return result;
  }
}
export default ListAdsService;
