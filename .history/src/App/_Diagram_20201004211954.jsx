import React from 'react';
import styled from 'styled-components';

const TriangleDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
`;
export class Triangle extends React.Component {
  render() {
      return(
          <TriangleDiv/>
      )
   }  
};

const CircleDiv = styled.div`
    height: 2vw;
    width: 1vw;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
`;
export class Circle extends React.Component {
  render() {
      return(
          <CircleDiv/>
      )
  } 
};

const RhombusDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
`;
export class Rhombus extends React.Component {
  render() {
      return(
          <RhombusDiv/>
      )
  } 
};

const RectangularDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
`;
export class Rectangular extends React.Component {
  render() {
      return(
          <RectangularDiv/>
      )
  } 
};

const EllipseDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
`;
export class Ellipse extends React.Component {
  render() {
      return(
          <EllipseDiv/>
      )
  } 
};