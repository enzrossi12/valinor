# Kanban Field — Sistema de Gerenciamento de Tarefas

![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

> [!IMPORTANT]
> **Vídeo de Demonstração:** https://jam.dev/c/5d58659b-7a4b-444d-b9f9-433d5cd4c5b3

## Descrição do Projeto

Este projeto foi desenvolvido como um desafio técnico para criar um quadro Kanban funcional e intuitivo. A ideia principal foi construir uma ferramenta onde o usuário possa organizar suas tarefas diárias de um jeito simples, podendo criar novos cards, organizar as colunas conforme a sua necessidade e, claro, arrastar as tarefas entre as etapas do processo. 

Durante o desenvolvimento, foquei bastante em garantir que a interface fosse rápida e que as interações de "arrastar e soltar" (Drag and Drop) funcionassem bem tanto para as tarefas quanto para a reordenação das próprias colunas, trazendo uma experiência de uso mais fluida.

---

## Tecnologias e Ferramentas

### Frontend
* **Angular 18+**: Arquitetura baseada em Standalone Components.
* **Angular CDK**: Gerenciamento de interações de Drag and Drop.
* **Sass (SCSS)**: Modularização de estilos e layout responsivo.

### Backend
* **NestJS**: Estrutura de API escalável e organizada.
* **Armazenamento**: Gestão de dados em memória (Arrays) para esta versão do desafio.
* **TypeScript**: Tipagem robusta em toda a aplicação.

---

## Funcionalidades Principais

| Recurso | Descrição |
| :--- | :--- |
| **Gestão de Tarefas** | CRUD completo (Criação, Leitura, Edição e Exclusão). |
| **Colunas Dinâmicas** | Liberdade para adicionar e renomear colunas em tempo real. |
| **Interatividade** | Reordenação horizontal de colunas e movimentação vertical de cards. |
| **Otimização de UX** | Tratamento de eventos para evitar conflitos entre o "arrastar" e o "clicar". |

---

## Como Executar o Projeto

### Pré-requisitos
* **Node.js**: Versão 18 ou superior.
* **Angular CLI**: Instalado globalmente (`npm install -g @angular/cli`).

### Configuração do Backend
1. Acesse o diretório: `cd backend`
2. Instale as dependências: `npm install`
3. Inicie o servidor: `npm run start:dev`
4. A API estará rodando em: `http://localhost:3000`

### Configuração do Frontend
1. Acesse o diretório: `cd frontend`
2. Instale as dependências: `npm install`
3. Inicie a aplicação: `ng serve`
4. Acesse no navegador: `http://localhost:4200`

---

## Estrutura de Arquivos Relevantes

* `src/app/app.component.ts`: Concentra a lógica de manipulação do estado do quadro e eventos de arrasto.
* `src/app/services/task.service.ts`: Abstração das chamadas HTTP e integração com a API.
* `src/app/app.component.html`: Estrutura do Kanban utilizando diretivas do Angular CDK.
* `src/app/app.component.scss`: Estilização e definições de layout do container.
