import AppError from '@shared/errors/AppError';
import { hash } from 'bcryptjs';
import { getCustomRepository, IsNull } from 'typeorm';
import People from '../typeorm/entities/People';
import PeopleRepositories from '../typeorm/repositories/PeopleRepositories';

interface IRequest {
  name: string;
  email: string;
  password: string;
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

class CreatePeopleService {
  public async execute({
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
  }: IRequest): Promise<People> {
    const peopleRepository = getCustomRepository(PeopleRepositories);
    const emailExists = await peopleRepository.findByEmail(email);
    const phoneExists = await peopleRepository.findByPhone(phone);

    if (emailExists) {
      throw new AppError('Já existe esse e-mail cadastrado.');
    }
    if (phoneExists) {
      throw new AppError('Já existe esse telefone cadastrado.');
    }

    const hashedPassword = await hash(password, 8);

    const people = peopleRepository.create({
      name,
      email,
      password: hashedPassword,
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
    if (!people.name) {
      throw new AppError('Nome é obrigatório.');
    }
    if (!people.email) {
      throw new AppError('Email é obrigatório.');
    }
    if (!people.phone) {
      throw new AppError('Telefone é obrigatório.');
    }
    if (!people.cnpj_cpf) {
      throw new AppError('CNPJ ou CPF é obrigatório.');
    }
    await peopleRepository.save(people);
    return people;
  }
}
export default CreatePeopleService;
