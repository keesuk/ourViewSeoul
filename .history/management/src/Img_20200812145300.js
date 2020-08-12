import React, { Component } from 'react';
import * as d3 from 'd3';
import * as StackBlur from 'stackblur-canvas';
import Worker from './Worker';

const height = 400;
const width = 600;
const threshold = 0.9;

class Img extends Component {
    constructor(props) {
        super(props);
        this.image = this.props
        this.imgRef = React.createRef();
        this.state = {
        }
    }

    componentDidMount() {
        const svgCanvas = d3.select(this.imgRef.canvas);
            context = svgCanvas.getContext('2d');

        this.drawImg(svgCanvas, context)
    }

    drawImg(svgCanvas, context) {
        context.drawImage(this.image, 0, 0, width, height);

        StackBlur.canvasRGBA(svgCanvas, 0, 0, width, height, 5);
        const density = this.getDensityFunction(context);

        context.drawImage(this.image, 0, 0, width, height);

        const points = this.generatePoints(density, 10000);

        Worker.onmessage = event => this.draw(event.data);

        Worker.postMessage({ density, points, width, height, threshold})
    }

    draw(points) {
        const svgCanvas = d3.select(this.imgRefs.canvas);
        const context = svgCanvas.getContext('2d');
        context.clearRect(width, 0, width, height);

        points.forEach( point => {
            context.beginPath();

            if (points.r) {
                context.arc(width + points[0], point[1], point.r, 0, 2 * Math.PI);
                context.fill();
            }
        })
    }

    generatePoints(density, numPoints) {
        return d3.range(numPoints).map( ()=> {
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

    getDensityFunction(context) {
        const data = context.getImageData(0, 0, width, height).data;

        return d3.range(0, data.length, 4).map(i => data[i] / 255);
    }

    render() { 
        return <canvas ref={this.imgRef} ref="canvas"></canvas>
    }
}

export default Img;