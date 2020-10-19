import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import MapShow from './_MapShow.jsx';


const SvgContainer = styled.div`
    display: inline-block;
    position: relative;
    cursor: move;

    @media all and (min-width:0px) and (max-width:1023px) {
        display: inline-block;
        position: relative;
        width: 88vw;
        height: 88vw;
    }
`;

class OutputMap extends PureComponent {
  
    render() {
        return(            
            <TransformWrapper
                scale={this.props.scale}
                wheel={{
                    disabled: true,
                }}
            >
                {({ resetTransform, 
                    scale,
                    ...rest }) => (
                <React.Fragment>
                    <TransformComponent>
                        <SvgContainer> 
                            <MapShow/>
                        </SvgContainer>
                    </TransformComponent>
                </React.Fragment>
                )}
            </TransformWrapper>
        )
    }
}

export default OutputMap;