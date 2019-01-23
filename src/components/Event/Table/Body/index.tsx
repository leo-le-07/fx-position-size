import React from 'react';
import moment from 'moment';
import EventTableRow from '../Row';
import { IEvent } from '../../utils';

const getNextTimeEvent = (
  currentTime: moment.Moment,
  events: IEvent[]
): moment.Moment | null => {
  const event = events.find(e => e.date.isSameOrAfter(currentTime, 'minute'));
  if (event) return event.date;
  return null;
};

const EventTableBody = ({
  currentTime,
  events
}: {
  currentTime: moment.Moment;
  events: IEvent[];
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
