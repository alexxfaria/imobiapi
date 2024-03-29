import { Request, Response } from 'express';
import CreatePhotoAdsService from '../services/CreatePhotoAdsService';
import DeletePhotoAdsService from '../services/DeletePhotoAdsService';
import ShowPhotosAdsService from '../services/ShowPhotosAdsService';
// import UpdatePhotoAdsService from '../services/UpdatePhotoAdsService';

class PhotoAdsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { photo_ads, id_people } = req.body;
    const { id } = req.params;

    const createPhotoAds = new CreatePhotoAdsService();

    const photoAds = await createPhotoAds.execute({
      photo_ads,
      id,
      id_people,
    });
    return res.json(photoAds);
  }
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deletePhotoAds = new DeletePhotoAdsService();

    await deletePhotoAds.execute({ id });

    return res.json([]);
  }
  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showPhotosAds = new ShowPhotosAdsService();

    const photosAds = await showPhotosAds.execute({ id });

    return res.json(photosAds);
  }
}
export default PhotoAdsController;
