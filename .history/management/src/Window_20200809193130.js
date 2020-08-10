import React, { Component } from 'react';
import './Window.css';
import './index.css';

class Window extends Component {
    render() {
        const { show, windowClose } = this.props;   
        return(
            <div style={{ opacity: show ? '1' : '0'}} className="window-wrapper">
                <button className="close"/>
            </div>
        )
    }
}

export default Window;