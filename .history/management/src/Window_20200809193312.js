import React, { Component } from 'react';
import './Window.css';
import './index.css';

class Window extends Component {
    render() {
        const { show, windowClose } = this.props;   
        return(
            <div style={{ opacity: show ? '0' : '1'}} className="window-wrapper">
                <button className="close">close</button>
            </div>
        )
    }
}

export default Window;