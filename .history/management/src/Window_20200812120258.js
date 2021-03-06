import React, { Component } from 'react';
import Img from './Img';
import './Window.css';
import './index.css';

class Window extends Component {
    render() {
        const { show, windowClose } = this.props;   
        return(
            <div className="window-wrapper" style={{ transform: show ? 'translateY(0vh)' : 'translateY(-120vh)'}} >
                <div className="window-content">
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
                        {/* <Img src="https://www.visualcinnamon.com/img/blog/2015/voronoi-hover/voronoi_hover_feature.png"/> */}
                    </div>
                    <button onClick={windowClose} className="input">
                        완료
                    </button>
                </div>
            </div>
        )
    }
}

export default Window;