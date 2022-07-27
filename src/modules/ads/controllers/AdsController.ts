import { Request, Response } from 'express';
import CreateAdsService from '../services/CreateAdsService';
import DeleteAdsService from '../services/DeleteAdsService';
import ListAdsService from '../services/ListAdsService';
import ShowAdsService from '../services/ShowAdsService';
import UpdateAdsService from '../services/UpdateAdsService';

class AdsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const {
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
    } = req.body;

    const createAds = new CreateAdsService();

    const ads = await createAds.execute({
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
    return res.json(ads);
  }
  public async update(req: Request, res: Response): Promise<Response> {
    const {
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
    } = req.body;
    const { id } = req.params;

    const updateAds = new UpdateAdsService();

    const ads = await updateAds.execute({
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
    });
    return res.json(ads);
  }
  public async index(req: Request, res: Response): Promise<Response> {
    const listAds = new ListAdsService();

    const ads = await listAds.execute();

    return res.json(ads);
  }
  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showAds = new ShowAdsService();

    const ads = await showAds.execute({ id });

    return res.json(ads);
  }
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteAds = new DeleteAdsService();

    await deleteAds.execute({ id });

    return res.json([]);
  }
}
export default AdsController;
