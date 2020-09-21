import React, { Component } from 'react';
import Img from './_Img.jsx';
import '../CSS/Window.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const API = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/station_image_data/station_image/'
})

class Window extends Component {
    constructor(props){
        super(props);
        this.state = {
            locationDatas : [],
            show : false,     
        }
        this.goBack = this.goBack.bind(this);
        this.getLocation();
    }

    getLocation = async() => {
        let data = await API.get('/'+ this.props.station).then(({data}) => data);
        this.setState({ locationDatas : data})
        this.show()
    }
    show(){
        this.setState(state => ({show : !state.show}))
        console.log(this.state.show)
    }

    goBack(){
        this.props.history.goBack()
    }

    render() {
        const { show } = this.state.show

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