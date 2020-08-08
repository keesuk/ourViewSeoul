import React, { Component } from 'react';
import './IknowButton.css';
import './index.css';

class IknowButton extends Component {
    constructor(props) {
        super(props);
        this.state = {ButtonOn : false }

        this.intro = this.intro.bind(this);
    };

    timeout;

    intro = () => {
        this.timeout = setTimeout( ()=> {
            this.setState(state => ({
            ButtonOn: !state.ButtonOn
        }))}, 3000);
    };


    // timeOut = () => {
    //     const { state } = this.state;
    //     if (state === true ){
    //         this.tiemout = setTimeout( ()=> {
    //             this.setState( {
    //             state: false
    //         })}, Math.floor(3000));
    //     }
    // }
    
    render() {
        return(
            <div className="IknowWrap">
                <button className="Iknow" onClick={this.intro}> {this.state.ButtonOn ? '저는 여기 조금 알아요.' : '저는 여기 조금 .'} </button>
            </div>
        );
    }
}

export default IknowButton