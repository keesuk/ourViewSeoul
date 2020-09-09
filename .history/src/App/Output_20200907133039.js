import React, { Component } from 'react';
import styled from 'styled-components';
import '../CSS/Output.css';

const IknowWrapDiv = styled.div`
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

class Output extends Component {

    render() {
        const { show, outputClose } = this.props;   
        return(
            <div className="output-wrapper" style={{ 
                transform: show ? 'translateY(-100vh)' : 'translateY(-22vh)'
                }} >
                <div className="output-content">
                    { show ? 
                        <div onClick={outputClose} className="output-close">
                            ← 
                        </div>
                        :
                        <div onClick={{}} className="up">
                            ￣ 
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Output;