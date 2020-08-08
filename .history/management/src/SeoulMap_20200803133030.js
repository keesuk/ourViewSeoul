import React, { Component } from 'react';
import * as topojson from 'topojson';
import * as d3queue from 'd3-queue';
import * as d3 from 'd3';
import usD from 'us.json';
import usC from 'us-congress-113.json';
// import { csv } from 'd3';

class SeoulMap extends Component {
    state = {
        usData: null,
        usCongress: null
    }

    componentWillMount() {
        d3queue.queue()
            .defer(d3.json, usD )
            .defer(d3.json, usC )
            .await((error, usData, usCongress) => {
                this.setState({
                    usData,
                    usCongress
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

        const us = this.state.usData,
            congress = this.state.usCongress;

            svg.append("defs").append("path")
            .attr("id", "land")
            .datum(topojson.feature(us, us.objects.land))
            .attr("d", path);
      
        svg.append("clipPath")
            .attr("id", "clip-land")
          .append("use")
            .attr("xlink:href", "#land");
      
        svg.append("g")
            .attr("class", "districts")
            .attr("clip-path", "url(#clip-land)")
          .selectAll("path")
            .data(topojson.feature(congress, congress.objects.districts).features)
          .enter().append("path")
            .attr("d", path)
          .append("title")
            .text(function(d) { return d.id; });
      
        svg.append("path")
            .attr("class", "district-boundaries")
            .datum(topojson.mesh(congress, congress.objects.districts, function(a, b) { return a !== b && (a.id / 1000 | 0) === (b.id / 1000 | 0); }))
            .attr("d", path);
      
        svg.append("path")
            .attr("class", "state-boundaries")
            .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
            .attr("d", path);
    }



    render () {
        const { usData, usCongress } = this.state;
        
        if (!usData || !usCongress ) {
            return null;
        }

        return <g ref="anchor" />;
    }
}

export default SeoulMap;