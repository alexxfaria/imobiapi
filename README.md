# Manual API Pocket

Eu sou o Alex Faria

[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/alexxfaria)](https://github.com/alexxfaria)
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alexxfaria/)](https://www.linkedin.com/in/alexxfaria/)

## Setup inicial.

1.  Clone o repositório; <!-- git clone -->
2.  Instale as dependências; <!-- yarn install -->
3.  Duplique o arquivo .env.example e renomee .env; <!--  Configurações do banco de dados, migrations -->
4.  Crie um banco de dados com o nome imobiapi; <!-- PostgreSQL database -->
5.  Rode as migrations; <!-- yarn typeorm migration:run -->
6.  Rode o projeto; <!-- yarn dev -->

## Estrutura do projeto

- Primeiro é criado um cadastro de pessoa pela rota 'http://localhost:3333/people'
- Segundo é feito o login pela rota 'http://localhost:3333/sessions'
- Terceiro é feito a criação do Anuncio pela rota 'http://localhost:3333/ads', obrigatorio amarrar uma id do people no campo ip_people.
