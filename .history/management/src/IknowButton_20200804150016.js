import React, { Component, useState } from 'react';
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
        };

        render(<Button messege="저는 여기 조금 알아요."/>);
    }
}

export default IknowButton