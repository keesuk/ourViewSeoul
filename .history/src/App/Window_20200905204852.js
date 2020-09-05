import React, { Component } from 'react';
import Img from './Img';
import '../CSS/Window.css';
import '../CSS/index.css';

class Window extends Component {
    handleHover(territory) {
        this.props.onHighlight(territory);
    }
    
    handleUnhover() {
        this.props.onHighlight(null);
    }

    render() {
        const { show, windowClose } = this.props;   
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
                        <Img 
                            onMouseOver={() => this.handleHover('Ilsan')}
                            onMouseOut={() => this.handleUnhover()}
                            className="img-stations" 
                            src={require('../data/search.pstatic.jpg')}
                        />
                    <button className="input">
                        완료
                    </button>
                </div>
            </div>
        )
    }
}

export default Window;