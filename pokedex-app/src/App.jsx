import { useMemo, useState } from 'react';
import { usePokemonCollection } from './hooks/usePokemonCollection';
import { usePokemonDetails } from './hooks/usePokemonDetails';
import PokemonCard from './components/PokemonCard';
import PokemonDetail from './components/PokemonDetail';
import LoadingState from './components/LoadingState';
import ErrorState from './components/ErrorState';
import { capitalize } from './utils/pokemon';

export default function App() {
  const { pokemon, loading, error } = usePokemonCollection();
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const detail = usePokemonDetails(selectedPokemon?.id);

  const currentPokemonName = useMemo(
    () => capitalize(selectedPokemon?.name || ''),
    [selectedPokemon]
  );

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">PokeAPI + React</p>
          <h1>Pokédex</h1>
          <p className="subtitle">
            Lista dos 20 primeiros Pokémon com acesso rápido à página de detalhes.
          </p>
        </div>
      </header>

      <main className="app-main">
        {!selectedPokemon ? (
          <section aria-labelledby="list-title">
            <div className="section-head">
              <h2 id="list-title">Listagem inicial</h2>
              <span>{pokemon.length} Pokémon</span>
            </div>

            {loading ? <LoadingState label="Carregando Pokémon..." /> : null}
            {error ? <ErrorState message={error} /> : null}

            {!loading && !error ? (
              <div className="pokemon-grid">
                {pokemon.map((item) => (
                  <PokemonCard key={item.id} pokemon={item} onClick={setSelectedPokemon} />
                ))}
              </div>
            ) : null}
          </section>
        ) : (
          <section aria-labelledby="detail-title">
            {detail.loading ? <LoadingState label={`Carregando detalhes de ${currentPokemonName}...`} /> : null}
            {detail.error ? <ErrorState message={detail.error} /> : null}
            {!detail.loading && !detail.error && detail.pokemon ? (
              <PokemonDetail pokemon={detail.pokemon} onBack={() => setSelectedPokemon(null)} />
            ) : null}
          </section>
        )}
      </main>
    </div>
  );
}
