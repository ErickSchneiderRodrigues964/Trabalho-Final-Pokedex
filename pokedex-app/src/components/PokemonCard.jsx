import { capitalize, formatNumber, getTypeClass } from '../utils/pokemon';

export default function PokemonCard({ pokemon, onClick }) {
  const primaryType = pokemon.types[0];

  return (
    <button
      type="button"
      className={`pokemon-card ${getTypeClass(primaryType)}`}
      onClick={() => onClick(pokemon)}
      aria-label={`Ver detalhes de ${capitalize(pokemon.name)}`}
    >
      <span className="pokemon-card__number">{formatNumber(pokemon.id)}</span>
      <div className="pokemon-card__image-wrap">
        <img className="pokemon-card__image" src={pokemon.sprite} alt={pokemon.name} loading="lazy" />
      </div>
      <div className="pokemon-card__content">
        <h2 className="pokemon-card__name">{capitalize(pokemon.name)}</h2>
        <div className="pokemon-card__types" aria-label="Tipos">
          {pokemon.types.map((type) => (
            <span key={type} className="type-badge">
              {capitalize(type)}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
