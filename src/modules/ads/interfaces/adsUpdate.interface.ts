import IPhoto from './photo.interface';

export default interface IAdsUpdate {
  description: string;
  type: string;
  sale_price: number;
  rent_price: number;
  sale: boolean;
  rent: boolean;
  land_area: string;
  building_area: string;
  bedrooms: string;
  suite: string;
  restroom: string;
  garage: string;
  address: string;
  number: string;
  complements: string;
  district: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  id_people: string;
  service_area: boolean;
  closets_room: boolean;
  cabinets_kitchen: boolean;
  furnished: boolean;
  air_conditioning: boolean;
  grill: boolean;
  balcony: boolean;
  gym: boolean;
  pool: boolean;
  servant_room: boolean;
  gated_community: boolean;
  elevator: boolean;
  security: boolean;
  concierge: boolean;
  animals_allowed: boolean;
  condominium_gym: boolean;
  condominium_pool: boolean;
  party_room: boolean;
  exclusive: boolean;
  active: boolean;
  id: string;
  photo_ads: IPhoto[];
}
