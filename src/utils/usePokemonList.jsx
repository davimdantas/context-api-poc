import { useState, useEffect } from 'react';
import request from 'utils/request';

export default function usePokemonList() {
  const [data, setData] = useState(['']);

  useEffect(() => {
    const loadPokemonList = async () => {
      const pokemons = await request(
        `https://pokeapi.co/api/v2/pokemon/?limit=400`,
      );
      setData(pokemons.results.map((pokemon) => pokemon.name));
    };

    loadPokemonList();
  }, []);

  return data;
}
