import { Request, Response } from 'express';
import CreatePeopleService from '../services/CreatePeopleService';
import DeletePeopleService from '../services/DeletePeopleService';
import ListPeopleService from '../services/ListPeopleService';
import ShowPeopleService from '../services/ShowPeopleService';
import UpdatePeopleService from '../services/UpdatePeopleService';

class PeopleController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listPeople = new ListPeopleService();

    const people = await listPeople.execute();

    return res.json(people);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showPeople = new ShowPeopleService();

    const people = await showPeople.execute({ id });

    return res.json(people);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { name, email, phone, cnpj_cpf, address, number, complements, district, city, state, country, zip, contact, landline, id_ads, active } =
      req.body;

    const createPeople = new CreatePeopleService();

    const people = await createPeople.execute({
      name,
      email,
      phone,
      cnpj_cpf,
      address,
      number,
      complements,
      district,
      city,
      state,
      country,
      zip,
      contact,
      landline,
      id_ads,
      active,
    });

    return res.json(people);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { name, email, phone, cnpj_cpf, address, number, complements, district, city, state, country, zip, contact, landline, id_ads, active } =
      req.body;
    const { id } = req.params;

    const updatePeople = new UpdatePeopleService();

    const peoples = await updatePeople.execute({
      id,
      name,
      email,
      phone,
      cnpj_cpf,
      address,
      number,
      complements,
      district,
      city,
      state,
      country,
      zip,
      contact,
      landline,
      id_ads,
      active,
    });

    return res.json(peoples);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deletePeople = new DeletePeopleService();

    await deletePeople.execute({ id });

    return res.json([]);
  }
}
export default PeopleController;
