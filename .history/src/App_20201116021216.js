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
        setTimeout(() =>{this.setState({show: false})},1000)
    }

    render() {
        smoothscroll.polyfill()

        return (
            <>
                {this.state.show ? 
                    <div style={{backgroundColor:'white', boxSizing: 'border-box', width:'100vw', height:'100vh', position:'absolute', zIndex:'10000'}} onClick={()=> this.getOut()}>
                        <Link to='/:station'><img style={{width:'90%', padding: '4vw',}} src={require('./data/Logo.svg')}/>
                            <div style={{
                                padding: '4vw',
                                paddingTop:'10vw',
                                fontSize:'6vw',
                                letterSpacing: '-.5px',
                                color: '#333',
                                textDecoration:'none'
                            }}>
                                모바일 웹 환경에서는 서비스가 많이 느립니다. 테스트를 못 해봐서, 배포하고 나서 알았네요. 데스크탑 웹은 아직 제작하지 못하여 차후에 계속해서 제작해보도록 하겠습니다. 재미있는 시도로만 봐주시면 감사하겠습니다. 
                                <div style={{fontSize:'13vw'}}>🙇‍♂️🙇‍♂️</div>(꾸벅)
                        </div>
                        </Link>
                    </div> : null}
                <Switch>
                    <MapDiv>
                        <Route exact path='/:station' component={SeoulMap}/>
                    </MapDiv>
                </Switch>
            </>
        );
    }
};

export default App;