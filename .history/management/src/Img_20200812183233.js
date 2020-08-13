import React, { Component } from 'react';
import * as d3 from 'd3';
import * as StackBlur from 'stackblur-canvas';
import Worker from './Worker';


function draw(points) {
    context.clearRect(width, 0, width, height);
  
    points.forEach(function(point) {
        context.beginPath();
  
        if (point.r) {
            context.arc(width + point[0], point[1], point.r, 0, 2 * Math.PI);
            context.fill();
        }
    });
}

function generatePoints(density, numPoints) {
    return d3.range(numPoints).map(function() {
        let x, y, d;
    
        while (true) {
            x = Math.random() * width;
            y = Math.random() * height;
    
            d = density[width * Math.floor(y) + Math.floor(x)];
    
            if (Math.random() > d) {
                return [x, y, d];
            }
        }
    });
}
    
function getDensityFunction(context) {
    const data = context.getImageData(0, 0, width, height).data;

    return d3.range(0, data.length, 4).map(i => data[i] / 255);
}

class Img extends React.Component {
    constructor(props){
        super(props);
        this.image = this.props
    }
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    updateCanvas() {
        const canvas = d3.select(this.refs.canvas)
        const context = this.refs.canvas.getContext('2d');
        const width = 800;
        const height = 1000;
        const threshold = 0.9;

        StackBlur.canvasRGB(canvas, 0, 0, width, height)
        const density = getDensityFunction(context);
      
        context.drawImage(this.image, 0, 0, width, height);
      
        const points = generatePoints(density, 10000);
      
        Worker.onmessage = event => draw(event.data);
      
        Worker.postMessage({ density, points, width, height, threshold });
    }
    render() {
         return (
             <canvas ref="canvas" />
         );
    }
}

export default Img