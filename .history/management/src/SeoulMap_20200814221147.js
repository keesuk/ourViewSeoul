import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import * as d3queue from 'd3-queue';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulMap from './data/seoul.csv';

class SeoulMap extends Component {
    componentDidMount() {
        const data = (seoulMap)
    }
    render() { return <div ref="canvas"></div> }
}

export default SeoulMap;