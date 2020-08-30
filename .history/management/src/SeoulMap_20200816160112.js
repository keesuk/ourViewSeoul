import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulPlace from './data/seoul.csv';

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
        csv(seoulPlace).then(data => {
            this.setState( {data} );
            this.drawSeoul(data);

            return data;
        })
    }

    drawSeoul(dataArray) {
        
        const svgCanvas = d3.select(this.refs.canvas)
            .append("div")
            .classed("svg-container", true) 
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 1280 1280")
            .classed("svg-content-responsive", true)
        
        svgCanvas.selectAll("button")
            .data(dataArray)
            .enter()
                .append("button")
                .classed("button-text", true)
                .attr("x", d => { return d.xCor})
                .attr("y", d => { return height - d.yCor})
                .button(d => { return d.station})
                .attr("font-size", "6px")
    }

   
    render() { 
        console.log(this.state.data);

        return (
            <>
            <div ref="canvas"/>
            </>
        )
    }
}

export default SeoulMap;