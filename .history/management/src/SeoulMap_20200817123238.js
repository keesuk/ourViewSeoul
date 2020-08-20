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
    constructor(props) {
        super(props);
    
        this.state = {
            data : null,
        }
    }
    
    componentDidMount() {
        csv(seoulPlace).then( (data) => {
            this.setState( data );
            // this.drawSeoul(data);
    
            // return data;
        })
    }
    
    drawSeoul(dataArray) {
        console.log(dataArray);

        const svgCanvas = d3.select(this.refs.canvas)
            .append("div")
            .classed("svg-container", true) 
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 1280 1280")
            .classed("svg-content-responsive", true)
        
        svgCanvas.selectAll("text")
            .data(dataArray)
            .enter()
                .append("text")
                .classed("text", true)
                .attr("x", d => { return d.xCor})
                .attr("y", d => { return height - d.yCor})
                .text(d => { return d.station})
                .attr("font-size", "6px")
    }    
    
    render() { 
        const { data } = this.state;
        return (
            <>
        <div> {data.map( (d, i) => <text key={i} content={d.station}/>)}</div>
        </>
        )
    }
}

export default SeoulMap;


