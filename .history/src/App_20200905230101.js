import React, { Component } from 'react';
import './CSS/App.css';
import './CSS/index.css';
import SeoulMap from './App/SeoulMap.js';
import IknowButton from './App/IknowButton';
import styled from 'styled-components';

const MapDiv = styled.div`

  width: 50vw;
  box-sizing: border-box;
  border-right: 1.5px solid black;

  @media all and (min-width:0px) and (max-width:1023px) {
    width: 100vw;
    box-sizing: none;
    border-right: none;
  }
`;

class App extends Component {

  render() {
    return (
      <>
        <MapDiv>
          <IknowButton />
          <SeoulMap />
        </MapDiv>
      </>
    );
  }
};

export default App;