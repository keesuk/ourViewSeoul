import React, {PureComponent} from "react";
import { withRouter } from 'react-router-dom';
import { mapDraw } from './_Diagram.jsx';

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
                {mapDraw(this.passPosition)}
            </>
        )
    }
}
  
export default withRouter(Map);

