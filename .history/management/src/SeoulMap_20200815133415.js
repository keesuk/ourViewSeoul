import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoul from './data/seoul.csv'
// import * as topojson from 'topojson';
// import * as d3queue from 'd3-queue';

class SeoulMap extends Component {
    state = {
        data: [],
    }
    
    componentDidMount() {
        csv(seoul).then(data => {
            this.setState({ data });
        })
        this.drawSeoul(this.state);
        console.log(this.state)
    }

    drawSeoul(data) {
        const width = 800;
        const height = 600;

        const svg = d3.select(this.refs.canvas).append("svg")
            .attr("width", width)
            .attr("height", height);
            
        const places = svg.append("g").attr("id", "places");

        const projection = d3.geoMercator()

        d3.csv(data, function(data) {
            places.selectAll("text")
                .data(data)
                .enter().append("text")
                .attr("x", function(d) { return projection([d.xCor, d.yCor])[0]; })
                .attr("y", function(d) { return projection([d.xCor, d.yCor])[1]; })
                .text(function(d) { return d.station });
              });
    }

    render() { 
        return <div ref="canvas"></div> 
    }
}

export default SeoulMap;