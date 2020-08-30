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
            const context2d = context.context2d(width, height);
            context2d.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
            const {data: rgba} = context2d.getImageData(0, 0, width, height);
            const data = new Float64Array(width * height);
            for (let i = 0, n = rgba.length / 4; i < n; ++i) data[i] = Math.max(0, 1 - rgba[i * 4] / 254);
            this.setState({ width : width })
            this.setState({ height : height })
            this.setState({ data : data })
        })

        this.updateCanvas();
    }

    updateCanvas() {
        const { width, height, data } = this.state
        const context = this.refs.canvas.getContext('2d');
        const context2d = context.context2d(width, height, 1);
        const n = Math.round(width * height / 40)

        function messaged({ data: points}) {
            context2d.fillStyle = "#fff";
            context2d.fillRect(0, 0, width, height);
            context2d.beginPath();
            for (let i = 0, n = points.length; i < n; i += 2) {
                const x = points[i], y = points[i + 1];
                context2d.moveTo(x + 1.5, y);
                context2d.arc(x, y, 1.5, 0, 2 * Math.PI);
            }
            context2d.fillStyle = "#000";
            context2d.fill();
        }

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