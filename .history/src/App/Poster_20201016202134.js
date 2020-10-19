import React, { Component } from 'react';
import styled from 'styled-components';

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
        text-align: center;
        width: 90vw;
        height: 127.26vw;
        background-color: white;
        margin: auto;
      }

`

class Output extends Component {
    render(){
        return <PosterDiv/>
    }
}
export default Output;