import React, { Component } from 'react';
import './App.css';
import './index.css';
import SeoulMap from './SeoulMap.js';

class App extends Component {
  render(){ 
    return (
      <div className ="App"> 
        <div className ="map"><SeoulMap /></div>
      </div>
    );
  }
};

export default App;