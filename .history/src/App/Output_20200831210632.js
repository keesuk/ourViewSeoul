import React, { Component } from 'react';
import '../CSS/Output.css';
import '../CSS/index.css';

class Window extends Component {

    render() {
        const { show, windowClose } = this.props;   
        return(
            <div className="output-wrapper" style={{ 
                transform: show ? 'translateY(-102vh)' : 'translateY(-15vh)',
                // display: show ? '' : 'none'
                }} >
                <div className="output-content">
                    { show ? 
                        <div onClick={windowClose} className="close">
                            ← 
                        </div>
                        :
                        <div onClick={windowClose} className="up">
                            ↑ 
                        </div>
                    }
                    <div className="output-answer">
                        여기는 요런 것들이 생각나요.
                    </div>
                </div>
            </div>
        )
    }
}

export default Window;