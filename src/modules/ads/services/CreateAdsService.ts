import PeopleRepositories from '@modules/people/typeorm/repositories/PeopleRepositories';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Ads from '../typeorm/entities/Ads';
import AdsRepository from '../typeorm/repositories/AdsRepository';
import IAds from '../interfaces/ads.interface';

class CreateAdsService {
  public async execute({
    description,
    type,
    sale_price,
    rent_price,
    sale,
    rent,
    land_area,
    building_area,
    bedrooms,
    suite,
    restroom,
    garage,
    address,
    number,
    complements,
    district,
    city,
    state,
    country,
    zip,
    id_people,
    service_area,
    closets_room,
    cabinets_kitchen,
    furnished,
    air_conditioning,
    grill,
    balcony,
    gym,
    pool,
    servant_room,
    gated_community,
    elevator,
    security,
    concierge,
    animals_allowed,
    condominium_gym,
    condominium_pool,
    party_room,
    exclusive,
    active,
    photo_ads,
  }: IAds): Promise<Ads> {
    const adsRepository = getCustomRepository(AdsRepository);
    const peoplesRepository = getCustomRepository(PeopleRepositories);
    const ads = adsRepository.create({
      description,
      type,
      sale_price,
      rent_price,
      sale,
      rent,
      land_area,
      building_area,
      bedrooms,
      suite,
      restroom,
      garage,
      address,
      number,
      complements,
      district,
      city,
      state,
      country,
      zip,
      id_people,
      service_area,
      closets_room,
      cabinets_kitchen,
      furnished,
      air_conditioning,
      grill,
      balcony,
      gym,
      pool,
      servant_room,
      gated_community,
      elevator,
      security,
      concierge,
      animals_allowed,
      condominium_gym,
      condominium_pool,
      party_room,
      exclusive,
      active,
      photo_ads,
    });
    const people = await peoplesRepository.findById(id_people);
    if (!people?.id) {
      throw new AppError('Pessoa não encontrado.');
    }
    if (!people?.active) {
      throw new AppError('Pessoa esta inativo.');
    }

    await adsRepository.save(ads);
    return ads;
  }
}
export default CreateAdsService;
