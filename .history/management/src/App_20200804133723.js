import React, { Component } from 'react';
import './App.css';
import SeoulMap from './SeoulMap.js';

class App extends Component {
  render(){ 
    return (
      <div className="App"> 
        <h2 >저는 여기 조금 알아요</h2>
        <div className = "map" ><SeoulMap /></div>
      </div>
    );
  }
};

export default App;