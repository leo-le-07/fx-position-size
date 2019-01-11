// @flow

import React from 'react';
import moment from 'moment';
import type Moment from 'moment';
import EventTable from './Table';
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
          <EventTable currentTime={currentTime} events={events} />
        </div>
      </div>
    );
  }
}

export default Event;
