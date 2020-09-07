import React, { Component } from 'react';
import { csv } from 'd3';
import '../CSS/SeoulMap.css';
import seoulPlace from '../data/seoul.csv';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Output from './Output';
import Window from './Window';

const width = 1280;
const height = 1280;

class SeoulMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            winShow : false,
            outShow : false,
            wheelValue : 2,
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    
    componentDidMount() {
        csv(seoulPlace).then( (data) => {
            this.setState( {data} )
        })
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    windowOn = () => {
        this.setState({ winShow: true })
    }
    windowClose = () => {
        this.setState({ winShow: false })
    }

    updateDimensions() {
        if(window.innerWidth < 1023) {
          this.setState({ wheelValue : 140 });
        } 
    }

    render() { 
        const { data } = this.state;
        const { wheelValue } = this.state;

        return (
            <>
            <TransformWrapper 
                defaultScale={1}
                defaultPositionX={width}
                defaultPositionY={height}
                wheel={{
                    step: wheelValue,
                }}
            >
                {({ resetTransform, ...rest }) => (
                <React.Fragment>
                    <TransformComponent>
                    <div className="svg-container">
                        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 1280 1280" className="svg-content-responsive">
                            {data.map( (d, i) => 
                                <text
                                    className="station-text"
                                    onClick={() => this.windowOn()}
                                    key={i} 
                                    width={10}
                                    height={5}
                                    x={d.xCor}
                                    y={height - d.yCor}
                                > {d.station}
                                </text>
                            )}
                        </svg>
                    </div>
                    </TransformComponent>
                </React.Fragment>
                )}
            </TransformWrapper>
            <Window show={this.state.winShow} windowClose={this.windowClose}/>
            <Output />
            </>
        )
    }
}

export default SeoulMap;   