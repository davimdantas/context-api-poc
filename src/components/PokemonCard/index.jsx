import YogaAvatar from 'components/YogaAvatar';
import { FavoriteFilled } from '@gympass/yoga-icons';
import usePokemon from 'utils/usePokemon';
import React from 'react';

export default function PokemonCard({ name }) {
  const data = usePokemon(name);

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
