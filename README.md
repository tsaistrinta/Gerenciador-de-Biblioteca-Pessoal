

# Gerenciador de Biblioteca Pessoal

Projeto em TypeScript, consolidando os conceitos das primeiras 6 aulas do curso: Git, Node.js, TypeScript, controle de fluxo, funcoes e arrays.

# Sobre o projeto

Aplicacao de console que permite gerenciar uma biblioteca pessoal de livros, com funcionalidades de:

- Cadastro e remocao de livros
- Busca por titulo e listagem por autor
- Controle de status de leitura (lido/pendente) com avaliacao de 1 a 5
- Estatisticas da colecao (total, percentuais, media, paginas lidas)
- Agrupamento de livros por decada de publicacao

# Tecnologias

- TypeScript 
- Node.js 
- Estrutura de dados: arrays paralelos sincronizados por indice

# Como executar

**Pre-requisitos: ter Node.js 18+ instalado.**

*Clone o repositorio:*

git clone https://github.com/tsaistrinta/Gerenciador-de-Biblioteca-Pessoal.git

*Instale as dependencias:*

npm install

*Execute em modo de desenvolvimento (com hot reload):*

npm run dev

*Ou compile e execute manualmente:*

npm run build
npm start


## Estrutura do projeto

biblioteca-pessoal/
├── src/
│   └── index.ts         
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md


## Conceitos exercitados

| Conceito          | Onde aparece                                       |
| ----------------- | -------------------------------------------------- |
| Git e GitHub      | Commits por etapa, versionamento                   |
| Node.js e npm     | package.json, scripts, dependencias                |
| TypeScript        | Tipagem explicita, strict mode, tsconfig           |
| Controle de fluxo | if/else, switch, validacoes                        |
| Funcoes           | Decomposicao em funcoes tipadas e reaproveitaveis  |
| Arrays            | forEach, filter, map, reduce, splice               |