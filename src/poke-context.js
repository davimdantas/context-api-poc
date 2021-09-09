import React from 'react';
import ditto from './ditto';
// set the defaults
const PokeContext = React.createContext({
  pokeName: 'ditto',
  thisWillnotBeupdated: 'thisWillnotBeupdated',
  setPokeName: () => {},
});

PokeContext.displayName = 'PokeContext';

export default PokeContext;
