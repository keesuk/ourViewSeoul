import React from 'React';
import * as d3 from 'd3';
import { csv } from 'd3';


const svg = d3.create("svg")
.attr("viewBox", [0, 0, width, height])
.attr("text-anchor", "middle")
.style("display", "block")
.style("font", "700 14px 'Helvetica Neue'");