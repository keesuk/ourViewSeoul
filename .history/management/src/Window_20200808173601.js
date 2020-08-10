import React, { Component } from 'react';
import './Window.css';
import './index.css';

class Window extends Component {
    render() {
        const { show, windowClose } = this.props;   
        return(
            <div style={{ opacity: show ? '1' : '0'}} className="">
                하이
            </div>
        )
    }
}

export default Window;