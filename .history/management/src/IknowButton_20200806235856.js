import React, { Component } from 'react';
import './IknowButton.css';
import './index.css';

class IknowButton extends Component {
    constructor(props) {
        super(props);
        this.state = {ButtonOn : false }

        this.intro = this.intro.bind(this);
    };

    intro() {
        this.setState(state => ({

        }))
    };
    


    render() {
        return(
            <button className="Iknow" onClick={this.intro}>저는 여기 조금 알아요.</button>
        );
    }

}

export default IknowButton