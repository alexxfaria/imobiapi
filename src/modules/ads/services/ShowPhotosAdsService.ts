import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import PhotoAds from '../typeorm/entities/PhotoAds';
import PhotoAdsRepository from '../typeorm/repositories/PhotoAdsRepository';

interface IRequest {
  id: string;
}

class ShowPhotosAdsService {
  public async execute({ id }: IRequest): Promise<PhotoAds[]> {
    const photoAdsRepository = getCustomRepository(PhotoAdsRepository);
    const photosAds = await photoAdsRepository.find({
      where: { id_ads: id },
    });
    if (!photosAds) {
      throw new AppError('Nenhuma imagem encontrada.');
    }
    return photosAds;
  }
}
export default ShowPhotosAdsService;
