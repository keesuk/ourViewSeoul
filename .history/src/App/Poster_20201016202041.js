import React, { Component } from 'react';
import styled from 'styled-components';

const PosterDiv = styled.div`
text-align: center;
width: 90vw;
height: 127.26vw;
background-color: white;
margin: auto;

`

class Output extends Component {
    render(){
        return <PosterDiv/>
    }
}
export default Output;