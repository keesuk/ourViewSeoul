import React from 'react';
import styled, { keyframes } from 'styled-components';

const TriangleText = styled.div`
    font-family: Arial, Helvetica, sans-serif;
`;
export class Triangle extends React.PureComponent {
    render() {
        const { on, right, left, size, top, getDown} = this.props
        
        return(
            <TriangleText
                style ={{ color : on.length !== 0
                    ? '#e5e5e5'
                    : (getDown.length !== 0 ? '#087A0D' : 'black'),
                    marginRight: right,
                    marginLeft: left,
                    fontSize: size,
                    marginTop: top
                }}
            >
            ▲
            </TriangleText>
        )
    }  
};

export class Circle extends React.PureComponent {
    render() {
        const { on, right, left, size, getDown } = this.props
        return(
            <div
                style ={{ color: on.length !== 0
                    ? '#e5e5e5'
                    : (getDown.length !== 0 ? '#E20000' : 'black'),
                    marginRight: right,
                    marginLeft: left,
                    fontSize: size,
                }}
            >
            ●
            </div>
        )
    }  
};

export class Rhombus extends React.PureComponent {
    render() {
        const { on, right, left, size, getDown } = this.props
        return(
            <div style ={{ color : on.length !== 0
                ? '#e5e5e5'
                : (getDown.length !== 0 ? '#e90087': 'black'),
                marginRight: right,
                marginLeft: left,
                fontSize: size,
            }}>
            &#9670;
            </div>
        )
    }  
};

export class Rectangular extends React.PureComponent {
    render() {
        const { on, right, left, size, getDown} = this.props
        return(
            <div
                style ={{ color: on.length !== 0
                    ? '#e5e5e5'
                    : (getDown.length !== 0 ? '#006CC4':'black'),
                    marginRight: right,
                    marginLeft: left,
                    fontSize: size,
                }}
            >
            ■
            </div>
        )
    }  
};

export class Ellipse extends React.PureComponent {
    render() {
        const { on, right, left, size, top, getDown } = this.props
        return(
            <div
                style ={{ color: on.length !== 0
                    ? '#e5e5e5'
                    : (getDown.length !== 0 ? '#00bfb3':'black'),
                    marginRight: right,
                    marginLeft: left,
                    fontSize: size,
                    marginTop: top,
                    transform: 'rotate(20deg)',
                }}
            >
            ⬮
            </div>
        )
    }  
};


