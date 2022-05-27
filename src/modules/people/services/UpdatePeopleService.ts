import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import People from '../typeorm/entities/People';
import PeopleRepositories from '../typeorm/repositories/PeopleRepositories';

interface IRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  admin: boolean;
  cnpj_cpf: string;
  address: string;
  number: string;
  complements: string;
  district: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  contact: string;
  landline: string;
  id_property: string;
  active: boolean;
}

class UpdatePeopleService {
  public async execute({
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
  }: IRequest): Promise<People> {
    const peopleRepository = getCustomRepository(PeopleRepositories);

    const people = await peopleRepository.findById(id);
    if (!people) {
      throw new AppError('Parceiro não encontrado.');
    }
    const emailExists = await peopleRepository.findByName(email);
    const phoneExists = await peopleRepository.findByPhone(phone);

    if (emailExists && email != people.email) {
      throw new AppError('E-mail já esta sendo utilizado.');
    }
    if (phoneExists && phone != people.phone) {
      throw new AppError('Telefone já esta sendo utilizado.');
    }

    people.name = name;
    people.email = email;
    people.phone = phone;
    people.admin = admin;
    people.cnpj_cpf = cnpj_cpf;
    people.address = address;
    people.number = number;
    people.complements = complements;
    people.district = district;
    people.city = city;
    people.state = state;
    people.country = country;
    people.zip = zip;
    people.contact = contact;
    people.landline = landline;
    people.id_property = id_property;
    people.active = active;

    await peopleRepository.save(people);
    return people;
  }
}
export default UpdatePeopleService;
