// @flow

import React from 'react';
import type { EventType } from '../utils.js';

type RowType = {
  event: EventType,
  isNextEvent: boolean
};

const getImpactColor = (impact: string): string => {
  if (impact === 'High') return 'badge badge-pill badge-danger';
  if (impact === 'Medium') return 'badge badge-pill badge-warning';
  return 'badge badge-pill badge-light';
};

const Row = ({ event, isNextEvent }: RowType) => {
  return (
    <tr className={isNextEvent ? 'table-success' : ''}>
      <td>{event.date.format('HH:mm')}</td>
      <td>
        {event.country}
        <span className={getImpactColor(event.impact)}>{event.impact}</span>
      </td>
      <td>{event.title}</td>
      <td>{event.forecast}</td>
      <td>{event.previous}</td>
    </tr>
  );
};

export default Row;
