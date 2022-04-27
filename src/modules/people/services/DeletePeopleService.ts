import AdsRepository from '@modules/ads/typeorm/repositories/AdsRepository';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import PeopleRepositories from '../typeorm/repositories/PeopleRepositories';

interface IRequest {
  id: string;
}

class DeletePeopleService {
  public async execute({ id }: IRequest): Promise<void> {
    const partnerssRepository = getCustomRepository(PeopleRepositories );
    const adsRepository = getCustomRepository(AdsRepository);
    const partners = await partnerssRepository.findOne(id);
    if (!partners) {
      throw new AppError('Parceiro não encontrado.');
    }

    const adsExists = await adsRepository.findById(partners.id);
    if (adsExists?.id_partner) {
      throw new AppError('Existe anuncio');
    }

    await partnerssRepository.remove(partners);
  }
}
export default DeletePeopleService;
