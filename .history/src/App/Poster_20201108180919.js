import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Circle, Triangle, Rhombus, Ellipse, Rectangular } from './_Diagram.jsx';
import DataMap from './_DataMap.jsx';
import { Dice } from './_Diagram.jsx';

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
        width: 88vw;
        height: 124.432vw;
        background-color: white;
        margin: auto;
    }
`;
const Logo = styled.img`

    display: block;
    margin: auto;
    padding-top: 15vw;

    @media all and (min-width:0px) and (max-width:1023px) {
        padding-top: 4vw;
        padding-bottom: 3vw;
        width: 76%;
`;
const QuestionDiv = styled.div`
    
    width: 88vw;
    height: 88vw;
`;
const Question = styled.img`

    display: block;
    margin: auto;
    padding-top: 17vw;
    width: 55%;

    @media all and (min-width:0px) and (max-width:1023px) {
        padding-top: 15vw;
        width: 20%;
`;
const TextDiv = styled.div`
    
    font-size: 4.4vw;
    display: block;
    margin-top: 19px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 700;
    letter-spacing: -.2px;
    width: 55vw;
    line-height: 1.3;
`;
const MapExplainWrapperDiv = styled.div`

    width: 99vw;
    height: 300vh;
    background-color: white;
    margin-top: 15vh;
`;
const MapExplainDiv = styled.div`

    width: 88vw;
    margin: auto;
`;
const Bottom = styled.img`

    display: block;
    margin: auto;
    padding-top: 15vw;
    width: 20%;

    @media all and (min-width:0px) and (max-width:1023px) {
        padding-top: 5vw;
        width: 12%;
`;
const ExplainTitle = styled.div`
    font-size: 8.2vw;
    letter-spacing: 0px;
    font-weight: 900;
    margin-top: 100px;
`;
const ExplainPlanning = styled.div`
    font-size: 5.4vw;
    letter-spacing: -.9px;
    font-weight: 900;
    margin-top: 20px;
    line-height: 1.6;
`;
const MapShowText = styled.div`
    font-size: 3.85vw;
    margin-left: -4.5vw;
    width: 100%;
    font-weight: 900;
    letter-spacing: -.6px;
    display:flex; 
    flex-direction:row;
    white-space: nowrap;
`;

class Poster extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            posterOrnamentOn : false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidUpdate(){

    }

    handleChange(diceOn){
        this.setState({posterOrnamentOn: diceOn}) 
        
        this.timeout = setTimeout( ()=> {
            this.setState({posterOrnamentOn: false})
        }, 500)
    }


    render(){
        const { posterPin, pageUp } = this.props

        return (
            <>
                <PosterContentDiv>
                    <Logo
                        style={ pageUp ? null : { display: 'none'}}
                        src={require('../data/Logo.svg')}
                    />
                    {posterPin
                    ? 
                    <DataMap 
                        sclae={1}
                        panOff={true}
                        stroke={true}
                        pointer={false}
                        entOn={this.state.posterOrnamentOn}
                        pageUp={pageUp}
                    />
                    : 
                    <QuestionDiv>
                        <Question src={require('../data/QuestionMark.svg')}/>
                        <TextDiv> 내가 본 서울시가 완성되면,<br/>우리가 본 서울시가 보입니다.</TextDiv>
                    </QuestionDiv>
                    }
                    <Dice
                        changeOn={this.handleChange}
                    />
                </PosterContentDiv>
                <MapExplainWrapperDiv>
                    <MapExplainDiv>
                        <Bottom src={require('../data/Bottom.svg')}/>
                        {posterPin
                        ? <>
                            <ExplainTitle>
                                서울은 이런 곳.
                            </ExplainTitle>
                            <DataMap 
                                scale={5}
                                panOff={false}
                                stroke={false}
                                pointer={true}
                                posterPin={ posterPin }
                            />
                            <MapShowText>
                                <Rhombus right={'0px'}/>
                                    <div style={{color:'#e90087'}}>박물관 갤러리</div>
                                <Rectangular right={'0px'}/>
                                    <div style={{color:'#006CC4'}}>쇼핑 마켓</div>
                                <Circle right={'0px'}/>
                                    <div style={{color:'#E20000'}}>랜드마크</div>
                                <Triangle right={'0px'} top={'-0.5px'}/>
                                    <div style={{color:'#087A0D'}}>자연 휴양지</div>
                                <Ellipse right={'0px'} top={'-4.5px'}/>
                                    <div style={{color:'#00bfb3'}}>음식점</div>
                            </MapShowText>
                        </>
                        : null}
                        <ExplainTitle>
                            기획의도
                        </ExplainTitle>
                            <ExplainPlanning>
                                지역은 개개인의 경험 속 저마다의 다른 의미가 존재합니다. 그렇기 때문에 내가 보는 특정 지역은 타인이 보는 관점과 다를 수도 같을 수도 있습니다. <br/> 우리가 본 서울시 프로젝트는 이러한 아이디어에 착안하여 제작되었습니다. 대한민국을 대표하는 도시 서울은 방대한 사람들이 오가는 곳이기에 타도시에 비해 비교적 넓은 공감대를 지니고 있습니다. 그렇기 때문에 서울시는 특정지역을 보더라도 다양한 관점이 나올 수 있고, 그 속에서 공감 혹은 낯선 감정들을 느낄 수 있습니다. <br/> 우리가 본 서울시 프로젝트는 저마다의 다른 관점, 추억, 경험을 재구성하여 공감이 갈 수 있는 데이터 시각화를 목표로 하며, 여러 사람들의 데이터를 융합한 공감지도를 그려보고자 합니다.
                            </ExplainPlanning>
                    </MapExplainDiv>
                </MapExplainWrapperDiv>
            </>
        )
    }
}
export default Poster;