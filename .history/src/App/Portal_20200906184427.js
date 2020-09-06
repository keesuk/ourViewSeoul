import React, { Component } from 'react';

class Portal extends Component {
    state = {  
        id : this.props.stationData
    }

    onFormSubmit = e => {
        this.props.onSubmit(this.state.id)
    }

    render() { 
        
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
            </form>
        </div>
        )
    }
}
 
export default Portal;