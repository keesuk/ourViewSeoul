import React, {PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import data from '../data/map.json';

class Map extends PureComponent {
    constructor(props){
        super()
        this.position = [];
    }
  
    render() {
        console.log(this.position.innerHTML)
        const {match, history} = this.props;
        const mapList = data.children.map((station, i) => 
                <g 
                    id={station.attributes.id}
                    key={station.attributes.id + i}
                    ref={position => this.position[station.attributes.id] = position}
                    onClick={()=>history.push(match.path.replace(':station', station.attributes.id))}
                >
                    {station.children.map((child, i) => {
                        return (
                            <text 
                                transform={child.attributes.transform} 
                                className={child.attributes.class}
                                key={child + i}
                            >
                                {child.children[0].value}
                            </text>
                    )})}
                </g>)

        return (
            <>
                {mapList}
            </>
        )
    }
}
  
export default withRouter(Map);

