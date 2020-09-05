import React, { Component } from 'react';
import './CSS/App.css';
import './CSS/index.css';
import SeoulMap from './App/SeoulMap.js';
import IknowButton from './App/IknowButton';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="map">
          <IknowButton />
          <SeoulMap />
        </div>
      </div>
    );
  }
};

export default App;