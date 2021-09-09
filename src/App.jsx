import React, { useState } from 'react';
import './App.css';

// import Counter from './components/Counter/index.jsx';
import Counter from 'components/Counter';
import ContextChild from 'components/ContextChild';
import AppChild from 'components/AppChild';
import SearchBox from 'components/SearchBox';
import PokeProvider from 'components/PokeProvider';

function App() {
  return (
    <div>
      <PokeProvider>
        <SearchBox />
        <Counter />
        <ContextChild />
      </PokeProvider>
      <AppChild />
    </div>
  );
}

export default App;
