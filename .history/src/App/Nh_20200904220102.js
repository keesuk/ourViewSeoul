import React, { Component } from 'react';

class Nh extends Component {
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