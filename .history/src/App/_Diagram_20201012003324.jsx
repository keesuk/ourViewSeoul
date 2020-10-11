import React from 'react';
import styled, { keyframes } from 'styled-components';

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


const PinSvg = styled.svg`
    padding-left: 6px;
`;
const PinContainer = styled.div`
    position: relative;
    display: inline-block;
`;
export class Pin extends React.PureComponent {
    render() {
        return (
            <PinContainer>
            <PinSvg width={this.props.width} height={this.props.height} viewBox='0 -5 70 80' fill="none">
                <g clipPath="url(#prefix__clip0)">
                    <path
                        opacity={0.3}
                        d={this.props.choose==='red'
                            ? "M68.9 74.2H3L.1 77.5h68.8v-3.3z" : (this.props.choose==='blue' 
                            ? "M.571 74.2h65.9l2.9 3.3H.571v-3.3z" : (this.props.choose==='green' 
                            ? "M68.9 74.3H3L.1 77.6h68.8v-3.3z" : (this.props.choose==='purple' 
                            ? "M.571 74.2h65.9l2.9 3.3H.571v-3.3z" : "M68.9 74.2H3L.1 77.5h68.8v-3.3z")))}
                        fill="url(#prefix__paint0_linear)"
                    />
                    <path
                        d={this.props.choose==='red'
                            ? "M26.7 37.4l3.5 2.6-25 34.4L0 77.8l1.6-6 25.1-34.4z" : (this.props.choose==='blue' 
                            ? "M42.771 37.4l-3.5 2.6 25 34.4 5.2 3.4-1.6-6-25.1-34.4z" : (this.props.choose==='green' 
                            ? "M26.7 37.5l3.5 2.6-25 34.4L0 77.9l1.6-6 25.1-34.4z" : (this.props.choose==='purple' 
                            ? "M42.771 37.4l-3.5 2.6 25 34.4 5.2 3.4-1.6-6-25.1-34.4z" : "M26.7 37.4l3.5 2.6-25 34.4L0 77.8l1.6-6 25.1-34.4z")))}
                        fill="url(#prefix__paint1_linear)"
                    />
                    
                    {this.props.choose==='red'
                            ? <path fill="#E20000" d="M39.4 47.4c13.09 0 23.7-10.61 23.7-23.7S52.49 0 39.4 0 15.7 10.61 15.7 23.7s10.61 23.7 23.7 23.7z"/> 
                    : (this.props.choose==='blue' 
                            ? <path fill="#087A0D" d="M13.095-.162l50.713 22.599L18.88 55.056 13.095-.162z"/> 
                    : (this.props.choose==='green' 
                            ? <path fill="#006CC4" d="M25.116.1H68.9v43.784H25.116z"/> 
                    : (this.props.choose==='purple' 
                            ? <path fill="#7B2E8E" d="M6.236 0l34.21 14.355 8.992 35.993L15.23 35.992 6.236 0z"/> 
                    :  <ellipse rx={16.689} ry={28.97} transform="scale(-1 1) rotate(-32.844 25.414 76.846)" fill="#EFC820"/>)))}
                </g>
                <defs>
                    <linearGradient
                        id="prefix__paint0_linear"
                        x1={this.props.choose==='red'? 60.788 : (this.props.choose==='blue' ? 8.683: (this.props.choose==='green' ? 60.788 : (this.props.choose==='purple' ? 8.683 : 60.788)))}
                        y1={75.863}
                        x2={this.props.choose==='red'? 17.936 : (this.props.choose==='blue' ? 51.535: (this.props.choose==='green' ? 17.936 : (this.props.choose==='purple' ? 51.535 : 17.936)))}
                        y2={75.863}
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#fff" />
                        <stop offset={1} />
                    </linearGradient>
                    <linearGradient
                        id="prefix__paint1_linear"
                        x1={this.props.choose==='red'? 15.979 : (this.props.choose==='blue' ? 53.492: (this.props.choose==='green' ? 15.979 : (this.props.choose==='purple' ? 53.492 : 15.979)))}
                        y1={59.527}
                        x2={this.props.choose==='red'? 13.483 : (this.props.choose==='blue' ? 55.988: (this.props.choose==='green' ? 13.483 : (this.props.choose==='purple' ? 55.988 : 13.483)))}
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
            </PinSvg>
            </PinContainer>
        )
    }
}

