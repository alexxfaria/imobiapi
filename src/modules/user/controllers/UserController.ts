import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';
import ListUserService from '../services/ListUserService';
import ShowUserService from '../services/ShowUserService';
import UpdateUserService from '../services/UpdateUserService';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listUsers = new ListUserService();

    const users = await listUsers.execute();

    return res.json(users);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showUser = new ShowUserService();

    const user = await showUser.execute({ id });

    return res.json(user);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, password, admin, active } = req.body;

    const createPeople = new CreateUserService();

    const people = await createPeople.execute({
      name,
      email,
      password,
      admin,
      active,
    });

    return res.json(people);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { name, email, admin, active } = req.body;
    const { id } = req.params;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({
      id,
      name,
      email,
      admin,
      active,
    });

    return res.json(user);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteUser = new DeleteUserService();

    await deleteUser.execute({ id });

    return res.json([]);
  }
}
export default UserController;
