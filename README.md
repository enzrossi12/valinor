Kanban Field - Sistema de Gerenciamento de Tarefas
Descrição do Projeto
O Kanban Field é uma aplicação web desenvolvida para o gerenciamento de tarefas através de um quadro dinâmico. O sistema permite a organização de fluxos de trabalho permitindo que o usuário crie tarefas, organize colunas de forma personalizada e utilize funcionalidades de arrastar e soltar (Drag and Drop) para movimentar itens e reordenar o próprio quadro.

Tecnologias Utilizadas
Frontend
Angular 21: Utilização de Standalone Components para uma arquitetura moderna.

Angular CDK: Implementação de Drag and Drop para tarefas e colunas.

Sass (SCSS): Estilização avançada com variáveis e seletores aninhados.

TypeScript: Garantia de tipagem e segurança no desenvolvimento.

Backend
NestJS: Framework Node.js para a construção de uma API escalável e eficiente.

TypeScript: Utilizado para definição de DTOs e serviços.

TypeORM/Prisma: Integração com banco de dados para persistência das tarefas.

Funcionalidades
CRUD de Tarefas: Criação, leitura, edição de título e exclusão de tarefas.

Colunas Dinâmicas: Adição de novas colunas ao quadro e edição de seus nomes.

Interatividade: Reordenação horizontal de colunas e movimentação vertical/horizontal de tarefas.

Persistência: Integração com API para salvar o estado das tarefas.

Otimização de UX: Resposta imediata em cliques e ações de interface.

Como Executar o Projeto
Pré-requisitos
Node.js (versão 18 ou superior)

Angular CLI

Gerenciador de pacotes npm

Instalação do Backend
Navegue até a pasta do servidor: cd backend

Instale as dependências: npm install

Inicie o serviço: npm run start:dev

O servidor estará disponível em: http://localhost:3000

Instalação do Frontend
Navegue até a pasta da aplicação: cd frontend

Instale as dependências: npm install

Inicie a aplicação: ng serve

Acesse o sistema através do navegador: http://localhost:4200

Estrutura de Arquivos Principal
src/app/app.component.ts: Lógica principal do quadro e manipulação de eventos de drag.

src/app/services/task.service.ts: Comunicação HTTP com a API NestJS.

src/app/app.component.html: Estrutura do Kanban utilizando diretivas do Angular CDK.

src/app/app.component.scss: Definições visuais e layout de colunas.