import React, { PureComponent } from 'react';
import Map from './_Map.jsx';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from 'styled-components';
import Window from './Window';
import IknowButton from './IknowButton';
import Output from './Output';
import { withRouter } from 'react-router-dom';
import { Pin } from './_Diagram.jsx';

const SvgContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 50vw;
    height: 50vh;
    margin-top: 10vh;
    margin-bottom: 40vh;
    cursor: move;

    @media all and (min-width:0px) and (max-width:1023px) {
        display: inline-block;
        position: relative;
        width: 100vw;
        height: 50vh;
        margin-top: 14vh;
        margin-bottom: 36vh;
        max-width:100%;
    }
`;
const Svg = styled.svg`
    .cls-1 {
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        cursor:pointer;
        font-size: 6.39px;
        letter-spacing: -0.04em;
    }
    .cls-2 {
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        cursor:pointer;
        font-size: 4.78px;
        letter-spacing: -0.03em;
    }
`;

class SeoulMap extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            imgShow : false,
            wheelValue : 2,
            station : ':station',
            posterOn : true,
            pinDatas : [],
            pinValues : [],
            pinCor : [],
        }
        this.updateDimensions = this.updateDimensions.bind(this);
        this.windowOpener = this.windowOpener.bind(this);
        this.handleWhatsOk = this.handleWhatsOk.bind(this);
        this.handlePinCor = this.handlePinCor.bind(this);
    }
    
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        if(window.innerWidth < 1023) {
          this.setState({ wheelValue : 140 });
        } 
    }

    componentDidUpdate() {
        const station = this.props.match.params.station;

        if (this.state.station !== station) {
            this.windowOpener(station)
        } 
    }

    windowOpener(station) {
        this.setState({station: station, imgShow: !this.state.imgShow} )
    }

    handleWhatsOk(whatsOk) {
        this.setState(state => ({ 
            pinDatas : [...state.pinDatas, whatsOk[1].filter((ok, i) => !whatsOk[0].some(j => i === j))],
            pinValues : [...state.pinValues, whatsOk[2]]
        }))
    }

    handlePinCor(cor) {
        console.log(cor)
        const xCor = cor.split('(').pop().split(')').pop().split(' ')[0]
        console.log(xCor)
        this.setState(state => ({
            pinCor : [...state.pinCor, cor]
        }))
    }


    render() { 
        const { wheelValue, imgShow, station, posterOn, pinDatas, pinCor } = this.state;
        return (
            <>
            <IknowButton/>
            <TransformWrapper 
                defaultScale={1}
                wheel={{
                    step: wheelValue,
                }}
            >
                {({ resetTransform, 
                    scale,
                    ...rest }) => (
                <React.Fragment>
                    <TransformComponent>
                        <SvgContainer>                
                            <Svg
                                x="0"
                                y="0"
                                viewBox="0 0 1280 1280"
                            >
                                <Map pinCor={this.handlePinCor}/>
                                {pinDatas !== [] ? 
                                    pinDatas.map((pinData, i) => 
                                        <Pin 
                                            size={scale}
                                            key={i}
                                            pinData={pinData}
                                        />)
                                    : 
                                    null}
                            </Svg>
                        </SvgContainer>
                    </TransformComponent>
                </React.Fragment>
                )}
            </TransformWrapper>
            {imgShow 
                ? <Window 
                    station={station}
                    whatsOk={this.handleWhatsOk}
                /> 
                : null 
            }
            <Output posterOn={posterOn}/>
            </>
        )
    }
}

export default withRouter(SeoulMap);   