# 🚀 Nest Products & Companies API

API RESTful construída com **NestJS**, **PostgreSQL** e **Prisma ORM**, com autenticação JWT e documentação via Swagger. Esta aplicação oferece endpoints protegidos e públicos para gerenciamento de **empresas** e **produtos**, utilizando um banco de dados relacional com autenticação básica baseada em token JWT.

---

## 🧾 Sumário

- [📘 Introdução](#-introdução)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [📦 Estrutura de Pastas](#-estrutura-de-pastas)
- [🔐 Autenticação](#-autenticação)
- [📌 Rotas da API](#-rotas-da-api)
- [⚙️ Requisitos](#️-requisitos)
- [▶️ Como Rodar Localmente](#️-como-rodar-localmente)
- [🧪 Testes e Desenvolvimento](#-testes-e-desenvolvimento)

---

## 📘 Introdução

Este projeto é uma API backend que permite a criação e gestão de empresas e seus produtos, ideal para estudos ou base para sistemas administrativos. Possui autenticação JWT simples, validações com `class-validator`, documentação automática com Swagger, e utiliza PostgreSQL via Docker para persistência dos dados.

---

## 🛠️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) – Framework backend TypeScript
- [Prisma ORM](https://www.prisma.io/) – ORM moderno para TypeScript/Node.js
- [PostgreSQL](https://www.postgresql.org/) – Banco de dados relacional
- [Docker Compose](https://docs.docker.com/compose/) – Orquestração de containers
- [JWT](https://jwt.io/) – Autenticação via token
- [Swagger](https://swagger.io/) – Documentação de API interativa
- [class-validator](https://github.com/typestack/class-validator) – Validação de DTOs

---

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
