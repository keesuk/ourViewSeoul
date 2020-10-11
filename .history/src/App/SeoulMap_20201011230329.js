import React, { PureComponent } from 'react';
import Map from './_Map.jsx';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from 'styled-components';
import Window from './Window';
import IknowButton from './IknowButton';
import Output from './Output';
import { withRouter } from 'react-router-dom'
import { PinBottom } from './_Diagram.jsx'

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
        margin-top: 20vh;
        margin-bottom: 30vh;
        max-width:100%;
    }
`;

class SeoulMap extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            imgShow : false,
            wheelValue : 2,
            station : ':station'
        }
        this.updateDimensions = this.updateDimensions.bind(this);
        this.windowOpener = this.windowOpener.bind(this);
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

    
    render() { 
        const { wheelValue, imgShow, station} = this.state;

        return (
            <>
            <IknowButton/>
            <TransformWrapper 
                defaultScale={1}
                wheel={{
                    step: wheelValue,
                }}
            >
                {({ resetTransform, ...rest }) => (
                <React.Fragment>
                    <TransformComponent>
                        <SvgContainer>
                            <PinBottom/>
                            <Map/>
                        </SvgContainer>
                    </TransformComponent>
                </React.Fragment>
                )}
            </TransformWrapper>
            {imgShow ? <Window station={station}/> : null }
            <Output imgShow={imgShow}/>
            </>
        )
    }
}

export default withRouter(SeoulMap);   