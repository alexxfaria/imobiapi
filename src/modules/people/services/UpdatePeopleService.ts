import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import People from '../typeorm/entities/People';
import PeopleRepositories from '../typeorm/repositories/PeopleRepositories';
import IPeopleUpdate from '../interfaces/peopleUpdate.interface';

class UpdatePeopleService {
  public async execute({
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
    active,
  }: IPeopleUpdate): Promise<People> {
    const peopleRepository = getCustomRepository(PeopleRepositories);
    const people = await peopleRepository.findById(id);
    const emailExists = await peopleRepository.findByName(email);
    const phoneExists = await peopleRepository.findByPhone(phone);

    // ##### VALIDAÇÕES / REGRAS #####
    if (!people) {
      throw new AppError('Parceiro não encontrado.');
    }
    // Obriga campo nome e ter no minimo 3 letras
    // if (!people.name || people.name.length < 4) {
    //   throw new AppError('Nome é obrigatório.');
    // }
    // if (people.name.length > 50) {
    //   throw new AppError('Nome é muito extenso.');
    // }

    // Verifica se ja existe o email cadastrado
    if (emailExists && email != people.email) {
      throw new AppError('E-mail já esta sendo utilizado.');
    }
    // Obrigado digitação do email
    // if (!people.email || people.email.length < 6) {
    //   throw new AppError('Email é obrigatório.');
    // }
    // if (people.email.length > 50) {
    //   throw new AppError('Email é muito extenso.');
    // }
    // Verifica se ja existe telefone cadastrado
    if (phoneExists && phone != people.phone) {
      throw new AppError('Telefone já esta sendo utilizado.');
    }

    // Obrigado digitação do telefone com ou sem mascara
    // if (!people.phone) {
    //   throw new AppError('Telefone é obrigatório.');
    // }
    // if (people.phone.length < 9 || people.phone.length > 14) {
    //   throw new AppError('Telefone é inválido.');
    // }
    // // Obrigado digitação do cpf
    // if (!people.cnpj_cpf) {
    //   throw new AppError('CNPJ ou CPF é obrigatório.');
    // }
    // if (people.cnpj_cpf.length < 11 || people.cnpj_cpf.length > 18) {
    //   throw new AppError('CNPJ/CPF é inválido.');
    // }

    people.name = name;
    people.email = email;
    people.phone = phone;
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
    people.active = active;

    await peopleRepository.save(people);
    return people;
  }
}
export default UpdatePeopleService;
