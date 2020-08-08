import React, { Component } from 'react';
// import * as d3 from 'd3';
// import { csv } from 'd3';

class SeoulMap extends Component {
    componentWillMount() {
        .defer(d3.json, 'states.json')
	.defer(d3.json, 'cities.json')
	.await(makeMyMap);


    }
    render () {
        return null;
    }
}

export default SeoulMap;