const PinContainer = styled.div`
    position: relative;
    display: inline-block;
`;
export class PinUp extends React.PureComponent {
    render() {
        return (
            <PinContainer>
            <svg style={{paddingLeft : '6px'}} width={this.props.width} height={this.props.height} viewBox='0 -5 70 80' fill="none">
                <g clipPath="url(#prefix__clip0)">
                    <path
                        opacity={0.3}
                        d={this.props.choose==='red'
                            ? "M68.9 74.2H3L.1 77.5h68.8v-3.3z" : (this.props.choose==='green' 
                            ? "M.571 74.2h65.9l2.9 3.3H.571v-3.3z" : (this.props.choose==='blue' 
                            ? "M68.9 74.3H3L.1 77.6h68.8v-3.3z" : (this.props.choose==='purple' 
                            ? "M.571 74.2h65.9l2.9 3.3H.571v-3.3z" : "M68.9 74.2H3L.1 77.5h68.8v-3.3z")))}
                        fill="url(#prefix__paint0_linear)"
                    />
                    <path
                        d={this.props.choose==='red'
                            ? "M26.7 37.4l3.5 2.6-25 34.4L0 77.8l1.6-6 25.1-34.4z" : (this.props.choose==='green' 
                            ? "M42.771 37.4l-3.5 2.6 25 34.4 5.2 3.4-1.6-6-25.1-34.4z" : (this.props.choose==='blue' 
                            ? "M26.7 37.5l3.5 2.6-25 34.4L0 77.9l1.6-6 25.1-34.4z" : (this.props.choose==='purple' 
                            ? "M42.771 37.4l-3.5 2.6 25 34.4 5.2 3.4-1.6-6-25.1-34.4z" : "M26.7 37.4l3.5 2.6-25 34.4L0 77.8l1.6-6 25.1-34.4z")))}
                        fill="url(#prefix__paint1_linear)"
                    />
                    
                    {this.props.choose==='red'
                            ? <path fill="#E20000" d="M39.4 47.4c13.09 0 23.7-10.61 23.7-23.7S52.49 0 39.4 0 15.7 10.61 15.7 23.7s10.61 23.7 23.7 23.7z"/> 
                    : (this.props.choose==='green' 
                            ? <path fill="#087A0D" d="M13.095-.162l50.713 22.599L18.88 55.056 13.095-.162z"/> 
                    : (this.props.choose==='blue' 
                            ? <path fill="#006CC4" d="M25.116.1H68.9v43.784H25.116z"/> 
                    : (this.props.choose==='purple' 
                            ? <path fill="#e90087" d="M6.236 0l34.21 14.355 8.992 35.993L15.23 35.992 6.236 0z"/> 
                    :  <ellipse rx={16.689} ry={28.97} transform="scale(-1 1) rotate(-32.844 25.414 76.846)" fill="#00bfb3"/>)))}
                </g>
                <defs>
                    <linearGradient
                        id="prefix__paint0_linear"
                        x1={this.props.choose==='red'? 60.788 : (this.props.choose==='green' ? 8.683: (this.props.choose==='blue' ? 60.788 : (this.props.choose==='purple' ? 8.683 : 60.788)))}
                        y1={75.863}
                        x2={this.props.choose==='red'? 17.936 : (this.props.choose==='green' ? 51.535: (this.props.choose==='blue' ? 17.936 : (this.props.choose==='purple' ? 51.535 : 17.936)))}
                        y2={75.863}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#fff" />
                        <stop offset={1} />
                    </linearGradient>
                    <linearGradient
                        id="prefix__paint1_linear"
                        x1={this.props.choose==='red'? 15.979 : (this.props.choose==='green' ? 53.492: (this.props.choose==='blue' ? 15.979 : (this.props.choose==='purple' ? 53.492 : 15.979)))}
                        y1={59.527}
                        x2={this.props.choose==='red'? 13.483 : (this.props.choose==='green' ? 55.988: (this.props.choose==='blue' ? 13.483 : (this.props.choose==='purple' ? 55.988 : 13.483)))}
                        y2={57.709}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#313131" />
                        <stop offset={1} stopColor="#E9E9E9" />
                    </linearGradient>
                    <clipPath id="prefix__clip0">
                        <path
                            fill="#fff"
                            transform="matrix(-1 0 0 1 69.753 .567)"
                            d="M0 0h68.9v77.8H0z"
                        />
                    </clipPath>
                </defs>
            </svg>
            </PinContainer>
        )
    }
}

//-82
export class Pin extends React.PureComponent {
    state = {
        locationTag : false,
    }

    aboutData = () => {
        this.setState(state => ({locationTag : !state.locationTag}))
        this.timeout = setTimeout( ()=> {
            this.setState(state => ({locationTag : !state.locationTag}))
        }, 4000)
    }

