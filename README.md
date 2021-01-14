# Front-End Challenge

O App consiste na necessidade de atender um pequeno comércio com um sistema simples de controle de produtos:

Funcionalidades:
 - Autenticação, pública;
 - Lista de produtos, com acesso restrito;
 - Criação de produtos, com acesso restrito;
 - Edição de produtos, com acesso restrito; 
 - Modal de exclusão, com acesso restrito;
 - Tela exibindo apenas produtos ativados, pública;
 - Utilizar como backend uma API REST JSON com autenticação JWT 

 ## Tecnologias utilizadas

Para executar o projeto, será necessário instalar/usar os seguintes programas:
* [Node.js](https://nodejs.org/en/download/)
* [NPM](https://www.npmjs.com/)
* [Angular 6](https://angular.io/)
* [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/download/)

## Backend
API REST JSON com autenticação JWT disponível em https://bravosul-app.herokuapp.com/


## Instalação 

Para executar esse projeto baixe-o clone o repositório. Na pasta raiz:
- `$ npm install` esse comando ira instalar todos os módulos necessários ao Angular

## Ambiente de desenvolvimento e produção
### Configurar variáveis de ambiente
No arquivo `environments/environments.ts e environments.prod`
- apiURL - Endereco base da API

### Executar o App

- `$ ng seve --open ` irá iniciar o servidor em `localhost:4200/` 

### Build de produção

- `$ ng build --prod` irá fazer o build na pasta  `dist/`

### Autenticação
- username: dev@bravosul.com.br
- password: Brvsl@2020