import React, { Component } from 'react';
import Img from './_Img.jsx';
import '../CSS/Window.css';
import { withRouter } from 'react-router-dom';

class Window extends Component {
    constructor(props){
        super(props);
        this.state = { korean : '' }
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        const { data, history, station, show } = this.props;
        const korIndex = data.findIndex( x => x.engCor === station )

        if(korIndex === -1){ 
            return null 
        } else { 
            this.state.korean = data.korCor[korIndex]
        }
    }

    goBack(){
        this.props.history.goBack()
    }

    render() {
        return(
            <div className="window-wrapper" style={{ 
                transform: show ? 'translateY(-100vh)' : 'translateY(10vh)',
                width: show ? '100vw' : '85vw',
                boxShadow: show ? '0px -5px 10px grey' : '0px 0px 0px black'
                }} >
                <div className="window-content">
                    <div onClick={this.goBack} className="close" >
                        ← 
                    </div>
                    <div className="computer">
                        오.. 어떤 곳인데요?
                    </div>
                    <div className="answer">
                        {this.state.korean}는<br/> 요런 것들이 생각나요.
                    </div>
                        {/* <Img 
                            className="img-stations" 
                            src={require('../data/search.pstatic.jpg')}
                        />
                    <div className="input">
                        완료
                    </div> */}
                </div>
            </div>
        )
    }
}

export default withRouter(Window); 