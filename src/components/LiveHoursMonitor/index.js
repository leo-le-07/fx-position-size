// @flow

import React from 'react';
import moment from 'moment';
import type Moment from 'moment';
import Row from './Row';
import { initializeHoursTimeLine, getWorkingHours } from './utils.js';

type State = {
  hoursTimeLine: number[],
  areas: {
    [string]: {
      workingHours: number[],
      name: string
    }
  },
  currentTime: Moment
};

class LiveHoursMonitor extends React.Component<{}, State> {
  timer: IntervalID;

  state = {
    hoursTimeLine: initializeHoursTimeLine(),
    areas: {
      london: {
        workingHours: getWorkingHours('london'),
        name: 'London',
      },
      newyork: {
        workingHours: getWorkingHours('newyork'),
        name: 'New York',
      },
      sydney: {
        workingHours: getWorkingHours('sydney'),
        name: 'Sydney',
      },
      tokyo: {
        workingHours: getWorkingHours('tokyo'),
        name: 'Tokyo',
      },
    },
    currentTime: moment(),
  };

  componentDidMount() {
    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick = () => {
    this.setState({ currentTime: moment() });
  };

  render() {
    const { hoursTimeLine, areas, currentTime } = this.state;

    return (
      <div className="card mb-4">
        <div className="card-header">
          Live Hours Monitor
          <br />
          <h2 className="text-danger">{currentTime.format('HH:mm:ss')}</h2>
        </div>
        <div className="card-body table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                {hoursTimeLine.map((h, index) => (
                  <th
                    key={index}
                    scope="col"
                    className={currentTime.hour() === h ? 'table-primary' : ''}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(areas).map((key, index) => (
                <Row
                  key={index}
                  name={areas[key].name}
                  workingHours={areas[key].workingHours}
                  hoursLine={hoursTimeLine}
                  currentTime={currentTime}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LiveHoursMonitor;
