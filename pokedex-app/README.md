# Pokédex React + PokeAPI

Projeto em React usando hooks, Fetch API, CSS separado e componentes organizados.

## Como rodar

```bash
npm install
npm run dev
```

## O que o projeto faz

- Lista os 20 primeiros Pokémon da PokeAPI
- Exibe card com sprite, nome, número e tipos
- Usa cor de destaque baseada no tipo primário
- Abre uma tela de detalhes ao clicar no card
- Mostra sprite ampliado, nome, número, tipos, espécie, altura, peso, habilidades e stats com barras visuais
- Possui estados de loading e error

## Estrutura

- `src/components` → componentes de interface
- `src/hooks` → lógica de busca na API
- `src/utils` → funções auxiliares
- `src/styles.css` → estilos globais
