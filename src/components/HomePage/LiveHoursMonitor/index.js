import React from 'react';
import moment from 'moment';
import type Moment from 'moment';
import Row from './Row';

class LiveHoursMonitor extends React.Component {
  state = {
    hours: [
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      1,
      2,
      3,
      4,
    ],
    areas: {
      london: {
        workingHours: [15, 16, 17, 18, 19, 20, 21, 22, 23],
        name: 'London',
      },
      newyork: {
        workingHours: [20, 21, 22, 23, 24, 1, 2, 3, 4],
        name: 'New York',
      },
      sydney: {
        workingHours: [5, 6, 7, 8, 9, 10, 11, 12, 13],
        name: 'Sydney',
      },
      tokyo: {
        workingHours: [7, 8, 9, 10, 11, 12, 13, 14, 15],
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
    const { hours, areas, currentTime } = this.state;

    return (
      <div className="card">
        <div className="card-header">
          Live Hours Monitor
          <br />
          <h2 className="text-danger">{currentTime.format('HH:mm:ss')}</h2>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                {hours.map((h, index) => (
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
                  hoursLine={hours}
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
