import React, {PureComponent} from "react";
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import data from '../data/map.json';

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
    }
  
    render() {
        const {match, history} = this.props;
        const mapList = data.children.map((station, i) => 
                <g 
                    id={station.attributes.id}
                    key={station.attributes.id}
                    ref={position => this.position[i] = position}
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
            )

        console.log(this.position)

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

