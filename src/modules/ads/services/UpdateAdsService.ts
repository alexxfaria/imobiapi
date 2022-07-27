import PeopleRepositories from '@modules/people/typeorm/repositories/PeopleRepositories';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Ads from '../typeorm/entities/Ads';
import AdsRepository from '../typeorm/repositories/AdsRepository';
import IAdsUpdate from '../interfaces/adsUpdate.interface';

class UpdateAdsService {
  public async execute({
    id,
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
  }: IAdsUpdate): Promise<Ads> {
    const adsRepository = getCustomRepository(AdsRepository);
    const peoplesRepository = getCustomRepository(PeopleRepositories);
    const ads = await adsRepository.findById(id);
    if (!ads) {
      throw new AppError('Anuncio não existe');
    }

    const peoples = await peoplesRepository.findById(id_people);
    if (!peoples?.id) {
      throw new AppError('Parceiro não encontrado.');
    }
    if (!peoples?.active) {
      throw new AppError('Parceiro esta inativo.');
    }

    ads.description = description;
    ads.type = type;
    ads.sale_price = sale_price;
    ads.rent_price = rent_price;
    ads.sale = sale;
    ads.rent = rent;
    ads.land_area = land_area;
    ads.building_area = building_area;
    ads.bedrooms = bedrooms;
    ads.suite = suite;
    ads.restroom = restroom;
    ads.garage = garage;
    ads.address = address;
    ads.number = number;
    ads.complements = complements;
    ads.district = district;
    ads.city = city;
    ads.state = state;
    ads.country = country;
    ads.zip = zip;
    ads.id_people = id_people;
    ads.service_area = service_area;
    ads.closets_room = closets_room;
    ads.cabinets_kitchen = cabinets_kitchen;
    ads.furnished = furnished;
    ads.air_conditioning = air_conditioning;
    ads.grill = grill;
    ads.balcony = balcony;
    ads.gym = gym;
    ads.pool = pool;
    ads.servant_room = servant_room;
    ads.gated_community = gated_community;
    ads.elevator = elevator;
    ads.security = security;
    ads.concierge = concierge;
    ads.animals_allowed = animals_allowed;
    ads.condominium_gym = condominium_gym;
    ads.condominium_pool = condominium_pool;
    ads.party_room = party_room;
    ads.exclusive = exclusive;
    ads.active = active;

    await adsRepository.save(ads);
    return ads;
  }
}
export default UpdateAdsService;
