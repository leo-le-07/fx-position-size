import React, { Component } from 'react';
import './App.css';
import PositionCalculator from './components/PositionCalculator';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <PositionCalculator />
      </div>
    );
  }
}

export default App;
