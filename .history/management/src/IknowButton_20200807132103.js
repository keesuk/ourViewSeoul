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
    
    intro = () => {
            this.setState(state => ({ButtonOn: !state.ButtonOn}));
            this.timeOut();
    };

    timeOut = () => {
        timeout = setTimeout( ()=> {
            this.setState(state => ({ButtonOn: false})
        )}, 2000);
    }
    
    
    render() {
        return(
            <div className="IknowWrap">
                <button className="Iknow" onClick={this.intro}> {this.state.ButtonOn ? '저는 여기 조금 알아요.' : '저는 여기 조금 .'} </button>
            </div>
        );
    }
}

export default IknowButton;