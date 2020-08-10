import React, { Component } from 'react';
import './Window.css';
import './index.css';

class Window extends Component {
    render() {
        const { show, windowClose } = this.props;   
        return(
            <div 
                style={{ 
                    transform: show ? 'translate(0vh)' : 'translate(-100vh)',
                    opacity: show ? '1' : '0',
                }} className="window-wrapper">
                <button onClick={windowClose} className="close">
                    close
                </button>
            </div>
        )
    }
}

export default Window;