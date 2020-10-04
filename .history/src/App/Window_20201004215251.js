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
                                stationData && stationData.station === 
                                    '불광' && <Circle key={i}/> || 
                                    '망원' && <Rectangular key={i}/> ||
                                    '경기' && <Rhombus key={i}/> ||
                                    '서울' && <Ellipse key={i}/> ||
                                    '하이' && <Triangle key={i}/>
                            )}
                        </div>
                    </div>
                </header>
                <div className="window-content">
                    <div className="content-answer">
                        아는 만큼 눌러보세요!
                    </div>
                        { stationDatas[0] && stationDatas[0].locationData
                            ? stationDatas.map(stationData =>  
                                <Img 
                                    key={stationData && stationData.locationName} 
                                    points={stationData && stationData.locationData}
                                    onOk={this.handleOk}
                                    locationId={locationTagId}
                                    className="img-stations"
                                />)
                            : null }
                    <div className="content-input">
                        완료
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Window);
