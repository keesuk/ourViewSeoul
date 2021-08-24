import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Img from './_Img.jsx';
import Bulgwang from "../data/imgDB/Bulgwang.json";
import Gyeongbokgung from "../data/imgDB/Gyeongbokgung.json";
import SeoulStation from "../data/imgDB/SeoulStation.json";
import { Circle, Triangle, Rhombus, Ellipse, Rectangular, randomize } from './_Diagram.jsx';
import '../CSS/Window.css';

const databaseURL = "https://station-db.firebaseio.com/";

let i = 0;
const textLimit = 6;
const landmark = 0;
const shopping = 1;
const nature = 2;
const museum = 3;
const cafe = 4;

const colorListTag  = ['#E20000','#006CC4','#087A0D','#e90087','#00bfb3']
const itemList = [ <Ellipse/>,<Circle/>,<Rectangular/>,<Triangle/>,<Rhombus/>]

class Window extends Component {
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
            arr: [],
            arrNum : 0,
            endNum : 0,
            downArr : [],
            memoArr : [],
            imgLoaded : false,
            fetching : false,
            chooseHead : null,
            choosePage : null,
        }
        this.getLocation();
        this.goBack = this.goBack.bind(this);
        this.show = this.show.bind(this);
        this.handleOk = this.handleOk.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.sendTextWindowUp = this.sendTextWindowUp.bind(this);
        this.textInput = React.createRef();
    }

    getLocation = () => {
        const data 

        if(this.props.station === "Bulgwang") data = Bulgwang

        

        this.setState(state => ({ 
            arr : [...state.arr, data.list[state.arrNum]],
            arrNum : state.arrNum + 1,
            endNum : data.list.length,
            stationDatas : data.list
        }))
    }

    componentDidMount(){
        this.show()
    }

    _post(okArray, filtered, value) {
        
        const data = { 
            stationName : this.props.station, 
            okNumber : okArray[0],
            whatIsOkay : filtered,
            value : value
        }

        return fetch(`${databaseURL}data/.json`, {
            method : 'POST',
            body: JSON.stringify(data)
        }).then(res => {
            if(res.status !==200){
                throw new Error('에러가 났어요, 새로고침 부탁드립니다.')
            }
            return res.json()
        })
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
        }))
        if(this.state.okArray.length < this.state.arrNum/2){
            this.setState({sendTextOn: true })
        }
    }

    handleScroll(event) {
        clearInterval(this.interval)

        const element = event.target
        const scrollBottom = element.scrollHeight - element.scrollTop
        const windowBottom = element.clientHeight - element.clientTop

        const { windowUp, memoArr, endNum } = this.state

        if(scrollBottom === windowBottom && windowUp === false){
            if(memoArr.length < endNum){
                this.setState(state => ({
                    memoArr: [...state.memoArr, element.scrollTop]
                }))
                this.fetchMoreData(element, element.scrollTop)
            }
        }

        let array = [...this.state.downArr]

        for(let i = 0; i < memoArr.length; i++){
            if(memoArr[i] >= element.scrollTop){
                array[i] = null
                this.setState({ downArr : array })
            }else if(memoArr[i] < element.scrollTop){
                array[i] = i
                this.setState({ downArr : array })
            }
        }
    }
    

    fetchMoreData(element, scrollLevel) {
        const { stationDatas, arrNum, endNum } = this.state

        this.interval = setInterval(()=>{
            this.setState({
                chooseHead : this.change(itemList)
            })
        }, 80)

        if(arrNum < endNum){
            this.setState({ fetching : true })
            setTimeout(() => {
                this.setState(state => ({ 
                    arr : [...state.arr, stationDatas[arrNum]],
                    downArr : [...state.downArr, arrNum],
                    arrNum : state.arrNum + 1,
                    fetching : false
                }))
                element.scrollTo({
                    top: scrollLevel + 300,
                    behavior: 'smooth' 
                })
            }, 600)
        }
        if(arrNum === 3) {
            this.setState({inputOn: true })
        }
    }
    
    change = (items) => {
        i = (i+1) % items.length
        return items[i]
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

    sendTextWindowUp(){
        this.setState({
            windowUp: true,
            inputOn: false
        })
        setTimeout(()=> {this.el.scrollIntoView({ behavior: 'smooth' })},10)
        setTimeout(()=> {this.textInput.current.focus()},900)
    }

    handleSubmit(event) {
        event.preventDefault()
        const { okArray, arr, value } = this.state
        const filtered = []
        
        arr.map(oneArr => {
            let obj = {
                location : oneArr && oneArr.location,
                locationTagID : oneArr && oneArr.locationTagID,
                locationName : oneArr && oneArr.locationName
            }
            return filtered.push(obj)
        })

        this.props.whatsOk([okArray, filtered, value])
        this._post(okArray, filtered, value)
        this.goBack()
    }

    render(){
        const { show, okArray, inputOn, sendTextOn, windowUp, value, textOn, nonPass, arr, downArr, imgLoaded, fetching, chooseHead } = this.state;

        const stationName = arr[0] && arr[0].station
        const buttonColor = randomize(colorListTag)

        return(
            <div 
                className="window-wrapper" 
                onScroll={this.handleScroll}
                style={{ transform: show ? 'translateY(-102vh)' : 'translateY(10vh)'}} 
            >
                <header className="window-header">
                    <div className="header-content">
                        <div onClick={this.goBack} className="header-close" >
                            ← 
                        </div>  
                        <div className="tag-wrapper">
                            {arr.map((oneArr, i) =>
                                oneArr && oneArr.locationTagID === landmark 
                                ? <Circle 
                                    key={i} 
                                    getDown={downArr.filter(value => value ===i)} 
                                    on={okArray.filter(value => value === i)}
                                />
                                : (oneArr && oneArr.locationTagID === shopping 
                                ? <Rectangular 
                                    key={i} 
                                    getDown={downArr.filter(value => value ===i)} 
                                    on={okArray.filter(value => value === i)}
                                />
                                : (oneArr && oneArr.locationTagID === museum 
                                ? <Rhombus 
                                    key={i} 
                                    getDown={downArr.filter(value => value ===i)} 
                                    on={okArray.filter(value => value === i)}
                                /> 
                                : (oneArr && oneArr.locationTagID === cafe 
                                ? <Ellipse  
                                    key={i} 
                                    getDown={downArr.filter(value => value ===i)} 
                                    on={okArray.filter(value => value === i)}
                                /> 
                                : (oneArr && oneArr.locationTagID === nature 
                                ? <Triangle 
                                    key={i} 
                                    getDown={downArr.filter(value => value ===i)} 
                                    on={okArray.filter(value => value === i)}
                                />
                                : null
                            )))))}
                            { fetching ? chooseHead: null }

                        </div>
                    </div>
                </header>
                <div className="window-content">
                    <div className="content-computer">모르시면 눌러보세요</div>
                    <div className="content-computer-sec">알면 계속 내려주세요</div>
                        <div className="img-content">
                            { imgLoaded 
                                ? (arr.map((oneArr,i) =>  
                                    <Img 
                                        key={oneArr && oneArr.locationName} 
                                        points={oneArr && oneArr.locationData}
                                        onOk={this.handleOk}
                                        childOk={i}
                                        locationTagID={oneArr && oneArr.locationTagID}
                                        locationName={oneArr && oneArr.locationName}                           
                                    />)) 
                                :<div style={{ 
                                    width:'100%', 
                                    height:'100vh', 
                                    backgroundColor:'#333', 
                                    color:'white',
                                    textAlign: 'center',
                                    fontWeight: '900',
                                    fontSize: '30px',
                                    paddingTop: '100px'
                                }}>
                                    시간이 걸리오니, <br/> 조금만 기다려주세요.
                                </div>
                            }
                        </div>
                        { sendTextOn 
                            ? <div className="content-form" style={{display : windowUp ? '' : 'none'}}>
                                <div className="content-computer">
                                    나에게 {stationName}이란..
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
                                <div ref={el => {this.el = el}}/>
                            </div>
                            : null }  
                </div>
                { imgLoaded ? 
                    <div
                        onClick={sendTextOn 
                            ? ( value === '' ? this.sendTextWindowUp : this.handleSubmit )
                            : this.handleSubmit
                        } 
                        className="content-next-button" style={{
                        boxShadow: inputOn ? '3px 5px #333':(windowUp ? (textOn ? (nonPass ? '0px 0px red':'3px 5px'+ buttonColor ):'0px 0px #cccccc'):'0px 0px #cccccc'),
                        color: inputOn ? '#333':(windowUp ? (textOn ? (nonPass ? 'red': buttonColor ):'#999'):'#999'),
                        borderColor: inputOn ? '#333' : (windowUp ? (textOn ? (nonPass ? 'red':  buttonColor):'#cccccc'):'#cccccc'),
                        transform: inputOn ? 'translate(-2px, -2px)':(windowUp ? (textOn ? (nonPass ? 'none':'translate(-2px, -2px)'):'none'):'none'),
                        cursor: inputOn ? 'pointer' : (windowUp ? (textOn ? (nonPass ? 'not-allowed':'pointer'):'not-allowed'):'not-allowed'),
                        }}
                    > 
                        {inputOn ? '여기까지 할게요':(windowUp ? (textOn ? (nonPass ? '5자 내로 적어주세요':'다 했어요'):'거의 다 했어요'):stationName)}
                    </div> 
                    : null
                }
            </div>
        )
    }
}

export default withRouter(Window);