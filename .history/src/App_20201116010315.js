import React, { Component } from 'react';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
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
    state={
        show: true
    }

    getOut = () =>{
        this.setState({show: false})
    }

    render() {
        smoothscroll.polyfill()

        return (
            <>
                <HashRouter basename="/react">
                {this.state.show ? <Link onClick={()=> this.getOut()} to='/:station'><img src={require('./data/Logo.svg')}/></Link> : null}
                <Switch>
                <MapDiv>
                    <Route exact path='/:station' component={SeoulMap}/>
                </MapDiv>
                </Switch>
                    <PosterDiv>
                    </PosterDiv>
                </HashRouter>
            </>
        );
    }
};

export default App;