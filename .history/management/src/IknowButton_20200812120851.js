import React, { Component } from 'react';
import './IknowButton.css';
import './index.css';

class IknowButton extends Component {
    constructor(props) {
        super(props);
        this.state = {ButtonOn : false }

        this.intro = this.intro.bind(this);
        this.timeOut = this.timeOut.bind(this);
    };
    
    componentDidMount() {
        this.intro = () => {
            this.setState(state => ({ButtonOn: !state.ButtonOn}));
            this.timeOut();
        };
    }

    timeOut = () => {
        if(this.state = {ButtonOn : false}){
            clearTimeout(this.timeOut);
        } else if(this.state = {ButtOn : true}){
            setTimeout( ()=> {
                this.setState({ButtonOn: false}
            )}, 2000);
        }
    }
    
    
    render() {
        return(
            <div className="IknowWrap">
                <button className="Iknow" onClick={this.intro}> 
                    {this.state.ButtonOn ? 
                        <div>저는 여기 조금 알아요.<img src=""/>
                            <div className="IknowExplain">잘 아는 지역이 있나요? 그 곳을 클릭해서<br></br> 저에게 알려주세요.</div>
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