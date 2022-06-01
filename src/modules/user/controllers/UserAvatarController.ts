import { Request, Response } from 'express';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

class PeopleAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateAvatar = new UpdateUserAvatarService();

    const users = await updateAvatar.execute({
      user_id: req.users.id,
      avatarFilename: req.file?.filename as string,
    });

    return res.json(users);
  }
}
export default PeopleAvatarController;
