import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import { range } from 'd3-array';
import seoulPlace from './data/seoul.csv';
// import faker from 'faker';

const width = 1280;
const height = 1280;

class SeoulMap extends Component {
    state = {
            data : [],
    }
    
    componentDidMount() {
        csv(seoulPlace).then( (data) => {
            this.setState( {data} );
        })
    }
    
    render() { 
        const { data } = this.state;

        const xScale = d3
            .scaleLinear()
            .domain(d3.extent(data, data.xCor))
            .range([0, width]);
        const yScale = d3
            .scaleLinear()
            .domain(d3.extent(data, data.yCor))
            .range([0, height]);

        return (
            <>
            <div className="svg-container">
                <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 1280 1280" className="svg-content-responsive">
                    {data.map( (d, i) => 
                        <text 
                            key={i} 
                            className="text" 
                            x={d.xCor}
                            y={height - d.yCor}
                            fontSize="6px"
                        > {d.station} </text>
                    )}
                </svg>
            </div>
            </>
        )
    }
}

export default SeoulMap;


  
// drawSeoul() {

//     const svgCanvas = d3.select(this.refs.canvas)
//         .append("div")
//         .classed("svg-container", true) 
//         .append("svg")
//         .attr("preserveAspectRatio", "xMinYMin meet")
//         .attr("viewBox", "0 0 1280 1280")
//         .classed("svg-content-responsive", true)
    
//     svgCanvas.selectAll("text")
//         .data(dataArray)
//         .enter()
//             .append("text")
//             .classed("text", true)
//             .attr("x", d => { return d.xCor})
//             .attr("y", d => { return height - d.yCor})
//             .text(d => { return d.station})
//             .attr("font-size", "6px")
// }    