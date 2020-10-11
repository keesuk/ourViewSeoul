import React, {PureComponent} from "react";
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import data from '../data/map.json';
import { AskMarker, randomize } from './_Diagram'

let i = 0
const Svg = styled.svg`
	.st0{font-family:'Noto Sans KR'; font-weight:900; cursor:pointer;}
	.st1{font-size:6.5759px;}
	.st2{font-size:4.5326px;}
	.st3{fill:#E5E5E4;}
    .st4{font-size:9.0311px;}
`;

class Map extends PureComponent {
    constructor(props){
        super()
        this.position = [];
        this.state = {
            now : null
        }
    }

    componentDidUpdate(){
        if(this.props.ask === true){
            this.interval = setInterval(()=>{
                this.setState({now : this.change(data.children.attributes)})
            }, 300)
        }else{
            clearInterval(this.interval)
        }
    }

    change = (items) => {
        i = (i+1) % items.size
        return items[i]
    }
  
    render() {
        const {match, history, ask} = this.props;
        const mapList = data.children.map((station, i) => 
            <>
                {ask && this.state.now === station.attributes
                    ? <AskMarker/> 
                    : null}
                <g 
                    id={station.attributes.id}
                    key={station.attributes.id}
                    ref={position => this.position[station.attributes.id] = position}
                    onClick={()=>history.push(match.path.replace(':station', station.attributes.id))}
                >
                    {station.children.map(child => {
                        return (
                            <text 
                                transform={child.attributes.transform} 
                                className={child.attributes.className}
                            >
                                {child.children[0].value}
                            </text>
                    )})}
                </g>
            </>)

        return (
            <>
            <Svg
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                enableBackground="new 0 0 1280 1280"
                version="1.1"
                viewBox="0 0 1280 1280"
                xmlSpace="preserve"
            >
                {mapList}
            </Svg>
            </>
        )
    }
}
  
  

export default withRouter(Map);

