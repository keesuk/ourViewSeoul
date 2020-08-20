import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulPlace from './data/seoul.csv';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Window from './Window';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const width = 1280;
const height = 1280;

class SeoulMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            show : false,
            wheelValue : 4,
        }
        // this.updateDimensions = this.updateDimensions.bind(this);
    }
    
    componentDidMount() {
        csv(seoulPlace).then( (data) => {
            this.setState( {data} )
        })
        // this.updateDimensions();
        // window.addEventListener("resize", this.updateDimensions);
    }
    // componentWillUnmount() {
    //     window.removeEventListener("resize", this.updateDimensions);
    // }

    windowOn = () => {
        this.setState({ show: true })
    }
    windowClose = () => {
        this.setState({ show: false })
    }

    // updateDimensions() {
    //     if(window.innerWidth < 1023) {
    //       this.setState({ wheelValue : 140 });
    //     } 
    // }

    render() { 
        const { data } = this.state;
        const { wheelValue } = this.state;

        return (
            <>
            <TransformWrapper 
                defaultScale={1}
                defaultPositionX={width}
                defaultPositionY={height}
                wheel={{
                    step: {wheelValue},
                }}
            >
                {({ resetTransform, ...rest }) => (
                <React.Fragment>
                    <TransformComponent>
                    <div className="svg-container">
                        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 1280 1280" className="svg-content-responsive">
                            {data.map( (d, i) => 
                                <text
                                    className="station-text"
                                    onClick={() => this.windowOn()}
                                    key={i} 
                                    width={10}
                                    height={5}
                                    x={d.xCor}
                                    y={height - d.yCor}
                                > {d.station}
                                </text>
                            )}
                        </svg>
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