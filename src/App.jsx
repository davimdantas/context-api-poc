import React, { useState } from 'react';
import './App.css';

// import Counter from './components/Counter/index.jsx';
import Counter from 'components/Counter';
import SearchBox from 'components/SearchBox';

function App() {
  return (
    <>
      <SearchBox />
      <Counter />
    </>
  );
}

export default App;
