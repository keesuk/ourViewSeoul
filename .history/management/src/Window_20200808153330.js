import React, { Component } from 'react';
import './Window.css';
import './index.css';

class Window extends Component {
    state = { 
        show : '',
        windowClose : '',
    }

    render() {
        const { show, windowClose } = this.state;   
        return(
            <div/>
        )
    }
}

export default Window;