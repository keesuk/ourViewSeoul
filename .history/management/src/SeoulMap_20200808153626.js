import React, { Component } from 'react';
// import * as d3 from 'd3';
// import * as topojson from 'topojson';
// import * as d3queue from 'd3-queue';
// import { csv } from 'd3';
import './SeoulMap.css';
import seoulMap from './data/map.svg';

class SeoulMap extends Component {
    render() {
        return(
            <div>
                <img src={seoulMap}/>
            </div>
        )
    }
}

export default SeoulMap;