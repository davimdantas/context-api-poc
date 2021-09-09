import { useState, useEffect } from 'react';
import request from 'utils/request';

export default function usePokemon(name) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemon = await request(
        `https://pokeapi.co/api/v2/pokemon/${name}`,
      );

      setData({
        name: pokemon.name,
        img: pokemon.sprites.other['official-artwork'].front_default,
        abilities: pokemon.abilities,
        sprites: pokemon.sprites,
      });
    };

    loadPokemon();
  }, [name]);

  return data;
}
