import React, { Component } from 'react';
import * as d3 from 'd3';
import * as StackBlur from 'stackblur-canvas';
import myWorker from 'worker-loader!./Worker'; // eslint-disable-line import/no-webpack-loader-syntax

class Img extends Component {
    componentDidMount() {
        const worker = new myWorker();
        worker.postMessage(this.state.counter);
        worker.addEventListener('message', event => this.setState({counter: event.data}));
      }

    
    render() {
        return (null
        );
    }
}

export default Img;