import React, { Component } from 'react';

const width = 500;
const height = width;

class Img extends Component {
    constructor() {
        super();
        this.state = { clickValue : .7 };
        this.clickPoint = this.clickPoint.bind(this);
    }


    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const { points } = this.props
        const { clickValue } = this.state
        const context = this.refs.canvas.getContext('2d');
        
        context.fillStyle = "#fff";
        context.fillRect(0, 0, width, height);
        context.beginPath();
        for (let i = 0, n = points && points.length; i < n; i += 2) {
            const x = points[i], y = points[i + 1];
            context.moveTo(x + 1.5, y);
            context.arc(x, y, 2+clickValue, 0, 2 * Math.PI);
        }
        context.fillStyle = "#000";
        context.fill();
    }

    clickPoint() {
        this.setState(state => ({clickValue : state.clickValue + 1.4}))
        this.updateCanvas();
    }
      
    render() {
        return (
            <canvas 
                width={width} 
                height={height}
                onClick={this.clickPoint}
                style={{width:'100%', height:'100%', cursor:'pointer'}} 
                ref="canvas" 
            />
        );
    }
}

export default Img;