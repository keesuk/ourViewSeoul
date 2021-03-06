import React, { Component } from 'react';
import * as d3 from 'd3';
import * as StackBlur from 'stackblur-canvas';
// import Worker from './Worker';


class Img extends Component {
    constructor(props) {
        super(props);
        this.height = 400;
        this.width = 600;
        this.this.threshold = 0.9;
        this.context = this.svgCanvas.getContext("2d");
        this.svgCanvas = d3.select(this.refs.canvas);
        this.loadImage = this.loadImage.bind(this)
        this.draw = this.draw.bind(this)
        this.generatePoints = this.generatePoints.bind(this)
        this.getDensityFunction = this.getDensityFunction.bind(this)
        this.state = {
            imgae : null
        }
    
    }
    
    componentDidMount() {
        this.loadImage();
        this.drawImg();
    }

    componentDidUpdate(oldProps) {
        if (oldProps.src !== this.props.src) {
            this.loadImage();
        }
    }

    loadImage() {
        this.image = new window.Image();
        this.image.src = this.props.src;
        this.image.addEventListener('load', this.handleLoad);

        const density = this.getDensityFunction(this.context);
      
        this.context.drawImage(this.image, 0, 0, this.width, this.height);
        StackBlur.canvasRGBA(this.canvas, 0, 0, this.width, this.height, 5);

        const points = this.generatePoints(density, 10000);

        this.context.drawImage(this.image, 0, 0, this.width, this.height);
        this.context.attr("fill", "black")
        
        // Worker.onmessage = (event) => this.draw(event.data);
        // Worker.postMessage({ density, points, this.width, this.height, this.threshold });
    }

    handleLoad = () => {
        this.setState({
            image: this.image
        });
    };

    draw(points) {
        this.context.clearRect(this.width, 0, this.width, this.height);
      
        points.forEach( point => {
            this.context.beginPath();
      
            if (point.r) {
                this.context.arc(this.width + point[0], point[1], point.r, 0, 2 * Math.PI);
                this.context.fill();
            }
        });
    }

    generatePoints(density, numPoints) {
        return d3.range(numPoints).map(() => {
            let x, y, d;

            while (true) {
                x = Math.random() * this.width;
                y = Math.random() * this.height;
                d = density[this.width * Math.floor(y) + Math.floor(x)];

                if(Math.random() > d) {
                    return [x, y, d];
                }
            }
        });
    }

    getDensityFunction(context) {
        const data = this.context.getImageData(0, 0, this.width, this.height).data;

        return d3.range(0, data.lenght, 4).map(i => data[i]/ 255);
    }

    render() { 
        return <div ref="canvas"></div> 
    }
}

export default Img;