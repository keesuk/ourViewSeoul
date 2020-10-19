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
const MapExplainDiv = styled.div`

    width: 99vw;
    height: 100vh;
    background-color: white;
    margin: 0px;
`;

class Poster extends Component {
    render(){
        return (
            <>
                <PosterContentDiv>
                    <Logo src={require('../data/Logo.svg')}/>
                    <Question src={require('../data/QuestionMark.svg')}/>
                    <TextDiv> 내가 본 서울시가 완성되면,<br/>우리가 본 서울시가 보입니다.</TextDiv>
                    <Canvas 
                        colorManagement
                        style={{
                            width:'65%', 
                            height:'65%',
                            margin:'auto'
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
                    <MapExplainDiv>
                    </MapExplainDiv>
            </>
        )
    }
}
export default Poster;