import { useState, useContext } from 'react';
import { EventCard, Input } from '@gympass/yoga';
import PokeContext from '../../poke-context';

export default function PokeEvent() {
  const [time, setTime] = useState('19 am');
  const { thisWillnotBeupdated } = useContext(PokeContext);

  return (
    <>
      <Input
        label="Next Event time"
        helper="Helper text"
        maxLength={20}
        value={time}
        onChange={(e) => setTime(e.target.value)}
        onClean={(cleaned) => setTime(cleaned)}
      />
      <EventCard
        style={{ width: 250 }}
        event={{
          name: thisWillnotBeupdated,
          place: 'Gympass - Live the Mission',
          time,
        }}
        date={{
          day: '19',
          dayOfWeek: 'thu',
          month: 'dez',
        }}
      />
    </>
  );
}
