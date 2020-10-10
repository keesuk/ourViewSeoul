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
export class Triangle extends React.PureComponent {
    render() {
        const on = this.props.on
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

export class Rhombus extends React.PureComponent {
    render() {
        const on = this.props.on
        return(
            <>
            <svg
                width="15px"
                height="15px">
            <path
                d="M13.08 7.5L7.5 15 1.93 7.5 7.5 0l5.58 7.5z"
                fill ={on.length !== 0
                    ? '#7B2E8E'
                    : '#e5e5e5'
                }
            />
            </svg>
            </>
        )
    }  
};

const RectangularDiv = styled.div`
    display: inline-block;
    height: 11px;
    width: 11px;
    margin-right: 4.5px;
`;
export class Rectangular extends React.PureComponent {
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
export class Ellipse extends React.PureComponent {
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