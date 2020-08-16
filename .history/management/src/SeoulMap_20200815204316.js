import React, { Component } from 'react';
import * as d3 from 'd3';
import { csv } from 'd3';
import './SeoulMap.css';
import seoulPlace from './data/seoul.csv';

const width = 1280;
const height = 1280;

class SeoulMap extends Component {
    state = {
        data: [],
    }

    componentDidMount() {
        csv(seoulPlace).then( data => this.setState({data}))
        console.log(this.state.data)
    }

    render() { 
        const { data } = this.state
        return (
            <div>
                {data.map((station) => (<li key={station.station}>{this.state.data.stations}</li>))}
            </div>
        )
        }
}

export default SeoulMap;