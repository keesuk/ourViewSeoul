import React, { Component } from 'react';
import * as d3 from 'd3';
import './SeoulMap.css';
// import * as topojson from 'topojson';
import seoulPlace from './data/seoul.csv';
import { csv } from 'd3';
// import map from './data/seoul_municipalities_topo_simple.json'
// import * as d3queue from 'd3-queue';

const width = 400;
const height = 600;
const scale = 20;

class SeoulMap extends Component {
    state = {
        data : null,
    }

    componentDidMount() {
        d3.csv(seoulPlace, function(data) { console.log(data); });
        this.drawSeoul(this.data)
    }

    drawSeoul(data)  {
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", width)
            .attr("height", height)

        d3.csv("places.csv", (data) => {
            svgCanvas.selectAll("text")
                .data(data).enter()
                .append("text")
                .attr("x", function(d) { return [d.lon, d.lat][0]; })
                .attr("y", function(d) { return [d.lon, d.lat][1]; })
                .text(function(d) { return d.name });
        });
    }
    render() { return <div ref="canvas"></div> }
}

export default SeoulMap;