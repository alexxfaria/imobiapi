import { Request, Response } from 'express';
import CreatePeopleInterestService from '../services/CreatePeopleInterestService';
import DeletePeopleInterestService from '../services/DeletePeopleInterestService';

class PeopleInterestController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { id_people, id_interest } = req.body;

    const createPeopleInterest = new CreatePeopleInterestService();

    const createPeople = await createPeopleInterest.execute({
      id_people,
      id_interest,
    });
    return res.json(createPeople);
  }
  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deletePeopleInterest = new DeletePeopleInterestService();

    await deletePeopleInterest.execute({ id });

    return res.json([]);
  }
}
export default PeopleInterestController;
