import React, { Component } from 'react';

class Portal extends Component {
    state = {  
        id : this.props.stationData
    }

    onFormSubmit = () => {
        this.props.onSubmit(this.state.id)
    	console.log(this.state.id);
    }

    render() { 
        
        return (
        null)
    }
}
 
export default Portal;