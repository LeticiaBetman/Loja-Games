# 🎮 Loja de Games - Backend em NestJS

Este é um projeto backend construído com **NestJS** para gerenciar uma loja de games, permitindo o cadastro de produtos organizados por categorias.

---

## ✅ Funcionalidades

- CRUD completo de **Produtos**
- CRUD completo de **Categorias**
- Relacionamento **OneToMany** entre Categoria e Produto
- Validação de dados e tratamento de exceções
- Testado com **Insomnia**
- Integração com banco de dados usando **TypeORM**

---

## 🛠️ Tecnologias Utilizadas

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)
- [Insomnia](https://insomnia.rest/) – para testes de API

---

## 🔗 Relacionamento

- Uma **Categoria** possui vários **Produtos**
- Um **Produto** pertence a uma **Categoria**
  
---

## ▶️ Como executar
```bash
1. Clone o repositório
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. Instale as dependências
   npm install

3. Configure o banco de dados
   Edite as configurações no arquivo app.module.ts

4. Execute a aplicação
   npm run start:dev

5. Teste os endpoints com o Insomnia

🔌 Endpoints da API
📦 Produto
| Método | Rota                  | Ação            |
| ------ | --------------------- | --------------- |
| GET    | `/produto`            | Listar todos    |
| GET    | `/produto/:id`        | Buscar por ID   |
| GET    | `/produto/nome/:nome` | Buscar por nome |
| POST   | `/produto`            | Criar           |
| PUT    | `/produto`            | Atualizar       |
| DELETE | `/produto/:id`        | Deletar         |

🗂 Categoria
| Método | Rota                    | Ação            |
| ------ | ----------------------- | --------------- |
| GET    | `/categoria`            | Listar todas    |
| GET    | `/categoria/:id`        | Buscar por ID   |
| GET    | `/categoria/nome/:nome` | Buscar por nome |
| POST   | `/categoria`            | Criar           |
| PUT    | `/categoria`            | Atualizar       |
| DELETE | `/categoria/:id`        | Deletar         |

🧪 Exemplos de JSON
Produto
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
{
  "nome": "RPG",
  "descricao": "Jogos de interpretação de personagem"
}

👩‍💻 Desenvolvido por
Letícia Rodrigues Betman – Projeto de prática com NestJS.
