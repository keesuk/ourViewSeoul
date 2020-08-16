import React, { Component } from 'react';
import './App.css';
import './index.css';
import SeoulMap from './SeoulMap.js';
import IknowButton from './IknowButton';
import Window from './Window';

import  DragScroll from 'react-dragscroll';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        show: false,
      }
  }

  windowClose = () => {
    this.setState({ show: false });
  }; 

  render() {
    return (
      <div className="App">
        <IknowButton />
        <div className="map">
          {/* <div>
            <button onClick={() => this.setState({ show: true })} className="station-btn">station</button>
            <Window show={this.state.show} windowClose={this.windowClose}/>
          </div> */}
          <DragScroll height={200} width={300}>
          <div>test1</div>
          <div>test2</div>
          <div>test3</div>
          <div>test4</div>
          <div>test5</div>
          <div>test6</div>
          <div>test7</div>
          <div>test8</div>
          <div>test9</div>
          <div>test10</div>
          <div>test11</div>
          <div>test12</div>
          <div>test13</div>
          <div>test14</div>
          <div>test15</div>
          <div>test16</div>
          <div>test17</div>
          <div>test18</div>
          <div>test19</div>
          <div>test20</div>
</DragScroll>
          <SeoulMap />
        </div>
      </div>
    );
  }
};

export default App;