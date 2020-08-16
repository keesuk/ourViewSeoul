import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulPlace from './data/seoul.csv';

const width = 1280;
const height = 1280;

class SeoulMap extends Component {
    state = {
        data: [],
    }
    
    componentDidMount() {
        csv(seoulPlace).then(data => {
            this.setState( {data} );
            console.log(this.state.data)
        })
    }

    drawSeoul(data) {
        const {seouldata} = data

        const svg = d3.select(this.refs.canvas).append("svg")
            .attr("width", width)
            .attr("height", height);
            

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