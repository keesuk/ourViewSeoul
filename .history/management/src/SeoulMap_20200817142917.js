import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulPlace from './data/seoul.csv';
// import faker from 'faker';

const width = 1280;
const height = 1280;

d3.button = function() {

    var padding = 10,
        radius = 3,
        stdDeviation = 5,
        offsetX = 2,
        offsetY = 4;
  
    function my(selection) {
        
        selection.each(function(d, i) {
        var g = d3.select(this)
            .attr("id", "d3-button" + i)
            .attr("transform", "translate(" + d.x + "," + d.y + ")");
  
        var text = g.append("text").text(d.label);
        var bbox = text.node().getBBox();
        var rect = g.insert("rect", "text")
            .attr("x", bbox.x - padding)
            .attr("y", bbox.y - padding)
            .attr("width", bbox.width + 2 * padding)
            .attr("height", bbox.height + 2 * padding)
            .attr("rx", radius)
            .attr("ry", radius)
            .on("mouseover", mouseover)
            .on("mouseout", mouseout)
            .on("click", click)
          
      });
        
    }
  
    function mouseover() { d3.select(this.parentNode).select("rect").classed("active", true) }
    function mouseout() { d3.select(this.parentNode).select("rect").classed("active", false) }
    function click(d, i) { d.function(); }
  
    return my;
      
  }

class SeoulMap extends Component {
    state = {
        data : [],
    }
    
    componentDidMount() {
        csv(seoulPlace).then( (data) => {
            this.setState( {data} );
        })
    }

    render() { 
        const { data } = this.state;

        return (
            <>
            <div className="svg-container">
                <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 1280 1280" className="svg-content-responsive">
                    {data.map( (d, i) => 
                        <g
                            key={i} 
                            className="station-text" 
                            x={d.xCor}
                            y={height - d.yCor}
                        > {d.station} </g>
                    )}
                </svg>
            </div>
            </>
        )
    }
}

export default SeoulMap;


  
// drawSeoul() {

//     const svgCanvas = d3.select(this.refs.canvas)
//         .append("div")
//         .classed("svg-container", true) 
//         .append("svg")
//         .attr("preserveAspectRatio", "xMinYMin meet")
//         .attr("viewBox", "0 0 1280 1280")
//         .classed("svg-content-responsive", true)
    
//     svgCanvas.selectAll("text")
//         .data(dataArray)
//         .enter()
//             .append("text")
//             .classed("text", true)
//             .attr("x", d => { return d.xCor})
//             .attr("y", d => { return height - d.yCor})
//             .text(d => { return d.station})
//             .attr("font-size", "6px")
// }    