import React, { Component } from 'react';
import './App.css';
import './index.css';
import SeoulMap from './SeoulMap.js';
import IknowButton from './IknowButton';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


class App extends Component {

  render() {
    return (
      <div className="App">
        <IknowButton />
        <div className="map">
          {/* <TransformWrapper 
              defaultScale={1}
              setTransfrom={{
              }}
              wheel={{
                  step: 140,
              }}
          >
            {({ resetTransform, ...rest }) => (
              <React.Fragment>
                <TransformComponent> */}
                <SeoulMap />
                {/* </TransformComponent>
              </React.Fragment>
            )}
          </TransformWrapper> */}
        </div>
      </div>
    );
  }
};

export default App;