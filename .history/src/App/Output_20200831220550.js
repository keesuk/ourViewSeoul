import React, { Component } from 'react';
import '../CSS/Output.css';
import '../CSS/index.css';

class Window extends Component {

    render() {
        const { show, outputClose } = this.props;   
        return(
            <div className="output-wrapper" style={{ 
                transform: show ? 'translateY(-40vh)' : 'translateY(-22vh)'
                }} >
                <div className="output-content">
                    { show ? 
                        <div onClick={windowClose} className="output-close">
                            ← 
                        </div>
                        :
                        <div onClick={windowClose} className="up">
                            ￣ 
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Window;