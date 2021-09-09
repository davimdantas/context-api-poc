import React from 'react';
import ditto from './ditto';
// set the defaults
const PokeContext = React.createContext({
  pokemonName: 'ditto',
  pokemon: ditto,
  setPokemon: () => {},
});

export default PokeContext;
