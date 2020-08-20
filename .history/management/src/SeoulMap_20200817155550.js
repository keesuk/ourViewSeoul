import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulPlace from './data/seoul.csv';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


const width = 1280;
const height = 1280;    

class SeoulMap extends Component {
    state = {
        data : [],
        show : false,
    }
    
    componentDidMount() {
        csv(seoulPlace).then( (data) => {
            this.setState( {data} );
        })

    }

    buttonOn = () => {
        console.log('i was clicked');
    }

    render() { 
        const { data } = this.state;

        return (
            <>
            <div className="svg-container">
            <TransformWrapper
                defaultScale={1}
                defaultPositionX={200}
                defaultPositionY={100}
            >
                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                    <div className="tools">
                    <button onClick={zoomIn}>+</button>
                    <button onClick={zoomOut}>-</button>
                    <button onClick={resetTransform}>x</button>
                    </div>
                    <TransformComponent>
                        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 1280 1280" className="svg-content-responsive">
                            {data.map( (d, i) => 
                                <g>
                                    <rect
                                        onClick={() => this.buttonOn({ show: true })}
                                        key={i} 
                                        width={10}
                                        height={5}
                                        x={d.xCor}
                                        y={height - d.yCor}
                                    >
                                        <text className="station-text"> {d.station} </text>
                                    </rect>
                                </g>
                            )}
                        </svg>
                    </TransformComponent>
                </React.Fragment>
                )}
            </TransformWrapper>
                    </div>
            </>
        )
    }
}

export default SeoulMap;   