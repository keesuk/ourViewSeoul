import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import SeoulMap from './App/SeoulMap';
import styled from 'styled-components';
import Poster from './App/Poster';

const MapDiv = styled.div`

    width: 50vw;
    box-sizing: border-box;
    border-right: 2px solid black;
    @media all and (min-width:0px) and (max-width:1023px) {
      width: 100vw;
      border-right: 0px solid black;
    }
`;

class App extends Component {

    render() {
        return (
            <>
                <BrowserRouter>
                <MapDiv>
                    <Route path='/:station' component={SeoulMap}></Route>
                </MapDiv>
                  <Poster/>
                </BrowserRouter>
            </>
        );
    }
};

export default App;