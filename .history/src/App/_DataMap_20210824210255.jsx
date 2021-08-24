import React, {PureComponent} from "react";
import styled from 'styled-components';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { pxStringfier, colorChooser, randomize, mapDrawer, infoGraphic, randomProp, percentage, slicer } from "./_Diagram.jsx";

import databaseURL from "../data/station-db-export.json"

const ExplainDiv = styled.div`
    position: absolute;
    z-index: 1000;
    margin-top: 2vw;
    box-shadow: 5px 5px #333;
    box-sizing: border-box;
    border: 2.3px solid #333;
    background-color: white;
    
    @media all and (min-width:0px) and (max-width:1023px) {
        width: 40vw;
        height: 40vw;
    }
`;
const ExplainTitle = styled.div`
    font-size: 5vw;
    margin-left: 2vw;
    margin-top: 1vw;
    letter-spacing: -.2vw;
    font-weight: 900;
    color: #333;
`;
const ExplainNumber = styled.div`
    font-size: 3.6vw;
    font-weight: 900;
    line-height: 5.2vw;
    position: absolute;
    right: 2vw;
`;
const ExplainDiagram = styled.div`
    width: 29vw;
    margin-left: .5vw;
    height: 30vw;
`;
const Diagram = styled.div`
    position: absolute;
    left: ${props => props.left};
    margin-top:${props => props.top};
    font-size: ${props => props.size};
    color: ${props => props.color};
    mix-blend-mode: multiply;
`;
const SvgContainer = styled.div`
    display: inline-block;
    position: relative;
    cursor: move;

    @media all and (min-width:0px) and (max-width:1023px) {
        display: inline-block;
        position: relative;
        width: 88vw;
        height: 88vw;
    }
`;
const Svg = styled.svg`

    .cls-1 {
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        cursor: ${props => props.pointer ? 'pointer' : 'move'};
        pointer-events: ${props => props.pointer ? '' : 'none'};
        stroke-width:${props => props.stroke ? '1.5px' : '0px'};
        stroke: #999;
        font-size: 6.39px;
        letter-spacing: -0.04em;
    }
    .cls-2 {
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        cursor: ${props => props.pointer ? 'pointer' : 'move'};
        pointer-events: ${props => props.pointer ? '' : 'none'};
        stroke-width:${props => props.stroke ? '1.5px' : '0px'};
        stroke: #999;
        font-size: 4.78px;
        letter-spacing: -0.03em;
    }
    .purple{
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        fill:#e90087;
        font-size: 30px;
    }
    .blue{
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        fill:#006CC4;
        font-size: 30px;
    }
    .red{
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        fill:#E20000;
        font-size: 30px;
    }
    .green{
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        fill:#087A0D;
        font-size: 30px;
    }
    .mint{
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        fill:#00bfb3;
        font-size: 30px;
    }
`;
const StyledG = styled.g`
    .hover0 {display: none;}
    .hover1 {display: none;}
    .hover2 {display: none;}
    .hover3 {display: none;}
    .hover4 {display: none;}
    .mouse0:hover ~ .hover0 {display: block;}
    .mouse1:hover ~ .hover1 {display: block;}
    .mouse2:hover ~ .hover2 {display: block;}
    .mouse3:hover ~ .hover3 {display: block;}
    .mouse4:hover ~ .hover4 {display: block;}

`;

const colorList = ['#e90087','#006CC4','#E20000','#087A0D','#00bfb3' ]
const distanceLeftList  = ['7vw', '8vw', '9vw', '10vw', '11vw', '12vw']
const distanceTopList  = ['2vh','2.5vh', '3vh', '3.5vh','4vh']
const diagramList = ['◆', '■', '●', '▲', '⬮']

