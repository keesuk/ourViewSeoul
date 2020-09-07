import React, { Component } from 'react';
import { ReactComponent as Map } from '../data/map.svg';
import '../CSS/SeoulMap.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Window from './Window';
import styled from 'styled-components';


class SeoulMap extends Component {
    
    state = {
        data : [],
        show : false,
        wheelValue : 2,
        highlighted: null,
    }
    
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    windowOn = () => {
        this.setState({ show: true })
    }
    windowClose = () => {
        this.setState({ show: false })
    }

    updateDimensions = () => {
        if(window.innerWidth < 1023) {
          this.setState({ wheelValue : 140 });
        } 
    }


    render() { 
        const { data } = this.state;
        const { wheelValue, highlighted } = this.state;

        return (
            <>
            <TransformWrapper 
                defaultScale={1}
                wheel={{
                    step: wheelValue,
                }}
            >
                {({ resetTransform, ...rest }) => (
                <React.Fragment>
                    <TransformComponent>
                    <div className="svg-container">
                        <StyledMap highlighted={highlighted} />
                    </div>
                    </TransformComponent>
                </React.Fragment>
                )}
            </TransformWrapper>
            <Window show={this.state.show} windowClose={this.windowClose}/>
            </>
        )
    }
}

const StyledMap = styled(Map)`
	.st0{ enable-background:new; }
	.st1{ font-family:'Noto Sans KR'; font-weight:900; }
    .st2{ font-size:6.5759px; }
        .st2:hover{ font-size: 10px; }
    .st3{ font-size:4.5326px; }
    .st4{ fill:#E5E5E4; }
    .st5{ font-size:9.0311px; }
`;

export default SeoulMap;   