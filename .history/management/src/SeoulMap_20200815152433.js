import React, { Component } from 'react';
import * as d3 from 'd3';
import './SeoulMap.css';
import { csv } from 'd3';
import * as topojson from 'topojson';
import Seoul from './data/seoul.csv';
import map from './data/seoul_municipalities_topo_simple.json'
// import * as d3queue from 'd3-queue';

class SeoulMap extends Component {
    state = {
        Seouldata : null,
        seoulmap : null,
    }
    
    componentDidMount() {
        csv(Seoul).then(Seouldata => {
            this.setState({ Seouldata })
        })
        topojson(map).then(seoulmap => {
            this.setState({seoulmap})
        })
    }

    componentDidUpdate() {
        const width = 800;
        const height = 600;

        const svg = d3.select(this.refs.canvas).append("svg")
            .attr("width", width)
            .attr("height", height);
        
        const places = svg.append("g").attr("id", "places");

        const projection = d3.geoMercator()
            .center([126.9895, 37.5651])
            .scale(100000)
            .translate([width/2, height/2]);

        const path = d3.geoPath(projection);    

        d3.json(this.state.map, function(error, data) {
            map.selectAll('path')
                .data(data)
              .enter().append('path')
                .attr('class', function(d) { console.log(); return 'municipality c' + d.properties.code })
                .attr('d', path);
      
            map.selectAll('text')
                .data(data)
              .enter().append("text")
                .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
                .attr("dy", ".35em")
                .attr("class", "municipality-label")
                .text(function(d) { return d.properties.name; })
          });
      

        d3.csv(this.state.Seouldata, function(data) {
            places.selectAll("text")
                .data(data)
                .enter().append("text")
                .attr("x", function(d) { return projection([d.xCor, d.yCor])[0]; })
                .attr("y", function(d) { return projection([d.xCor, d.yCor])[1]; })
                .text(function(d) { return d.station });
              });
    }

    render() { 
        const { data } = this.state;
        return <div ref="canvas"></div> 
    }
}

export default SeoulMap;