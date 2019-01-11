// flow
import React from 'react';
import moment from 'moment';
import EventTableBody from './Body';
import type { EventType } from '../utils.js';

const EventTable = ({
  currentTime,
  events,
}: {
  currentTime: Moment,
  events: EventType[]
}) => (
  <table className="table">
    <thead>
      <tr>
        <th scope="col">{moment().format('DD MMM')}</th>
        <th scope="col" />
        <th scope="col">Title</th>
        <th scope="col">Forecast</th>
        <th scope="col">Previous</th>
      </tr>
    </thead>
    <EventTableBody currentTime={currentTime} events={events} />
  </table>
);

export default EventTable;
