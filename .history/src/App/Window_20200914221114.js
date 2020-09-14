import React, { Component } from 'react';
import Img from './_Img.jsx';
import '../CSS/Window.css';
import Json from '../data/seoul.json';
import { withRouter } from 'react-router-dom';

class Window extends Component {
    constructor(props){
        super(props);
        
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack()
    }

    render() {
        const { show } = this.props;

        return(
            <div className="window-wrapper" style={{ 
                transform: show ? 'translateY(-100vh)' : 'translateY(10vh)',
                width: show ? '99vw' : '80vw',
                boxShadow: show ? '10px -10px black' : '0px 0px 0px black'
                }} >
                <div className="window-content">
                    <div onClick={this.goBack} className="close" >
                        ← 
                    </div>
                    <div className="computer">
                        오, 어떤 곳인데요?
                    </div>
                    <div className="answer">
                        저 이곳 알아요!
                    </div>
                        <Img 
                            className="img-stations" 
                            // points={points}
                            src={require('../data/search.pstatic.jpg')}
                        />
                        <Img 
                            className="img-stations" 
                            // points={points}
                            src={require('../data/search.pstatic1.jpg')}
                        />
                        <Img 
                            className="img-stations" 
                            // points={points}
                            src={require('../data/search.pstatic2.jpg')}
                        />
                        <Img 
                            className="img-stations" 
                            // points={points}
                            src={require('../data/search.pstatic3.jpg')}
                        />
                        <Img 
                            className="img-stations" 
                            // points={points}
                            src={require('../data/search.pstatic4.jpg')}
                        />
                        <Img 
                            className="img-stations" 
                            // points={points}
                            src={require('../data/search.pstatic5.jpg')}
                        />
                        <Img 
                            className="img-stations" 
                            // points={points}
                            src={require('../data/search.pstatic6.jpg')}
                        />
                    <div className="input">
                        완료
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Window); 