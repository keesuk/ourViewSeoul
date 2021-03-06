import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulPlace from './data/seoul.csv';


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
                    {data.map( (d, i) => 
                        <g>
                            <text
                                onClick={() => this.buttonOn({ show: true })}
                                className="station-text"
                                key={i} 
                                width={10}
                                height={5}
                                x={d.xCor}
                                y={height - d.yCor}
                            >
                              {d.station} 
                            </text>
                        </g>
                    )}
                </svg>
            </div>
            </>
        )
    }
}

export default SeoulMap;   