import React, {PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import data from '../data/map.json';

class Map extends PureComponent {
    constructor(props){
        super()
        this.position = [];
        this.passPosition = this.passPosition.bind(this);
    }
    
    passPosition(id){
        const { match, history } = this.props

        history.push(match.path.replace(':station', id))
        this.props.pinCor(this.position[id].innerHTML)
    }

    render() {
        return (
            <>
                {data.children.map((station, i) => 
                <g 
                    id={station.attributes.id}
                    key={station.attributes.id + i}
                    ref={position => this.position[station.attributes.id] = position}
                    onClick={() => this.passPosition(station.attributes.id)}
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
                </g>)}
            </>
        )
    }
}
  
export default withRouter(Map);

