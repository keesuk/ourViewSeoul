import React, { Component } from 'react';
import * as d3 from 'd3';
// import { csv } from 'd3';

class SeoulMap extends Component {
    state = {
        seData: null,
        seCongress: null
    }

    componentWillMount() {
        d3.queue().defer(d3.json, 'korea.json')
    	.defer(d3.json, 'seoul.json')
	    .await((error, seData, seCongress) => {
            this.setState({
                seData,
                seCongress
            });
        })
    }

    render () {
        const { seData, seCongress } = this.state;
        
        if (!seData || !seCongress ) {
            return null;
        }
        
        return null;
    }
}

export default SeoulMap;