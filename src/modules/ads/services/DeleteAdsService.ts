import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import AdsRepository from '../typeorm/repositories/AdsRepository';
import PhotoAdsRepository from '../typeorm/repositories/PhotoAdsRepository';

interface IRequest {
  id: string;
}

class DeleteAdsService {
  public async execute({ id }: IRequest): Promise<void> {
    const adsRepository = getCustomRepository(AdsRepository);
    const photoAdsRepository = getCustomRepository(PhotoAdsRepository);
    const photosAds = await photoAdsRepository.find({
      where: { id_ads: id },
    });
    if (!photosAds) {
      throw new AppError('Nenhuma imagem encontrada.');
    }
    await photoAdsRepository.remove(photosAds);

    const ads = await adsRepository.findOne(id);
    if (!ads) {
      throw new AppError('Anúncio não encontrado.');
    }

    await adsRepository.remove(ads);
  }
}
export default DeleteAdsService;
