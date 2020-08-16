import React, { Component } from 'react';
import * as d3 from 'd3';
import './SeoulMap.css';
// import * as topojson from 'topojson';
import seoulPlace from './data/seoul.csv';
import { csv } from 'd3';
// import map from './data/seoul_municipalities_topo_simple.json'
// import * as d3queue from 'd3-queue';

const width = 1280;
const height = 1280;

class SeoulMap extends Component {
    state = {
        data: null,
        xScale: d3
            .scaleLinear()
            .range(width),
        yScale: d3
            .scaleLinear()
            .range(height),
    };

    xAxis = d3
        .axisBottom()
        .scale(this.state.xScale)
    yAxis = d3
        .axisLeft()
        .scale(this.state.yScale)

    componentDidMount() {
        csv(seoulPlace)
            .then( data => { return data })
        this.drawSeoul()
    }

    static getDerivedStateFromProps(sdata) {
        const { data } = sdata;

        const xDomain = d3.extent(data, d => d.xCor);
        const yDomain = d3.extent(data, d => d.yCor);
        this.xScale.domain(xDomain);
        this.yScale.domain(yDomain);

        const stationsText = data.map(d => {
            return {
                x: this.xScale(d.xCor),
                y: this.yScale(d.yCor),
            }
        });

        return {stationsText};
    }

    render() { 
        return (
        <svg width={width} height={height}>
            {this.state.stationsText.map((d, i) =>
            (<text key={i} x={d.x} y={d.y}/>))}
        </svg>    
        )}
}

export default SeoulMap;