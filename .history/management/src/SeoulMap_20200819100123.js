import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulPlace from './data/seoul.csv';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Window from './Window';

const width = 1280;
const height = 1280;

// const addLineBreaks = string =>
//   string.split('n').map((text, index) => (
//     <React.Fragment key={`${text}-${index}`}>
//       {text}
//       <div/>
//     </React.Fragment>
// ));

class SeoulMap extends Component {
    state = {
        data : [],
        show : false,
    }
    
    componentDidMount() {
        csv(seoulPlace).then( (data) => {
            this.setState( {data} )
        })
    }

    windowOn = () => {
        this.setState({ show: true })
    }
    windowClose = () => {
        this.setState({ show: false })
    }

    render() { 
        const { data } = this.state;

        return (
            <>
            <TransformWrapper 
                defaultScale={1}
                setPositionY={height}
                setPositionX={width}
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
                                <text
                                    className="station-text"
                                    onClick={() => this.windowOn()}
                                    key={d.station} 
                                    // width={10}
                                    // height={5}
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