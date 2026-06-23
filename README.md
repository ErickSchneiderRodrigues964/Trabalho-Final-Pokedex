# Pokédex 🔴

Aplicação React que consome a [PokeAPI](https://pokeapi.co/) para listar e exibir detalhes dos Pokémon, com visual baseado no tipo primário de cada um.

## Tecnologias

- React (com hooks)
- Fetch API
- CSS modular por componente

## Pré-requisitos

- Node.js instalado

## Como rodar

```bash
# Entre na pasta do projeto
cd pokedex-app

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## Funcionalidades

- Lista os 20 primeiros Pokémon da PokeAPI
- Exibe card com sprite, nome, número e tipos
- Cor de destaque dinâmica baseada no tipo primário
- Tela de detalhes ao clicar no card, com:
  - Sprite ampliado
  - Nome, número e tipos
  - Espécie, altura e peso
  - Habilidades
  - Stats com barras visuais
- Estados de carregamento e erro tratados

## Estrutura do projeto

```
src/
├── components/   → componentes de interface
├── hooks/        → lógica de busca na API
├── utils/        → funções auxiliares
└── styles.css    → estilos globais
```
