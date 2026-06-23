export const capitalize = (value = '') =>
  value ? value.charAt(0).toUpperCase() + value.slice(1) : '';

export const formatNumber = (id) => `#${String(id).padStart(3, '0')}`;

export const getTypeClass = (type = '') => `type-${type.toLowerCase()}`;

export const getPokemonIdFromUrl = (url = '') => {
  const match = url.match(/\/pokemon\/(\d+)\/?$/);
  return match ? Number(match[1]) : null;
};

export const normalizePokemonCard = (pokemon) => ({
  id: pokemon.id,
  name: pokemon.name,
  sprite:
    pokemon.sprites?.other?.['official-artwork']?.front_default ||
    pokemon.sprites?.front_default ||
    '',
  types: pokemon.types.map((item) => item.type.name),
});

export const normalizePokemonDetails = (pokemon, species) => ({
  id: pokemon.id,
  name: pokemon.name,
  sprite:
    pokemon.sprites?.other?.['official-artwork']?.front_default ||
    pokemon.sprites?.front_default ||
    '',
  types: pokemon.types.map((item) => item.type.name),
  height: pokemon.height,
  weight: pokemon.weight,
  abilities: pokemon.abilities.map((item) => item.ability.name),
  stats: pokemon.stats.map((item) => ({
    name: item.stat.name,
    value: item.base_stat,
  })),
  species: species?.genera?.find((entry) => entry.language.name === 'en')?.genus ||
    species?.name ||
    'Desconhecida',
  flavorText:
    species?.flavor_text_entries?.find((entry) => entry.language.name === 'en')
      ?.flavor_text?.replace(/\f|\n|\r/g, ' ') || '',
});
