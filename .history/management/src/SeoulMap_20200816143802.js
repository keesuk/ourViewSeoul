import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulPlace from './data/seoul.csv';
import  DragScroll from 'react-dragscroll';

const width = 1280;
const height = 1280;

class SeoulMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : null,
        }
    }

    componentDidMount() {
        csv(seoulPlace).then(data => {
            this.setState( {data} );
            this.drawSeoul(this.state.data);
        })
    }

    drawSeoul(dataArray) {
        // console.log(dataArray);
        
        const svgCanvas = d3.select(this.refs.canvas)
            .append("div")
            .classed("svg-container", true) 
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 1280 720")
            .classed("svg-content-responsive", true)
        
        svgCanvas.selectAll("text")
            .data(dataArray)
            .enter()
                .append("text")
                .classed("text", true)
                .attr("x", d => { return d.xCor})
                .attr("y", d => { return height - d.yCor})
                .text(d => { return d.station})
                .attr("font-size", "6px")
    }

   
    render() { 
        return (
            <div ref="canvas"/>
            <DragScroll >
                <div>test1</div>
                <div>test2</div>
                <div>test3</div>
                <div>test4</div>
                <div>test5</div>
                <div>test6</div>
                <div>test7</div>
                <div>test8</div>
                <div>test9</div>
                <div>test10</div>
                <div>test11</div>
                <div>test12</div>
                <div>test13</div>
                <div>test14</div>
                <div>test15</div>
                <div>test16</div>
                <div>test17</div>
                <div>test18</div>
                <div>test19</div>
                <div>test20</div>
            </DragScroll>
        )
    }
}

export default SeoulMap;