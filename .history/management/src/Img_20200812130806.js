import React, { Component } from 'react';
import * as d3 from 'd3';
import * as StackBlur from 'stackblur-canvas';
// import Worker from './Worker';

const height = 400;
const width = 600;
const threshold = 0.9;

class Img extends Component {
    constructor(props) {
        super(props);
        this.loadImage = this.loadImage.bind(this)
        this.state = {
            imgae : null
        }
    }
    
    componentDidMount() {
        this.loadImage();
    }

    handleImageLoaded() {
        
    }

    render() { 
        return <div ref="canvas"></div> 
    }
}

export default Img;