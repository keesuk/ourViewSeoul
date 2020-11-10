import React, { Component } from 'react';
import { Circle, Triangle, Rhombus, Ellipse, Rectangular } from './_Diagram.jsx';
import styled from 'styled-components';
import Poster from './Poster';

const scrollValue = 550

const OutputWrapper = styled.div`

    display: none;

    @media all and (min-width:0px) and (max-width:1023px) {
        display: block;
        z-index: 1000;
        height: 200vh;
        box-sizing: border-box;
        border-left: 2px solid #333;
        border-right: 2px solid #333;
        border-top: 2px solid #333;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        transition: all .5s ease;
        position:fixed;
        overflow:auto;
        box-shadow: 5px 5px #333;
    }
`;
const OutputButton = styled.div`

    text-align: center;
    font-weight: 800;
    cursor: pointer;
    top: 0;
    margin-bottom: -5vh;
    position: sticky;
    font-size: 10vw;
    z-index: 1000;
`;
const CategoryText = styled.div`
    font-size: 3.85vw;
    margin-left: -4.5vw;
    width: 100%;
    font-weight: 900;
    letter-spacing: -.6px;
`;

class Output extends Component {
    constructor(props){
        super(props)
        this.state = {
            pageUp : false,
            scrolling : false,
            constentShow : false,
        }
        this.posterPageUp = this.posterPageUp.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

    posterPageUp() {
        this.setState(state => ({pageUp : !state.pageUp}))
        setTimeout(() => {this.setState(state => ({contentShow : !state.contentShow}))},400)
    }
    
    handleScroll(event) {
        const element = event.target.scrollTop
        if( element > scrollValue )this.setState({scrolling : true})
        else this.setState({scrolling: false})
    }
    

    render() {
        const { pageUp, scrolling, contentShow } = this.state

        return(
            <OutputWrapper 
                onScroll={this.handleScroll}
                style={{ 
                    transform: pageUp ? 'translateY(-97vh)' : 'translateY(-26vh)',
                    width: pageUp ? '100vw' : '95vw',
                    backgroundColor: pageUp ? '#222222' : 'white'
                }}
            >
                <div>
                    <OutputButton
                        onClick={this.posterPageUp}
                        style={{
                            color: pageUp ? (scrolling ? '#333' : 'white') : '#333'
                        }}
                    >
                        ￣
                    </OutputButton>
                    {contentShow 
                    ? <Poster 
                        pageUp={pageUp}
                        posterPin={this.props.posterPin}
                    />
                    : <CategoryText>
                        <Rhombus right={'0px'}/>
                            <div style={{color:'#e90087'}}>박물관 갤러리</div>
                        <Rectangular right={'0px'}/>
                            <div style={{color:'#006CC4'}}>쇼핑 마켓</div>
                        <Circle right={'0px'}/>
                            <div style={{color:'#E20000'}}>랜드마크</div>
                        <Triangle right={'0px'} top={'-0.5px'}/>
                            <div style={{color:'#087A0D'}}>자연 휴양지</div>
                        <Ellipse right={'0px'} top={'-4.5px'}/>
                            <div style={{color:'#00bfb3'}}>음식점</div>
                    </CategoryText>}
                </div>
            </OutputWrapper>
        )
    }
}

export default Output;