import React, { Component } from 'react';
import '../CSS/IknowButton.css';
import '../CSS/index.css';

class IknowButton extends Component {
    state = { ButtonOn : false }
    
    componentDidUpdate() {
        if( this.state.ButtonOn === false){
            clearTimeout(this.timeout);
        } else if( this.state.ButtonOn === true ){
            this.timeout = setTimeout( ()=> {
                this.setState({ButtonOn: false}
            )}, 2000);
        }
    }

    intro = () => {
        this.setState(state => ({ButtonOn: !state.ButtonOn}));
    };
    
    
    render() {
        return(
            <div className="IknowWrap">
                <div className="Iknow" onClick={this.intro}>
                {this.state.ButtonOn ? 
                    <div className="IknowText">저는 여기 조금 알아요.</div>
                    : 
                    <div className="IknowText">저는 여기 조금 알아요.</div>
                }
                </div>
                {this.state.ButtonOn ? 
                    <div className="IknowExplain">잘 아는 지역이 있나요? 그 곳을 클릭해서 저에게 알려주세요.</div>
                    : 
                    <div/>
                } 
            </div>
        );
    }
}

export default IknowButton;