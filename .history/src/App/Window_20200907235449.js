import React, { Component } from 'react';
import Img from './_Img.jsx';
import '../CSS/Window.css'
import { Route, withRouter } from 'react-router-dom';

class Window extends Component {

    render() {
        const { history, station, show } = this.props;

        return(
            <div className="window-wrapper" style={{ 
                transform: show ? 'translateY(-98vh)' : 'translateY(10vh)'
                }} >
                <div className="window-content">
                    <div onClick={history.goBack()}className="close" >
                        ← 
                    </div>
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
                    {/* <div className="input">
                        완료
                    </div> */}
                </div>
            </div>
        )
    }
}

export default withRouter(Window); 