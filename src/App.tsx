import React from 'react';
import './App.css';
import ScreensRoot from '@/screens/Root';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Route>
      <div className="App">
        <ScreensRoot />
      </div>
    </Route>
  </Router>
);

export default App;
