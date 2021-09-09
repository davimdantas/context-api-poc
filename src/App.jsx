import React, { useState } from 'react';
import './App.css';

// import Counter from './components/Counter/index.jsx';
import Counter from 'components/Counter';
import ContextChild from 'components/ContextChild';
import AppChild from 'components/AppChild';
import SearchBox from 'components/SearchBox';
import PokeContext from './poke-context';

function App() {
  const [pokeName, setPokeName] = useState('ditto');
  const value = { pokeName, setPokeName };

  return (
    <div>
      <PokeContext.Provider value={value}>
        <SearchBox />
        <Counter />
        <ContextChild />
      </PokeContext.Provider>
      <AppChild />
    </div>
  );
}

export default App;
