import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Sticky, StickyContainer } from 'react-sticky';
import axios from 'axios';
import Img from './_Img.jsx';
import '../CSS/Window.css';

const API = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/station_image_data/station_image/'
})

let renderCount = 0;

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

    handleOk(childOk) {
        this.setState(prev => ({ok : prev.ok + childOk}));
    }

    render(){
        const { stationDatas, show } = this.state;
        console.log('내가 아는 이미지는' + this.state.ok + '개')
        
        return(
            <div className="window-wrapper" style={{ 
                transform: show ? 'translateY(-100vh)' : 'translateY(10vh)'
                }} >
                <StickyContainer className="window-header">
                    <Sticky>
                        {({
                            // isSticky,
                            // wasSticky,
                            // distanceFromTop,
                            // calculatedHeight
                        }) => (
                            <header renderCount={renderCount++}>
                                <div onClick={this.goBack} className="close" >
                                    ← 
                                </div>
                            </header>
                        )}
                    </Sticky>
                </StickyContainer>
                <div className="window-content">
                    <div className="answer">
                        아는 만큼 눌러보세요!
                    </div>
                        { stationDatas[0] && stationDatas[0].locationData
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