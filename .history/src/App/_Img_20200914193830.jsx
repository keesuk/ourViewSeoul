import React, { Component } from 'react';
import * as d3 from 'd3';
import Json from '../data/seoul.json';
import Worker from 'worker-loader!./Worker'; // eslint-disable-line import/no-webpack-loader-syntax
  
class Img extends Component {
    state = {
            width : 600,
            height : 600,
            points : [],
            clickValue : .6,
        }


    componentDidMount() {
        const station = this.props.station
        this.updateCanvas();
        fetch('../data/seoul.json', {
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {console.log(data)})
    }

    updateCanvas() {
        const { width, height, points, clickValue } = this.state
        const context = this.refs.canvas.getContext('2d');

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
      
    render() {
        return (
            <canvas width={this.state.width} height={this.state.height} style={{width:'100%', height:'100%'}} ref="canvas" />
        );
    }
}

export default Img;



