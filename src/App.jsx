import React, { useState } from 'react';
import './App.css';

// import Counter from './components/Counter/index.jsx';
import Counter from 'components/Counter';
import SearchBox from 'components/SearchBox';
import PokeContext from './poke-context';

function App() {
  return (
    <PokeContext.Provider>
      <SearchBox />
      <Counter />
    </PokeContext.Provider>
  );
}

export default App;
