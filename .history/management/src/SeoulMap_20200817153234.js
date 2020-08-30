import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulPlace from './data/seoul.csv';
import DragScroll from 'Dragscroll';


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
                <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 1280 1280" className="svg-content-responsive">
                    <DragScroll height={height} width={width}>
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
                    </DragScroll>
                </svg>
            </div>
            </>
        )
    }
}

export default SeoulMap;   