    render() {
        const pinFirst = 1
        const pinMiddle = 4
        const pinLimit = 8

        const { pinData, pinCor, pinValue } = this.props
        
        const trianglePin = (i) => {
            return (<text fontSize={'75px'} transform={`rotate(38.2, 15, -50)`} fill={'#087A0D'} key={i}>
            ▲ </text>
        )}
        const circlePin = (i) => {
            return (<text fontSize={'67px'} transform={`rotate(38.2, -12, -55)`} fill={'#E20000'} key={i}>
            ● </text>
        )}
        const rectPin = (i) => {
            return (<text fontSize={'70px'} x={'-25px'} y={'20px'} fill={'#006CC4'} key={i}>
            ■ </text>
        )}
        const ellipsePin = (i) => {
            return (<text fontSize={'100px'} x={'-32px'} y={'10px'} transform={`rotate(38.2, 0, 0)`} fill={'#00bfb3'} key={i}>
            ⬮ </text>
        )}
        const rhombusPin = (i) => {
            return (
            <g transform={`rotate(-15, 0, 0)`}>
                <rect width={'52px'} height={'52px'} x={'-15px'} y={'-33px'} transform={`skewX(-30), skewY(0)`} fill={'#e90087'} key={i}/>
            </g>
        )}
        
        return (
            <>
            <g 
                onClick={this.aboutData} 
                transform={ this.props.size < pinMiddle
                    ? `translate(${pinCor[0]+ 28}, ${pinCor[1]- 42}) scale(0.6)`
                    : ( this.props.size !== pinLimit 
                    ? `translate(${pinCor[0]+ 14}, ${pinCor[1]- 24}) scale(0.3)`
                    : null)
                }
            >
                <defs>
                    <linearGradient
                        id="grad1"
                        x1={45}
                        y1={45}
                        x2={0}
                        y2={0}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#fff" />
                        <stop offset={100} />
                    </linearGradient>
                </defs>
                <rect width={'80px'} height={'4px'} x={'-43px'} y={'55px'} fill={'url(#grad1)'}/>
                <rect width={'4px'} height={'70px'} transform={`rotate(38.2, 0, 0)`} fill={'#666'}/>
                {pinData.map((pin, i) =>
                    <g transform={`translate(0,${-i*40})`} key={pin && pin.locationName}>
                        {pin && pin.locationTagID === 0 ? circlePin(pin && pin.locationName) 
                        : (pin && pin.locationTagID === 1 ? rhombusPin(pin && pin.locationName)
                        : (pin && pin.locationTagID === 2 ? trianglePin(pin && pin.locationName)
                        : (pin && pin.locationTagID === 3 ? rectPin(pin && pin.locationName)
                        : (pin && pin.locationTagID === 4 ? ellipsePin(pin && pin.locationName)
                        : null))))}  
                    </g>
                )}   
            </g>
            {this.state.locationTag && pinValue ? 
                    <g transform={ this.props.size < pinMiddle
                        ? `translate(${pinCor[0]+ 60}, ${pinCor[1]- 200}) scale(0.8)`
                        : ( this.props.size !== pinLimit 
                        ? `translate(${pinCor[0]+ 30}, ${pinCor[1]- 90}) scale(0.3)`
                        : null)
                        }
                    >
                        <rect 
                            width={'370px'} 
                            height={'100px'}
                            x={'15px'}
                            y={'15px'}
                            fill={'black'}
                        />
                        <rect 
                            width={'370px'} 
                            height={'100px'}
                            x={'0px'}
                            y={'0px'}
                            style={ this.props.size < pinMiddle
                                ? { fill:'white', strokeWidth:'6px', stroke:'rgb(0,0,0)'}
                                : ( this.props.size !== pinLimit 
                                ? { fill:'white', strokeWidth:'5.5px', stroke:'rgb(0,0,0)'}
                                : null
                            )}
                        >
                        </rect> 
                        <text 
                                x={'185'}
                                y={'55'}
                                alignmentBaseline={'middle'}
                                textAnchor={'middle'}
                                fontSize={'60px'}
                                letterSpacing={'-2px'}
                                fontFamily={'Noto Sans KR'}
                                fontWeight={'600'}
                            >
                                {pinValue}하이
                        </text> 
                    </g> 
                    : null
                }
            </>
        )
    }
}


const colorListTag  = ['#E20000','#006CC4','#087A0D','#e90087','#00bfb3']
const shapeItems    = ['●','■','▲','◆','⬬']
const marginTopList = [20, 40, 60, 80, 100]
let i = 0

const MarkerDiv = styled.div`
    position: absolute;
    font-size: 4vw;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    font-family: Arial, Helvetica, sans-serif;
`;
function change(items) {
    i = (i+1) % items.length
    return items[i]
}

export class AskMarker extends React.PureComponent {

    render(){ 
        const { color, left, top} = this.props
        return(
            <>
                {change(marginTopList.map((value, index) =>{
                    return(
                        <>
                            <MarkerDiv 
                                key={index}
                                style={{
                                    left : left,
                                    top : top,
                                    marginTop : value,
                                    color:color === 'red'
                                    ? colorListTag[0]: (color === 'blue'
                                    ? colorListTag[1] : (color === 'green'
                                    ? colorListTag[2]: (color === 'purple'
                                    ? colorListTag[3] : colorListTag[4] )))}}>
                                {color === 'red' 
                                    ? shapeItems[0]: (color === 'blue'
                                    ? shapeItems[1] : (color === 'green'
                                    ? shapeItems[2]: (color === 'purple'
                                    ? shapeItems[3] : shapeItems[4] )))}
                            </MarkerDiv>
                        </>
                )}))}
                
            </>
        )
    }
}

const DiceWrapperDiv = styled.div`
    margin-top: 11vw;  
    margin-left: auto;
    margin-right: auto;
    width: 40vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const rotate = keyframes`
    0% { transform: rotateX(90deg) rotateY(360deg) rotateZ(0deg) translateX(0); }
    65% { transform: rotateX(360deg) rotateY(0deg) rotateZ(-180deg) translateX(0); }
    100% { transform: rotateX(90deg) rotateY(360deg) rotateZ(0deg) translateX(0); }
