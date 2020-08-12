import React, { Component } from 'react';
import * as d3 from 'd3';
import * as StackBlur from 'stackblur-canvas';
import Worker from './Worker';

const height = 400;
const width = 600;
const threshold = 0.9;
const context = svgCanvas.getContext("2d")
const svgCanvas = d3.select(this.refs.canvas)

class Img extends Component {
    state = {
        imgae : null
    }

    componentDidMount() {
        this.loadImage();
        this.drawImg();
    }

    componentDidUpdate() {
        if (oldProps.src !== this.props.src) {
            this.loadImage();
        }
    }

    loadImage() {
        this.image = new window.Image();
        this.image.src = this.props.src;
        this.image.addEventListener('load', this.handleLoad);
        const density = this.getDensityFunction(context);
        const points = this.generatePoints(density, 10000);
      
        context.drawImage(this.image, 0, 0, width, height);
        StackBlur.canvasRGBA(this.refs.canvas, 0, 0, width, height, 5);
        context.drawImage(this.image, 0, 0, width, height);
        context.attr("fill", "black")
        Worker.onmessage = (event) => this.draw(event.data);
        Worker.postMessage({ density, points, widht, height, threshold });
    }

    handleLoad = () => {
        this.setState({
            image: this.image
        });
    };

    draw = (points) => {
        context.clearRect(width, 0, width, height);
      
        points.forEach( point => {
            context.beginPath();
      
            if (point.r) {
                context.arc(width + point[0], point[1], point.r, 0, 2 * Math.PI);
                context.fill();
            }
        });
    }

    generatePoints = (density, numPoints) => {
        return d3.range(numPoints).map(() => {
            let x, y, d;

            while (true) {
                x = Math.random() * width;
                y = Math.random() * height;
                d = density[width * Math.floor(y) + Math.floor(x)];

                if(Math.random() > d) {
                    return [x, y, d];
                }
            }
        });
    }

    getDensityFunction = (context) => {
        const data = context.getImageData(0, 0, width, height).data;

        return d3.range(0, data.lenght, 4).map(i => data[i]/ 255);
    }

    render() { 
        return <div ref="canvas"></div> 
    }
}

export default Img;