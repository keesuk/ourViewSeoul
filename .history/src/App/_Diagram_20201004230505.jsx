import React from 'react';
import styled from 'styled-components';

const TriangleDiv = styled.div`
    height: 18px;
    width: 18px;
    border-radius: 50%;
    display: inline-block;
`;
export class Triangle extends React.Component {
    state = { colorChange : false }

    ComponentDidUpdate(){
        const {ok, number} = this.props;
        if(ok === number) this.setState(state =>(this.state.colorChange = !state.colorChange))
    }

    render() {
        return(
            <>
                <TriangleDiv
                    style ={{ 
                        backgroundColor: this.state.colorChange
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
    state = { ok : false }

    ComponentDidUpdate(){
        const {ok, number} = this.props;
        if(ok === number) this.setState(state =>(this.state.ok = !state.ok))
    }
    render() {
        return(
            <>
                <CircleDiv
                    style ={{ 
                        backgroundColor: this.state.ok
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
    state = { ok : false }

    ComponentDidUpdate(){
        const {ok, number} = this.props;
        if(ok === number) this.setState(state =>(this.state.ok = !state.ok))
    }
    render() {
        return(
            <>
                <RhombusDiv
                    style ={{ 
                        backgroundColor: this.state.ok
                        ? '#087A0D'
                        : '#e5e5e5'
                    }}
                />
            </>
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
    state = { ok : false }

    ComponentDidUpdate(){
        const {ok, number} = this.props;
        if(ok === number) this.setState(state =>(this.state.ok = !state.ok))
    }
    render() {
        return(
            <>
                <RectangularDiv
                    style ={{ 
                        backgroundColor: this.state.ok
                        ? '#087A0D'
                        : '#e5e5e5'
                    }}
                />
            </>
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
    state = { ok : false }

    ComponentDidUpdate(){
        const {ok, number} = this.props;
        if(ok === number) this.setState(state =>(this.state.ok = !state.ok))
    }
    render() {
        return(
            <>
                <EllipseDiv
                    style ={{ 
                        backgroundColor: this.state.ok
                        ? '#087A0D'
                        : '#e5e5e5'
                    }}
                />
            </>
        )
    } 
};