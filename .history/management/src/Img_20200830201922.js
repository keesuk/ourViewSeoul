import React, { Component } from 'react';
import * as d3 from 'd3';
import Worker from 'worker-loader!./Worker'; // eslint-disable-line import/no-webpack-loader-syntax

const width = 900;

class Img extends Component {
    state = {
        width : null,
        height : null,
        data : []
    }

    componentDidMount() {
        this.worker = new Worker();

        d3.image(this.props.src,  {crossOrigin: "anonymous"}).then(image => {
            const height = Math.round(width * image.height / image.width);
            const context = this.refs.canvas.getContext('2d');
            context.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
            const {data: rgba} = context.getImageData(0, 0, width, height);
            const data = new Float64Array(width * height);
            for (let i = 0, n = rgba.length / 4; i < n; ++i) data[i] = Math.max(0, 1 - rgba[i * 4] / 254);
            this.setState({ width : this.state.width })
            this.setState({ height : this.state.height })
            this.setState({ data : this.state.data })
            
            this.updateCanvas(this.state);
        })

    }

    updateCanvas() {
        const { width, height, data } = this.state
        console.log(height)
        const context = this.refs.canvas.getContext('2d');
        const n = Math.round(width * height / 40)

        function messaged({ data: points}) {
            context.fillStyle = "#fff";
            context.fillRect(0, 0, width, height);
            context.beginPath();
            for (let i = 0, n = points.length; i < n; i += 2) {
                const x = points[i], y = points[i + 1];
                context.moveTo(x + 1.5, y);
                context.arc(x, y, 1.5, 0, 2 * Math.PI);
            }
            context.fillStyle = "#000";
            context.fill();
        }

        this.worker.addEventListener("message", messaged);
        this.worker.postMessage({data, width, height, n});
    }
      
    render() {
        return (
             <canvas width={900} height={1000} ref="canvas" />
        );
    }
}

export default Img;