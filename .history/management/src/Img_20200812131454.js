import React, { Component } from 'react';
import * as d3 from 'd3';
import * as StackBlur from 'stackblur-canvas';
// import Worker from './Worker';

// const height = 400;
// const width = 600;
// const threshold = 0.9;

class Img extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded : false
        }
    }

    componentDidMount() {
        const img = this.image.current;
        if (img && img.complete) {
            this.handleImageLoaded();
        }
    }    

    handleImageLoaded() {
        if (!this.state.loaded) {
            console.log('image loaded');
        this.setState({ loaded: true });
        }
    } 

    render() { 
        return <div onLoad={this.handleImageLoaded} ref="canvas"></div> 
    }
}

export default Img;