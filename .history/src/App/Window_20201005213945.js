import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Img from './Img';
import { Circle, Triangle, Rhombus, Ellipse, Rectangular } from './_Diagram.jsx';
import '../CSS/Window.css';

const API = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/station_image_data/station_image/'
})
const locationTagId = 1;

class Window extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            stationDatas : [],
            show : false,
            inputOn : false,
            okArray : []
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
        this.setState(state => ({
            okArray: [...state.okArray, childOk],
            inputOn: !state.inputOn,
        }))
    }


    render(){
        const { stationDatas, show, okArray } = this.state;

        return(
            <div className="window-wrapper" style={{ 
                transform: show ? 'translateY(-100vh)' : 'translateY(10vh)'
                }} >
                <header className="window-header">
                    <div className="header-content">
                        <div onClick={this.goBack} className="header-close" >
                            ← 
                        </div>
                        <div>
                            {stationDatas.map((stationData, i) =>
                                stationData && stationData.station === '불광' 
                                ? <Circle key={i} on={okArray.filter(value => value === i)}/> 
                                :(stationData && stationData.station === '망원' 
                                ? <Rectangular key={i} on={okArray.filter(value => value === i)}/> 
                                :(stationData && stationData.station === '합정' 
                                ? <Rhombus key={i} on={okArray.filter(value => value === i)}/> 
                                :(stationData && stationData.station === '역촌' 
                                ? <Ellipse key={i} on={okArray.filter(value => value === i)}/> 
                                : <Triangle key={i} on={okArray.filter(value => value === i)}/>
                            ))))}
                        </div>
                    </div>
                </header>
                <div className="window-content">
                    <div className="content-computer">
                        아는 만큼 눌러보세요!
                    </div>
                        { stationDatas[0] && stationDatas[0].locationData
                            ? stationDatas.map((stationData,i) =>  
                                <Img 
                                    key={stationData && stationData.locationName} 
                                    points={stationData && stationData.locationData}
                                    onOk={this.handleOk}
                                    chilcOk={i}
                                    locationId={locationTagId}
                                    className="img-stations"                            
                                />)
                            : null }
                    <div className="content-input">
                        여기까지 할래요
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Window);
