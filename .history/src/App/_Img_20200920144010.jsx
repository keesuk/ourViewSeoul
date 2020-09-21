import React, { Component } from 'react';

const width = 500;
const height = width

class Img extends Component {
    state = {
            clickValue : .6,
        }


    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const points = this.props.points
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
      
    render() {
        const { clickValue, width, height } = this.state

        return (
            <canvas 
                width={width} 
                height={height}
                onClick={clickValue+.6}
                style={{width:'100%', height:'100%'}} 
                ref="canvas" 
            />
        );
    }
}

export default Img;