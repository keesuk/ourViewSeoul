import React, { Component } from 'react';
import './App.css';
import './index.css';

class IknowButton extends React {
    render (){
        const Button = ({ messege }) => {
        const [condition, setCondition] = useState(false);
            
        return (
            <div className="iknow">
                <button 
                    onClick={() => setCondition(!condition)}
                    className={ condition ? "iknow-btn-toggled" : "iknow-btn"}
                >
                {messege}
                </button>
            </div>
        );
        }
    }
}


{/* <div className="iknow-btn-explantion">잘 아는 지역이 있나요? 그 곳을 클릭해서 저에게 알려주세요.</div> */}