import { Request, Response } from 'express';
import UpdatePeopleAvatarService from '../services/UpdatePeopleAvatarService';

class PeopleAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateAvatar = new UpdatePeopleAvatarService();

    const partners = await updateAvatar.execute({
      user_id: req.partners.id,
      avatarFilename: req.file?.filename as string,
    });

    return res.json(partners);
  }
}
export default PeopleAvatarController;
