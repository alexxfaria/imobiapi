import { Request, Response } from 'express';
import CreateSessionService from '../services/CreateSessionService';

class SessionsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const createSession = new CreateSessionService();

    const users = await createSession.execute({ email, password });

    return res.json(users);
  }
}
export default SessionsController;
