import React, { Component } from 'react';
import * as d3 from 'd3';
// import * as topojson from 'topojson';
// import * as d3queue from 'd3-queue';
// import { csv } from 'd3';
import seoulMap from './data/seoul.csv';
import './SeoulMap.css';

class SeoulMap extends Component {
    componentDidMount() {
        const data = (seoulMap)
        this.drawSeoul(data)
    }
    drawSeoul(data) {
        const projection = d3.geoMercator();
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", 600)
            .attr("height", 400)

        svgCanvas.selectAll("text")
            .data(data).enter()
                .append("text")
                .attr("x", function(d) { return projection([d.xCor, d.yCor])[0]; })
                .attr("y", function(d) { return projection([d.xCor, d.yCor])[0]; })
                .text(function(d) { return d.name});
    }
    render() { return <div ref="canvas"></div> }
}

export default SeoulMap;