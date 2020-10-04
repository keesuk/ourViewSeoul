import React from 'react';
import styled from 'styled-components';

const TriangleDiv = styled.div`
    height: 18px;
    width: 18px;
    border-radius: 50%;
    display: inline-block;
`;
export class Triangle extends React.Component {
    render() {
        const {ok, number} = this.props;
        return(
            <>
            <TriangleDiv
                style ={{ 
                    backgroundColor: ok === number 
                    ? '#087A0D'
                    : '#e5e5e5'
                }}
            />
            </>
        )
    }  
};

const CircleDiv = styled.div`
    height: 18px;
    width: 18px;
    background-color: #e5e5e5;
    border-radius: 50%;
    display: inline-block;
    margin-right:5px;
`;
export class Circle extends React.Component {
    render() {
        const {ok, number} = this.props;
        return(
            <>
            <CircleDiv
                style ={{ 
                    backgroundColor: ok === number 
                    ? '#087A0D'
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
  render() {
      const {number} = this.props;

      return(
          <RhombusDiv/>
      )
  } 
};

const RectangularDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: green;
    border-radius: 50%;
    display: inline-block;
`;
export class Rectangular extends React.Component {
  render() {
      const {number} = this.props;

      return(
          <RectangularDiv/>
      )
  } 
};

const EllipseDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: blue;
    border-radius: 50%;
    display: inline-block;
`;
export class Ellipse extends React.Component {
  render() {
      const {number} = this.props;

      return(
          <EllipseDiv/>
      )
  } 
};