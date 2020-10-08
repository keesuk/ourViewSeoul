import React from 'react';
import styled from 'styled-components';

const TriangleDiv = styled.div`
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom-width: 18px;
    border-bottom-style: solid;
`;
export class Triangle extends React.Component {
    render() {
        const on = this.props.on
        return(
            <>
            <TriangleDiv
                style ={{ borderBottomColor : on.length !== 0
                    ? '#087A0D;'
                    : '#e5e5e5;'
                }}
            />
            </>
        )
    }  
};

const CircleDiv = styled.div`
    height: 11px;
    width: 11px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
`;
export class Circle extends React.PureComponent {
    render() {
        const on = this.props.on
        return(
            <>
            <CircleDiv
                style ={{ backgroundColor: on.length !== 0
                    ? '#E20000'
                    : '#e5e5e5'
                }}
            />
            </>
        )
    }  
};

const RhombusDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: red;
    border-radius: 50%;
    display: inline-block;
`;
export class Rhombus extends React.Component {
};

const RectangularDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: green;
    border-radius: 50%;
    display: inline-block;
`;
export class Rectangular extends React.Component {
};

const EllipseDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: blue;
    border-radius: 50%;
    display: inline-block;
`;
export class Ellipse extends React.Component {
};