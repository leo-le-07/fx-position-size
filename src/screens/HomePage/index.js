// @flow

import React from 'react';
import PositionCalculator from 'components/PositionCalculator';
import LiveHoursMonitor from 'components/LiveHoursMonitor';
import Event from 'components/Event';

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <PositionCalculator />
        </div>
        <div className="col-md-6">
          <LiveHoursMonitor />
        </div>
      </div>
      <Event />
    </div>
  );
};

export default HomePage;
