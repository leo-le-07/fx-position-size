// @flow

import React from 'react';
import moment from 'moment';
import type Moment from 'moment';
import Input from 'components/UI/Input';
import DingSound, { STATUS } from 'components/UI/DingSound';
import { shouldRingBellOneHour, shouldRingBellFourHours } from './utils.js';

type State = {
  isOneHourChecked: boolean,
  isFourHoursChecked: boolean,
  currentTime: Moment,
  finishRingBell: boolean,
  ringBell: boolean
};

class TimeAlert extends React.Component<{}, State> {
  timer: IntervalID;

  state = {
    isOneHourChecked: false,
    isFourHoursChecked: false,
    currentTime: moment(),
    finishRingBell: true,
    ringBell: false,
  };

  componentDidMount() {
    this.timer = setInterval(this.tick, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidUpdate({  }: {}, prevState: State) {
    if (!prevState.currentTime.isSame(this.state.currentTime)) {
      const isOnTime =
        (this.state.isOneHourChecked &&
          shouldRingBellOneHour(this.state.currentTime)) ||
        (this.state.isFourHoursChecked &&
          shouldRingBellFourHours(this.state.currentTime));
      if (isOnTime && !this.state.finishRingBell) {
        this.setState({ ringBell: true, finishRingBell: true });
      } else {
        this.setState({ ringBell: false });
      }

      // Reset ringbell whenever go to new hour
      if (
        (this.state.isOneHourChecked || this.state.isFourHoursChecked) &&
        this.state.currentTime.minute() === 0
      ) {
        this.setState({ finishRingBell: false });
      }
    }
  }

  handleOnCheckedFor = (propertyName: string) => () => {
    this.setState(prevState => ({
      [propertyName]: !prevState[propertyName],
      finishRingBell: false,
    }));
  };

  tick = () => {
    this.setState({ currentTime: moment() });
  };

  render() {
    const { isOneHourChecked, isFourHoursChecked } = this.state;
    return (
      <div className="card mb-4">
        <div className="card-header">
          Time Alert
          <br />
        </div>
        <div className="card-body">
          <div className="form-check">
            <Input
              type="checkbox"
              id="one-hour"
              value={isOneHourChecked}
              onChange={this.handleOnCheckedFor('isOneHourChecked')}
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="one-hour">
              Every 1 hour
            </label>
          </div>
          <div className="form-check">
            <Input
              type="checkbox"
              id="four-hour"
              value={isFourHoursChecked}
              onChange={this.handleOnCheckedFor('isFourHoursChecked')}
              className="form-check-input"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Every 4 hours
            </label>
          </div>
        </div>
        {this.state.ringBell && <DingSound status={STATUS.PLAY} />}
      </div>
    );
  }
}

export default TimeAlert;
