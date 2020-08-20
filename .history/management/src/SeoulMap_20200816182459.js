import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import { range } from 'd3-array';
import seoulPlace from './data/seoul.csv';
// import faker from 'faker';

const width = 1280;
const height = 1280;

class SeoulMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            seoulData : null,
        }
    }

    componentDidMount() {
        csv(seoulPlace).then(seoulData => {
            this.setState( {seoulData} );

            return seoulData;
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!nextProps.data) return null; // data hasn't been loaded yet so do nothing
        const {data} = nextProps;

        const seoulData = data.map(d => {
            return {
                x : d.xCor,
                y : d.yCor,
                name : d.stations,
            }
        });

        return {seoulData};
    }
    
    render() { 
        return (
            <svg width={width} height={height}>
                {this.state.bars.map((d, i) =>
                    (<rect key={i} x={d.x} y={d.y} width='2' height={d.height} fill={d.fill} />))}
            </svg>
        );
    }
}

export default SeoulMap;


// constructor(props) {
//     super(props);

//     this.state = {
//         data : null,
//     }
// }

// componentDidMount() {
//     csv(seoulPlace).then(data => {
//         this.setState( {data} );
//         this.drawSeoul(data);

//         return data;
//     })
// }

// drawSeoul(dataArray) {
//     // console.log(dataArray);
    
//     const svgCanvas = d3.select(this.refs.canvas)
//         .append("div")
//         .classed("svg-container", true) 
//         .append("svg")
//         .attr("preserveAspectRatio", "xMinYMin meet")
//         .attr("viewBox", "0 0 1280 1280")
//         .classed("svg-content-responsive", true)
    
//     svgCanvas.selectAll("text")
//         .data(dataArray)
//         .enter()
//             .append("text")
//             .classed("text", true)
//             .attr("x", d => { return d.xCor})
//             .attr("y", d => { return height - d.yCor})
//             .text(d => { return d.station})
//             .attr("font-size", "6px")
// }
