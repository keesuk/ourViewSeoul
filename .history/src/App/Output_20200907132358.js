import React, { Component } from 'react';
import '../CSS/Output.css';
import '../CSS/index.css';

class Outpur extends Component {

    render() {
        const { show, outputClose } = this.props;   
        return(
            <div className="output-wrapper" style={{ 
                transform: show ? 'translateY(-100vh)' : 'translateY(-22vh)'
                }} >
                <div className="output-content">
                    { show ? 
                        <div onClick={outputClose} className="output-close">
                            ← 
                        </div>
                        :
                        <div onClick={{}} className="up">
                            ￣ 
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Outpur;