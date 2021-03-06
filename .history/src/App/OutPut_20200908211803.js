import React, { Component } from 'react';
import styled from 'styled-components';

const OutputWrapper = styled.div`
    display: none;

    @media all and (min-width:0px) and (max-width:1023px) {
        display: block;
        z-index: 1000;
        width: 95vw;
        height: 100vh;
        box-sizing: border-box;
        border-left: 2px solid black;
        border-right: 2px solid black;
        border-top: 2px solid black;
        background-color: white;
        margin-top: 50px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        transition: all .5s ease;
        position:fixed;
        overflow:auto;
        box-shadow: 5px 5px black;
    }
`;

const OutputClose = styled.div`
    position: relative;
    font-size: 40px;
    font-weight: 200;
    color: black;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0;
    padding-bottom: 50px;

    @media all and (min-width:0px) and (max-width:1023px) {
        font-size: 36x;
        padding-bottom: 20px;
    }
`;

const OutputUp = styled.div`
    position: relative;
    text-align: center;
    font-weight: 800;
    color: black;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0;
    padding-bottom: 50px;

    @media all and (min-width:0px) and (max-width:1023px) {
        font-size: 40px;
        padding-bottom: 20px;
    }
`;

class Output extends Component {

    render() {
        const { imgShow, outputClose } = this.props;   
        return(
            <OutputWrapper style={{ 
                transform: imgShow ? 'translateY(0vh)' : 'translateY(-22vh)'
                }} >
                <div>
                    { imgShow ? 
                        <OutputClose onClick={outputClose}>
                            ← 
                        </OutputClose>
                        :
                        <OutputUp >
                            ￣ 
                        </OutputUp>
                    }
                </div>
            </OutputWrapper>
        )
    }
}

export default Output;