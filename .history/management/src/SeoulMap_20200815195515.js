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

class SeoulMap extends Component {

    componentDidMount() {
        this.drawSeoul()
    }

    drawSeoul()  {
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", width)
            .attr("height", height)

        const places = svgCanvas.append("g").attr("id", "places");
        const xScale = svgCanvas.scaleLinear().range([0, width]);
        const yScale = svgCanvas.scaleLinear().range([0, height]);

        d3.csv(seoulPlace, (data) => {

            places.selectAll("circle")
                .data(data)
            .enter().append("circle")
                .attr("cx", (d) => { return xScale(d.xCor);})
                .attr("cy", (d) => { return yScale(d.yCor);})
                .attr("r", 10);

            places.selectAll("text")
                .data(data).enter()
                .append("text")
                .attr("x", (d) => { return xScale(d.xCor);})
                .attr("y", (d) => { return yScale(d.yCor);})
                .text((d) => { return d.station })
                console.log(data);
        });
    }
    render() { return <div ref="canvas"></div> }
}

export default SeoulMap;