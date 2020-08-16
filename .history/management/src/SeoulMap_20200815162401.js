import React, { Component } from 'react';
import * as d3 from 'd3';
import './SeoulMap.css';
import { csv } from 'd3';
// import * as topojson from 'topojson';
import Seoul from './data/seoul.csv';
import map from './data/seoul_municipalities_topo_simple.json'
// import * as d3queue from 'd3-queue';

class SeoulMap extends Component {
    componentDidMount() {
        const data = [ 2, 4, 2, 6, 8 ]
        this.drawBarChart(data)
    }
    drawBarChart(data)  {
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", 600)
            .attr("height", 400)
            .style("border", "1px solid black")
        svgCanvas.selectAll("rect")
            .data(data).enter()
            .append("rect")
            .attr("width", 40)
            .attr("height", (datapoint) => datapoint * 20)
            .attr("fill", "orange")
    }
    render() { return <div ref="canvas"></div> }
}

export default SeoulMap;