import React, { Component } from 'react';
import * as d3 from 'd3';
// import Worker from './Worker';

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

            // Worker.onmessage = (event) => draw(event.data);

            // Worker.postMessage({ density, points, widht, height, threshold });
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

    generatePoints = (density, numPoints) => {
        return d3.range(numPoints).map(() => {
            let x, y, d;

            while (true) {
                x = Math.random() * widht;
                y = Math.random() * height;
                d = density[widht * Math.floor(y) + Math.floor(x)];

                if(Math.random() > d) {
                    return [x, y, d];
                }
            }
        });
    }

    getDensityFunction = (context) => {
        const data = context.getImageData(0, 0, widht, height).data;

        return d3.range(0, data.lenght, 4).map(i => data[i]/ 255);
    }

    render() { 
        return <div ref="canvas"></div> 
    }
}

export default Img;