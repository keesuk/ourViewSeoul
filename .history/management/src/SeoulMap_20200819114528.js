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
        console.log('on')
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
                defaultScale={1.5}
                defaultPositionX={10}
                defaultPositionY={10}
                wheel={{
                    step: 140,
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