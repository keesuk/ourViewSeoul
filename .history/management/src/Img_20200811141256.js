import React, { Component } from 'react';
import * as d3 from 'd3';
import Worker from './Worker';

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

        img.onload = () => {
            context.drawImage(img, 0, 0, width, height);

            StackBlur.canvasRGBA(canvas, 0, 0, width, height, 5);
            const density = getDensityFunction(context);

            context.drawImage(img, 0, 0, width, height);

            const points = generatePoints(density, 10000);

            Worker.onmessage = (event) => draw(event.data);

            Worker.postMessage({ density, points, widht, height, threshold });
        }

        draw = (points) => {
            context.clearRext(widht, 0, widht, height);

            points.forEach((point)=> {
                context.beginPath();

                if(point.r) {
                    context.arc(widht + point[0], point[1], point.r, 0, 2 * Math.PI);
                    context.fill();
                }
            });
        }
    }

    render() { 
        return <div ref="canvas"></div> 
    }
}

export default Img;