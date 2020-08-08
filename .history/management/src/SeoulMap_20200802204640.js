import React, { Component } from 'react';
import * as d3 from 'd3';
// import { csv } from 'd3';

class SeoulMap extends Component {
    componentWillMount() {
        d3.queue().defer(d3.json, 'korea.json')
    	.defer(d3.json, 'cities.json')
	    .await((error, seData, seCongress) => {
            console.log(seData, seCongress);
        })
    }

    render () {
        return null;
    }
}

export default SeoulMap;