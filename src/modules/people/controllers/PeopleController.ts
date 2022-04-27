import { Request, Response } from 'express';
import CreatePeopleService from '../services/CreatePeopleService';
import DeletePeopleService from '../services/DeletePeopleService';
import ListPeopleService from '../services/ListPeopleService';
import ShowPeopleService from '../services/ShowPeopleService';
import UpdatePeopleService from '../services/UpdatePeopleService';

class PeopleController {
  public async index(req: Request, res: Response): Promise<Response> {
    const listPartners = new ListPeopleService();

    const partners = await listPartners.execute();

    return res.json(partners);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showPartners = new ShowPeopleService();

    const partners = await showPartners.execute({ id });

    return res.json(partners);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      phone,
      admin,
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
      id_property,
      active,
    } = req.body;

    const createPeople = new CreatePeopleService();

    const people = await createPeople.execute({
      name,
      email,
      password,
      phone,
      admin,
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
      id_property,
      active,
    });

    return res.json(people);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      phone,
      admin,
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
      id_property,
      active,
    } = req.body;
    const { id } = req.params;

    const updatePartners = new UpdatePeopleService();

    const partners = await updatePartners.execute({
      id,
      name,
      email,
      phone,
      admin,
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
      id_property,
      active,
    });

    return res.json(partners);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deletePartners = new DeletePeopleService();

    await deletePartners.execute({ id });

    return res.json([]);
  }
}
export default PeopleController;
