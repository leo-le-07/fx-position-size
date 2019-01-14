// @flow

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ScreensHome from 'screens/Home';
import ScreensStrategy from 'screens/Strategy';
import Navigation from 'components/Navigation';
import routes from 'screens/pathUtils.js';

const ScreensRoot = () => (
  <Fragment>
    <Route path={routes.ROOT} component={Navigation} />
    <Switch>
      <Route exact path={routes.ROOT} component={ScreensHome} />
      <Route path={routes.STRATEGY} component={ScreensStrategy} />
    </Switch>
  </Fragment>
);

export default ScreensRoot;
