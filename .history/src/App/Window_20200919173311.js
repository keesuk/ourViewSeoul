import React, { Component } from 'react';
import Img from './_Img.jsx';
import '../CSS/Window.css';
import { withRouter } from 'react-router-dom';

class Window extends Component {
    constructor(props){
        super(props);
        this.state = {
            locationData : {},          
        }
        this.goBack = this.goBack.bind(this);
    }

    componentDidUpdate() {
        if(this.props.station !== ':station'){
            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = 'https://storage.googleapis.com/station_image_data/station_image/'+ this.props.station;
            fetch( proxyurl + url )
                .then(response => response.json())
                .then(json => Object.assign(this.state.locationData, json))
                .then(json => console.log(json))
        }
    }

    goBack(){
        this.props.history.goBack()
    }

    render() {
        const { show } = this.props;
        const { imgList } = this.state.locationData.map(stationList => { 
            return (
                console.log(stationList)
                <Img points = {} className="img-stations"/>
            )}
        )

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