import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SeoulMap from './App/SeoulMap';
import Poster from './App/Poster';
import styled from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';

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


class App extends Component {

    render() {
        smoothscroll.polyfill()

        return (
            <>
                <BrowserRouter basename="/react">
                <Switch>
                <MapDiv>
                    <Route exact path='/:station' component={SeoulMap}/>
                </MapDiv>
                </Switch>
                    <PosterDiv>
                    </PosterDiv>
                </BrowserRouter>
            </>
        );
    }
};

export default App;