import React, { Component } from 'react';
import './App.css';
import * as d3 from 'd3';
// import SeoulMap from './SeoulMap.js';

class App extends Component {
  const temperatureData = [ 8, 5, 13, 9, 12 ]
  d3.select(this.refs.temperatures)
      .selectAll("h2")
      .data(temperatureData)
      .enter()
          .append("h2")
          .text("New Temperature")

  render(<div ref="temperatures"></div>)
}
export default App;