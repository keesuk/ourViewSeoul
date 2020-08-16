import React, { Component } from 'react';
import * as d3 from 'd3';
import './SeoulMap.css';
// import * as topojson from 'topojson';
import seoulPlace from './data/seoul.csv';
// import { csv } from 'd3';
// import map from './data/seoul_municipalities_topo_simple.json'
// import * as d3queue from 'd3-queue';

const width = 1280;
const height = 1280;
const scale = 20;

class SeoulMap extends Component {
    state = {
        data : null,
    }

    componentDidMount() {
        this.drawSeoul()
    }

    drawSeoul()  {
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", width)
            .attr("height", height)

        d3.csv(seoulPlace, (data) => {
            svgCanvas.selectAll("text")
                .data(data).enter()
                .append("text")
                .attr("x", (data) => [data.xCor, data.yCor][0] )
                .attr("y", (data) => [data.xCor, data.yCor][1] )
                .text((data) => { return data.station })
        });
    }
    render() { return <div ref="canvas"></div> }
}

export default SeoulMap;