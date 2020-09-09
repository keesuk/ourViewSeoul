import React, { Component } from 'react';
import Img from './_Img.jsx';
import '../CSS/Window.css';
import { withRouter } from 'react-router-dom';

class Window extends Component {
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack()
    }

    getIndex(){
        const {station, data} = this.props
        for(var i=0; i<data.length; i++){
            if(data[i][prop] === station){
                return data.korCor[i]
            }
        }
    }

    render() {
        const { station, show } = this.props;
        console.log(stationKor)

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
                        {this.getIndex()}는<br/> 요런 것들이 생각나요.
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