import React, { Component } from 'react';
import Img from './_Img.jsx';
import '../CSS/Window.css';
import Json from '../data/seoul.json';
import { withRouter } from 'react-router-dom';

class Window extends Component {
    constructor(props){
        super(props);

        this.goBack = this.goBack.bind(this);
    }

    async componentDidMount() {

    }

    goBack(){
        this.props.history.goBack()
    }

    render() {
        const { show } = this.props;
        const stationDatas = Json.list[this.props.station]
        console.log(stationDatas)
        // const { imgList } = stationDatas.map(stationData => { 
        //     return (
        //         <Img points = {stationData.locationData} className="img-stations"/>
        //     )}
        // )

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