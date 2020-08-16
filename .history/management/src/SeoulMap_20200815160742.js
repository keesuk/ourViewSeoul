import React, { Component } from 'react';
import * as d3 from 'd3';
import './SeoulMap.css';
import { csv } from 'd3';
// import * as topojson from 'topojson';
import Seoul from './data/seoul.csv';
import map from './data/seoul_municipalities_topo_simple.json'
// import * as d3queue from 'd3-queue';

class SeoulMap extends Component {
    state = {
        Seouldata : null,
        seoulmap : null,
    }
    
    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() { 
        const { data } = this.state;
        return (
            <div ref={wrapperRef}>
                <svg ref={svgRef}/>
            </div> 
        )
    }
}

export default SeoulMap;