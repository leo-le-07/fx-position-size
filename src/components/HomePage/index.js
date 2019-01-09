// @flow

import React from 'react';
import PositionCalculator from './PositionCalculator';
import LiveHoursMonitor from './LiveHoursMonitor';
import Event from './Event';

const HomePage = () => {
  return (
    <div className="container">
      <PositionCalculator />
      <LiveHoursMonitor />
      <Event />
    </div>
  );
};

export default HomePage;
