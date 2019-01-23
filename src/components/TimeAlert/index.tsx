import React from 'react';
import moment from 'moment';
import UIRadio from 'components/UI/Radio';
import UIDingSound, { STATUS } from 'components/UI/DingSound';
import { shouldRingBellOneHour, shouldRingBellFourHours } from './utils';

interface IStates {
  timeOption: string;
  currentTime: moment.Moment;
  finishRingBell: boolean;
  ringBell: boolean;
}

const OPTION_VALUES = {
  NONE: 'none',
  ONE_HOUR: 'one',
  FOUR_HOUR: 'four'
};

const OPTIONS = [
  { value: OPTION_VALUES.NONE, name: 'None' },
  { value: OPTION_VALUES.ONE_HOUR, name: 'Every 1 hour' },
  { value: OPTION_VALUES.FOUR_HOUR, name: 'Every 4 hours' }
];

class TimeAlert extends React.Component<{}, IStates> {
  timer: number;

  state = {
    currentTime: moment(),
    finishRingBell: false,
    ringBell: false,
    timeOption: OPTION_VALUES.ONE_HOUR
  };

  componentDidMount() {
    this.timer = window.setInterval(this.tick, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidUpdate({  }: {}, prevState: IStates) {
    if (!prevState.currentTime.isSame(this.state.currentTime)) {
      const isOnTime =
        (this.state.timeOption === OPTION_VALUES.ONE_HOUR &&
          shouldRingBellOneHour(this.state.currentTime)) ||
        (this.state.timeOption === OPTION_VALUES.FOUR_HOUR &&
          shouldRingBellFourHours(this.state.currentTime));
      if (isOnTime && !this.state.finishRingBell) {
        this.setState({ ringBell: true, finishRingBell: true });
      } else {
        this.setState({ ringBell: false });
      }

      // Reset ringbell whenever go to new hour
      if (
        this.state.timeOption !== OPTION_VALUES.NONE &&
        this.state.currentTime.minute() === 0
      ) {
        this.setState({ finishRingBell: false });
      }
    }
  }

  handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      timeOption: e.currentTarget.value,
      finishRingBell: false
    });
  };

  tick = () => {
    this.setState({ currentTime: moment() });
  };

  render() {
    const { timeOption } = this.state;
    return (
      <div className="card mb-4">
        <div className="card-header">
          Time Alert
          <br />
        </div>
        <div className="card-body">
          <UIRadio
            options={OPTIONS}
            selectedOption={timeOption}
            handleOptionChange={this.handleOptionChange}
          />
        </div>
        {this.state.ringBell && <UIDingSound status={STATUS.PLAY} />}
      </div>
    );
  }
}

export default TimeAlert;
