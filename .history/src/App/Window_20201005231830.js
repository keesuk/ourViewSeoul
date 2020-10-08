import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Img from './Img';
import SendText from './SendText'
import { Circle, Triangle, Rhombus, Ellipse, Rectangular } from './_Diagram.jsx';
import '../CSS/Window.css';
import { timeHours } from 'd3';

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
            inputOn : 0,
            sendTextOn : 0,
            sendTextWindowOn: false,
            okArray : []
        }
        this.goBack = this.goBack.bind(this);
        this.show = this.show.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.sendTextUp = this.sendTextUp(this);
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
            inputOn: state.inputOn + 1,
        }))
        if(this.state.okArray.length > 1){
            this.setState({sendTextOn: true })
        }
    }
    componentWillUnmount() {
        this.sendTextUp = this.sendTextUp(this)
    }

    sendTextUp() {
        this.setState({sendTextWindowOn: true })
    }


    render(){
        const { stationDatas, show, okArray, inputOn, sendTextOn, sendTextWindowOn } = this.state;
        console.log(sendTextWindowOn)

        return(
            <div className="window-wrapper" style={{ 
                transform: show ? 'translateY(-102vh)' : 'translateY(10vh)'
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
                                : (stationData && stationData.station === '망원' 
                                ? <Rectangular key={i} on={okArray.filter(value => value === i)}/> 
                                : (stationData && stationData.station === '합정' 
                                ? <Rhombus key={i} on={okArray.filter(value => value === i)}/> 
                                : (stationData && stationData.station === '역촌' 
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
                        { sendTextOn 
                            ? <SendText/>
                            : null }
                    <div
                        onClick={sendTextOn 
                            ? this.sendTextUp
                            : this.goBack} 
                        className="content-input" style={{
                        boxShadow: inputOn ? '4px 6px black' : '0px 0px #cccccc',
                        color: inputOn ? 'black' : '#999',
                        borderColor: inputOn ? 'black' : '#cccccc',
                        transform: inputOn ? 'translate(-2px, -2px)' : 'none',
                        cursor: inputOn ? 'pointer' : 'not-allowed',
                        }}>
                        {inputOn 
                        ? '여기까지 할래요'
                        : stationDatas[0] && stationDatas[0].station}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Window);
