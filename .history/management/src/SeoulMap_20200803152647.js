import React, { Component } from 'react';
// import * as topojson from 'topojson';
// import * as d3queue from 'd3-queue';
import * as d3 from 'd3';
// import { csv } from 'd3';

class SeoulMap extends Component {
    render () {
        return (
            d3.select(this.refs.myList)
                .append("li")
                .text("banana"))
    }
}
export default SeoulMap;