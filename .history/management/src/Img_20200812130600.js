import React, { Component } from 'react';
import * as d3 from 'd3';
import * as StackBlur from 'stackblur-canvas';
// import Worker from './Worker';

const height = 400;
const width = 600;
const threshold = 0.9;

class Img extends Component {
    constructor(props) {
        super(props);
        this.loadImage = this.loadImage.bind(this)
        this.state = {
            imgae : null
        }
    }
    
    componentDidMount() {
        this.loadImage();
    }

    componentDidUpdate(oldProps) {
        if (oldProps.src !== this.props.src) {
            this.loadImage();
        }
    }


    loadImage() {
        this.image = new window.Image();
        this.image.src = this.props.src;
        this.image.addEventListener('load', handleLoad);

        const context = svgCanvas.getContext("2d")
        const svgCanvas = d3.select(this.refs.canvas)
        const density = this.getDensityFunction(context);
      
        context.drawImage(this.image, 0, 0, width, height);
        StackBlur.canvasRGBA(this.canvas, 0, 0, width, height, 5);

        const points = this.generatePoints(density, 10000);

        context.drawImage(this.image, 0, 0, width, height);
        context.attr("fill", "black")
        
        Worker.onmessage = (event) => this.draw(event.data);
        Worker.postMessage({ density, points, width, height, threshold });
    }

    render() { 
        return <div ref="canvas"></div> 
    }
}

export default Img;