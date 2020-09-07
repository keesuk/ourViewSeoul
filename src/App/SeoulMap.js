import React, { Component } from 'react';
import Map from './_Map.jsx';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
<<<<<<< HEAD
import styled from 'styled-components';
=======
import Output from './Output';
>>>>>>> master
import Window from './Window';
import { Route, withRouter } from 'react-router'

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
            winShow : false,
            outShow : false,
            wheelValue : 2,
            text : '',
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

<<<<<<< HEAD
=======
    windowOn = () => {
        this.setState({ winShow: true })
    }
    windowClose = () => {
        this.setState({ winShow: false })
    }

>>>>>>> master
    updateDimensions() {
        if(window.innerWidth < 1023) {
          this.setState({ wheelValue : 140 });
        } 
    }

    render() { 
        const { wheelValue } = this.state;

        return (
            <>
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
<<<<<<< HEAD
            <Route path="/">
                <Window />
            </Route>
=======
            <Window show={this.state.winShow} windowClose={this.windowClose}/>
            <Output />
>>>>>>> master
            </>
        )
    }
}


export default SeoulMap;   