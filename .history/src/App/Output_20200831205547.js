import React, { Component } from 'react';
import '../CSS/Output.css';
import '../CSS/index.css';

class Window extends Component {

    render() {
        const { show, windowClose } = this.props;   
        return(
            <div className="window-wrapper" style={{ 
                transform: show ? 'translateY(-0vh)' : 'translateY(-102vh)',
                // display: show ? '' : 'none'
                }} >
                <div className="window-content">
                    <div onClick={windowClose} className="close">
                        ← 
                    </div>
                    <div className="answer">
                        여기는 요런 것들이 생각나요.
                    </div>
                </div>
            </div>
        )
    }
}

export default Window;