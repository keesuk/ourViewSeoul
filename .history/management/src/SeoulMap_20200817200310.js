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
            <TransformWrapper 
                defaultScale={1}
                defaultPositionY={height/2}
                wheel={{
                    step: 140,
                }}
                
            >
                {({ resetTransform, ...rest }) => (
                <React.Fragment>
                    <TransformComponent>
                    <div className="svg-container">
                        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 1280 1280" className="svg-content-responsive">
                            {data.map( (d) => 
                                <rect
                                    onClick={() => this.buttonOn({ show: true })}
                                    key={d.station} 
                                    width={10}
                                    height={5}
                                    x={d.xCor}
                                    y={height - d.yCor}
                                >
                                </rect>
                            )}
                        </svg>
                    </div>
                    </TransformComponent>
                </React.Fragment>
                )}
            </TransformWrapper>
            </>
        )
    }
}

export default SeoulMap;   