import React, { Component } from 'react';
import styled from 'styled-components';
import Poster from './Poster';

const scrollValue = 550

const OutputWrapper = styled.div`

    display: none;

    @media all and (min-width:0px) and (max-width:1023px) {
        display: block;
        z-index: 1000;
        height: 100vh;
        box-sizing: border-box;
        border-left: 2px solid black;
        border-right: 2px solid black;
        border-top: 2px solid black;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        transition: all .5s ease;
        position:fixed;
        overflow:auto;
        box-shadow: 5px 5px black;
    }
`;
const OutputButton = styled.div`

    text-align: center;
    font-weight: 800;
    cursor: pointer;
    padding: 0;
    top: 0;
    position: sticky;
    font-size: 11vw;
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
                    transform: pageUp ? 'translateY(-97vh)' : 'translateY(-22vh)',
                    width: pageUp ? '100vw' : '95vw',
                    backgroundColor: pageUp ? 'black' : 'white',
                }}
            >
                <div>
                    
                    <OutputButton
                        onClick={this.posterPageUp}
                        style={{
                            color: pageUp ? (scrolling ? 'black' : 'white') : 'black',
                            paddingBottom: pageUp ? '0px' : '20px', 
                        }}
                    >
                        ￣
                    </OutputButton>
                    {pageUp ? <Poster on={this.props.on}/> : null }
                </div>
            </OutputWrapper>
        )
    }
}

export default Output;