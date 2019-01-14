import React, { Component } from 'react';
import './App.css';
import ScreensRoot from 'screens/Root';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route>
          <div className="App">
            <ScreensRoot />
          </div>
        </Route>
      </Router>
    );
  }
}

export default App;
