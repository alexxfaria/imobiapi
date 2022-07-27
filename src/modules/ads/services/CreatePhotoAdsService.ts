import { getCustomRepository } from 'typeorm';
import PhotoAds from '../typeorm/entities/PhotoAds';
import Ads from '../typeorm/entities/Ads';
import AdsRepository from '../typeorm/repositories/AdsRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  photo_ads: PhotoAds[];
  id_people: string;
  id: string;
}
class CreatePhotoAdsService {
  public async execute({ photo_ads, id, id_people }: IRequest): Promise<Ads> {
    const adsRepository = getCustomRepository(AdsRepository);

    const photoAds = adsRepository.create({
      photo_ads,
      id_people,
    });
    const ads = await adsRepository.findById(id);
    if (!ads?.id) {
      throw new AppError('Anuncio não encontrado.');
    }

    await adsRepository.save(photoAds);
    return photoAds;
  }
}
export default CreatePhotoAdsService;
