import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulPlace from './data/seoul.csv';

const width = 1280;
const height = 1280;

class SeoulMap extends Component {
    
    componentDidMount() {
        // csv(seoulPlace).then(data => {
        //     this.setState( {data} );
        //     console.log(this.state.data)
        // })
        const dataArray = [ 20, 40, 50 ];
        this.drawSeoul(dataArray);
    }

    drawSeoul(dataArray) {
        
        const svgCanvas = d3.select(this.refs.canvas).append("svg")
            .attr("width", width)
            .attr("height", height);
        
        const bars = svgCanvas.selectAll("rect")
            .data(dataArray)
            .enter()
                .append("rect")
                .attr("width", function(d) { return d;})
                .attr("height", 50)
                .attr("y", function(d, i) { return i * 100})
    }

    render() { 
        return <div ref="canvas"></div> 
    }
}

export default SeoulMap;


// d3.csv(data, function(data) {
//     places.selectAll("text")
//         .data(data)
//         .enter().append("text")
//         .attr("x", function(d) { return projection([d.xCor, d.yCor])[0]; })
//         .attr("y", function(d) { return projection([d.xCor, d.yCor])[1]; })
//         .text(function(d) { return d.station });
//       });