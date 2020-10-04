import React from 'react';
import styled from 'styled-components';

const TriangleDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
`;
class Triangle extends React.Component {
  render() {
      return(
          <TriangleDiv/>
      )
   }  
};
export default Triangle;

const CircleDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
`;
class Circle extends React.Component {
  render() {
      return(
          <CircleDiv/>
      )
  } 
};
export default Circle;

const RhombusDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
`;
class Rhombus extends React.Component {
  render() {
      return(
          <RhombusDiv/>
      )
  } 
};
export default Rhombus;

const RectangularDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
`;
class Rectangular extends React.Component {
  render() {
      return(
          <RectangularDiv/>
      )
  } 
};
export default Rectangular;

const EllipseDiv = styled.div`
    height: 25px;
    width: 25px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
`;
class Ellipse extends React.Component {
  render() {
      return(
          <EllipseDiv/>
      )
  } 
};
export default Ellipse;