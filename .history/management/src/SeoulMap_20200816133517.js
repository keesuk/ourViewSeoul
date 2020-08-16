import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulPlace from './data/seoul.csv';

const width = 1280;
const height = 1280;

class SeoulMap extends Component {
    state = {
        data : null,
    }
    
    componentDidMount() {
        csv(seoulPlace).then(data => {
            this.setState( {data} );
            this.drawSeoul(this.state.data);
        })
    }

    drawSeoul(dataArray) {
        // console.log(dataArray);
        
        const svgCanvas = d3.select(this.refs.canvas).append("svg")
            .attr("viewBox", "0 0 100vw 100vh")
            .attr("width", width)
            .attr("height", height);
        
        svgCanvas.selectAll("text")
            .data(dataArray)
            .enter()
                .append("text")
                .attr("x", d => { return d.xCor})
                .attr("y", d => { return height - d.yCor})
                .text(d => { return d.station})
                .attr("font-size", "6px")
    }

    render() { 
        return <div ref="canvas"></div> 
    }
}

export default SeoulMap;