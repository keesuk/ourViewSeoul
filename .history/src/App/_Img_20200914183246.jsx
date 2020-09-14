import React, { Component } from 'react';
import * as d3 from 'd3';
import data from '../data/seoul.json'
import Worker from 'worker-loader!./Worker'; // eslint-disable-line import/no-webpack-loader-syntax

const width = 600;
  
class Img extends Component {
    state = {
            width : null,
            height : null,
            data : [],
            clickValue : .6,
        }


    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const { width, height, data, clickValue } = this.state
        const context = this.refs.canvas.getContext('2d');

        function messaged({ data: points}) {
            context.fillStyle = "#fff";
            context.fillRect(0, 0, width, height);
            context.beginPath();
            for (let i = 0, n = points.length; i < n; i += 2) {
                const x = points[i], y = points[i + 1];
                context.moveTo(x + 1.5, y);
                context.arc(x, y, 2+clickValue, 0, 2 * Math.PI);
            }
            context.fillStyle = "#000";
            context.fill();
        }
    }
      
    render() {
        return (
            <canvas width={width} height={width} style={{width:'100%', height:'100%'}} ref="canvas" />
        );
    }
}

export default Img;



