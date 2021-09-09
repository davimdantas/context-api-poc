import React, { useState } from 'react';
import { EventCard, Input } from '@gympass/yoga';

export default function PokeEvent() {
  const [time, setTime] = useState('19 am');

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
          name: 'Yoga Class',
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
