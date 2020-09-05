import React, { Component } from 'react';
import { ReactComponent as Map } from '../data/map.svg';
import '../CSS/SeoulMap.css';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Window from './Window';
import styled from 'styled-components';


class SeoulMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],
            show : false,
            wheelValue : 2,
            highlighted: null,
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }
    
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        if(window.innerWidth < 1023) {
          this.setState({ wheelValue : 140 });
        } 
    }

    setHighlight(territory) {
        this.setState({
            highlighted: territory,
            show: true,
            
        });
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
                        <StyledMap/>
                    </div>
                    </TransformComponent>
                </React.Fragment>
                )}
            </TransformWrapper>
            <Window 
                onHighlight={(terr) => this.setHighlight(terr)}
                // show={this.state.show} 
                // windowClose={this.windowClose}
            />
            </>
        )
    }
}

const StyledMap = styled(Map)`
	.st0{font-family:'Noto Sans KR'; font-weight:900;}
	.st1{font-size:6.5759px;}
	.st2{font-size:4.5326px;}
	.st3{fill:#E5E5E4;}
    .st4{font-size:9.0311px;}
    #Ilsan text:hover{font-size:100px;}
`;

export default SeoulMap;   