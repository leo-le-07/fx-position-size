// @flow

import React from 'react';
import moment from 'moment';
import type Moment from 'moment';
import TableBody from './TableBody';
import { getTodayEvents } from './utils.js';
import type { EventType } from './utils.js';

type State = {
  events: EventType[],
  currentTime: Moment
};

class Event extends React.Component<{}, State> {
  timer: IntervalID;

  state = {
    events: [],
    currentTime: moment(),
  };

  async componentDidMount() {
    this.timer = setInterval(this.tick, 50);
    const events = await getTodayEvents();
    this.setState({
      events,
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({ currentTime: moment() });
  };

  render() {
    const { events, currentTime } = this.state;

    return (
      <div className="card mb-4">
        <div className="card-header">
          Events{' '}
          <span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.forexfactory.com/"
            >
              forexfactory
            </a>
          </span>
        </div>
        <div className="card-body">
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
            <TableBody currentTime={currentTime} events={events} />
          </table>
        </div>
      </div>
    );
  }
}

export default Event;
