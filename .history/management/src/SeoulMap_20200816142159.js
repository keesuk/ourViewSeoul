import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulPlace from './data/seoul.csv';

const width = 1280;
const height = 1280;

class SeoulMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : null,
            isScorlling : false,
        }
    }

    componentDidMount() {
        csv(seoulPlace).then(data => {
            this.setState( {data} );
            this.drawSeoul(this.state.data);
        })
    }

    drawSeoul(dataArray) {
        // console.log(dataArray);
        
        const svgCanvas = d3.select(this.refs.canvas)
            .append("div")
            .classed("svg-container", true) 
            .append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", "0 0 1280 720")
            .classed("svg-content-responsive", true)
        
        svgCanvas.selectAll("text")
            .data(dataArray)
            .enter()
                .append("text")
                .classed("text", true)
                .attr("x", d => { return d.xCor})
                .attr("y", d => { return height - d.yCor})
                .text(d => { return d.station})
                .attr("font-size", "6px")
    }

    componentDidUpdate(nextProps, nextState) {
        if(this.state.isScrolling !== nextState.isScrolling ) {this.toggleScrolling(nextState.isScrolling);}
    }

    toggleScrolling = (isEnable) => {
        if (isEnable) {
            window.addEventListener('mousemove', this.onMouseMove);
            window.addEventListener('mouseup', this.onMouseUp);
        } else {
            window.removeEventListener('mousemove', this.onMouseMove);
        }
    };

    onScroll = (event) => {
    };
  
    onMouseMove = (event) => {
      const {clientX, scrollLeft, scrollTop, clientY} = this.state;
      this._scroller.scrollLeft = scrollLeft - clientX + event.clientX;
      this._scroller.scrollTop = scrollTop - clientY + event.clientY;
    };

    onMouseUp =  () => {
        this.setState({isScrolling: false, 
                        scrollLeft: 0, scrollTop: 0,
                        clientX: 0, clientY:0});
    };

    onMouseDown = (event) => {
        const {scrollLeft, scrollTop} = this._scroller;
        this.setState({isScrolling:true, scrollLeft, scrollTop, clientX:event.clientX, clientY:event.clientY});
    };


    render() { 
        return (
            <div onClick={this.handleClick} ref="canvas"/>
        )
    }
}

export default SeoulMap;