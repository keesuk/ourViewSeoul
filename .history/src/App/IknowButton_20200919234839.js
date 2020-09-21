import React, { Component } from 'react';
import styled from 'styled-components';

const IknowWrapDiv = styled.div`	
    position: absolute;
    width: 50vw;
    margin-top: 30px;
    z-index: 100;

    @media all and (min-width:0px) and (max-width:1023px) {
        width: 100vw;
    }
`;

const IknowBtn = styled.button`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    letter-spacing: -.5px;
    font-weight: 900;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    white-space:nowrap;

    @media all and (min-width:0px) and (max-width:1023px) {
        font-size: 34px;
        line-height: 1.3em;
    }
  `;

const IknowExplainDiv = styled.div`
    position: absolute;
    margin-top: 80px;
    line-height: 1.3em;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0em;
    padding: 12px 20px 15px 20px;
    box-shadow: 5px 5px black;
    box-sizing: border-box;
    border: 1.5px solid black;
    background-color: white;
    left: 50%;
    transform: translateX(-50%);
    
    @media all and (min-width:0px) and (max-width:1023px) {
        width: 80vw;
        margin-top: 60px;
        font-size: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
`;

class IknowButton extends Component {
    state = { ButtonOn : false }
    
    componentDidUpdate() {
        if( this.state.ButtonOn === false){
            clearTimeout(this.timeout);
        } else if( this.state.ButtonOn === true ){
            this.timeout = setTimeout( ()=> {
                this.setState({ButtonOn: false})
            }, 2000);
        }
    }

    intro = () => {
        this.setState(state => ({ButtonOn: !state.ButtonOn}));
    };
    
    
    render() {
        return(
            <IknowWrapDiv>
                <IknowBtn onClick={this.intro}>
                {this.state.ButtonOn ? 
                    <div>혹시 여기 알아요?</div>
                    : 
                    <div>혹시 여기 알아요?</div>
                }
                </IknowBtn>
                {this.state.ButtonOn ? 
                    <IknowExplainDiv>잘 아는 지역이 있나요? 그 곳을 클릭해서 저에게 알려주세요.</IknowExplainDiv>
                    : 
                    <div/>
                } 
            </IknowWrapDiv>
        );
    }
}

export default IknowButton;