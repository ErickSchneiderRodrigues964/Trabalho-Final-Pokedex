import { useEffect, useState } from 'react';
import { getPokemonIdFromUrl, normalizePokemonCard } from '../utils/pokemon';

const LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

export function usePokemonCollection() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(LIST_URL, { signal: controller.signal });
        if (!response.ok) throw new Error('Falha ao carregar a lista de Pokémon.');

        const data = await response.json();
        const details = await Promise.all(
          data.results.map(async (item) => {
            const id = getPokemonIdFromUrl(item.url);
            const detailResponse = await fetch(item.url, { signal: controller.signal });
            if (!detailResponse.ok) {
              throw new Error(`Falha ao carregar ${item.name}.`);
            }
            const detailData = await detailResponse.json();
            return normalizePokemonCard({ ...detailData, id: id ?? detailData.id });
          })
        );

        details.sort((a, b) => a.id - b.id);
        setPokemon(details);
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
  }, []);

  return { pokemon, loading, error };
}