//-82
export class PinBottom extends React.PureComponent {
    state = {
        locationTag : false,
    }

    aboutData = () => {
        this.setState(state => ({locationTag : !state.locationTag}))
    }

    render() {
        return (
            <g onClick={this.aboutData} transform="translate(547.1039 352.4816)">
                {this.state.locationTag? <TagOn/>: null}
                <path
                    opacity={0.3}
                    d="M68.9 74.2H3L.1 77.5h68.8v-3.3z"
                    fill="url(#prefix__paint0_linear)"
                />
                <path
                    d="M26.7 37.4l3.5 2.6-25 34.4L0 77.8l1.6-6 25.1-34.4z"
                    fill="url(#prefix__paint1_linear)"
                />
                <path
                    d="M39.4 47.4c13.09 0 23.7-10.61 23.7-23.7S52.49 0 39.4 0 15.7 10.61 15.7 23.7s10.61 23.7 23.7 23.7z"
                    fill="#E20000"
                />
                <defs>
                    <linearGradient
                    id="prefix__paint0_linear"
                    x1={60.788}
                    y1={75.864}
                    x2={17.936}
                    y2={75.864}
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#fff" />
                    <stop offset={1} />
                    </linearGradient>
                    <linearGradient
                    id="prefix__paint1_linear"
                    x1={15.979}
                    y1={59.527}
                    x2={13.483}
                    y2={57.709}
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#313131" />
                    <stop offset={1} stopColor="#E9E9E9" />
                    </linearGradient>
                </defs>
            </g>
        )
    }
}

export class TagOn extends React.PureComponent {
    render() {
        return(
            <>
            <g filter="url(#prefix__filter0_d)" transform="translate(-20 -330)">
                <path
                d="M0 0h238.931v272.853H76.468l-19.187 32.39-18.476-32.39H0V0z"
                fill="#fff"
                />
                <path
                d="M38.805 271.353H1.5V1.5h235.931v269.853H75.613l-.436.735-17.872 30.17-17.197-30.149-.432-.756h-.871z"
                stroke="#000"
                strokeWidth={3}
                />
            </g>
            <defs>
                <filter
                id="prefix__filter0_d"
                x={0}
                y={0}
                width={242.931}
                height={309.243}
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
                >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx={4} dy={4} />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                </filter>
            </defs>
            </>
        )
    }
}


const colorListTag  = ['#E20000','#006CC4','#EFC820','#087A0D','#7B2E8E']
const shapeItems    = ['●', '▲','◼︎','◆','⬬']
const marginTopList = [20, 40, 60, 80, 100]
let i = 0

const MarkerDiv = styled.div`
    position: absolute;
    font-size: 16px;
    animation-duration: 2s;
    animation-iteration-count: infinite;
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
                                    ? colorListTag[0] : (color === 'green'
                                    ? colorListTag[1]: (color === 'blue'
                                    ? colorListTag[2]: (color === 'purple'
                                    ? colorListTag[3] : (color === 'yellow'
                                    ? colorListTag[4] : null))))}}>
                                {color === 'red' 
                                    ? shapeItems[0] : (color === 'green'
                                    ? shapeItems[1]: (color === 'blue'
                                    ? shapeItems[2]: (color === 'purple'
                                    ? shapeItems[3] : (color === 'yellow' 
                                    ? shapeItems[4] : null))))}
                            </MarkerDiv>
                        </>
                )}))}
                
            </>
        )
    }
}

export function randomize(items) {
    const item = items[Math.floor(Math.random() * items.length)]
    return item
}