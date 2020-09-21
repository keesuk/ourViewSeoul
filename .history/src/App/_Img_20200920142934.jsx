import React, { Component } from 'react';
  
class Img extends Component {
    state = {
            clickValue : .6,
        }


    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const points = this.props.points
        const { width, height, clickValue } = this.state
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
        const {clickValue} = this.state

        return (
            <canvas 
                width={500} 
                height={500}
                onClick={clickValue+.6}
                style={{width:'100%', height:'100%'}} 
                ref="canvas" 
            />
        );
    }
}

export default Img;