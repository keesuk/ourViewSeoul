import React, { useMemo } from 'react';
import * as d3 from 'd3';
import * as StackBlur from 'stackblur-canvas';
import Worker from './Worker';
import { range } from 'd3-array';

export const Img = (props) => {
    const data = useMemo(
        () => 
            range(100).map(i => ({
                id: i,
                number:10,
                coord:10,
            })),
        []
    );

    console.log(data);
    
    return(
        <div>
            <svg width="1000" height="1000">
                <Img
                    x={0}
                    y={0}
                    width={300}
                    height={300}
                    data={data}
                />
            </svg>
        </div>
    );
}

