import React, { Component } from 'react';
import * as d3 from 'd3';
import './SeoulMap.css';
// import * as topojson from 'topojson';
import seoulPlace from './data/places.csv';
// import { csv } from 'd3';
import seoulMap from './data/seoul_municipalities_topo_simple.json'
// import * as d3queue from 'd3-queue';

const width = 1280;
const height = 1280;
const scale = 20;

class SeoulMap extends Component {
    state = {
        data : null,
    }

    componentDidMount() {
        this.drawSeoul()
    }

    drawSeoul()  {

        var width = 800,
            height = 600;

        var svg = d3.select("#chart").append("svg")
            .attr("width", width)
            .attr("height", height);

        var map = svg.append("g").attr("id", "map"),
            places = svg.append("g").attr("id", "places");

        var projection = d3.geoMercator()
            .center([126.9895, 37.5651])
            .scale(100000)
            .translate([width/2, height/2]);

        var path = d3.geo.path().projection(projection);

        d3.json(seoulMap, function(error, data) {
        var features = topojson.feature(data, data.objects.seoul_municipalities_geo).features;
        map.selectAll('path')
            .data(features)
            .enter().append('path')
            .attr('class', function(d) { console.log(); return 'municipality c' + d.properties.code })
            .attr('d', path);

        map.selectAll('text')
            .data(features)
            .enter().append("text")
            .attr("transform", function(d) { return "translate(" + path.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .attr("class", "municipality-label")
            .text(function(d) { return d.properties.name; })
        });

        d3.csv(seoulPlace, function(data) {
            places.selectAll("circle")
                .data(data)
            .enter().append("circle")
                .attr("cx", function(d) { return projection([d.lon, d.lat])[0]; })
                .attr("cy", function(d) { return projection([d.lon, d.lat])[1]; })
                .attr("r", 10);

            places.selectAll("text")
                .data(data)
            .enter().append("text")
                .attr("x", function(d) { return projection([d.lon, d.lat])[0]; })
                .attr("y", function(d) { return projection([d.lon, d.lat])[1] + 8; })
                .text(function(d) { return d.name });
    });

    }
    render() { return <div ref="canvas"></div> }
}

export default SeoulMap;




// const svgCanvas = d3.select(this.refs.canvas)
// .append("svg")
// .attr("width", width)
// .attr("height", height)

// const places = svgCanvas.append("g").attr("id", "places");

// const x = d3.scaleLinear()
// .domain([0, 1280])
// .range([ 0, width ]);
// svgCanvas.append("g")
// .call(d3.axisBottom(x));

// const y = d3.scaleLinear()
// .domain([0, 1280])
// .range([ height, 0]);
// svgCanvas.append("g")
// .call(d3.axisLeft(y));

// d3.csv(seoulPlace, (data) => {
// places.selectAll("circle")
//     .data(data)
// .enter().append("circle")
//     .attr("cx", (d) => { return d.xCor;})
//     .attr("cy", (d) => { return d.yCor;})
//     .attr("r", 10);

// places.selectAll("text")
//     .data(data).enter()
//     .append("text")
//     .attr("x", (d) => { return d.xCor;})
//     .attr("y", (d) => { return d.yCor;})
//     .text((d) => { return d.station })
//     console.log(data);
// });