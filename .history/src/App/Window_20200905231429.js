import React, { Component } from 'react';
import Img from './Img';
import styled from 'styled-components';

const Window_Wrapper = styled.div`
    position: absolute;
    z-index: 10000;
    width: 80vw;
    height: 90vh;
    box-sizing: border-box;
    border: 1.5px solid black;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    background-color: white;
    margin-top: 100px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    /* transition: all .5s ease; */
    position:fixed;
    overflow:auto;
`;

const Window_Content = styled.div`
    margin: 0 12px;
`;

const Close_ = styled.button`
    position: relative;
    font-size: 40px;
    font-weight: 500;
    color: black;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0;
    padding-bottom: 50px;

    @media all and (min-width:0px) and (max-width:1023px) {
        font-size: 36x;
        padding-bottom: 36px;
    }
  `;

const Computer_ = styled.div`
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: 600;

    @media all and (min-width:0px) and (max-width:1023px) {
        font-size: 18px;
        padding-bottom: 6px;
    }
  `;

const Answer_ = styled.div`
    padding-bottom: 40px;
    font-size: 32px;
    font-weight: 900;

    @media all and (min-width:0px) and (max-width:1023px) {
        font-size: 26px;
    }
  `;

const Img_ = styled.img`
    width: 100%;
    object-fit: contain;
`;

const Input_ = styled.input`
    position: relative;
    margin: auto;
    display: flex;
    line-height: 1.3em;
    font-size: 20px;
    font-weight: 500;
    color: white;
    letter-spacing: 0em;
    padding: 10px 30px 10px 30px;
    box-sizing: border-box;
    background-color: black;
    border: none;
    border-radius: 60px;
    cursor: pointer;
    outline: none;
    margin-top: 30px;
    margin-bottom: 50px;
`;

class Window extends Component {

    render() {
        const { show } = this.props;   
        return(
            <div className="window-wrapper" style={{ 
                transform: show ? 'translateY(-100vh)' : 'translateY(-250vh)',
                display: show ? '' : 'none'
                }} >
                <div className="window-content">
                    <button className="close">
                        ← 
                    </button>
                    <div className="computer">
                        오.. 어떤 곳인데요?
                    </div>
                    <div className="answer">
                        여기는 요런 것들이 생각나요.
                    </div>
                        {/* <Img 
                            className="img-stations" 
                            src={require('../data/search.pstatic.jpg')}
                        /> */}
                    <button className="input">
                        완료
                    </button>
                </div>
            </div>
        )
    }
}

export default Window;