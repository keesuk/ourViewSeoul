import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SeoulMap from './App/SeoulMap';
import styled from 'styled-components';

const MapDiv = styled.div`

  width: 50vw;
  box-sizing: border-box;
  border-right: 2px solid black;
  @media all and (min-width:0px) and (max-width:1023px) {
    width: 100vw;
    border-right: 0px solid black;
  }
`;

const Poster = styled.div`

  width: 40vw;
  height: 60vw;
  box-sizing: border-box;
  background-color: white;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 5vh;
  margin-bottom: 5vh;

  @media all and (min-width:0px) and (max-width:1023px) {
    display: none;
  }
`

const Logo = styled.img`

  display: block;
  margin: auto;
  padding-top: 15vw;
  width: 55%;
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
          <Poster/>
        </PosterDiv>
        </BrowserRouter>
      </>
    );
  }
};

export default App;