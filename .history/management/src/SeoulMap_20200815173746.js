import React, { Component } from 'react';
import * as d3 from 'd3';
import './SeoulMap.css';
// import { csv } from 'd3';
// import * as topojson from 'topojson';
import seoulPlace from './data/seoul.csv';
// import map from './data/seoul_municipalities_topo_simple.json'
// import * as d3queue from 'd3-queue';

const width = 400;
const height = 600;
const scale = 20;

class SeoulMap extends Component {
    componentDidMount() {
        const data = seoulPlace
        this.drawSeoul(data)
    }

    drawSeoul(data)  {
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
        svgCanvas.selectAll("text")
            .data(data).enter()
            .append("text")
            .attr("x", (dataPoint, i) => i * 45 + 10)
            .attr("y", (dataPoint, i) => height - dataPoint * scale - 10)
            .text(dataPoint => dataPoint)
    }
    render() { return <div ref="canvas"></div> }
}

export default SeoulMap;