import React, { Component } from 'react';
import * as topojson from 'topojson';
import * as d3 from 'd3';
// import { csv } from 'd3';

class SeoulMap extends Component {
    state = {
        seData: null,
        seCongress: null
    }

    componentWillMount() {
        d3.queue()
            .defer(d3.json, 'us.json')
            .defer(d3.json, 'us-congress-113.json')
            .await((error, seData, seCongress) => {
                this.setState({
                    seData,
                    seCongress
            });
        })
    }

    componentDidUpdate() {
        const svg = d3.select(this.refs.anchor),
        {width, height} = this.props;

        const projection = d3.geoAlbers.geoAlbers()
        .scale(1280)
        .translate([width / 2, height / 2]);

        const path = d3.geoPath(projection);

        const seD = this.state.seData,
            seC = this.state.seCongress;

        var width = 960,
	        height = 500;
 
        var svg = d3.select('body').append('svg')
            .attr('width', width)
            .attr('height', height);
        
        var projection = d3.geo.albersUsa()
            .scale(1000)
            .translate([width / 2, height / 2]);
        
        var path = d3.geo.path()
            .projection(projection);
            
        queue()
            .defer(d3.json, 'states.json')
            .defer(d3.json, 'cities.json')
            .await(makeMyMap);

        function makeMyMap(error, states, cities) {
            svg.append('path')
                .datum(topojson.feature(states, states.objects.usStates))
                    .attr('d', path)
                    .attr('class', 'states');
            svg.selectAll('.cities')
                .data(cities.features)
                .enter()
                .append('path')
                .attr('d', path.pointRadius(5))
                .attr('class', 'cities');
}

    }

    render () {
        const { seData, seCongress } = this.state;
        
        if (!seData || !seCongress ) {
            return null;
        }

        return <g ref="anchor" />;
    }
}

export default SeoulMap;