import React, { Component } from 'react';
import 'Window.css';
import './index.css';

class Window extends Component {
    constructor(props) {
        super(props);
        state = { 
            show : '',
            windowClose : '', 
        };
    }

    render() {
        const { show, windowClose } = this.state;   
        return(
            <div/>
        )
    }
}

export default Window;