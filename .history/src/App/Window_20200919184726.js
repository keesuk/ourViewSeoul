import React, { Component } from 'react';
import Img from './_Img.jsx';
import '../CSS/Window.css';
import { withRouter } from 'react-router-dom';

const API = 'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/station_image_data/station_image/'

class Window extends Component {
    constructor(props){
        super(props);
        this.state = {
            locationDatas : [],          
        }
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        this.state.locationDatas.length = 0;
        if(this.props.station !== ':station'){
            fetch(API + this.props.station )
                .then(response => response.json())
                .then(json => this.setState({ locationDatas: json.list}))
        }
    }

    goBack(){
        this.props.history.goBack()
    }

    render() {
        const { show } = this.props;
        console.log(this.state.locationDatas)

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
                        {/* {imgList} */}
                    <div className="input">
                        완료
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Window); 