import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import People from '../typeorm/entities/People';
import PeopleRepositories from '../typeorm/repositories/PeopleRepositories';
import IPeople from '../interfaces/people.interface';

class CreatePeopleService {
  public async execute({
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
    active,
  }: IPeople): Promise<People> {
    const peopleRepository = getCustomRepository(PeopleRepositories);
    const emailExists = await peopleRepository.findByEmail(email);
    const phoneExists = await peopleRepository.findByPhone(phone);

    const people = peopleRepository.create({
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
      throw new AppError('E-mail já esta sendo utilizado.');
    }
    // Verifica se ja existe telefone cadastrado
    if (phoneExists) {
      throw new AppError('Telefone já esta sendo utilizado.');
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
