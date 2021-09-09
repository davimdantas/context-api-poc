import PokemonCard from 'components/PokemonCard';
import { useContext } from 'react';
import usePokemonList from 'utils/usePokemonList';
import { AutoComplete } from '@gympass/yoga';
import PokeContext from '../../poke-context';

export default function SearchBox() {
  const { pokeName, setPokeName } = useContext(PokeContext);
  const data = usePokemonList();

  return (
    <>
      <AutoComplete
        value={pokeName}
        onSelect={(selected) => {
          setPokeName(selected);
        }}
        onClean={() => {
          setPokeName('');
        }}
        options={data}
      />
      {pokeName && <PokemonCard />}
    </>
  );
}
