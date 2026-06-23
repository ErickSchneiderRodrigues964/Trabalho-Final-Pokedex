import { capitalize, formatNumber } from '../utils/pokemon';
import StatBar from './StatBar';

export default function PokemonDetail({ pokemon, onBack }) {
  return (
    <article className="detail">
      <button type="button" className="back-button" onClick={onBack}>
        ← Voltar para a lista
      </button>

      <div className="detail__hero">
        <div className="detail__image-panel">
          <img className="detail__image" src={pokemon.sprite} alt={pokemon.name} />
        </div>

        <div className="detail__info">
          <div className="detail__title-row">
            <h1 id="detail-title">{capitalize(pokemon.name)}</h1>
            <span>{formatNumber(pokemon.id)}</span>
          </div>

          <div className="detail__types" aria-label="Tipos">
            {pokemon.types.map((type) => (
              <span key={type} className="type-badge">
                {capitalize(type)}
              </span>
            ))}
          </div>

          <p className="detail__species">
            <strong>Espécie:</strong> {pokemon.species}
          </p>
          {pokemon.flavorText ? <p className="detail__flavor">{pokemon.flavorText}</p> : null}

          <dl className="detail__facts">
            <div>
              <dt>Altura</dt>
              <dd>{(pokemon.height / 10).toFixed(1)} m</dd>
            </div>
            <div>
              <dt>Peso</dt>
              <dd>{(pokemon.weight / 10).toFixed(1)} kg</dd>
            </div>
            <div>
              <dt>Habilidades</dt>
              <dd>{pokemon.abilities.map(capitalize).join(', ')}</dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="detail__stats" aria-labelledby="stats-title">
        <h2 id="stats-title">Stats base</h2>
        <div className="stats-grid">
          {pokemon.stats.map((stat) => (
            <StatBar key={stat.name} statName={stat.name} value={stat.value} />
          ))}
        </div>
      </section>
    </article>
  );
}
