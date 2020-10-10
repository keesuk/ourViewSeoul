import React, { Component } from 'react';
import Worker from 'worker-loader!./Worker'; // eslint-disable-line import/no-webpack-loader-syntax

const width = 500;
const height = width;
const sendCountLimit = 4;


class Img extends Component {
    constructor() {
        super();
        this.state = { 
            count : 0,
        };
        this.worker = new Worker();
        this.clickPoint = this.clickPoint.bind(this);
        this.sendCount = this.sendCount.bind(this);
    }


    componentDidMount() {
        this.updateCanvas();
        this.clickPoint();
    }

    updateCanvas() {
        const { points, locationId } = this.props
        const count = this.state.count
        const context = this.refs.canvas.getContext('2d');
        
        context.fillStyle = "#fff";
        context.fillRect(0, 0, width, height);
        for (let i = 0, n = points && points.length; i < n; i += 2) {
            context.beginPath();
            const x = points[i]
            const y = points[i + 1]
            this.worker.addEventListener("message", messaged);
            this.worker.postMessage({count, context, x, y});
        }
    }

    clickPoint() {
        this.setState(state => ({count : state.count + 1}))
        if(this.state.count === sendCountLimit){
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