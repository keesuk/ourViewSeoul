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
        data: [],
    }

    componentDidMount() {

        csv(seoulPlace)
            .then( data => this.setState({data}));

            console.log(this.state.data)

    }

    render() { 
        return null
        }
}

export default SeoulMap;