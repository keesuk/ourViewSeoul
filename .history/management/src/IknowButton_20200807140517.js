import React, { Component } from 'react';
import './IknowButton.css';
import './index.css';

class IknowButton extends Component {
    constructor(props) {
        super(props);
        this.state = {ButtonOff : false }

        this.intro = this.intro.bind(this);
        this.timeOut = this.timeOut.bind(this);
    };
    
    intro = () => {
        this.setState(state => ({ButtonOff: !state.ButtonOff}));
        this.timeOut();
    };

    timeOut = () => {
        if(this.state === {ButtonOff: false}){
            setTimeout( ()=> {
                this.setState({ButtonOff: false}
            )}, 2000);
        }
    }
    
    
    render() {
        return(
            <div className="IknowWrap">
                <button className="Iknow" onClick={this.intro}> 
                    {this.state.ButtonOff ? 
                        <div>저는 여기 조금 알아요.<img src=""/>
                            <div>잘 아는 지역이 있나요? 그 곳을 클릭해서 저에게 알려주세요.</div>
                        </div>
                        : 
                        <div>저는 여기 조금 알아요.<img src=""/></div>
                    } 
                </button>
            </div>
        );
    }
}

export default IknowButton;