import PeopleRepositories from '@modules/people/typeorm/repositories/PeopleRepositories';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Ads from '../typeorm/entities/Ads';
import AdsRepository from '../typeorm/repositories/AdsRepository';

interface IRequest {
  description: string;
  color: string;
  measure: string;
  max_price: number;
  ideal_amount: number;
  min_amount: number;
  max_amount: number;
  limit_date: Date;
  validity_check: Date;
  id_people: string;
}

class CreateAdsService {
  public async execute({
    description,
    color,
    measure,
    max_price,
    ideal_amount,
    min_amount,
    max_amount,
    limit_date,
    validity_check,
    id_people,
  }: IRequest): Promise<Ads> {
    const adsRepository = getCustomRepository(AdsRepository);
    const peoplesRepository = getCustomRepository(PeopleRepositories);
    const ads = adsRepository.create({
      description,
      color,
      measure,
      max_price,
      ideal_amount,
      min_amount,
      max_amount,
      limit_date,
      validity_check,
      id_people,
    });
    const people = await peoplesRepository.findById(id_people);
    if (!people?.id) {
      throw new AppError('Parceiro não encontrado.');
    }
    if (!people?.active) {
      throw new AppError('Parceiro esta inativo.');
    }
    await adsRepository.save(ads);
    return ads;
  }
}
export default CreateAdsService;
