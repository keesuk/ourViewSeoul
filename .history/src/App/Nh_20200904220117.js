import React, { Component } from 'react';

class Nh extends Component {
    
    handleHover(territory) {
        this.props.onHighlight(territory);
    }
    
    handleUnhover() {
        this.props.onHighlight(null);
    }

    render() {
        return(
            <li
                onMouseOver={() => this.handleHover('NH')}
                onMouseOut={() => this.handleUnhover()}
            >
                New Hampshire
            </li>
        )
    }
}

export default Nh;