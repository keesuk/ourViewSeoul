import React, { Component } from 'react';
import Map from '../data/map';
import '../CSS/SeoulMap.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Window from './Window';

class SeoulMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            show : false,
            wheelValue : 2,
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

    windowOn = () => {
        this.setState({ show: true })
    }
    windowClose = () => {
        this.setState({ show: false })
    }

    updateDimensions() {
        if(window.innerWidth < 1023) {
          this.setState({ wheelValue : 140 });
        } 
    }

    render() { 
        const { data } = this.state;
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
                    <div className="svg-container">
                        <Map/>
                    </div>
                    </TransformComponent>
                </React.Fragment>
                )}
            </TransformWrapper>
            <Window show={this.state.show} windowClose={this.windowClose}/>
            </>
        )
    }
}

export default SeoulMap;   