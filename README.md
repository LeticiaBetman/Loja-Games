# 🕹️ Loja de Games - Backend em NestJS

Este é um projeto backend construído com **NestJS** para gerenciar uma loja de games, permitindo cadastro de produtos organizados por categorias.

## 🚀 Funcionalidades

- CRUD completo de **Produtos**
- CRUD completo de **Categorias**
- Relacionamento OneToMany entre Categoria e Produto
- Validação de dados e tratamento de exceções
- Testado com Insomnia
- Conectado ao banco de dados com TypeORM

## 🛠️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)
- [Insomnia](https://insomnia.rest/) – testes de API

## 🔗 Relacionamento

- Uma **Categoria** possui vários **Produtos**
- Um **Produto** pertence a uma **Categoria**

## 📂 Estrutura do Projeto

src/
│
├── categoria/
│ ├── controller/
│ ├── entity/
│ ├── service/
│
├── produto/
│ ├── controller/
│ ├── entity/
│ ├── service/
│
├── app.controller.ts
├── app.module.ts
├── main.ts

bash
Copiar
Editar

## ⚙️ Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
Instale as dependências:

bash
Copiar
Editar
npm install
Configure o banco de dados no arquivo app.module.ts

Execute a aplicação:

bash
Copiar
Editar
npm run start:dev
Teste os endpoints no Insomnia

🧪 Endpoints para Teste no Insomnia
Produto
GET /produto → listar todos

GET /produto/:id → buscar por ID

GET /produto/nome/:nome → buscar por nome

POST /produto → criar

PUT /produto → atualizar

DELETE /produto/:id → deletar

Categoria
GET /categoria → listar todas

GET /categoria/:id → buscar por ID

GET /categoria/nome/:nome → buscar por nome

POST /categoria → criar

PUT /categoria → atualizar

DELETE /categoria/:id → deletar

🧾 Exemplos de JSON
Produto
json
Copiar
Editar
{
  "nome": "The Witcher 3",
  "descricao": "RPG de mundo aberto",
  "console": "PC",
  "preco": 89.90,
  "categoria": {
    "id": 1
  }
}
Categoria
json
Copiar
Editar
{
  "nome": "RPG",
  "descricao": "Jogos de interpretação de personagem"
}
🧠 Desenvolvido por
Letícia Rodrigues Betman – Projeto de prática com NestJS.