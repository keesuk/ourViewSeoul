import React, { Component } from 'react';
import Img from './_Img.jsx';
import '../CSS/Window.css';
import { withRouter } from 'react-router-dom';

class Window extends Component {
    constructor(props){
        super(props);
        this.state = { korean : '', data: [] }
        this.goBack = this.goBack.bind(this);
    }

    componentDidUpdate() {
        const { data } = this.props
        this.setState({data : data})
    }

    goBack(){
        this.props.history.goBack()
    }

    render() {
        const { show, korean, station } = this.props;
        const { data } = this.state;

        const korIndex = data.findIndex(d => d.engCor === station)
        this.setState({korean : data.korCor[korIndex]})

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
                        {korean}는<br/> 요런 것들이 생각나요.
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