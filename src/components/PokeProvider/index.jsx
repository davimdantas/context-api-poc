import { createContext, useState } from 'react';

import PokeContext from '../../poke-context';

export default function PokeProvider({ children }) {
  const [pokeName, setPokeName] = useState('ditto');
  const value = {
    thisWillnotBeupdated: 'Context Child thisWillnotBeupdated ',
    pokeName,
    setPokeName,
  };

  return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>;
}
