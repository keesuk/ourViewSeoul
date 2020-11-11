import React, {PureComponent} from "react";
import styled from 'styled-components';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { pxStringfier, colorChooser, randomize, mapDrawer, infoGraphic, randomProp } from "./_Diagram.jsx";


const ExplainDiv = styled.div`
    position: absolute;
    z-index: 1000;
    margin-top: 2vw;
    box-shadow: 5px 5px #333;
    box-sizing: border-box;
    border: 1.5px solid #333;
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
    .yellow{
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        fill:#00bfb3;
        font-size: 30px;
    }
`;

const location = {
    "Bulgwang":{"0":52,"1":44,"2":66,"3":66,"4":88,"kor":"불광","eng":"Bulgwang"},
    "Euljiro4saga":{"0":59,"1":77,"2":88,"3":55,"4":88,"kor":"을지로4가","eng":"Euljiro4saga"},
    "Noryangjin":{"0":98,"1":76,"2":85,"3":66,"4":86,"kor":"노량진","eng":"Noryangjin"},
    "Sujiguoffice":{"0":60,"1":52,"2":76,"3":75,"4":51,"kor":"수지구청","eng":"Sujiguoffice"},
    "Wolgye":{"0":88,"1":75,"2":75,"3":34,"4":75,"kor":"월계","eng":"Wolgye"}
    }

const colorList = ['#e90087','#006CC4','#E20000','#087A0D','#00bfb3' ]
const distanceLeftList  = ['7vw', '8vw', '9vw', '10vw', '11vw', '12vw']
const distanceTopList  = ['2vh','2.5vh', '3vh', '3.5vh','4vh']
const diagramList = ['◆', '■', '●', '▲', '⬮']

class MapShow extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            purple: 50,
            blue: 20,
            red: 20,
            green: 9,
            yellow: 1,
            location: '',
            dataLocation : {},
            locationed : [],
            corArr: [],
            do: false,
        }
        this.cor = []
        this.posterUpdate = this.posterUpdate.bind(this)
        this.getLocation = this.getLocation.bind(this)
    }

    componentDidMount(){
        this.setState({ 
            location : this.props.posterPin,
            dataLocation : location
        })
        setTimeout(()=> {this.posterUpdate()}, 200)
    }

    posterUpdate(){
        const dataLocation = this.state.dataLocation

        let zero = randomProp(dataLocation)
        let one = randomProp(dataLocation)
        let two = randomProp(dataLocation)
        let three = randomProp(dataLocation)
        let four = randomProp(dataLocation)

        const locationed = [
            {name : zero["eng"], number: zero['0'], id: 0},
            {name : one["eng"], number: one['1'], id: 1},
            {name : two["eng"], number: two['2'], id: 2},
            {name : three["eng"], number: three['3'], id: 3},
            {name : four["eng"], number: four['4'], id: 4},
        ]
        this.setState({locationed : locationed})
        this.setState({do: true})
  
        setTimeout(() => {this.parsingCor()},1000)
    }

    parsingCor(){
        const parseCor = this.state.dataLocation.map(station => this.cor[station.name])
            .map(station => station.innerHTML
            .split('(').pop().split(')')[0].split(' '))
            .map(station => [parseInt(station[0]),parseInt(station[1])])
        this.setState({ corArr : parseCor })
    }

    getLocation(value){
        this.setState({ location : value})
    } 

    render() {
        const { scale, panOff, stroke, pointer, posterOn } = this.props
        return (
                <>
                {stroke ? null :
                    <ExplainDiv>
                        <ExplainTitle>
                            {this.state.location}
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
                                    <text transform="translate(80 270)" className="yellow">⬮  음식점</text>
                                </g>
                                : null}
                                {mapDrawer(this.getLocation, this.cor)}
                                {posterOn ? 
                                <g style={{mixBlendMode: 'multiply'}}>
                                    {this.state.do ? this.state.dataLocation.map((one, i) => infoGraphic(one, this.state.corArr[i], i)) : null}
                                </g>
                                : null}
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
