import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Img from './_Img.jsx';
import '../CSS/Window.css';

const API = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/station_image_data/station_image/'
})

class Window extends Component {
    constructor(props){
        super(props);
        this.state = {
            stationDatas : [],
            show : false,
            ok : 0,
        }
        this.goBack = this.goBack.bind(this);
        this.show = this.show.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.getLocation();
    }

    getLocation = async() => {
        let data = await API.get('/'+ this.props.station).then(({data}) => data);
        this.setState({ stationDatas : data.list })
        this.show()
    }

    show(){
        this.setState(state => ({ show : !state.show }))
    }

    goBack(){
        this.setState(state => ({ show : !state.show }))
        setTimeout(()=> {this.props.history.goBack()},200)
    }

    handleOk(ok) {
        this.setState(state => ({ok : state.ok + ok}));
    }

    render(){
        const { stationDatas, show } = this.state;
        // console.log('내가 아는 이미지는' + this.state.ok + '개')
        
        return(
            <div className="window-wrapper" style={{ 
                transform: show ? 'translateY(-100vh)' : 'translateY(10vh)'
                }} >
                <div className="window-content">
                    <div onClick={this.goBack} className="close" >
                        ← 
                    </div>
                    <div className="computer">
                        <strong>{stationDatas[0] && stationDatas[0].station}</strong>
                    </div>
                    <div className="answer">
                        아는 만큼 괴롭혀주세요!
                    </div>
                        { stationDatas[0] && stationDatas[0].locationData && this.state.ok < 5
                            ? stationDatas.map(stationData =>  
                                <Img 
                                    key={stationData && stationData.locationName} 
                                    points={stationData && stationData.locationData}
                                    onOk={this.handleOk}
                                    className="img-stations"
                                />)
                            : null }
                    <div className="input">
                        완료
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Window); 