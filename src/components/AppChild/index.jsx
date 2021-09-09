import React from 'react';
import PokeEvent from 'components/PokeEvent';

export default function AppChild() {
  return (
    <>
      <h2>The Next Event: </h2>
      <PokeEvent />
    </>
  );
}
