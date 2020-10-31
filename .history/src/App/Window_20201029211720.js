import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Img from './_Img.jsx';
import { Circle, Triangle, Rhombus, Ellipse, Rectangular } from './_Diagram.jsx';
import '../CSS/Window.css';

const API = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/station_image_data/station_image/'
})
const passLimit = 3; //5번
const textLimit = 6;
const scrollLimit = 1300;
const goBackTime = 200;
const scrollBottomtime = 10;
const inputOnTime = 900;
const landmark = 0;
const shopping = 1;
const nature = 2;
const museum = 3;
const cafe = 4;

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
            imageStatus: false,
            arr: [],
            arrNum : 0,
        }
        this.getLocation();
        this.goBack = this.goBack.bind(this);
        this.show = this.show.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.sendTextWindowUp = this.sendTextWindowUp.bind(this);
        this.handleImgaeLoaded = this.handleImgaeLoaded.bind(this);
        this.textInput = React.createRef();
    }

    componentDidMount(){
        this.show()
    }

    getLocation = async() => {
        let data = await API.get('/'+ this.props.station).then(({data}) => data)
        this.setState({ stationDatas : data.list })
        this.setState(state => ({ 
            arr : [...state.arr, data.list[state.arrNum], data.list[state.arrNum+1], data.list[state.arrNum+2], data.list[state.arrNum+3]],
            arrNum : state.arrNum + 4
        }))
    }

    show(){
        this.setState(state => ({ show : !state.show }))
    }

    goBack(){
        this.setState(state => ({ show : !state.show }))
        setTimeout(()=> {this.props.history.goBack()},goBackTime)
    }

    handleOk(childOk) {
        this.setState(state => ({
            okArray: [...state.okArray, childOk],
            inputOn: true,
        }))
        if(this.state.okArray.length > passLimit){
            this.setState({sendTextOn: true })
        }
    }

    sendTextWindowUp(){
        this.setState({
            windowUp: true,
            inputOn: false
        })
        setTimeout(()=> {this.scrollToBottom()},scrollBottomtime)
        setTimeout(()=> {this.textInput.current.focus()},inputOnTime)
    }

    scrollToBottom() {
        this.el.scrollIntoView({ behavior: 'smooth' });
    }

    handleScroll(event) {
        const element = event.target
        console.log(element.innerHeight)
        if(element.scrollHeight - element.scrollTop < scrollLimit){

        }
    }

    handleChange(event) {
        const eValue = event.target.value
        this.setState({value: eValue})
        if(eValue.length === 0) {
            this.setState({textOn : false})
        }else if(textLimit > eValue.length > 0){
            this.setState({textOn : true, nonPass : false,})
        }else if(eValue.length > textLimit){
            this.setState({nonPass : true})
        }
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    handleImgaeLoaded() {
        this.setState({ imageStatus : true })
    }

    // fetchMoreData = () => {
    //     const { stationDatas, arrNum } = this.state
    //     console.log(arrNum)

    //     setTimeout(() => {
    //         this.setState(state => ({ 
    //             arr : [...state.arr, stationDatas[arrNum], stationDatas[arrNum+1], stationDatas[arrNum+2], stationDatas[arrNum+3]],
    //             arrNum : state.arrNum + 4
    //         }))
    //     }, 1500)
    // }


    render(){
        const { stationDatas, show, okArray, inputOn, sendTextOn, windowUp, value, textOn, nonPass, imageStatus, arr } = this.state;
        const stationName = stationDatas[0] && stationDatas[0].station
        console.log(this.state.arrNum)
        return(
            <div 
                className="window-wrapper" 
                onScroll={this.handleScroll}
                style={{ transform: show ? 'translateY(-102vh)' : 'translateY(10vh)'}} >
                <header className="window-header">
                    <div className="header-content">
                        <div onClick={this.goBack} className="header-close" >
                            ← 
                        </div>  
                        <div className="tag-wrapper">
                            {arr.map((oneArr, i) =>
                                oneArr && oneArr.locationTagID === landmark
                                ? <Circle left={'3px'} right={'3px'} size={'15px'} key={i} on={okArray.filter(value => value === i)}/> 
                                : (oneArr && oneArr.locationTagID === shopping
                                ? <Rectangular left={'3px'} right={'3px'} size={'15px'} key={i} on={okArray.filter(value => value === i)}/> 
                                : (oneArr && oneArr.locationTagID === museum
                                ? <Rhombus left={'3px'} right={'3px'} size={'15px'} key={i} on={okArray.filter(value => value === i)}/> 
                                : (oneArr && oneArr.locationTagID === cafe
                                ? <Ellipse left={'3px'} right={'3px'} size={'19px'} top={'-6px'} key={i} on={okArray.filter(value => value === i)}/> 
                                : <Triangle left={'3px'} right={'3px'} size={'16.2px'} top={'-1.5px'} key={i} on={okArray.filter(value => value === i)}/>
                            ))))}
                        </div>
                    </div>
                </header>
                <div className="window-content">
                    <div className="content-computer">모르시면 눌러보세요</div>
                    <div className="content-computer-sec">알면 패스!</div>
                        {arr.map((oneArr,i) =>  
                                <Img 
                                    key={oneArr && oneArr.locationName} 
                                    points={oneArr && oneArr.locationData}
                                    onOk={this.handleOk}
                                    chilcOk={i}
                                    onLoad={this.handleImgaeLoaded}
                                    locationTagID={oneArr && oneArr.locationTagID}
                                    locationName={oneArr && oneArr.locationName}
                                    className="img-stations"                            
                                />
                        )}
                        { sendTextOn 
                            ? <div className="content-form" style={{display : windowUp ? '' : 'none'}}>
                                <div className="content-computer">
                                    나에게 {stationDatas[0] && stationDatas[0].station}이란..
                                </div>
                                <form >
                                    <input
                                        ref={this.textInput}
                                        className="content-form-input" 
                                        placeholder="5자 이내로 적어주세요" 
                                        type="text" 
                                        value={value} 
                                        onChange={this.handleChange}
                                    />
                                </form>
                                <div ref={el => {this.el = el;}}/>
                            </div>
                            : null }
                    {imageStatus ?
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
                        }}
                    >
                        {inputOn ? '여기까지 할래요':(windowUp ? (textOn ? (nonPass ? '5자 내로 적어주세요':'다 했다!'):'거의 다 왔어요!'):stationName)}
                    </div>
                    : 
                    null}
                </div>
            </div>
        )
    }
}

export default withRouter(Window);
