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

// const RhombusDiv = styled.div`
//     & {
//       width: 0;
//       height: 0;
//       border: 50px solid transparent;
//       border-bottom-color: red;
//       position: relative;
//       text-align: center;
//       top: -50px;
//     }
//     &:after {
//       content: '';
//       position: absolute;
//       left: -50px;
//       top: 50px;
//       width: 0;
//       height: 0;
//       border: 50px solid transparent;
//       border-top-color: red;
//     }
// `;
export class Rhombus extends React.Component {
    render() {
        const on = this.props.on
        return(
            <>
            <svg
                width="12px"
                height="12px">
            <path
                d="M10.46 6L6 12 1.54 6 6 0l4.46 6z"
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