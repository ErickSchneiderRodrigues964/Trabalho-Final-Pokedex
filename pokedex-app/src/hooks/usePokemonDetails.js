import { useEffect, useState } from 'react';
import { normalizePokemonDetails } from '../utils/pokemon';

export function usePokemonDetails(nameOrId) {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!nameOrId) return;

    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        setError('');

        const [pokemonResponse, speciesResponse] = await Promise.all([
          fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`, { signal: controller.signal }),
          fetch(`https://pokeapi.co/api/v2/pokemon-species/${nameOrId}`, { signal: controller.signal }),
        ]);

        if (!pokemonResponse.ok) throw new Error('Não foi possível carregar os detalhes do Pokémon.');
        if (!speciesResponse.ok) throw new Error('Não foi possível carregar os dados da espécie.');

        const [pokemonData, speciesData] = await Promise.all([
          pokemonResponse.json(),
          speciesResponse.json(),
        ]);

        setPokemon(normalizePokemonDetails(pokemonData, speciesData));
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Ocorreu um erro inesperado.');
        }
      } finally {
        setLoading(false);
      }
    };

    load();

    return () => controller.abort();
  }, [nameOrId]);

  return { pokemon, loading, error };
}
