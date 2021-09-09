import YogaAvatar from 'components/YogaAvatar';
import { FavoriteFilled } from '@gympass/yoga-icons';
import usePokemon from 'utils/usePokemon';
import { useContext } from 'react';
import PokeContext from '../../poke-context';

export default function PokemonCard() {
  const { pokeName } = useContext(PokeContext);
  const data = usePokemon(pokeName);
  console.log('data :', data);

  if (!data) return null;

  return (
    <div className="card">
      <p>{data.name}</p>
      <YogaAvatar icon={FavoriteFilled} fill="success" />
      <img height="250px" src={data.img} alt="Pokemon Drawing" />
      <YogaAvatar src={data.sprites.back_default} alt="Pokemon Drawing" />
    </div>
  );
}
