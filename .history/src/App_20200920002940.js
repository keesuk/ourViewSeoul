import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SeoulMap from './App/SeoulMap';
import styled from 'styled-components';

const MapDiv = styled.div`

  width: 50vw;

  @media all and (min-width:0px) and (max-width:1023px) {
    width: 100vw;
  }
`;

const PosterDiv = styled.div`

  position: fixed;
  overflow: auto;
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

  width: 40vw;
  height: 40vw;
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
  padding-top: 100px;
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
          <Poster>
            <Logo src={require('./data/logo.svg')}/>
          </Poster>
        </PosterDiv>
        </BrowserRouter>
      </>
    );
  }
};

export default App;