import PokemonCard from 'components/PokemonCard';
import { useState } from 'react';
import usePokemonList from 'utils/usePokemonList';

import { AutoComplete } from '@gympass/yoga';

export default function SearchBox() {
  const [name, setName] = useState('');
  const data = usePokemonList();

  return (
    <>
      <AutoComplete
        value={name}
        onSelect={(selected) => {
          console.log('selected :', selected);
          setName(selected);
        }}
        onClean={() => {
          setName('');
        }}
        options={data}
      />
      {name && <PokemonCard name={name} />}
    </>
  );
}
