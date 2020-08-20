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
            // this.drawSeoul();
        })
    }
    
    drawSeoul() {

        const svgCanvas = d3.select(this.refs.canvas)
            .append("div")
            .classed("svg-container", true) 
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 1280 1280")
            .classed("svg-content-responsive", true)
        
        // svgCanvas.selectAll("text")
        //     .data(dataArray)
        //     .enter()
        //         .append("text")
        //         .classed("text", true)
        //         .attr("x", d => { return d.xCor})
        //         .attr("y", d => { return height - d.yCor})
        //         .text(d => { return d.station})
        //         .attr("font-size", "6px")
    }    
    
    render() { 
        const { data } = this.state;
        return (
            <div className="svg-container">
                <svg 
                    preserveAspectRatio="xMidYMid meet" 
                    viewBox="0 0 1280 1280" 
                    className="svg-content-responsive"
                >
                    {data.map( (d, i) => 
                        <text 
                            key={i} 
                            className="text" 
                            x={d =>{ return d.xCor}}
                            y={d =>{ return d.yCor}}
                        > {d.station} </text>
                    )}
                </svg>
            </div>
        )
    }
}

export default SeoulMap;


