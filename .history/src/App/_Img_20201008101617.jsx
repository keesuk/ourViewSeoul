import React, { Component } from 'react';

const width = 500;
const height = width;
const sendCountLimit = 4;
const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function randomize() {
    const itemsOne = items[Math.floor(Math.random() * items.length)];
    return itemsOne;
}

function checkImg(count, context, x, y){
    if(count === 0){
        context.moveTo(x + 1.5, y);
        context.arc(x, y, 2.7, 0, 2 * Math.PI);
        context.fillStyle = "#000";
        context.fill();
    }else if(count === 1){
        context.font = '7px sans'
        context.fillText('😁', x-1, y)
    }else if(count === 2){
        context.moveTo(x + 1.5, y);
        context.arc(x, y, 2.7, 0, 2 * Math.PI);
        context.fillStyle = '#' + randomize() + randomize() + randomize() + randomize() + randomize() + randomize();
        context.fill();
    }
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
            checkImg(count, context, x, y)
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