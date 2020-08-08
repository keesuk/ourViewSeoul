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
            .defer(d3.json, 'korea.json')
            .defer(d3.json, 'seoul.json')
            .await((error, seData, seCongress) => {
                this.setState({
                    seData,
                    seCongress
            });
        })
    }

    componentDidUpdate() {
        const svg = d3.select(this.refs.anchor);

        const projection = d3.geoAlbers.geoAlbers()
        .scale(1280)
        .translate([widht / 2, height / 2]);

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