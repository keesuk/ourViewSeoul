import React, { PureComponent } from 'react';
import { Pin } from './_Diagram.jsx';
import styled from 'styled-components';

const colorList = ['red', 'green', 'blue', 'purple', 'yellow']
let i = 0

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
    outline: none;
    padding: 0;
    white-space:nowrap;

    @media all and (min-width:0px) and (max-width:1023px) {
        font-size: 34px;
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
    cursor: pointer;
    transform: translateX(-50%);
    
    @media all and (min-width:0px) and (max-width:1023px) {
        width: 80vw;
        margin-top: 60px;
        font-size: 20px;
        left: 50%;
        transform: translateX(-50%);
    }
`;
const IknowExplainArrowDiv = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 180px;
    width: 80vw;
    height: 50vh;
    background-color: black;
`

class IknowButton extends PureComponent {
    state = { 
        buttonOn : false,
        choose : null,
    }


    componentDidUpdate() {
        if( this.state.buttonOn === false){
            clearTimeout(this.timeout)
            clearInterval(this.interval)
            this.setState({choose: null})
            i = 0
        }
    }

    intro = () => {
        this.setState(state => ({buttonOn: !state.buttonOn}))
        this.interval = setInterval(()=>{
            this.setState({choose : this.change(colorList)})
        }, 300)
        this.timeout = setTimeout( ()=> {
            this.setState({buttonOn: false})
        }, 2000)
    }

    change = (items) => {
        i = (i+1) % items.length
        return items[i]
    }
    
    render() {
        return(
            <IknowWrapDiv>
                {this.state.buttonOn 
                    ? <IknowBtn
                        style={{ pointerEvents : 'none'}}>
                        <div>혹시 여기 알아요?
                            <Pin choose={this.state.choose} width={32} height={39}/>
                        </div>
                    </IknowBtn>
                    : <IknowBtn 
                        onClick={this.intro}>
                        <div>혹시 여기 알아요?
                            <Pin choose={colorList[0]} width={32} height={39}/>
                        </div>
                    </IknowBtn>
                    }
                {this.state.buttonOn 
                    ? <>
                        <IknowExplainDiv>잘 아는 지역이 있나요? 그 곳을 클릭해서 저에게 알려주세요.</IknowExplainDiv>
                        
                    </>
                    : <IknowExplainArrowDiv/>
                } 
            </IknowWrapDiv>
        );
    }
}

export default IknowButton;