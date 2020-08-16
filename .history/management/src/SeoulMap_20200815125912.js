import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import seoulMap from './data/seoul.csv';
import './SeoulMap.css';
// import * as topojson from 'topojson';
// import * as d3queue from 'd3-queue';

class SeoulMap extends Component {
    componentDidMount() {
        const data = (seoulMap)
        this.drawSeoul(data)
    }

    drawSeoul(data) {
        const width = 800;
        const height = 600;

        const svg = d3.select(this.refs.canvas).append("svg")
            .attr("width", width)
            .attr("height", height);
            
        const places = svg.append("g").attr("id", "places");

        const projection = d3.geoMercator()
            .center([126.9895, 37.5651])
            .scale(10000)
            .translate([width/2, height/2]);

        d3.csv(seoulMap, function(data) {
            places.selectAll("text")
                .data(data)
                .enter().append("text")
                .attr("x", function(d) { return projection([d.lon, d.lat])[0]; })
                .attr("y", function(d) { return projection([d.lon, d.lat])[1] + 8; })
                .text(function(d) { return d.name });
              });
    }

    render() { 
        return <div ref="canvas"></div> 
    }
}

export default SeoulMap;