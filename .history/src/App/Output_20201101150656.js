import React, { Component } from 'react';
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

class Output extends Component {
    constructor(props){
        super(props)
        this.state = {
            pageUp : false,
            scrolling : false,
        }
        this.posterPageUp = this.posterPageUp.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

    posterPageUp() {
        this.setState(state => ({pageUp : !state.pageUp}))
    }
    
    handleScroll(event) {
        const element = event.target.scrollTop
        if( element > scrollValue )this.setState({scrolling : true})
        else this.setState({scrolling: false})
    }
    

    render() {
        const { pageUp, scrolling } = this.state
        return(
            <OutputWrapper 
                onScroll={this.handleScroll}
                style={{ 
                    transform: pageUp ? 'translateY(-97vh)' : 'translateY(-24vh)',
                    width: pageUp ? '100vw' : '95vw',
                    backgroundColor: pageUp ? '#222222' : 'white',
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
                    <Poster 
                        top={ pageUp? '0px': '-16.5vw'} 
                        bottom={ pageUp? '0px': '50px'}
                        width={ pageUp? '85%': '50%' }
                        posterPin={this.props.posterPin}
                    />
                </div>
            </OutputWrapper>
        )
    }
}

export default Output;