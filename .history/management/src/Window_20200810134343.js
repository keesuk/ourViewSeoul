import React, { Component } from 'react';
import './Window.css';
import './index.css';

class Window extends Component {
    render() {
        const { show, windowClose } = this.props;   
        return(
            <div 
                style={{ transform: show ? 'translateY(0vh)' : 'translateY(-120vh)'}} className="window-wrapper">
                <button onClick={windowClose} className="close">
                    ← 
                </button>
                <div className="computer">
                    오.. 어떤 곳인데요?
                </div>
                <div className="answer">
                    여기는 요런 것들이 생각나요.
                </div>
                <div className="img-stations">

                </div>
                <button onClick={windowClose} className="input">
                    완료
                </button>
            </div>
        )
    }
}

export default Window;