import React, { PureComponent } from 'react';
import { Pin, AskMarker, randomize } from './_Diagram.jsx';
import styled from 'styled-components';

const colorList     = ['red',  'blue', 'green','purple', 'yellow']
const distanceLeftList  = ['0vw', '5vw', '10vw', '15vw', '20vw', '25vw', '30vw', '35vw', '40vw', '45vw', '50vw', '55vw', '60vw', '65vw', '70vw', '75vw', '80vw']
const distanceTopList  = ['0vh', '5vh', '10vh', '15vh', '20vh']
let i = 0

const IknowWrapDiv = styled.div`	
    position: absolute;
    width: 50vw;
    margin-top: 3vh;
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
        font-size: 9.2vw;
    }
  `;
const IknowExplainDiv = styled.div`
    & { 
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
            font-size: 5.2vw;
            left: 50%;
            transform: translateX(-50%);
        }
    }
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-bottom-color: black;
        border-top: 0;
        border-right: 0;
        margin-left: 30vw;
        margin-top: -20px;
    }
`;
const IknowExplainArrowDiv = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 160px;
    width: 80vw;
    height: 44vh;
    background-color: transparent;
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
        }, 360)
        this.timeout = setTimeout( ()=> {
            this.setState({buttonOn: false})
        }, 4000)
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
                        <IknowExplainArrowDiv>
                            <AskMarker left={randomize(distanceLeftList)} top={randomize(distanceTopList)} color={this.state.choose}/>
                            <AskMarker left={randomize(distanceLeftList)} top={randomize(distanceTopList)} color={this.state.choose}/>
                            <AskMarker left={randomize(distanceLeftList)} top={randomize(distanceTopList)} color={this.state.choose}/>
                            <AskMarker left={randomize(distanceLeftList)} top={randomize(distanceTopList)} color={this.state.choose}/>
                        </IknowExplainArrowDiv>
                    </>
                    : null
                } 
            </IknowWrapDiv>
        );
    }
}

export default IknowButton;