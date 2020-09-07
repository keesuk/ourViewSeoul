import React, { Component } from 'react';
import Img from './_Img.jsx';
import '../CSS/Window.css'

class Window extends Component {

    render() {
        const { show } = this.props;   
        return(
            <div className="window-wrapper" style={{ 
                transform: show ? 'translateY(-98vh)' : 'translateY(0vh)',
                // display: show ? '' : 'none'
                }} >
                <div className="window-content">
<<<<<<< HEAD
                    <button className="close">
=======
                    <div onClick={windowClose} className="close">
>>>>>>> master
                        ← 
                    </div>
                    <div className="computer">
                        오.. 어떤 곳인데요?
                    </div>
                    <div className="answer">
                        여기는 요런 것들이 생각나요.
                    </div>
<<<<<<< HEAD
                        {/* <Img 
                            className="img-stations" 
                            src={require('../data/search.pstatic.jpg')}
                        /> */}
                    <button className="input">
=======
                        <Img className="img-stations" src={require('../data/search.pstatic.jpg')}/>
                        <Img className="img-stations" src={require('../data/search.pstatic1.jpg')}/>
                        <Img className="img-stations" src={require('../data/search.pstatic2.jpg')}/>
                    <div onClick={windowClose} className="input">
>>>>>>> master
                        완료
                    </div>
                </div>
            </div>
        )
    }
}

export default Window; 