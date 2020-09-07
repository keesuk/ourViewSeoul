import React, { Component } from 'react';
import Map from './_Map.jsx';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styled from 'styled-components';
import Window from './Window';
import IknowButton from './IknowButton';
import Output from './Output';
import { Route, withRouter } from 'react-router-dom'

const SvgContainer = styled.div`
    display: inline-block;
    position: relative;
    width: 50vw;
    height: 50vh;
    margin-top: 10vh;
    margin-bottom: 40vh;

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

class SeoulMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            show : false,
            wheelValue : 2,
            station : ':station',
        }
        this._updateDimensions = this._updateDimensions.bind(this);
    }
    
    componentDidMount() {
        this._updateDimensions();
        window.addEventListener("resize", this._updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this._updateDimensions);
    }
    _updateDimensions() {
        if(window.innerWidth < 1023) {
          this.setState({ wheelValue : 140 });
        } 
    }

   static getDerivedStateFromProps(previousProps, previousState) {
        const station = this.props.match.params.station;
        
        if (previousState.station !== station) {
            this._windowOpener(station)
            console.log(previousState.station)
            console.log(station)
        }
    }

    _windowOpener(station) {
        this.setState({station: station, show: !this.state.show})
    }

    render() { 
        const { wheelValue, show, station } = this.state;

        return (
            <>
            <IknowButton />
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
                            <Map />
                        </SvgContainer>
                    </TransformComponent>
                </React.Fragment>
                )}
            </TransformWrapper>
            <Window show={show} station={station}/>
            <Output/>
            </>
        )
    }
}

export default withRouter(SeoulMap);   