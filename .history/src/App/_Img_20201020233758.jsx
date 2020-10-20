import React, { Component } from 'react';
import {randomize} from './_Diagram'

const width  = 500;
const height = width;

const sendCountLimit = 6;

const colorItems    = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
const colorList     = ['#E20000','#006CC4','#087A0D','#7B2E8E','#EFC820']
const shapeItems    = ['●','◼︎','▲','◆','⬬']

const ItemsList = [
    ['🟥', '😁', '🟣', '🕚', '😎'],
    ['🩳', '🟥', '📺', '💾', '⏹'],
    ['🌀', '🏮', '💊', '🏈', '🪐'],
    ['💜', '🔺', '⛱', '💩', '🙏'],
    ['💋', '💎', '🪁', '🔷', '💠']
]

class Img extends Component {
    constructor() {
        super();
        this.state = { 
            count : 0,
            finalOn : false,
            ImgProp : [],
        };
        this.finalCanvas = this.finalCanvas.bind(this);
        this.clickPoint = this.clickPoint.bind(this);
        this.sendCount = this.sendCount.bind(this);
    }


    componentDidMount() {
        this.updateCanvas()
        this.chooseShape()
        this.clickPoint()
    }

    chooseShape() {
        const id = this.props.locationTagID

        this.setState(state => ({ImgProp : [...state.ImgProp, 
            id, //태그 번호
            colorList[id], //도형별 고유 컬러
            shapeItems[id], //도형
            randomize(ItemsList[id]), //랜덤화 
            randomize(ItemsList[id]), 
            randomize(ItemsList[id]) 
        ]}))
    }

    updateCanvas() {
        const points = this.props.points
        const { count, ImgProp } = this.state
        const context = this.refs.canvas.getContext('2d')
        
        context.fillStyle = 'white'
        context.fillRect(0, 0, width, height)

        for(let i = 0, n = points && points.length; i < n; i += 2){
            context.beginPath()
            const x = points[i]
            const y = points[i + 1]
            imgMaker(this.props.locationTagID, ImgProp, count, context, x, y)
        }
    }

    finalCanvas() {
        const ImgProp = this.state.ImgProp
        const context = this.refs.canvas.getContext('2d')
        
        context.fillStyle = 'white'
        context.fillRect(0, 0, width, height)

        context.font = '400px sans'
        context.textAlign = 'center'
        context.fillStyle = ImgProp[1]
        if(ImgProp[2] === 4 ){ return context.rotate(20*Math.PI / 180) }
        context.fillText(ImgProp[2], 250, 350)
        context.font = '600 45px Noto Sans KR'
        context.textAlign = 'center'
        context.fillText(this.props.locationName, 250, 420)
    }

    clickPoint() {
        this.setState(state => ({count : state.count + 1}))
        if(this.state.count === sendCountLimit){
            this.setState({finalOn : true})
            this.sendCount()
            this.finalCanvas()
        }else{
            this.updateCanvas()
        }
    }

    sendCount() {
        this.props.onOk(this.props.chilcOk)
    }

      
    render() {
        return (
            <>{this.state.finalOn 
            ?<canvas
                width={width} 
                height={height}
                style={{width:'100%', height:'100%'}}
                ref={this.canvasRef} 
            />
            :<canvas 
                width={width} 
                height={height}
                onClick={this.clickPoint}
                style={{width:'100%', height:'100%', cursor:'pointer'}} 
                ref="canvas" 
            />}
            </>
        );
    }
}

export default Img;

function imgMaker(id, ImgProp, count, context, x, y){

    function colorMaker(items) {
        const item = []
        for(let i = 0; i < 6; i++)item.push(randomize(items))
        return item[0]+item[1]+item[2]+item[3]+item[4]+item[5];
    }

    if(count === 0){
        context.font = '8.8px sans'
        context.fillStyle = "#000";
        context.fillText(shapeItems[id], x+1.5, y)
        context.fill();
    }else if(count === 1){
        context.font = '10px sans'
        context.fillText(ImgProp[3], x, y)
    }else if(count === 2){
        context.font = '8.8px sans'
        context.fillStyle = '#' + colorMaker(colorItems)
        context.fillText(ImgProp[2], x+1.5, y)
        context.fill();
    }else if(count === 3){
        context.font = '10px sans'
        context.fillText(ImgProp[4], x-1, y)
    }else if(count === 4){
        context.font = '11px sans'
        context.fillStyle = '#' + colorMaker(colorItems)
        context.fillText(ImgProp[2], x, y)
        context.fill();
    }else if(count === 5){
        context.font = '11px sans'
        context.fillStyle = ImgProp[1]
        context.fillText(ImgProp[2], x, y)
        context.fill();
    }
}

