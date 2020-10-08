import React, { Component } from 'react';

const width = 500;
const height = width;

function textFill(context, x, y) {
    context.font = '7px sans'
    context.fillText('😁', x+1.5, y)
};

function arcFill(context, x, y) {
    context.moveTo(x + 1.5, y);
    context.arc(x, y, 2.7, 0, 2 * Math.PI);
}

class Img extends Component {
    constructor() {
        super();
        this.state = { 
            count : 0,
        };
        this.clickPoint = this.clickPoint.bind(this);
        this.sendCount = this.sendCount.bind(this);
    }


    componentDidMount() {
        this.updateCanvas();
    }

    updateCanvas() {
        const { points, locationId } = this.props
        const { clickValue } = this.state
        const context = this.refs.canvas.getContext('2d');
        
        context.fillStyle = "#fff";
        context.fillRect(0, 0, width, height);
        context.beginPath();
        for (let i = 0, n = points && points.length; i < n; i += 2) {
            const x = points[i]
            const y = points[i + 1]
            textFill(context, x, y)
        }
        context.fillStyle = "#000";
        context.fill();
    }

    clickPoint() {
        this.setState(state => ({
            count : state.count + 1,
        }))
        if(this.state.count === 4){
            this.sendCount();
        }
        this.updateCanvas();
    }

    sendCount() {
        this.props.onOk(this.props.chilcOk)
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