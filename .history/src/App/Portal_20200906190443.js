import React, { Component } from 'react';

class Portal extends Component {
    state = {  
        id : '',
    }

    onFormSubmit = () => {
        this.props.onSubmit(this.state.id)
    	console.log(this.state.id);
    }

    render() { 
        console.log(this.props.stationData);
        return null
    }
}
 
export default Portal;