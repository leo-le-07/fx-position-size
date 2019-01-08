// @flow

import React from 'react';
import PositionCalculator from './PositionCalculator';
import LiveHoursMonitor from './LiveHoursMonitor';

const HomePage = () => {
  return (
    <div className="container">
      <PositionCalculator />
      <LiveHoursMonitor />
    </div>
  );
};

export default HomePage;
