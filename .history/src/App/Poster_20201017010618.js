import React, { Component, Suspense } from 'react';
import { Canvas } from 'react-three-fiber'
import styled from 'styled-components';
import { Box } from './_Diagram.jsx';


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
    width: 55%;

    @media all and (min-width:0px) and (max-width:1023px) {
        padding-top: 5vw;
        width: 85%;
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
    letter-spacing: 0px;
    width: 55vw;
    line-height: 1.3;
`;
const MapExplainWrapperDiv = styled.div`

    width: 99vw;
    height: 500vh;
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
    letter-spacing: -1;
    font-weight: 900;
    margin-top: 20px;
    line-height: 1.6;
`;

class Poster extends Component {
    render(){
        const posterOn = this.props.posterOn

        return (
            <>
                <PosterContentDiv>
                    <Logo src={require('../data/Logo.svg')}/>
                    {posterOn ? 
                    null
                    : 
                    <>
                    <Question src={require('../data/QuestionMark.svg')}/>
                    <TextDiv> 내가 본 서울시가 완성되면,<br/>우리가 본 서울시가 보입니다.</TextDiv>
                    </>
                    }
                    
                    <Canvas 
                        colorManagement
                        style={{
                            width:'60%', 
                            height:'60%',
                            marginLeft:'auto',
                            marginRight:'auto',
                            marginTop: '2vh'
                        }}
                    >
                        <ambientLight intensity={10} />
                        <spotLight position={[10, 10, 10]} angle={0} penumbra={0} />
                        <pointLight position={[-10, -10, -10]} />
                        <Suspense fallback={null}>
                            <Box />
                        </Suspense>
                    </Canvas>
                </PosterContentDiv>
                    <MapExplainWrapperDiv>
                        <MapExplainDiv>
                            <Bottom src={require('../data/Bottom.svg')}/>
                            <ExplainTitle>
                                서울은 이런 곳.
                            </ExplainTitle>
                            <ExplainTitle>
                                기획의도
                            </ExplainTitle>
                                <ExplainPlanning>
                                    지역은 개개인의 경험 속 저마다의 다른 의미가 존재합니다. 그렇기 때문에 내가 보는 특정 지역은 타인이 보는 관점과  <br/> 다를 수도 같을 수도 있습니다. <br/> 우리가 본 서울시 프로젝트는 이러한 아이디어에 착안하여 제작되었습니다. 대한민국을 대표하는 도시 서울은 방대한 사람들이 오가는 곳이기에 타도시에 비해 비교적 넓은 공감대를 지니고 있습니다. 그렇기 때문에 서울시는 특정지역을 보더라도 다양한 관점이 나올 수 있고, 그 속에서 공감 혹은 낯선 감정들을 느낄 수 있습니다. 우리가 본 서울시 프로젝트는 저마다의 다른 관점, 추억, 경험을 재구성하여 공감이 갈 수 있는 데이터 시각화를 목표로 하며, 여러 사람들의 데이터를 융합한 공감지도를 그려보고자 합니다.
                                </ExplainPlanning>
                        </MapExplainDiv>
                    </MapExplainWrapperDiv>
            </>
        )
    }
}
export default Poster;