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
    // ##### VALIDAÇÕES / REGRAS #####
    // Obriga campo nome e ter no minimo 3 letras
    if (!people.name || people.name.length < 4) {
      throw new AppError('Nome é obrigatório.');
    }
    if (people.name.length > 50) {
      throw new AppError('Nome é muito extenso.');
    }
    // Verifica se ja existe o email cadastrado
    if (emailExists) {
      throw new AppError('Já existe esse e-mail cadastrado.');
    }
    // Verifica se ja existe telefone cadastrado
    if (phoneExists) {
      throw new AppError('Já existe esse telefone cadastrado.');
    }
    // Obrigado digitação do email
    if (!people.email || people.email.length < 6) {
      throw new AppError('Email é obrigatório.');
    }
    if (people.email.length > 50) {
      throw new AppError('Email é muito extenso.');
    }
    // Obrigado digitação do telefone com ou sem mascara
    if (!people.phone) {
      throw new AppError('Telefone é obrigatório.');
    }
    if (people.phone.length < 9 || people.phone.length > 14) {
      throw new AppError('Telefone é inválido.');
    }
    // Obrigado digitação do cpf
    if (!people.cnpj_cpf) {
      throw new AppError('CNPJ ou CPF é obrigatório.');
    }
    if (people.cnpj_cpf.length < 11 || people.cnpj_cpf.length > 18) {
      throw new AppError('CNPJ/CPF é inválido.');
    }
    await peopleRepository.save(people);
    return people;
  }
}
export default CreatePeopleService;
