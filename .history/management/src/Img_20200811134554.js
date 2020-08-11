import React, { Component } from 'react';
import * as d3 from 'd3';

class Img extends Component {
    componentDidMount() {
        const data = [ 2, 4, 2, 6, 8 ]
        this.drawImg(data)
    }

    drawImg(data)  {
        const canvas = d3.select(this.refs.canvas),
        const context = canvas.getContext("2d"),
        const img = new Image(),
        const width = 800,
        cosnt height = 1000,
        const threshold = 0.9,
        const worker = new Worker;


        svgCanvas.selectAll("rect")
            .data(data).enter()
            .append("rect")
            .attr("width", 40)
            .attr("height", (datapoint) => datapoint * 20)
            .attr("fill", "orange")
    }

    render() { 
        

        return <div ref="canvas"></div> 
    }
}

export default Img;