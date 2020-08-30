import React, { Component } from 'react';
import * as d3 from 'd3';
import Worker from 'worker-loader!./Worker'; // eslint-disable-line import/no-webpack-loader-syntax

data = FileAttachment(this.props.src).image().then(image => {
    const height = Math.round(width * image.height / image.width);
    const context = this.refs.canvas.getContext2d(width, height, 1);
    context.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
    const {data: rgba} = context.getImageData(0, 0, width, height);
    const data = new Float64Array(width * height);
    for (let i = 0, n = rgba.length / 4; i < n; ++i) data[i] = Math.max(0, 1 - rgba[i * 4] / 254);
    data.width = width;
    data.height = height;
    this.setState({ data : data})
})

class Img extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        this.worker = new Worker();

        

        this.updateCanvas();
    }

    updateCanvas() {
        const context = this.refs.canvas.getContext2d(width, height);

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

        invalidation.then(() => worker.terminate());
        this.worker.addEventListener("message", messaged);
        this.worker.postMessage({data, width, height, n});
    }
      
    render() {
        return (
             <canvas ref="canvas" />
        );
    }
}

export default Img;