import React, { Component } from 'react';
import './App.css';
import './index.css';
import SeoulMap from './SeoulMap.js';

class App extends Component {
  render(){ 
    return (
      <div className ="App"> 
        <div className="iknow">
          <button onClick={() => alert('click')} className="iknow-btn">저는 여기 조금 알아요</button>
          <div className="iknow-btn-explantion">잘 아는 지역이 있나요? 그 곳을 클릭해서 저에게 알려주세요.</div>
        </div>
        <div className ="map"><SeoulMap /></div>
      </div>
    );
  }
};

export default App;