import React from 'react';
import styled from 'styled-components';

// const TriangleDiv = styled.div`
//     height: 18px;
//     width: 18px;
//     border-radius: 50%;
//     display: inline-block;
// `;
// export class Triangle extends React.Component {
// };

const CircleDiv = styled.div`
    height: 18px;
    width: 18px;
    border-radius: 50%;
    display: inline-block;
    margin-right:5px;
`;
export class Circle extends React.PureComponent {
    state = {
        colorOn : false
    }
    colorChange(){
        this.setState(state=>({colorOn: !state.colorOn}))
    }

    render() {
        const colorOn = this.state
        const on = this.props
        if(on === []){
            this.colorChange()
        }

        return(
            <>
            <CircleDiv
                style ={{ backgroundColor: colorOn
                    ? '#087A0D'
                    : '#e5e5e5'
                }}
            />
            </>
        )
    }  
};

// const RhombusDiv = styled.div`
//     height: 25px;
//     width: 25px;
//     background-color: red;
//     border-radius: 50%;
//     display: inline-block;
// `;
// export class Rhombus extends React.Component {
// };

// const RectangularDiv = styled.div`
//     height: 25px;
//     width: 25px;
//     background-color: green;
//     border-radius: 50%;
//     display: inline-block;
// `;
// export class Rectangular extends React.Component {
// };

// const EllipseDiv = styled.div`
//     height: 25px;
//     width: 25px;
//     background-color: blue;
//     border-radius: 50%;
//     display: inline-block;
// `;
// export class Ellipse extends React.Component {
// };