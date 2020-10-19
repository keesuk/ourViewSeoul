import React, { Component } from 'react';
import SeoulMap from './App/SeoulMap';
import styled from 'styled-components';
import {BrowserRouter, Route} from 'react-router-dom'

const MapDiv = styled.div`

  width: 50vw;

  @media all and (min-width:0px) and (max-width:1023px) {
    width: 100vw;
  }
`;

const PosterDiv = styled.div`

  position: absolute;
  width: 50vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: black;
  right: 0px;
  top: 0px;

  @media all and (min-width:0px) and (max-width:1023px) {
    display: none;
  }
`

const Poster = styled.div`

  width: 80vw;
  height: 90vh;
  box-sizing: border-box;
  background-color: white;

  @media all and (min-width:0px) and (max-width:1023px) {
    display: none;
  }
`

class App extends Component {

  render() {
    return (
      <>
        <BrowserRouter>
        <MapDiv>
          <Route path='/:station' component={SeoulMap}></Route>
        </MapDiv>
        <PosterDiv>
          <Poster>

          </Poster>
        </PosterDiv>
        </BrowserRouter>
      </>
    );
  }
};

export default App;