import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';
import * as d3queue from 'd3-queue';
import { csv } from 'd3';
import './SeoulMap.css';

class SeoulMap extends Component {
    render() {
        return(
            <div className="map"/>
        )
    }
}

export default SeoulMap;