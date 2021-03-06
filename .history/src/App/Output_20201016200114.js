import React, { Component } from 'react';
import styled from 'styled-components';

const OutputWrapper = styled.div`
    display: none;

    @media all and (min-width:0px) and (max-width:1023px) {
        display: block;
        z-index: 1000;
        height: 100vh;
        box-sizing: border-box;
        border-left: 2px solid black;
        border-right: 2px solid black;
        border-top: 2px solid black;
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
    font-weight: 300;
    text-align: center;
    color: white;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0;
    top: -5px;
    padding-bottom: 50px;

    @media all and (min-width:0px) and (max-width:1023px) {
        font-size: 36x;
        padding-bottom: 20px;
    }
`;
const OutputUp = styled.div`
    position: abosolute;
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
    constructor(props){
        super(props)
        this.state = {
            pageUp : false,
        }
        this.posterPageUp = this.posterPageUp.bind(this)
    }

    posterPageUp() {
        this.setState(state => ({pageUp : !state.pageUp}))
    }
    

    render() {
        const pageUp = this.state.pageUp

        return(
            <OutputWrapper 
                style={{ 
                    transform: pageUp ? 'translateY(-97vh)' : 'translateY(-22vh)',
                    width: pageUp ? '100vw' : '95vw',
                    backgroundColor: pageUp ? 'black' : 'white',
                }}
            >
                <div>
                    {pageUp 
                        ? <OutputClose onClick={this.posterPageUp}>←</OutputClose>
                        : <OutputUp onClick={this.posterPageUp}>￣</OutputUp>
                    }                    
                </div>
            </OutputWrapper>
        )
    }
}

export default Output;