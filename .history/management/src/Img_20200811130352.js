import React, { Component } from 'react';
import * as d3 from 'd3';

class Img extends Component {
    componentDidMount() {
        const data = []
        this.drawImg(data)
    }
    drawImg(data) {}

    render() { return <div ref="canvas"></div> }
}

export default Img;