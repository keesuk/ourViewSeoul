import React, { Component } from 'react';
import * as d3 from 'd3';
import * as StackBlur from 'stackblur-canvas';
import Worker from './Worker';
import { range } from 'd3-array';

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

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
            
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0,0, 300, 300);

        rect({ctx, x: 10, y: 10, width: 50, height: 50});
        rect({ctx, x: 110, y: 110, width: 50, height: 50});
    }
    render() {
         return (
             <canvas ref="canvas" width={300} height={300}/>
         );
    }
}

export default Img