import React from 'react';
import styled from 'styled-components';

const TriangleDiv = styled.div`
    display: inline-block;
    width: 0; 
    height: 0;
    margin-right: 2px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom-width: 12px;
    border-bottom-style: solid;
`;
export class Triangle extends React.Component {
    render() {
        const on = this.props.on
        console.log(on)
        return(
            <>
            <TriangleDiv
                style ={{ borderBottomColor : on.length !== 0
                    ? '#087A0D'
                    : '#e5e5e5'
                }}
            />
            </>
        )
    }  
};

const CircleDiv = styled.div`
    display: inline-block;
    height: 11px;
    width: 11px;
    border-radius: 50%;
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
    border-bottom: 2px solid #555;
    border-top: 2px solid #555;
    margin-top: 30px;
    padding: 40px 0;
`;
export class Rhombus extends React.Component {
    render() {
        const on = this.props.on
        return(
            <>
            <RhombusDiv
                style ={{ backgroundColor: on.length !== 0
                    ? '#7B2E8E'
                    : '#e5e5e5'
                }}
            />
            </>
        )
    }  
};

const RectangularDiv = styled.div`
    display: inline-block;
    height: 11px;
    width: 11px;
`;
export class Rectangular extends React.Component {
    render() {
        const on = this.props.on
        return(
            <>
            <RectangularDiv
                style ={{ backgroundColor: on.length !== 0
                    ? '#006CC4'
                    : '#e5e5e5'
                }}
            />
            </>
        )
    }  
};

const EllipseDiv = styled.div`
    display: inline-block;
    height: 11px;
    width: 11px;
    border-radius: 50%;
    margin-right: 5px;
`;
export class Ellipse extends React.Component {
    render() {
        const on = this.props.on
        return(
            <>
            <EllipseDiv
                style ={{ backgroundColor: on.length !== 0
                    ? '#EFC820'
                    : '#e5e5e5'
                }}
            />
            </>
        )
    }  
};