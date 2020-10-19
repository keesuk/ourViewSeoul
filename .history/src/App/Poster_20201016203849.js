import React, { Component } from 'react';
import styled from 'styled-components';

const PosterContentDiv = styled.div`

    width: 40vw;
    height: 60vw;
    box-sizing: border-box;
    background-color: white;
    margin-left: 5vw;
    margin-right: 5vw;
    margin-top: 5vh;
    margin-bottom: 5vh;

    @media all and (min-width:0px) and (max-width:1023px) {
        text-align: center;
        width: 90vw;
        height: 127.26vw;
        background-color: white;
        margin: auto;
    }
`

const Logo = styled.img`

    display: block;
    margin: auto;
    padding-top: 15vw;
    width: 55%;

    @media all and (min-width:0px) and (max-width:1023px) {
        width: 90%;
`

class Poster extends Component {
    render(){
        return (
            <>
                <PosterContentDiv>
                    <Logo src={require('../data/Logo.svg')}/>
                </PosterContentDiv>
            </>
        )
    }
}
export default Poster;