class MapShow extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            purple: null,
            blue: null,
            red: null,
            green: null,
            mint: null,
            location: '',
            dataLocation : {},
            locationed : [],
            corArr: [],
            do: false,
            locName : '',
        }
        this.cor = []
        this.posterUpdate = this.posterUpdate.bind(this)
        this.getLocation = this.getLocation.bind(this)
    }

    componentDidMount(){
        if(this.props.posterPin){
            this._get('posterPin')
        }
        if(this.props.rerender === false){
            this._get('rerender')
        }
    }

    getLocation(value){
        let spot = databaseURL.testWindow[value]
        if(!spot)spot['kor'] = '값이 없습니다'
        if(spot){
            const total = spot['0'] + spot['1'] + spot['2'] + spot['3'] + spot['4']
            this.setState({ 
                location : spot['kor'],
                purple : percentage(spot['0'], total),
                blue : percentage(spot['1'], total),
                red : percentage(spot['2'], total),
                green : percentage(spot['3'], total),
                mint : percentage(spot['4'], total)
            })
        }
    }

    _get(go) {
        if(go === 'rerender')setTimeout(()=> {this.posterUpdate()}, 100)
        else this.getLocation(this.props.posterPin)
    }

    componentDidUpdate(){
        if(this.props.rerender === true){
            this.timeoutPoster = setTimeout(()=> {this.posterUpdate()}, 100)
        }
    }
    
    posterUpdate(){
        const dataLocation = databaseURL.testWindow

        let zero = randomProp(dataLocation)
        let one = randomProp(dataLocation)
        let two = randomProp(dataLocation)
        let three = randomProp(dataLocation)
        let four = randomProp(dataLocation)

        const locationed = [
            {name : zero["eng"], number: zero['0'], id: 0, nameKor : zero["kor"]},
            {name : one["eng"], number: one['1'], id: 1, nameKor : one["kor"]},
            {name : two["eng"], number: two['2'], id: 2, nameKor : two["kor"]},
            {name : three["eng"], number: three['3'], id: 3, nameKor : three["kor"]},
            {name : four["eng"], number: four['4'], id: 4, nameKor : four["kor"]},
        ]
        this.setState({locationed : locationed})
        this.timeoutParse = setTimeout(() => {this.parsingCor()},100)
    }

    parsingCor(){
        const parseCor = this.state.locationed.map(station => {
            let item = this.cor[station.name]
            if(!item) return this.cor['Bulgwang']
            else return item
        })
        .map(station => station.innerHTML
        .split('(').pop().split(')')[0].split(' '))
        .map(station => {
            if(station[0] > 0 && station[0] < 320) station[0] = station[0] + 100 
            else if(station[0] > 960 && station[0] <= 1280) station[0] = station[0] - 100
            
            if(station[1] > 0 && station[1] < 320) station[1] = station[1] + 100 
            else if(station[1] > 960 && station[1] <= 1280) station[1] = station[1] - 100

            return [parseInt(station[0]),parseInt(station[1])]}
        )
        this.setState({ 
            corArr : parseCor,
            do : true
        })
    }

    render() {
        const { scale, panOff, stroke, pointer, posterOn } = this.props
        
        return (
                <>
                {stroke ? null :
                    <ExplainDiv>
                        <ExplainTitle>
                                {slicer(this.state.location)}
                        </ExplainTitle>
                        <ExplainNumber>
                            {colorList.map(item => 
                                <div 
                                    key={item} 
                                    style={{color: item}}
                                >
                                {this.state[colorChooser(item)]}%
                                </div>
                            )}
                        </ExplainNumber>
                        <ExplainDiagram>
                            {colorList.map((item, i) => 
                                <Diagram 
                                    color={colorList[i]} 
                                    size={pxStringfier(this.state[colorChooser(item)])}
                                    top={randomize(distanceTopList)}
                                    left={randomize(distanceLeftList)}
                                    key={item}
                                >
                                {diagramList[i]}
                                </Diagram>
                            )}
                        </ExplainDiagram>
                    </ExplainDiv>
                }
                <TransformWrapper
                    scale={scale}
                    wheel={{disabled: true}}
                    pan={{disabled: panOff}}
                >
                    {({ resetTransform, scale, ...rest }) => (
                    <React.Fragment>
                        <TransformComponent>
                            <SvgContainer> 
                                <Svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0"
                                    y="0"
                                    enableBackground="new 0 0 1280 1280"
                                    version="1.1"
                                    viewBox="0 0 1280 1280"
                                    xmlSpace="preserve"
                                    stroke={stroke ? 1 : 0}
                                    pointer={pointer ? 1 : 0}
                                >
                                {stroke 
                                ? <g transform={'translate(10, 30) scale(.7)'}>
                                    <text transform="translate(80 30)" className="purple">&#9670; 박물관 갤러리</text>
                                    <text transform="translate(80 90)" className="green">▲ 자연 휴양지</text>
                                    <text transform="translate(80 150)" className="blue">■ 쇼핑 마켓</text>
                                    <text transform="translate(80 210)" className="red">● 랜드마크</text>
                                    <text transform="translate(80 270)" className="mint">⬮  음식점</text>
                                </g>
                                : null}
                                {mapDrawer(this.getLocation, this.cor)}
                                {posterOn 
                                    ? this.state.do
                                        ? <StyledG>
                                            {this.state.locationed.map((one, i) => { 
                                                return (
                                                    <g key={i} className={'mouse'+i}>
                                                        {infoGraphic(one, this.state.corArr[i], i)}
                                                    </g>
                                            )})}
                                            {this.state.corArr.map((cor, i) => 
                                                <g 
                                                    className={'hover'+i}
                                                    key={i}
                                                    transform = {`translate(
                                                        ${cor[0]}, 
                                                        ${cor[1]})`}>
                                                    <rect 
                                                        width={300}
                                                        height={100}
                                                        x={20} y={20}
                                                        style={{mixBlendMode: 'multiply'}}
                                                        fill={i === 0 ? '#E20000':( i === 1 ? '#006CC4':( i === 2 ? '#087A0D':( i === 3 ? '#e90087':( i === 4 ? '#00bfb3':null))))}/>
                                                    <rect 
                                                        width={300}
                                                        height={100}
                                                        x={0} y={0}
                                                        strokeWidth={6}
                                                        fill={'#fff'}
                                                        stroke={i === 0 ? '#E20000':( i === 1 ? '#006CC4':( i === 2 ? '#087A0D':( i === 3 ? '#e90087':( i === 4 ? '#00bfb3':null))))}/>
                                                    <text  
                                                        x={150} y={65}
                                                        fontSize={50}
                                                        textAnchor={'middle'}
                                                        fill={i === 0 ? '#E20000':( i === 1 ? '#006CC4':( i === 2 ? '#087A0D':( i === 3 ? '#e90087':( i === 4 ? '#00bfb3':null))))}
                                                    >
                                                        {slicer(this.state.locationed && this.state.locationed[i].nameKor)}
                                                    </text>
                                                </g>
                                            )}
                                        </StyledG>
                                        : null
                                    : null
                                }
                            </Svg>
                            </SvgContainer>
                        </TransformComponent>
                    </React.Fragment>
                    )}
                </TransformWrapper>
            </>
        )
    }
}
export default MapShow;
