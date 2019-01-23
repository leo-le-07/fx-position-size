import React from 'react';
import moment from 'moment';
import EventTable from './Table';
import { IEvent, getTodayEvents } from './utils';

interface IStates {
  events: IEvent[];
  currentTime: moment.Moment;
}

class Event extends React.Component<{}, IStates> {
  timer: number;

  state = {
    events: [],
    currentTime: moment()
  };

  async componentDidMount() {
    this.timer = window.setInterval(this.tick, 50);
    const events = await getTodayEvents();
    this.setState({
      events
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
