import React, { Component } from 'react';

const width  = 500;
const height = width;

const sendCountLimit = 6;

const circle   = 0;
const rect     = 1;
const ellipse  = 2;
const triangle = 3;
const rhombus  = 4;

const colorItems    = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
const shapeItems    = ['●', '◼︎', '⬬', '▲', '♦︎']
const circleItems   = ['🟥', '😁', '🟣', '🕚', '😎']
const rectItems     = ['🩳', '🟥', '📺', '💾', '⏹']
const ellipseItems  = ['🌀', '🏮', '💊', '🏈', '🪐']
const triangleItems = ['💜', '🔺', '⛱', '💩', '🙏']
const rhombusItems  = ['💋', '💎', '🪁', '🔷', '💠']


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
        this.updateCanvas()
        this.clickPoint()
    }

    updateCanvas() {
        const { points, locationId, locationName } = this.props
        const count = this.state.count
        const context = this.refs.canvas.getContext('2d');
        const whatItWillBe = []
        
        context.fillStyle = "#fff";
        context.fillRect(0, 0, width, height);

        chooseShape(whatItWillBe, shapeItems, locationId)
        
        for (let i = 0, n = points && points.length; i < n; i += 2) {
            context.beginPath();
            const x = points[i]
            const y = points[i + 1]
            imgMaker(whatItWillBe, count, context, x, y)
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


function randomize(items) {
    const item = items[Math.floor(Math.random() * items.length)]
    return item
}

function chooseShape(whatItWillBe, items, id) {
    if(id === '0')whatItWillBe.push(items[circle], randomize(circleItems), items[circle], randomize(circleItems)) 
    else if(id === '1')whatItWillBe.push(items[rect], randomize(rectItems), items[rect], randomize(rectItems)) 
    else if(id === '2')whatItWillBe.push(items[ellipse], randomize(ellipseItems), items[ellipse], randomize(ellipseItems)) 
    else if(id === '3')whatItWillBe.push(items[triangle], randomize(triangleItems), items[triangle], randomize(triangleItems)) 
    else if(id === '4')whatItWillBe.push(items[rhombus], randomize(rhombusItems), items[rhombus], randomize(rhombusItems)) 

    return whatItWillBe
}

function imgMaker(whatItWillBe, count, context, x, y){

    function colorMaker(items) {
        const item = []
        for(let i = 0; i < 6; i++)item.push(randomize(items))
        return item[0]+item[1]+item[2]+item[3]+item[4]+item[5];
    }

    if(count === 0){
        context.font = '8.8px sans'
        context.fillText(whatItWillBe[0], x+1.5, y)
        context.fillStyle = "#000";
        context.fill();
    }else if(count === 1){
        context.font = '10px sans'
        context.fillText(whatItWillBe[1], x-1, y)
    }else if(count === 2){
        context.font = '8.8px sans'
        context.fillText(whatItWillBe[2], x+1.5, y)
        context.fillStyle = '#' + colorMaker(colorItems)
        context.fill();
    }else if(count === 3){
        context.font = '10px sans'
        context.fillText(whatItWillBe[3], x-1, y)
    }else if(count === 4){
        context.font = '12px sans'
        context.fillText(whatItWillBe[2], x, y)
        context.fillStyle = '#' + colorMaker(colorItems) *10
        context.fill();
    }else if(count === 5){
        context.font = '12px sans'
        context.fillText(whatItWillBe[2], x, y)
        context.fillStyle = '#' + colorMaker(colorItems)
        context.fill();
    }
}