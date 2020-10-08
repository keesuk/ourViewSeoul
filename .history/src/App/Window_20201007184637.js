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
            sendTextOn : false,
            windowUp : false,
            okArray : [],
            value : '',
            textOn : false,
            nonPass : false,
            scolling : false,
        }
        this.goBack = this.goBack.bind(this);
        this.show = this.show.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.sendTextWindowUp = this.sendTextWindowUp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getLocation();
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll )
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll() {
        if(window.scrollY === 0 && this.state.scrolling === true){
            this.setState({scrolling: false})
        }else if(window.scrollY === 0 && this.state.scrolling !== true){
            this.setState({scrolling: true})
        }
    }
    
    getLocation = async() => {
        let data = await API.get('/'+ this.props.station).then(({data}) => data)
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
            inputOn: true,
        }))
        if(this.state.okArray.length > 0){
            this.setState({sendTextOn: true })
        }
    }

    sendTextWindowUp(){
        this.setState({
            windowUp: true,
            inputOn: false
        })

    }

    handleChange(event) {
        const eValue = event.target.value
        this.setState({value: eValue})
        if(eValue.length === 0) {
            this.setState({textOn : false})
        }else if(6 > eValue.length > 0){
            this.setState({
                textOn : true,
                nonPass : false,
            })
        }else if(eValue.length > 6){
            this.setState({nonPass : true})
        }
    }

    handleSubmit(event) {
        event.preventDefault()
    }


    render(){
        const { stationDatas, show, okArray, inputOn, sendTextOn, windowUp, value, textOn, nonPass } = this.state;
        const stationName = stationDatas[0] && stationDatas[0].station
        console.log(window.scrollY)

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
                            ? <div className="content-form" style={{display : windowUp ? '' : 'none'}}>
                                <div className="content-computer">
                                    나에게 {stationDatas[0] && stationDatas[0].station}이란..
                                </div>
                                <form >
                                    <input
                                        ref={(input) => {this.nameInput = input}}
                                        className="content-form-input" 
                                        placeholder="5자 이내로 적어주세요" 
                                        type="text" 
                                        value={value} 
                                        onChange={this.handleChange}
                                    />
                                </form>
                            </div>
                            : null }
                    <div
                        onClick={sendTextOn 
                            ? this.sendTextWindowUp
                            : this.goBack
                        } 
                        className="content-next-button" style={{
                        boxShadow: inputOn ? '4px 6px black':(windowUp ? (textOn ? (nonPass ? '0px 0px red':'4px 6px blue'):'0px 0px #cccccc'):'0px 0px #cccccc'),
                        color: inputOn ? 'black':(windowUp ? (textOn ? (nonPass ? 'red':'blue'):'#999'):'#999'),
                        borderColor: inputOn ? 'black' : (windowUp ? (textOn ? (nonPass ? 'red':'blue'):'#cccccc'):'#cccccc'),
                        transform: inputOn ? 'translate(-2px, -2px)':(windowUp ? (textOn ? (nonPass ? 'none':'translate(-2px, -2px)'):'none'):'none'),
                        cursor: inputOn ? 'pointer' : (windowUp ? (textOn ? (nonPass ? 'not-allowed':'pointer'):'not-allowed'):'not-allowed'),
                        }}>
                        {inputOn ? '여기까지 할래요':(windowUp ? (textOn ? (nonPass ? '5자 내로 적어주세요':'다 했다!'):'거의 다 왔어요!'):stationName)}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Window);
