import React, { Component } from 'react';
import Img from './Img';
import '../CSS/Window.css';
import '../CSS/index.css';

class Window extends Component {

    render() {
        const { show, windowClose } = this.props;   
        return(
            <div className="window-wrapper" style={{ 
                transform: show ? 'translateY(-102vh)' : 'translateY(0vh)',
                // display: show ? '' : 'none'
                }} >
                <div className="window-content">
                    { show ?
                        <div onClick={windowClose} className="close">
                            ← 
                        </div>
                        :
                        <div onClick={windowClose} className="up">
                            ↑ 
                        </div>
                    }
                    <div className="computer">
                        오.. 어떤 곳인데요?
                    </div>
                    <div className="answer">
                        여기는 요런 것들이 생각나요.
                    </div>
                        <Img className="img-stations" src={require('../data/search.pstatic.jpg')}/>
                        <Img className="img-stations" src={require('../data/search.pstatic1.jpg')}/>
                        <Img className="img-stations" src={require('../data/search.pstatic2.jpg')}/>
                    <div onClick={windowClose} className="input">
                        완료
                    </div>
                </div>
            </div>
        )
    }
}

export default Window; 