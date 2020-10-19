import React, { Component } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import MapShow from './_MapShow.jsx';
                            
class OutputMap extends PureComponent {
  
    render() {
        return(            
            <TransformWrapper
                defaultScale={4}
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