# 🚀 Nest Products & Companies API

API RESTful construída com **NestJS**, **PostgreSQL** e **Prisma ORM**, com autenticação JWT e documentação via Swagger. Esta aplicação oferece endpoints protegidos e públicos para gerenciamento de **empresas** e **produtos**, utilizando um banco de dados relacional com autenticação básica baseada em token JWT.

---

<br/>


<br/>

## 📘 Introdução

Este projeto é uma API backend que permite a criação e gestão de empresas e seus produtos, ideal para estudos ou base para sistemas administrativos. Possui autenticação JWT simples, validações com `class-validator`, documentação automática com Swagger, e utiliza PostgreSQL  para persistência dos dados.

---

<br/>

<br/>

## 🛠️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) – Framework backend TypeScript
- [Prisma ORM](https://www.prisma.io/) – ORM moderno para TypeScript/Node.js
- [PostgreSQL](https://www.postgresql.org/) – Banco de dados relacional
- [JWT](https://jwt.io/) – Autenticação via token
- [Swagger](https://swagger.io/) – Documentação de API interativa
- [class-validator](https://github.com/typestack/class-validator) – Validação de DTOs

---

<br/>

## ⚙️ Requisitos

  Intalar Node.js v18+
  
  Instalar o PostGreSQL
  
  Instalar npm

<br/>

## ▶️ Como Rodar Localmente


<br/>

1. Clonar o projeto

   ```
    git clone https://github.com/seu-usuario/nest-products-companies.git
    cd nest-products-companies

   ```
   
<br/>
   
2. Instalar dependências

   ```
     npm install
   ```


<br/>

3. Configurar ambiente criando o arquivo .env

   ```
    DATABASE_URL="postgresql://usuario:senha@localhost:5432/nome_banco?schema=public"
    SECRET_KEY="sua-chave"
    JWT_EXPIRES_IN="1d"

   ```

   
<br/>

4. Rodar as migrations e gerar Prisma Client

  ```
    npx prisma migrate dev --name init
    npx prisma generate
  ```


<br/>

5. Iniciar o servidor

   ```
     npm run start:dev

   ```

<br/>

## 🔐 Autenticação
  
  GET /auth/token: Gera um token JWT simulado para autenticação.

<br/>

## 📌 Rotas da API

<br/>

  ## Empresa
  
  POST /companies: Cria uma nova Empresa. <strong>(Requer autenticação)</strong>

  GET /companies: Lista todas as Empresas.

  GET /companies/:id: Obtém uma Empresa específica pelo ID.

  PUT /companies/:id: Atualiza uma Enpresa existente. <strong>(Requer autenticação)</strong>

  DELETE /companies/:id: Remove uma Empresa pelo ID. <strong>(Requer autenticação)</strong>

<br/>

## Produtos

  POST /products: Cria um novo Produto. <strong>(Requer autenticação)</strong>

  GET /products: Lista Todos os produtos.

  GET /products/:id: Obtém uma produto específico pelo ID.

  PUT /products/:id: Atualiza um produto existente. <strong>(Requer autenticação)</strong>

  DELETE /products/:id: Remove um produto pelo ID. <strong>(Requer autenticação)</strong>
<br/><br/>


📑 Documentação Swagger
Acesse: http://localhost:3000/api


<br/>

## 📦 Estrutura de Pastas

```bash
  src/
  ├── auth/                # Módulo de autenticação JWT
  │   ├── auth.module.ts
  │   ├── auth.controller.ts
  │   ├── auth.service.ts
  │   └── jwt.strategy.ts
  ├── common/
  │   └── guards/          # Guarda de autenticação
  │       └── jwt-auth.guard.ts
  ├── companies/           # Módulo de empresas
  │   ├── companies.controller.ts
  │   ├── companies.service.ts
  │   └── dto/
  ├── products/            # Módulo de produtos
  │   ├── products.controller.ts
  │   ├── products.service.ts
  │   └── dto/
  ├── prisma/              # Integração com Prisma ORM
  │   ├── prisma.service.ts
  │   └── prisma.module.ts
  ├── app.module.ts        # Módulo raiz
  ├── main.ts              # Ponto de entrada da aplicação
```

<br/>

# 🧑‍💻 Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

<br/>

# 📄 Licença
Este projeto está licenciado sob a MIT License.
