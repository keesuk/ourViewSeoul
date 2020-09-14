import React, { Component } from 'react';
import SeoulMap from './App/SeoulMap';
import styled from 'styled-components';
import {BrowserRouter, Route} from 'react-router-dom'

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
        <BrowserRouter>
        <MapDiv>
          <Route path='/' path='/:id' component={SeoulMap}></Route>
        </MapDiv>
        </BrowserRouter>
      </>
    );
  }
};

export default App;