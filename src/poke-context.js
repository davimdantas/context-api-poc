import React from 'react';
import ditto from './ditto';
// set the defaults
const PokeContext = React.createContext({
  pokeName: 'ditto',
  setPokeName: () => {},
});

PokeContext.displayName = 'PokeContext';

export default PokeContext;
