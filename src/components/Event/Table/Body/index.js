// @flow

import React from 'react';
import type { Moment } from 'moment';
import EventTableRow from '../Row';
import type { EventType } from '../../utils.js';

const getNextTimeEvent = (
  currentTime: Moment,
  events: EventType[]
): ?Moment => {
  const event = events.find(e => e.date.isSameOrAfter(currentTime, 'minute'));
  if (event) return event.date;
  return null;
};

const EventTableBody = ({
  currentTime,
  events,
}: {
  currentTime: Moment,
  events: EventType[]
}) => {
  const nextTimeEvent = getNextTimeEvent(currentTime, events);

  return (
    <tbody>
      {events.map((event, index) => (
        <EventTableRow
          key={index}
          event={event}
          isNextEvent={
            nextTimeEvent ? nextTimeEvent.isSame(event.date, 'minute') : false
          }
        />
      ))}
    </tbody>
  );
};

export default EventTableBody;
