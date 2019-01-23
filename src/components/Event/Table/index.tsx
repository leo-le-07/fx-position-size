// flow
import React from 'react';
import moment from 'moment';
import EventTableBody from './Body';
import { IEvent } from '../utils';

const EventTable = ({
  currentTime,
  events
}: {
  currentTime: moment.Moment;
  events: IEvent[];
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
