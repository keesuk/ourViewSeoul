import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './CSS/index.css';
// import App from './App.js';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme } from '@material-ui/core/styles';
import SeoulMap from './App/SeoulMap';
import Poster from './App/Poster';
import styled from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';

createMuiTheme({
  typography: {
  useNextVariants: true,
  fontFamily: '"Noto Sans KR"'
  }
});

const MapDiv = styled.div`

    width: 50vw;
    box-sizing: border-box;
    border-right: 2px solid black;

    @media all and (min-width:0px) and (max-width:1023px) {
      width: 100vw;
      border-right: 0px solid black;
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
`;
smoothscroll.polyfill()

ReactDOM.render(
  <BrowserRouter basename="/react">
    <Link to="/:station"><img src={require('../data/logo.svg')}/></Link>
    <Switch>
    <MapDiv>
        <Route exact path='/:station'><SeoulMap/></Route>
    </MapDiv>
    </Switch>
    <PosterDiv>
    </PosterDiv>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
