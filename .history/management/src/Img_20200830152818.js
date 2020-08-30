import React, { Component } from 'react';
import * as d3 from 'd3';
import * as StackBlur from 'stackblur-canvas';
import Worker from 'worker-loader!./Worker'; // eslint-disable-line import/no-webpack-loader-syntax

const width = 800;
const height = 1000;
const threshold = 0.9;

function getDensityFunction(props) {
    const {context} = props
    const data = context.getImageData(0, 0, width, height).data;

    return d3.range(0, data.length, 4).map(i => data[i] / 255);
}

function generatePoints(props) {
    const {density, numPoints} = props
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

class Img extends Component {

    componentDidMount() {
        this.worker = new Worker();
        this.updateCanvas();
    }

    updateCanvas() {
        const canvas = d3.select(this.refs.canvas)
        const context = this.refs.canvas.getContext('2d');
        const img = new Image();

        context.fillStyle = "#444";

        img.src = this.props.src;
        img.onload = () => {
            context.drawImage(img, 0, 0, width, height)

            StackBlur.canvasRGB(canvas, 0, 0, width, height)
            const density = getDensityFunction({context});
          
            context.drawImage(img, 0, 0, width, height);
          
            const points = generatePoints({density, numPoints : 10000});

            this.worker.postMessage({ density, points, width, height, threshold });
            this.worker.onmessage = (event) => this.draw(event.data);
        }

        this.draw = (props) => {
            const points = props
            context.clearRect(width, 0, width, height);
        
            points.forEach(function(point) {
                context.beginPath();
        
                if (point.r) {
                    context.arc(width + point[0], point[1], point.r, 0, 2 * Math.PI);
                    context.fill();
                    console.log(context);
                }
            });
        }
    }
    
    render() {
        return (
             <canvas ref="canvas" />
        );
    }
}

export default Img;