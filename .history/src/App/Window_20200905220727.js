import React, { Component } from 'react';
import Img from './Img';
import '../CSS/Window.css';
import '../CSS/index.css';

class Window extends Component {

    render() {
        const { show } = this.props;   
        return(
            <div className="window-wrapper" style={{ 
                transform: show ? 'translateY(-100vh)' : 'translateY(-250vh)',
                display: show ? '' : 'none'
                }} >
                <div className="window-content">
                    <button className="close">
                        ← 
                    </button>
                    <div className="computer">
                        오.. 어떤 곳인데요?
                    </div>
                    <div className="answer">
                        여기는 요런 것들이 생각나요.
                    </div>
                        {/* <Img 
                            className="img-stations" 
                            src={require('../data/search.pstatic.jpg')}
                        /> */}
                    <button className="input">
                        완료
                    </button>
                </div>
            </div>
        )
    }
}

export default Window;