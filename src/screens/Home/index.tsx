import React from 'react';
import PositionCalculator from 'components/PositionCalculator';
import LiveHoursMonitor from 'components/LiveHoursMonitor';
import Event from 'components/Event';
import TimeAlert from 'components/TimeAlert';

const ScreensHome = () => {
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
      <TimeAlert />
    </div>
  );
};

export default ScreensHome;
