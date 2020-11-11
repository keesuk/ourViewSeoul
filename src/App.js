import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SeoulMap from './App/SeoulMap';
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
                <BrowserRouter>
                <MapDiv>
                    <Route path='/:station' component={SeoulMap}></Route>
                </MapDiv>
                    <PosterDiv>
                    </PosterDiv>
                </BrowserRouter>
            </>
        );
    }
};

export default App;