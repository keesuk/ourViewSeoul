import React, { Component } from 'react';
import * as d3 from 'd3';
// import * as topojson from 'topojson';
// import * as d3queue from 'd3-queue';
// import { csv } from 'd3';

class BarChart extends Component {
    componentDidMount() {
        const data = [ 2, 4, 2, 6, 8 ]
        this.drawBarChart(data)
    }

    drawBarChart(data) {
        const canvasHeight = 1280;
        const canvasWidth = 1280;
        const scale = 20;
        
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("viewBox", `0 0 1280 1280`)
            .style("border", "1px solid black")

        svgCanvas.selectAll("rect")
            .data(data).enter()
                .append("rect")
                .attr("width", 40)
                .attr("height", (datapoint) => datapoint * 20)
                .attr("fill", "orange")
                .attr("x", (datapoint, iteration) => iteration * 45)
                .attr("y", (datapoint) => canvasHeight - datapoint * scale)

        svgCanvas.selectAll("text")
            .data(data).enter()
                .append("text")
                .attr("x", (dataPoint, i) => i * 45 + 10)
                .attr("y", (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
                .text(dataPoint => dataPoint)
    }

    render() { return <div ref='canvas'></div>}
}

export default BarChart