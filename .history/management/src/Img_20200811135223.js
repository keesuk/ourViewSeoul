import React, { Component } from 'react';
import * as d3 from 'd3';

class Img extends Component {
    componentDidMount() {
        const data = [ 2, 4, 2, 6, 8 ]
        this.drawImg(data)
    }

    drawImg(data)  {
        const svgCanvas = d3.select(this.refs.canvas)
        const context = svgCanvas.getContext("2d")
        const canvasHeight = 400
        const canvasWidth = 600
        const threshold = 0.9
        const img = img(data)

        context.attr("fill", "black")
    }

    render() { 
        

        return <div ref="canvas"></div> 
    }
}

export default Img;