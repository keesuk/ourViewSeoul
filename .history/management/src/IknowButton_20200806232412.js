import React, { Component } from 'react';
import './IknowButton.css';
import './index.css';

class IknowButton extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        before: null,
        after: null,
    };

    onClickBtn () => {

    }


    render() {
        const { before } = this.state;
        return(
            <div className="Iknow" onClick={()=> this.onClickBtn()}>저는 여기 조금 알아요.</div>
        );
    }

}

export default IknowButton