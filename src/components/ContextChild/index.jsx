import React from 'react';
import PokeEvent from 'components/PokeEvent';

export default function ContextChild() {
  return (
    <>
      <h2>The Next Event: </h2>
      <PokeEvent />
    </>
  );
}
