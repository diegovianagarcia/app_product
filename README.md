# Front-End Challenge

O App consiste na necessidade de atender um pequeno comércio com um sistema simples de controle de produtos:

Criar um app com as seguintes telas:
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

## Desenvolvimento
* **Backend**: Consumir uma API REST JSON com autenticação JWT disponível em https://bravosul-app.herokuapp.com/

* **Website**: O frontend do site foi criado usando o Angular 

## Instalação 

Para executar esse repositório baixe-o para sua maquina ou de um `Git Clone`.
- `$ npm install` esse comando ira instalar todos os módulos necessários ao Angular

## Ambiente de desenvolvimento e produção
### Configurar variáveis de ambiente
No arquivo `environments/environments.ts e environments.prod`
- apiURL - Endereco base da API

### Executar o App

- `$ ng serve --open ` irá iniciar o servidor em `localhost:4200/`

### Build de produção

- `$ ng build --prod` irá fazer o build na pasta  `dist/`

### Autenticação
- username: dev@bravosul.com.br
- password: Brvsl@2020