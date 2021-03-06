import React, { Component } from 'react';
import './Window.css';
import './index.css';

class Window extends Component {
    render() {
        const { show, windowClose } = this.props;   
        return(
            <div 
                style={{ 
                    transform: show ? 'translateY(0vh)' : 'translateY(-120vh)',
                }} className="window-wrapper">
                <button onClick={windowClose} className="input">
                    입력
                </button>
            </div>
        )
    }
}

export default Window;