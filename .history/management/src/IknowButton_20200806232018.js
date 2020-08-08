import React, { Component } from 'react';
import './IknowButton.css';
import './index.css';

class IknowButton extends Component {
    state = {
        before: null,
    };

    render() {
        const { before } = this.state;
        return(
            <div className="Iknow" onClick={()=> this.onClickBtn()}>저는 여기 조금 알아요.</div>
        );
    }

}

export default IknowButton