`;

const DiceDiv = styled.div`
    width: 12vw;
    height: 12vw;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(0deg) rotateY(0deg) translateX(0);
    animation-name: ${props => props.diceOn ? rotate : ''};
    animation-iteration-count: 1;
    animation-duration: 1.1s;
    animation-timing-function: ease-in-out;
    
    > div {
        height: 12vw;
        width: 12vw;
        position: absolute;
        background: white;
    }

    span {
        width: 5px;
        height: 5px;
        background: black;
        border-radius: 50%;
        display: block;
        position: absolute;
    }

    .front { 
        transform: rotateY(0deg) translateZ(6vw);

        span {
            &:nth-child(1) {
                top: 2.3vw;
                left: 3vw;
            }
            &:nth-child(2) {
                top: 2.3vw;
                right: 3vw;
            }
            &:nth-child(3) {
                top: 5.4vw;
                left: 3vw;
            }
            &:nth-child(4) {
                top: 5.4vw;
                right: 3vw;
            }
            &:nth-child(5) {
                bottom: 2.3vw;
                left: 3vw;
            }
            &:nth-child(6) {
                bottom: 2.3vw;
                right: 3vw;
            }
        }
    }
    .back { 
        transform: rotateX(180deg) translateZ(6vw);

        span {
            top: 5.4vw;
            left: 5.4vw;
        }
    }
    .right { 
        transform: rotateY(90deg) translateZ(6vw); 

        span {
            &:nth-child(1) {
                top: 4vw;
                left: 3vw;
            }
            &:nth-child(2) {
                top: 4vw;
                right: 3vw;
            }
            &:nth-child(3) {
                top: 5.4vw;
                left: 5.4vw;
            }
            &:nth-child(4) {
                bottom: 4vw;
                left: 3vw;
            }
            &:nth-child(5) {
                bottom: 4vw;
                right: 3vw;
            }
        }
    }
    .left { 
        transform: rotateY(-90deg) translateZ(6vw);

        span {
            &:nth-child(1) {
                top: 4vw;
                right: 3vw;
            }
            &:nth-child(2) {
                bottom: 4vw;
                left: 3vw;
            }
        }
    }
    .top { 
        transform: rotateX(90deg) translateZ(6vw);

        span {
            &:nth-child(1) {
                top: 4vw;
                right: 3vw;
            }
            &:nth-child(2) {
                bottom: 4vw;
                left: 3vw;
            }
            &:nth-child(3) {
                bottom: 5.4vw;
                left: 5.4vw;
            }
        }
    }
    .bottom { 
        transform: rotateX(-90deg) translateZ(6vw);

        span {
            &:nth-child(1) {
                top: 4vw;
                right: 3vw;
            }
            &:nth-child(2) {
                top: 4vw;
                left: 3vw;
            }
            &:nth-child(3) {
                bottom: 4vw;
                left: 3vw;
            }
            &:nth-child(4) {
                bottom: 4vw;
                right: 3vw;
            }
        }
    }
    }
`;

export class Dice extends React.PureComponent {
    state={
        diceOn : false,
    }

    diceOn = () => {
        this.setState({diceOn: true})
        setTimeout( ()=> {
            this.setState({diceOn: false})
        }, 1100)

        this.props.changeOn('this.state.diceOn')
    }

    render(){
        const diceOn = this.state.diceOn

        return(
            <DiceWrapperDiv
                onClick={()=> this.diceOn()}
                style={{pointerEvents: diceOn ? 'none' : ''}}
            >
            <DiceDiv
                diceOn={diceOn ? 1:0}
            >
                <div className="front">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="back">
                    <span></span>
                </div>
                <div className="right">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="left">
                    <span></span>
                    <span></span>
                </div>
                <div className="top">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="bottom">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </DiceDiv>
            </DiceWrapperDiv>
        )
    }
}

export function randomize(items) {
    const item = items[Math.floor(Math.random() * items.length)]
    return item
}

export function pxStringfier(value) {
    const valueFix = value / 3
    const valuePx = valueFix.toString() + 'vw' 
    return valuePx
}

export function colorChooser(value) {
    let answer
    if(value === '#e90087'){answer = 'purple'}
    else if(value === '#006CC4'){answer = 'blue'}
    else if(value === '#E20000'){answer = 'red'}
    else if(value === '#087A0D'){answer = 'green'}
    else if(value === '#00bfb3'){answer = 'yellow'}

    return answer
}

export function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}