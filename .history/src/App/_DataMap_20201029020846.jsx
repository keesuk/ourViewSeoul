import React, {PureComponent} from "react";
import styled from 'styled-components';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { pxStringfier, colorChooser, randomize} from "./_Diagram.jsx";

const ExplainDiv = styled.div`
    position: absolute;
    z-index: 1000;
    margin-top: 2vw;
    box-shadow: 5px 5px black;
    box-sizing: border-box;
    border: 1.5px solid black;
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
        stroke-width:${props => props.stroke ? '1px' : '0px'};
        font-size: 6.39px;
        letter-spacing: -0.04em;
    }
    .cls-2 {
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        cursor: ${props => props.pointer ? 'pointer' : 'move'};
        pointer-events: ${props => props.pointer ? '' : 'none'};
        stroke-width:${props => props.stroke ? '1px' : '0px'};
        font-size: 4.78px;
        letter-spacing: -0.03em;
    }
    .purple{
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        fill:#7B2E8E;
        font-size: 20px;
    }
    .blue{
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        fill:#006CC4;
        font-size: 20px;
    }
    .red{
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        fill:#E20000;
        font-size: 20px;
    }
    .green{
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        fill:#087A0D;
        font-size: 20px;
    }
    .yellow{
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        fill:#EFC820;
        font-size: 20px;
    }
`;

const colorList = ['#7B2E8E','#006CC4','#E20000','#087A0D','#EFC820' ]
const distanceLeftList  = ['7vw', '8vw', '9vw', '10vw', '11vw', '12vw']
const distanceTopList  = ['2vh','2.5vh', '3vh', '3.5vh','4vh']
const diagramList = ['◆', '■', '●', '▲', '⬮']

class MapShow extends PureComponent {
    state={
            purple: 50,
            blue: 20,
            red: 20,
            green: 9,
            yellow: 1,
            location: null,
        }

    componentDidMount(){
        this.getLocation('잠실')
    }

    getLocation = (value) => {
        this.setState({location: value})
    } 

  
    render() {
        const { scale, panOff, stroke, pointer } = this.props
        
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
                                ? <g>
                                    <text transform="translate(80 20)" className="st0 purple">&#9670; 박물관 갤러리</text>
                                    <text transform="translate(80 60)" className="st0 blue">■ 쇼핑 마켓</text>
                                    <text transform="translate(80 100)" className="st0 red">● 랜드마크</text>
                                    <text transform="translate(80 140)" className="st0 green">▲ 자연 휴양지</text>
                                    <text transform="translate(80 180)" className="st0 yellow">⬮ 음식점</text>
                                </g>
                                : null}

                                    <g onClick={()=> this.getLocation("Bulgwang")} id="Bulgwang">
                                        <text class="cls-1" transform="translate(519.49 468.89)">불광</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dokbawi")} id="Dokbawi">
                                        <text class="cls-1" transform="translate(535.64 442.19)">독바위</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yeonsinnae")} id="Yeonsinnae">
                                        <text class="cls-1" transform="translate(497.9 441.06)">연신내</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gusan")} id="Gusan">
                                        <text class="cls-1" transform="translate(497.9 466.91)">구산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yeokchon")} id="Yeokchon">
                                        <text class="cls-1" transform="translate(497.9 493.93)">역촌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Eungam")} id="Eungam">
                                        <text class="cls-1" transform="translate(478.22 519.27)">응암</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Saejeol")} id="Saejeol">
                                        <text class="cls-1" transform="translate(458.06 544.6)">새절</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jeungsan")} id="Jeungsan">
                                        <text class="cls-1" transform="translate(440.62 569.94)">증산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("DigitalMediaCity")} id="DigitalMediaCity">
                                        <text class="cls-1" transform="translate(425.45 595.28)">디지털미디어시티</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Susaek")} id="Susaek">
                                        <text class="cls-1" transform="translate(426.82 544.38)">수색</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hwajeon")} id="Hwajeon">
                                        <text class="cls-1" transform="translate(426.82 500.84)">화전</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gangmae")} id="Gangmae">
                                        <text class="cls-1" transform="translate(426.82 457.31)">강매</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Haengsin")} id="Haengsin">
                                        <text class="cls-1" transform="translate(426.82 413.77)">행신</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Neunggok")} id="Neunggok">
                                        <text class="cls-1" transform="translate(426.82 370.24)">능곡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Daegok")} id="Daegok">
                                        <text class="cls-1" transform="translate(441.93 353.85)">대곡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Baekseok")} id="Baekseok">
                                        <text class="cls-1" transform="translate(413.64 344.68)">백</text>
                                        <text class="cls-1" transform="translate(413.64 352.06)">석</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Madu")} id="Madu">
                                        <text class="cls-1" transform="translate(397.83 344.68)">마</text>
                                        <text class="cls-1" transform="translate(397.83 352.06)">두</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jeongbalsan")} id="Jeongbalsan">
                                        <text class="cls-1" transform="translate(382.1 344.68)">정</text>
                                        <text class="cls-1" transform="translate(382.1 352.06)">발</text>
                                        <text class="cls-1" transform="translate(382.1 359.06)">산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Daehwa")} id="Daehwa">
                                        <text class="cls-1" transform="translate(366.35 344.68)">대</text>
                                        <text class="cls-1" transform="translate(366.35 352.06)">화</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Goksan")} id="Goksan">
                                        <text class="cls-1" transform="translate(460.83 339.17)">곡</text>
                                        <text class="cls-1" transform="translate(460.83 346.55)">산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Baengma")} id="Baengma">
                                        <text class="cls-1" transform="translate(445.07 320.99)">백</text>
                                        <text class="cls-1" transform="translate(445.07 328.37)">마</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Pungsan")} id="Pungsan">
                                        <text class="cls-1" transform="translate(429.35 320.99)">풍</text>
                                        <text class="cls-1" transform="translate(429.35 328.37)">산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ilsan")} id="Ilsan">
                                        <text class="cls-1" transform="translate(413.61 320.99)">일</text>
                                        <text class="cls-1" transform="translate(413.61 328.37)">산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Tanhyeon")} id="Tanhyeon">
                                        <text class="cls-1" transform="translate(397.87 320.99)">탄</text>
                                        <text class="cls-1" transform="translate(397.87 328.37)">현</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yadang")} id="Yadang">
                                        <text class="cls-1" transform="translate(382.13 320.99)">야</text>
                                        <text class="cls-1" transform="translate(382.13 328.37)">당</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Unjeong")} id="Unjeong">
                                        <text class="cls-1" transform="translate(366.43 320.99)">운</text>
                                        <text class="cls-1" transform="translate(366.43 328.37)">정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Geumneung")} id="Geumneung">
                                        <text class="cls-1" transform="translate(350.69 320.99)">금</text>
                                        <text class="cls-1" transform="translate(350.69 328.37)">릉</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Geumchon")} id="Geumchon">
                                        <text class="cls-1" transform="translate(334.94 320.99)">금</text>
                                        <text class="cls-1" transform="translate(334.94 328.37)">촌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Wollong")} id="Wollong">
                                        <text class="cls-1" transform="translate(319.2 320.99)">월</text>
                                        <text class="cls-1" transform="translate(319.2 328.37)">롱</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Paju")} id="Paju">
                                        <text class="cls-1" transform="translate(303.4 320.99)">파</text>
                                        <text class="cls-1" transform="translate(303.4 328.37)">주</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Munsan")} id="Munsan">
                                        <text class="cls-1" transform="translate(287.68 320.99)">문</text>
                                        <text class="cls-1" transform="translate(287.68 328.37)">산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Imjingang")} id="Imjingang">
                                        <text class="cls-1" transform="translate(274.21 341.47)">임</text>
                                        <text class="cls-1" transform="translate(274.21 348.85)">진</text>
                                        <text class="cls-1" transform="translate(274.21 356.23)">강</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Banghwa")} id="Banghwa">
                                        <text class="cls-1" transform="translate(185.15 556.45)">방화</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gaehwa")} id="Gaehwa">
                                        <text class="cls-1" transform="translate(142.01 609.95)">개화</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gochon")} id="Gochon">
                                        <text class="cls-1" transform="translate(164.5 600.76)">고촌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Pungmu")} id="Pungmu">
                                        <text class="cls-1" transform="translate(164.5 582.88)">풍무</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sau")} id="Sau">
                                        <text class="cls-1" transform="translate(164.5 565.01)">사우</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GeolpoBukbyeon")} id="GeolpoBukbyeon">
                                        <text class="cls-1" transform="translate(149.49 536.46)">걸포북변</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Unyang")} id="Unyang">
                                        <text class="cls-1" transform="translate(130.52 513.69)">운양</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Janggi")} id="Janggi">
                                        <text class="cls-1" transform="translate(112.45 527.53)">장기</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Masan")} id="Masan">
                                        <text class="cls-1" transform="translate(94.32 541.37)">마산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gurae")} id="Gurae">
                                        <text class="cls-1" transform="translate(76.26 555.21)">구래</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yangchon")} id="Yangchon">
                                        <text class="cls-1" transform="translate(58.16 569.05)">양촌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dokjeong")} id="Dokjeong">
                                        <text class="cls-1" transform="translate(96.97 636.75)">독정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Wanjeong")} id="Wanjeong">
                                        <text class="cls-1" transform="translate(71.91 623.35)">완정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Majeon")} id="Majeon">
                                        <text class="cls-1" transform="translate(44.35 609.96)">마전</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GeomdanSageori")} id="GeomdanSageori">
                                        <text class="cls-1" transform="translate(7.02 596.56)">검단사거리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Wanggil")} id="Wanggil">
                                        <text class="cls-1" transform="translate(27.35 571.91)">왕길</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GeomdanOryu")} id="GeomdanOryu">
                                        <text class="cls-1" transform="translate(44.36 552.73)">검단오류</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GimpoIntlAirport")} id="GimpoIntlAirport">
                                        <text class="cls-1" transform="translate(164.5 618.64)">김포공항</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gyeyang")} id="Gyeyang">
                                        <text class="cls-1" transform="translate(145.2 638.92)">계양</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Geomam")} id="Geomam">
                                        <text class="cls-1" transform="translate(122 650.15)">검암</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Geombawi")} id="Geombawi">
                                        <text class="cls-1" transform="translate(122 667.19)">검바위</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("AsiadStadium")} id="AsiadStadium">
                                        <text class="cls-2" transform="translate(123.69 685.78)">아시아드</text>
                                        <text class="cls-2" transform="translate(123.69 691.58)">경기장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gajeong")} id="Gajeong">
                                        <text class="cls-1" transform="translate(108.47 703.64)">가정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GajeongJungangMarket")} id="GajeongJungangMarket">
                                        <text class="cls-2" transform="translate(90.67 716.8)">가정</text>
                                        <text class="cls-2" transform="translate(90.67 722.59)">중앙시장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seongnam")} id="Seongnam">
                                        <text class="cls-1" transform="translate(74.49 737.16)">석남</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("WestWomansCommunityCenter")} id="WestWomansCommunityCenter">
                                        <text class="cls-1" transform="translate(57.99 751.56)">서부여성회관</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("IncheonGajwa")} id="IncheonGajwa">
                                        <text class="cls-1" transform="translate(39.47 765.97)">인천가좌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gajaeul")} id="Gajaeul">
                                        <text class="cls-1" transform="translate(21.16 785.59)">가재울</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("JuanNationalIndustrialComplex")} id="JuanNationalIndustrialComplex">
                                        <text class="cls-1" transform="translate(48.8 806.51)">주안국가산단</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("CitizensPark")} id="CitizensPark">
                                        <text class="cls-1" transform="translate(85.52 844.88)">시민공원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SeokbawiMarket")} id="SeokbawiMarket">
                                        <text class="cls-1" transform="translate(97.28 877.96)">석바위시장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("CheongnaIntlCityStation")} id="CheongnaIntlCityStation">
                                        <text class="cls-2" transform="translate(143.82 666.23)">청라</text>
                                        <text class="cls-2" transform="translate(143.82 672.03)">국제도시</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yeongjong")} id="Yeongjong">
                                        <text class="cls-1" transform="translate(163.33 684.23)">영종</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Unseo")} id="Unseo">
                                        <text class="cls-1" transform="translate(154.63 696.37)">운서</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("IncheonIntlAirportCargoTerminal")} id="IncheonIntlAirportCargoTerminal">
                                        <text class="cls-2" transform="translate(139.38 711.47)">공항</text>
                                        <text class="cls-2" transform="translate(139.38 717.27)">화물청사</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("IncheonIntlAirport")} id="IncheonIntlAirport">
                                        <text class="cls-2" transform="translate(125.38 732.88)">인천공항</text>
                                        <text class="cls-2" transform="translate(125.38 738.67)">1터미널</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("IncheonIntlAirportTerminal2")} id="IncheonIntlAirportTerminal2">
                                        <text class="cls-2" transform="translate(112.88 754.28)">인천공항</text>
                                        <text class="cls-2" transform="translate(112.88 760.08)">2터미널</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gyulhyeon")} id="Gyulhyeon">
                                        <text class="cls-1" transform="translate(160.25 651.82)">귤현</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bakchon")} id="Bakchon">
                                        <text class="cls-1" transform="translate(175.29 665.05)">박촌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Imhak")} id="Imhak">
                                        <text class="cls-1" transform="translate(191.67 677.02)">임학</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gyesan")} id="Gyesan">
                                        <text class="cls-1" transform="translate(184.22 691.13)">계산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GyeonginNatlUnivofEducation")} id="GyeonginNatlUnivofEducation">
                                        <text class="cls-1" transform="translate(176.66 707.48)">경인교대입구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jakjeon")} id="Jakjeon">
                                        <text class="cls-1" transform="translate(167.93 722.59)">작전</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Galsan")} id="Galsan">
                                        <text class="cls-1" transform="translate(159.87 736.92)">갈산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("BupyeongguOffice")} id="BupyeongguOffice">
                                        <text class="cls-1" transform="translate(150.94 751.01)">부평구청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("BupyeongMarket")} id="BupyeongMarket">
                                        <text class="cls-1" transform="translate(142.22 764.76)">부평시장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bupyeong")} id="Bupyeong">
                                        <text class="cls-1" transform="translate(136.4 779.62)">부평</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Baegun")} id="Baegun">
                                        <text class="cls-1" transform="translate(110.04 779.62)">백운</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongam")} id="Dongam">
                                        <text class="cls-1" transform="translate(87.46 779.62)">동암</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ganseok")} id="Ganseok">
                                        <text class="cls-1" transform="translate(87.46 803.15)">간석</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Juan")} id="Juan">
                                        <text class="cls-1" transform="translate(72.57 826.68)">주안</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dohwa")} id="Dohwa">
                                        <text class="cls-1" transform="translate(72.57 858.6)">도화</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jemulpo")} id="Jemulpo">
                                        <text class="cls-1" transform="translate(72.57 886.54)">제물포</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dowon")} id="Dowon">
                                        <text class="cls-1" transform="translate(92.08 901.47)">도원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongincheon")} id="Dongincheon">
                                        <text class="cls-1" transform="translate(106.32 918.19)">동인천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Incheon")} id="Incheon">
                                        <text class="cls-1" transform="translate(125.63 939.11)">인천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinpo")} id="Sinpo">
                                        <text class="cls-1" transform="translate(143.91 960.02)">신포</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sungui")} id="Sungui">
                                        <text class="cls-1" transform="translate(163.99 980.94)">숭의</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("InhaUniv")} id="InhaUniv">
                                        <text class="cls-1" transform="translate(183.32 1001.86)">인하대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Songdo")} id="Songdo">
                                        <text class="cls-1" transform="translate(204.13 1022.77)">송도</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yeonsu")} id="Yeonsu">
                                        <text class="cls-1" transform="translate(224.2 1042.76)">연수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("NamdongInduspark")} id="NamdongInduspark">
                                        <text class="cls-1" transform="translate(290.01 1042.76)">남동인더스파크</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hogupo")} id="Hogupo">
                                        <text class="cls-1" transform="translate(294.77 1058.63)">호구포</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("IncheonNonhyeon")} id="IncheonNonhyeon">
                                        <text class="cls-1" transform="translate(302.69 1074.51)">인천논현</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Soraepogu")} id="Soraepogu">
                                        <text class="cls-1" transform="translate(309.54 1090.38)">소래포구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Wolgot")} id="Wolgot">
                                        <text class="cls-1" transform="translate(314.85 1106.25)">월곶</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dalwol")} id="Dalwol">
                                        <text class="cls-1" transform="translate(322.53 1122.13)">달월</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bugae")} id="Bugae">
                                        <text class="cls-1" transform="translate(144.82 809.42)">부개</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Songnae")} id="Songnae">
                                        <text class="cls-1" transform="translate(153.24 839.22)">송내</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jungdong")} id="Jungdong">
                                        <text class="cls-1" transform="translate(161.65 869.03)">중동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bucheon")} id="Bucheon">
                                        <text class="cls-1" transform="translate(170.07 898.83)">부천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sosa")} id="Sosa">
                                        <text class="cls-1" transform="translate(189.63 898.83)">소사</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sosaeul")} id="Sosaeul">
                                        <text class="cls-1" transform="translate(234.28 930.17)">소새울</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SiheungDaeya")} id="SiheungDaeya">
                                        <text class="cls-1" transform="translate(278.85 961.51)">시흥대야</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sincheon")} id="Sincheon">
                                        <text class="cls-1" transform="translate(331.95 992.86)">신천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinhyeon")} id="Sinhyeon">
                                        <text class="cls-1" transform="translate(378.74 1024.2)">신현</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SiheungCityHall")} id="SiheungCityHall">
                                        <text class="cls-1" transform="translate(378.74 1052.53)">시흥시청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SiheungNeunggok")} id="SiheungNeunggok">
                                        <text class="cls-1" transform="translate(378.74 1080.86)">시흥능곡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Choji")} id="Choji">
                                        <text class="cls-1" transform="translate(397.84 1160.79)">초</text>
                                        <text class="cls-1" transform="translate(397.84 1168.17)">지</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seonbu")} id="Seonbu">
                                        <text class="cls-1" transform="translate(378.74 1137.52)">선부</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dalmi")} id="Dalmi">
                                        <text class="cls-1" transform="translate(378.74 1109.19)">달미</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ansan")} id="Ansan">
                                        <text class="cls-1" transform="translate(376.84 1160.79)">안</text>
                                        <text class="cls-1" transform="translate(376.84 1168.17)">산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Singiloncheon")} id="Singiloncheon">
                                        <text class="cls-1" transform="translate(355.8 1160.79)">신</text>
                                        <text class="cls-1" transform="translate(355.8 1168.17)">길</text>
                                        <text class="cls-1" transform="translate(355.8 1175.55)">온</text>
                                        <text class="cls-1" transform="translate(355.8 1182.93)">천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jeongwang")} id="Jeongwang">
                                        <text class="cls-1" transform="translate(334.68 1160.79)">정</text>
                                        <text class="cls-1" transform="translate(334.68 1168.17)">왕</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Oido")} id="Oido">
                                        <text class="cls-1" transform="translate(328.26 1138)">오이도</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bupyeongsamgeori")} id="Bupyeongsamgeori">
                                        <text class="cls-1" transform="translate(116.95 840.01)">부평삼거리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ganseogogeori")} id="Ganseogogeori">
                                        <text class="cls-1" transform="translate(116.95 868.64)">간석오거리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("IncheonCityHall")} id="IncheonCityHall">
                                        <text class="cls-1" transform="translate(116.95 897.27)">인천시청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SeokcheonSageori")} id="SeokcheonSageori">
                                        <text class="cls-1" transform="translate(185.86 871.9)">석천사거리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("MoraenaeMarket")} id="MoraenaeMarket">
                                        <text class="cls-1" transform="translate(185.86 855.47)">모래내시장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Mansu")} id="Mansu">
                                        <text class="cls-1" transform="translate(185.86 839.04)">만수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("NamdongguOffice")} id="NamdongguOffice">
                                        <text class="cls-1" transform="translate(185.86 822.61)">남동구청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("IncheonGrandPark")} id="IncheonGrandPark">
                                        <text class="cls-1" transform="translate(185.86 806.18)">인천대공원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Unyeon")} id="Unyeon">
                                        <text class="cls-1" transform="translate(236.58 852.26)">운연</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("ArtsCenter")} id="ArtsCenter">
                                        <text class="cls-1" transform="translate(140.7 921.52)">예술회관</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("IncheonBusTerminal")} id="IncheonBusTerminal">
                                        <text class="cls-1" transform="translate(161.68 945.77)">인천터미널</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("MunhakSportsComplex")} id="MunhakSportsComplex">
                                        <text class="cls-1" transform="translate(185.42 970.02)">문학경기장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seonhak")} id="Seonhak">
                                        <text class="cls-1" transform="translate(217.67 994.26)">선학</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinyeonsu")} id="Sinyeonsu">
                                        <text class="cls-1" transform="translate(238.66 1018.51)">신연수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Woninjae")} id="Woninjae">
                                        <text class="cls-1" transform="translate(261.77 1042.76)">원인재</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongchun")} id="Dongchun">
                                        <text class="cls-1" transform="translate(245.03 1056.19)">동</text>
                                        <text class="cls-1" transform="translate(245.03 1063.56)">춘</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongmak")} id="Dongmak">
                                        <text class="cls-1" transform="translate(228.89 1073.5)">동</text>
                                        <text class="cls-1" transform="translate(228.89 1080.88)">막</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("CampusTown")} id="CampusTown">
                                        <text class="cls-1" transform="translate(209.05 1060.76)">캠</text>
                                        <text class="cls-1" transform="translate(209.05 1068.14)">퍼</text>
                                        <text class="cls-1" transform="translate(209.05 1075.51)">스</text>
                                        <text class="cls-1" transform="translate(209.05 1082.89)">타</text>
                                        <text class="cls-1" transform="translate(209.05 1090.27)">운</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Technopark")} id="Technopark">
                                        <text class="cls-1" transform="translate(192.26 1046.43)">테</text>
                                        <text class="cls-1" transform="translate(192.26 1053.81)">크</text>
                                        <text class="cls-1" transform="translate(192.26 1061.19)">노</text>
                                        <text class="cls-1" transform="translate(192.26 1068.57)">파</text>
                                        <text class="cls-1" transform="translate(192.26 1075.94)">크</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("BITZone")} id="BITZone">
                                        <text class="cls-1" transform="translate(175.49 1028.75)">지</text>
                                        <text class="cls-1" transform="translate(175.49 1036.12)">식</text>
                                        <text class="cls-1" transform="translate(175.49 1043.5)">정</text>
                                        <text class="cls-1" transform="translate(175.49 1050.88)">보</text>
                                        <text class="cls-1" transform="translate(175.49 1058.26)">단</text>
                                        <text class="cls-1" transform="translate(175.49 1065.64)">지</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("IncheonNatlUniv")} id="IncheonNatlUniv">
                                        <text class="cls-1" transform="translate(158.74 1013.42)">인</text>
                                        <text class="cls-1" transform="translate(158.74 1020.8)">천</text>
                                        <text class="cls-1" transform="translate(158.74 1028.18)">대</text>
                                        <text class="cls-1" transform="translate(158.74 1035.56)">입</text>
                                        <text class="cls-1" transform="translate(158.74 1042.94)">구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("CentralPark")} id="CentralPark">
                                        <text class="cls-1" transform="translate(141.89 997.51)">센</text>
                                        <text class="cls-1" transform="translate(141.89 1004.88)">트</text>
                                        <text class="cls-1" transform="translate(141.89 1012.26)">럴</text>
                                        <text class="cls-1" transform="translate(141.89 1019.64)">파</text>
                                        <text class="cls-1" transform="translate(141.89 1027.02)">크</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("IntlBusinessDistrict")} id="IntlBusinessDistrict">
                                        <text class="cls-1" transform="translate(125.16 977.76)">국</text>
                                        <text class="cls-1" transform="translate(125.16 985.14)">제</text>
                                        <text class="cls-1" transform="translate(125.16 992.52)">업</text>
                                        <text class="cls-1" transform="translate(125.16 999.9)">무</text>
                                        <text class="cls-1" transform="translate(125.16 1008.28)">지</text>
                                        <text class="cls-1" transform="translate(125.16 1015.66)">구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongsu")} id="Dongsu">
                                        <text class="cls-1" transform="translate(118.25 810.01)">동수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Wongok")} id="Wongok">
                                        <text class="cls-1" transform="translate(397.84 1184.5)">원곡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Wonsi")} id="Wonsi">
                                        <text class="cls-1" transform="translate(419 1184.5)">원시</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yeokgok")} id="Yeokgok">
                                        <text class="cls-1" transform="translate(209.3 898.83)">역곡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gaehwasan")} id="Gaehwasan">
                                        <text class="cls-1" transform="translate(185.15 582.88)">개화산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("AirportMarket")} id="AirportMarket">
                                        <text class="cls-1" transform="translate(185.15 600.76)">공항시장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinbanghwa")} id="Sinbanghwa">
                                        <text class="cls-1" transform="translate(209.45 582.88)">신방화</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Magongnaru")} id="Magongnaru">
                                        <text class="cls-1" transform="translate(231.57 599.93)">마곡나루</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("YangcheonHyanggyo")} id="YangcheonHyanggyo">
                                        <text class="cls-1" transform="translate(250.13 618.28)">양천향교</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gayang")} id="Gayang">
                                        <text class="cls-1" transform="translate(283.05 637.89)">가양</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Balsan")} id="Balsan">
                                        <text class="cls-1" transform="translate(238.18 678.82)">발산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hwagok")} id="Hwagok">
                                        <text class="cls-1" transform="translate(278.33 734.6)">화곡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ujangsan")} id="Ujangsan">
                                        <text class="cls-1" transform="translate(256.05 704.07)">우장산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Kkachisan")} id="Kkachisan">
                                        <text class="cls-1" transform="translate(280.51 768.04)">까치산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinjeong")} id="Sinjeong">
                                        <text class="cls-1" transform="translate(310.51 780.62)">신정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinjeongnegeori")} id="Sinjeongnegeori">
                                        <text class="cls-1" transform="translate(296.82 803.05)">신정네거리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Mokdong")} id="Mokdong">
                                        <text class="cls-1" transform="translate(335.25 791.85)">목동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Omokgyo")} id="Omokgyo">
                                        <text class="cls-1" transform="translate(362.35 791.85)">오목교</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yangpyeong")} id="Yangpyeong">
                                        <text class="cls-1" transform="translate(394.41 791.85)">양평</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("YeongdeungpoguOffice")} id="YeongdeungpoguOffice">
                                        <text class="cls-1" transform="translate(420.57 791.85)">영등포구청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Mullae")} id="Mullae">
                                        <text class="cls-1" transform="translate(415.88 818.38)">문래</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dorimcheon")} id="Dorimcheon">
                                        <text class="cls-1" transform="translate(362.35 838.12)">도림천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("YangcheonguOffice")} id="YangcheonguOffice">
                                        <text class="cls-1" transform="translate(311.22 833.15)">양천구청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sindorim")} id="Sindorim">
                                        <text class="cls-1" transform="translate(408.34 842.98)">신도림</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Guro")} id="Guro">
                                        <text class="cls-1" transform="translate(358.33 860.37)">구로</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GasanDigitalComplex")} id="GasanDigitalComplex">
                                        <text class="cls-1" transform="translate(366.8 974.1)">가산디지털단지</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Doksan")} id="Doksan">
                                        <text class="cls-1" transform="translate(394.06 1003.78)">독산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GeumcheonGuOffice")} id="GeumcheonGuOffice">
                                        <text class="cls-1" transform="translate(414.25 1021.31)">금천구청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seoksu")} id="Seoksu">
                                        <text class="cls-1" transform="translate(445.7 1038.84)">석수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gwanak")} id="Gwanak">
                                        <text class="cls-1" transform="translate(471.47 1056.38)">관악</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Anyang")} id="Anyang">
                                        <text class="cls-1" transform="translate(497.29 1073.91)">안양</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Myeonghak")} id="Myeonghak">
                                        <text class="cls-1" transform="translate(523.08 1091.44)">명학</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Indeogwon")} id="Indeogwon">
                                        <text class="cls-1" transform="translate(599.72 1092.78)">인덕원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Pyeongchon")} id="Pyeongchon">
                                        <text class="cls-1" transform="translate(651.07 1049.83)">평촌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Beomgye")} id="Beomgye">
                                        <text class="cls-1" transform="translate(582.17 1107.1)">범계</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Geumjeong")} id="Geumjeong">
                                        <text class="cls-1" transform="translate(565.87 1121.41)">금정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sanbon")} id="Sanbon">
                                        <text class="cls-1" transform="translate(545.44 1135.73)">산본</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Surisan")} id="Surisan">
                                        <text class="cls-1" transform="translate(545.49 1160.79)">수</text>
                                        <text class="cls-1" transform="translate(545.49 1168.17)">리</text>
                                        <text class="cls-1" transform="translate(545.49 1175.55)">산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Daeyami")} id="Daeyami">
                                        <text class="cls-1" transform="translate(524.41 1160.79)">대</text>
                                        <text class="cls-1" transform="translate(524.41 1168.17)">야</text>
                                        <text class="cls-1" transform="translate(524.41 1175.55)">미</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Banwol")} id="Banwol">
                                        <text class="cls-1" transform="translate(503.33 1160.79)">반</text>
                                        <text class="cls-1" transform="translate(503.33 1168.17)">월</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sangnoksu")} id="Sangnoksu">
                                        <text class="cls-1" transform="translate(482.25 1160.79)">상</text>
                                        <text class="cls-1" transform="translate(482.25 1168.17)">록</text>
                                        <text class="cls-1" transform="translate(482.25 1175.55)">수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("HanyangUnivatAnsan")} id="HanyangUnivatAnsan">
                                        <text class="cls-1" transform="translate(461.17 1160.79)">한</text>
                                        <text class="cls-1" transform="translate(461.17 1168.17)">앞</text>
                                        <text class="cls-1" transform="translate(461.17 1175.55)">대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jungang")} id="Jungang">
                                        <text class="cls-1" transform="translate(440.09 1160.79)">중</text>
                                        <text class="cls-1" transform="translate(440.09 1168.17)">앙</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gojan")} id="Gojan">
                                        <text class="cls-1" transform="translate(419 1160.79)">고</text>
                                        <text class="cls-1" transform="translate(419 1168.17)">잔</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gunpo")} id="Gunpo">
                                        <text class="cls-1" transform="translate(608.71 1129.78)">군</text>
                                        <text class="cls-1" transform="translate(608.71 1137.16)">포</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dangjeong")} id="Dangjeong">
                                        <text class="cls-1" transform="translate(629.7 1129.78)">당</text>
                                        <text class="cls-1" transform="translate(629.7 1137.16)">정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Uiwang")} id="Uiwang">
                                        <text class="cls-1" transform="translate(650.74 1129.78)">의</text>
                                        <text class="cls-1" transform="translate(650.74 1137.16)">왕</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SungkyunkwanUniv")} id="SungkyunkwanUniv">
                                        <text class="cls-1" transform="translate(671.78 1129.78)">성</text>
                                        <text class="cls-1" transform="translate(671.78 1137.16)">균</text>
                                        <text class="cls-1" transform="translate(671.78 1144.54)">관</text>
                                        <text class="cls-1" transform="translate(671.78 1151.92)">대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hwaseo")} id="Hwaseo">
                                        <text class="cls-1" transform="translate(692.8 1129.78)">화</text>
                                        <text class="cls-1" transform="translate(692.8 1137.16)">서</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Suwon")} id="Suwon">
                                        <text class="cls-1" transform="translate(713.87 1129.78)">수</text>
                                        <text class="cls-1" transform="translate(713.87 1137.16)">원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seryu")} id="Seryu">
                                        <text class="cls-1" transform="translate(736.85 1147.71)">세</text>
                                        <text class="cls-1" transform="translate(736.85 1155.09)">류</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jinwi")} id="Jinwi">
                                        <text class="cls-1" transform="translate(851.72 1182.55)">진</text>
                                        <text class="cls-1" transform="translate(851.72 1189.93)">위</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seojeongri")} id="Seojeongri">
                                        <text class="cls-1" transform="translate(874.7 1182.55)">서</text>
                                        <text class="cls-1" transform="translate(874.7 1189.93)">정</text>
                                        <text class="cls-1" transform="translate(874.7 1197.31)">리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jije")} id="Jije">
                                        <text class="cls-1" transform="translate(897.67 1182.55)">지</text>
                                        <text class="cls-1" transform="translate(897.67 1189.93)">제</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Pyeongtaek")} id="Pyeongtaek">
                                        <text class="cls-1" transform="translate(920.64 1182.55)">평</text>
                                        <text class="cls-1" transform="translate(920.64 1189.93)">택</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seonghwan")} id="Seonghwan">
                                        <text class="cls-1" transform="translate(943.58 1182.55)">성</text>
                                        <text class="cls-1" transform="translate(943.58 1189.93)">환</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jiksan")} id="Jiksan">
                                        <text class="cls-1" transform="translate(966.55 1182.55)">직</text>
                                        <text class="cls-1" transform="translate(966.55 1189.93)">산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dujeong")} id="Dujeong">
                                        <text class="cls-1" transform="translate(989.56 1182.55)">두</text>
                                        <text class="cls-1" transform="translate(989.56 1189.93)">정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Cheonan")} id="Cheonan">
                                        <text class="cls-1" transform="translate(1012.5 1182.55)">천</text>
                                        <text class="cls-1" transform="translate(1012.5 1189.93)">안</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ssangyong")} id="Ssangyong">
                                        <text class="cls-1" transform="translate(1053.19 1170.83)">쌍</text>
                                        <text class="cls-1" transform="translate(1053.19 1178.21)">용</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Asan")} id="Asan">
                                        <text class="cls-1" transform="translate(1067.01 1158.91)">아</text>
                                        <text class="cls-1" transform="translate(1067.01 1166.29)">산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Baebang")} id="Baebang">
                                        <text class="cls-1" transform="translate(1080.88 1148.83)">배</text>
                                        <text class="cls-1" transform="translate(1080.88 1156.21)">방</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Onyangoncheon")} id="Onyangoncheon">
                                        <text class="cls-1" transform="translate(1094.75 1140.6)">온</text>
                                        <text class="cls-1" transform="translate(1094.75 1147.98)">양</text>
                                        <text class="cls-1" transform="translate(1094.75 1155.36)">온</text>
                                        <text class="cls-1" transform="translate(1094.75 1162.74)">천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinchang")} id="Sinchang">
                                        <text class="cls-1" transform="translate(1108.58 1133.9)">신</text>
                                        <text class="cls-1" transform="translate(1108.58 1141.28)">창</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Namguro")} id="Namguro">
                                        <text class="cls-1" transform="translate(392.3 943.39)">남구로</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Daerim")} id="Daerim">
                                        <text class="cls-1" transform="translate(418.68 912.67)">대림</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Boramae")} id="Boramae">
                                        <text class="cls-1" transform="translate(472.81 881.96)">보라매</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinpung")} id="Sinpung">
                                        <text class="cls-1" transform="translate(441.37 881.96)">신풍</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sindaebangsamgeori")} id="Sindaebangsamgeori">
                                        <text class="cls-1" transform="translate(512.58 881.96)">신대방삼거리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jangseungbaegi")} id="Jangseungbaegi">
                                        <text class="cls-1" transform="translate(544.05 868.58)">장승배기</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sangdo")} id="Sangdo">
                                        <text class="cls-1" transform="translate(576.23 885.96)">상도</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Namseong")} id="Namseong">
                                        <text class="cls-1" transform="translate(637.52 920.72)">남성</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SoongsilUniv")} id="SoongsilUniv">
                                        <text class="cls-1" transform="translate(602.75 901.53)">숭실대입구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Isu")} id="Isu">
                                        <text class="cls-1" transform="translate(670.9 936.44)">이수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Naebang")} id="Naebang">
                                        <text class="cls-1" transform="translate(717.54 909.69)">내방</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Guil")} id="Guil">
                                        <text class="cls-1" transform="translate(326.31 872.49)">구일</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Oryudong")} id="Oryudong">
                                        <text class="cls-1" transform="translate(259.13 891.05)">오류동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gaebong")} id="Gaebong">
                                        <text class="cls-1" transform="translate(291.84 884.33)">개봉</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Onsu")} id="Onsu">
                                        <text class="cls-1" transform="translate(228.91 898.83)">온수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Kkachiul")} id="Kkachiul">
                                        <text class="cls-1" transform="translate(242.59 869.31)">까치울</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("BucheonStadium")} id="BucheonStadium">
                                        <text class="cls-1" transform="translate(256.36 850.25)">부천종합운동장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Chunui")} id="Chunui">
                                        <text class="cls-1" transform="translate(252.17 829.23)">춘의</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinjungdong")} id="Sinjungdong">
                                        <text class="cls-1" transform="translate(238.85 808.21)">신중동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("BucheonCityHall")} id="BucheonCityHall">
                                        <text class="cls-1" transform="translate(226.19 787.2)">부천시청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sangdong")} id="Sangdong">
                                        <text class="cls-1" transform="translate(216.91 766.18)">상동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SamsanGymnasium")} id="SamsanGymnasium">
                                        <text class="cls-1" transform="translate(208.3 745.16)">삼산체육관</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gulpocheon")} id="Gulpocheon">
                                        <text class="cls-1" transform="translate(181.88 746.24)">굴포천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Cheolsan")} id="Cheolsan">
                                        <text class="cls-1" transform="translate(327.6 943.39)">철산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dangsan")} id="Dangsan">
                                        <text class="cls-1" transform="translate(446.73 755.52)">당산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("NationalAssembly")} id="NationalAssembly">
                                        <text class="cls-1" transform="translate(474 775.12)">국회의사당</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seonyudo")} id="Seonyudo">
                                        <text class="cls-1" transform="translate(416.66 735.91)">선유도</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinmokdong")} id="Sinmokdong">
                                        <text class="cls-1" transform="translate(389.37 716.31)">신목동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yeomchang")} id="Yeomchang">
                                        <text class="cls-1" transform="translate(364.88 696.7)">염창</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Deungchon")} id="Deungchon">
                                        <text class="cls-1" transform="translate(337.64 677.1)">등촌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jeungmi")} id="Jeungmi">
                                        <text class="cls-1" transform="translate(310.35 657.49)">증미</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("YeongdeungpoMarket")} id="YeongdeungpoMarket">
                                        <text class="cls-1" transform="translate(454.05 808.16)">영등포시장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Singil")} id="Singil">
                                        <text class="cls-1" transform="translate(483.47 823.91)">신길</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yeouido")} id="Yeouido">
                                        <text class="cls-1" transform="translate(504.92 801.42)">여의도</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yeouinaru")} id="Yeouinaru">
                                        <text class="cls-1" transform="translate(524.48 780.51)">여의나루</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Songjeong")} id="Songjeong">
                                        <text class="cls-1" transform="translate(191.4 640.91)">송정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Magok")} id="Magok">
                                        <text class="cls-1" transform="translate(215.87 659.68)">마곡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("MapoguOffice")} id="MapoguOffice">
                                        <text class="cls-1" transform="translate(425.45 646.57)">마포구청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("WorldCupStadium")} id="WorldCupStadium">
                                        <text class="cls-1" transform="translate(425.45 620.92)">월드컵경기장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Mangwon")} id="Mangwon">
                                        <text class="cls-1" transform="translate(448.28 671.07)">망원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hapjeong")} id="Hapjeong">
                                        <text class="cls-1" transform="translate(471.11 696.96)">합정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sangsu")} id="Sangsu">
                                        <text class="cls-1" transform="translate(498.19 696.96)">상수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gwangheungchang")} id="Gwangheungchang">
                                        <text class="cls-1" transform="translate(525.96 696.96)">광흥창</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Daeheung")} id="Daeheung">
                                        <text class="cls-1" transform="translate(558.08 696.96)">대흥</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gongdeok")} id="Gongdeok">
                                        <text class="cls-1" transform="translate(585.44 710.96)">공덕</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Mapo")} id="Mapo">
                                        <text class="cls-1" transform="translate(565.25 731.28)">마포</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("HyochangPark")} id="HyochangPark">
                                        <text class="cls-1" transform="translate(610.88 727.42)">효창공원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Samgakji")} id="Samgakji">
                                        <text class="cls-1" transform="translate(656.59 750.05)">삼각지</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinyongsan")} id="Sinyongsan">
                                        <text class="cls-1" transform="translate(664.57 773.31)">신용산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yongsan")} id="Yongsan">
                                        <text class="cls-1" transform="translate(619.65 756.53)">용산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ichon")} id="Ichon">
                                        <text class="cls-1" transform="translate(671.86 799.14)">이촌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seobinggo")} id="Seobinggo">
                                        <text class="cls-1" transform="translate(713.47 776.71)">서빙고</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hannam")} id="Hannam">
                                        <text class="cls-1" transform="translate(751.07 754.27)">한남</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Noksapyeong")} id="Noksapyeong">
                                        <text class="cls-1" transform="translate(685.11 750.05)">녹사평</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Itaewon")} id="Itaewon">
                                        <text class="cls-1" transform="translate(714.34 750.05)">이태원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hangangjin")} id="Hangangjin">
                                        <text class="cls-1" transform="translate(731.9 727.56)">한강진</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Beotigogae")} id="Beotigogae">
                                        <text class="cls-1" transform="translate(747.47 705.07)">버티고개</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Cheonggu")} id="Cheonggu">
                                        <text class="cls-1" transform="translate(776.23 660.09)">청구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sindang")} id="Sindang">
                                        <text class="cls-1" transform="translate(790.63 635.22)">신당</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongmyo")} id="Dongmyo">
                                        <text class="cls-1" transform="translate(789.81 604.12)">동묘앞</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Changsin")} id="Changsin">
                                        <text class="cls-1" transform="translate(784.93 583.93)">창신</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinseoldong")} id="Sinseoldong">
                                        <text class="cls-1" transform="translate(814.03 592.28)">신설동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jegidong")} id="Jegidong">
                                        <text class="cls-1" transform="translate(848.97 583.8)">제기동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Cheongnyangni")} id="Cheongnyangni">
                                        <text class="cls-1" transform="translate(874.47 563.46)">청량리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hoegi")} id="Hoegi">
                                        <text class="cls-1" transform="translate(896.03 539.32)">회기</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jungnang")} id="Jungnang">
                                        <text class="cls-1" transform="translate(954.95 531.31)">중랑</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("HankukUnivofForeignStudies")} id="HankukUnivofForeignStudies">
                                        <text class="cls-1" transform="translate(908.06 515.18)">외대앞</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinimun")} id="Sinimun">
                                        <text class="cls-1" transform="translate(924.05 491.04)">신이문</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("HansungUniv")} id="HansungUniv">
                                        <text class="cls-1" transform="translate(745.53 571.47)">한성대입구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hyehwa")} id="Hyehwa">
                                        <text class="cls-1" transform="translate(753.99 591.7)">혜화</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SungshinWomensUniv")} id="SungshinWomensUniv">
                                        <text class="cls-1" transform="translate(771.37 531.91)">성신여대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jeongneung")} id="Jeongneung">
                                        <text class="cls-1" transform="translate(769.67 495.07)">정릉</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("BukhansanBogungmun")} id="BukhansanBogungmun">
                                        <text class="cls-1" transform="translate(733.5 459.66)">북한산보국문</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SamyangSageori")} id="SamyangSageori">
                                        <text class="cls-1" transform="translate(759.75 424.79)">삼양사거리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Solsaem")} id="Solsaem">
                                        <text class="cls-1" transform="translate(761.74 441.63)">솔샘</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Samyang")} id="Samyang">
                                        <text class="cls-1" transform="translate(760.84 398.35)">삼양</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hwagye")} id="Hwagye">
                                        <text class="cls-1" transform="translate(760.84 371.92)">화계</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gaori")} id="Gaori">
                                        <text class="cls-1" transform="translate(760.84 345.49)">가오리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("April19thNationalCemetery")} id="April19thNationalCemetery">
                                        <text class="cls-1" transform="translate(760.84 319.06)">4.19민주묘지</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SolbatPark")} id="SolbatPark">
                                        <text class="cls-1" transform="translate(760.84 292.63)">솔밭공원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("BukhansanUi")} id="BukhansanUi">
                                        <text class="cls-1" transform="translate(760.84 266.19)">북한산우이</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Suyu")} id="Suyu">
                                        <text class="cls-1" transform="translate(822.63 364.53)">수유</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ssangmun")} id="Ssangmun">
                                        <text class="cls-1" transform="translate(830.79 321.92)">쌍문</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Changdong")} id="Changdong">
                                        <text class="cls-1" transform="translate(874.32 305.97)">창동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dobong")} id="Dobong">
                                        <text class="cls-1" transform="translate(874.16 214.34)">도봉</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Banghak")} id="Banghak">
                                        <text class="cls-1" transform="translate(861.56 261.46)">방학</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dobongsan")} id="Dobongsan">
                                        <text class="cls-1" transform="translate(885.5 170.03)">도봉산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Mangwolsa")} id="Mangwolsa">
                                        <text class="cls-1" transform="translate(861.51 145.53)">망월사</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hoeryong")} id="Hoeryong">
                                        <text class="cls-1" transform="translate(845.47 102.63)">회룡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Uijeongbu")} id="Uijeongbu">
                                        <text class="cls-1" transform="translate(811.41 103.26)">의정부</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ganeung")} id="Ganeung">
                                        <text class="cls-1" transform="translate(796.29 116.38)">가능</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Nogyang")} id="Nogyang">
                                        <text class="cls-1" transform="translate(781.17 129.49)">녹양</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yangju")} id="Yangju">
                                        <text class="cls-1" transform="translate(766.04 142.6)">양주</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Deokgye")} id="Deokgye">
                                        <text class="cls-1" transform="translate(750.92 155.72)">덕계</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Deokjeong")} id="Deokjeong">
                                        <text class="cls-1" transform="translate(735.79 168.83)">덕정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jihaeng")} id="Jihaeng">
                                        <text class="cls-1" transform="translate(720.99 181.95)">지행</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongducheonjungang")} id="Dongducheonjungang">
                                        <text class="cls-1" transform="translate(706.19 195.06)">동두천중앙</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bosan")} id="Bosan">
                                        <text class="cls-1" transform="translate(691.38 208.18)">보산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongducheon")} id="Dongducheon">
                                        <text class="cls-1" transform="translate(676.58 221.29)">동두천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Soyosan")} id="Soyosan">
                                        <text class="cls-1" transform="translate(661.77 234.41)">소요산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Beomgol")} id="Beomgol">
                                        <text class="cls-1" transform="translate(833.38 127.67)">범골</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Balgok")} id="Balgok">
                                        <text class="cls-1" transform="translate(831.48 81.03)">발곡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("LrtUijeongbu")} id="LrtUijeongbu">
                                        <text class="cls-1" transform="translate(818.25 140.78)">경전철의정부</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("UijeongbuCityHall")} id="UijeongbuCityHall">
                                        <text class="cls-1" transform="translate(803.13 153.89)">의정부시청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Heungseon")} id="Heungseon">
                                        <text class="cls-1" transform="translate(788.01 167.01)">흥선</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("UijeongbuJungang")} id="UijeongbuJungang">
                                        <text class="cls-1" transform="translate(772.88 180.12)">의정부중앙</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongo")} id="Dongo">
                                        <text class="cls-1" transform="translate(757.76 193.24)">동오</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("saemal")} id="saemal">
                                        <text class="cls-1" transform="translate(742.96 206.35)">새말</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GyeonggiProvincialGovernmentNorthernOffice")} id="GyeonggiProvincialGovernmentNorthernOffice">
                                        <text class="cls-1" transform="translate(728.15 219.46)">경기도청북부청사</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("hyoja")} id="hyoja">
                                        <text class="cls-1" transform="translate(713.35 232.58)">효자</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("gonjae")} id="gonjae">
                                        <text class="cls-1" transform="translate(698.54 245.69)">곤제</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("eoryong")} id="eoryong">
                                        <text class="cls-1" transform="translate(683.74 258.81)">어룡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Songsan")} id="Songsan">
                                        <text class="cls-1" transform="translate(670.48 272.07)">송산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Tapseok")} id="Tapseok">
                                        <text class="cls-1" transform="translate(657.22 285.32)">탑석</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Nowon")} id="Nowon">
                                        <text class="cls-1" transform="translate(915.39 291.2)">노원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Madeul")} id="Madeul">
                                        <text class="cls-1" transform="translate(899.29 247.01)">마들</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Suraksan")} id="Suraksan">
                                        <text class="cls-1" transform="translate(912.49 197.19)">수락산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jangam")} id="Jangam">
                                        <text class="cls-1" transform="translate(918.88 145.53)">장암</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sanggye")} id="Sanggye">
                                        <text class="cls-1" transform="translate(953.25 274.14)">상계</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Danggogae")} id="Danggogae">
                                        <text class="cls-1" transform="translate(989.67 257.99)">당고개</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Mia")} id="Mia">
                                        <text class="cls-1" transform="translate(816.43 409.33)">미아</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gireum")} id="Gireum">
                                        <text class="cls-1" transform="translate(804.18 495.96)">길음</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Miasamgeori")} id="Miasamgeori">
                                        <text class="cls-1" transform="translate(826.85 456.39)">미아사거리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Wolgok")} id="Wolgok">
                                        <text class="cls-1" transform="translate(864.37 504.19)">월곡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sangwolgok")} id="Sangwolgok">
                                        <text class="cls-1" transform="translate(884.68 485.83)">상월곡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dolgoji")} id="Dolgoji">
                                        <text class="cls-1" transform="translate(907.26 467.71)">돌곶이</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seokgye")} id="Seokgye">
                                        <text class="cls-1" transform="translate(929.12 449.51)">석계</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("KwangwoonUniv")} id="KwangwoonUniv">
                                        <text class="cls-1" transform="translate(919.98 415.94)">광운대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Wolgye")} id="Wolgye">
                                        <text class="cls-1" transform="translate(906.26 382.83)">월계</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Nokcheon")} id="Nokcheon">
                                        <text class="cls-1" transform="translate(890.36 345.41)">녹천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Taereung")} id="Taereung">
                                        <text class="cls-1" transform="translate(949.85 432.41)">태릉입구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gongneung")} id="Gongneung">
                                        <text class="cls-1" transform="translate(959.53 403.28)">공릉</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hagye")} id="Hagye">
                                        <text class="cls-1" transform="translate(944.83 367.57)">하계</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Junggye")} id="Junggye">
                                        <text class="cls-1" transform="translate(927.51 331.87)">중계</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hwarangdae")} id="Hwarangdae">
                                        <text class="cls-1" transform="translate(982.27 427.59)">화랑대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bonghwasan")} id="Bonghwasan">
                                        <text class="cls-1" transform="translate(1012.82 440.47)">봉화산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinnae")} id="Sinnae">
                                        <text class="cls-1" transform="translate(1040.18 451.68)">신내</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Galmae")} id="Galmae">
                                        <text class="cls-1" transform="translate(1062.31 431.87)">갈매</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Byeollae")} id="Byeollae">
                                        <text class="cls-1" transform="translate(1088.23 413.05)">별</text>
                                        <text class="cls-1" transform="translate(1088.23 420.43)">내</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Toegyewon")} id="Toegyewon">
                                        <text class="cls-1" transform="translate(1107.55 413.05)">퇴</text>
                                        <text class="cls-1" transform="translate(1107.55 420.43)">계</text>
                                        <text class="cls-1" transform="translate(1107.55 427.81)">원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sareung")} id="Sareung">
                                        <text class="cls-1" transform="translate(1126.8 413.05)">사</text>
                                        <text class="cls-1" transform="translate(1126.8 420.43)">릉</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Geumgok")} id="Geumgok">
                                        <text class="cls-1" transform="translate(1146.18 413.05)">금</text>
                                        <text class="cls-1" transform="translate(1146.18 420.43)">곡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("PyeongnaeHopyeong")} id="PyeongnaeHopyeong">
                                        <text class="cls-1" transform="translate(1165.5 413.05)">평</text>
                                        <text class="cls-1" transform="translate(1165.5 420.43)">내</text>
                                        <text class="cls-1" transform="translate(1165.5 427.81)">호</text>
                                        <text class="cls-1" transform="translate(1165.5 435.19)">평</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Cheonmasan")} id="Cheonmasan">
                                        <text class="cls-1" transform="translate(1165.13 450.88)">천마산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Maseok")} id="Maseok">
                                        <text class="cls-1" transform="translate(1173.24 468.47)">마석</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Daeseongri")} id="Daeseongri">
                                        <text class="cls-1" transform="translate(1180.84 481.86)">대성리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Cheongpyeong")} id="Cheongpyeong">
                                        <text class="cls-1" transform="translate(1189.75 497.75)">청평</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sangcheon")} id="Sangcheon">
                                        <text class="cls-1" transform="translate(1176.51 512.8)">상천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gapyeong")} id="Gapyeong">
                                        <text class="cls-1" transform="translate(1166 527.86)">가평</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gulbongsan")} id="Gulbongsan">
                                        <text class="cls-1" transform="translate(1155.35 542.91)">굴봉산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gangchon")} id="Gangchon">
                                        <text class="cls-1" transform="translate(1144.88 557.97)">백양리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gangchon-2")} id="Gangchon-2">
                                        <text class="cls-1" transform="translate(1134.49 573.02)">강촌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gimyujeong")} id="Gimyujeong">
                                        <text class="cls-1" transform="translate(1123.87 588.08)">김유정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Namchuncheon")} id="Namchuncheon">
                                        <text class="cls-1" transform="translate(1113.37 603.13)">남춘천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Chuncheon")} id="Chuncheon">
                                        <text class="cls-1" transform="translate(1102.98 618.19)">춘천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yangwon")} id="Yangwon">
                                        <text class="cls-1" transform="translate(1039.99 489.24)">양원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Guri")} id="Guri">
                                        <text class="cls-1" transform="translate(1057.33 470.01)">구리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Donong")} id="Donong">
                                        <text class="cls-1" transform="translate(1071.76 457.44)">도농</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yangjeong")} id="Yangjeong">
                                        <text class="cls-1" transform="translate(1088.75 448.89)">양</text>
                                        <text class="cls-1" transform="translate(1088.75 456.26)">정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Deokso")} id="Deokso">
                                        <text class="cls-1" transform="translate(1106.44 448.89)">덕</text>
                                        <text class="cls-1" transform="translate(1106.44 456.26)">소</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dosim")} id="Dosim">
                                        <text class="cls-1" transform="translate(1124.11 448.89)">도</text>
                                        <text class="cls-1" transform="translate(1124.11 456.26)">심</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Paldang")} id="Paldang">
                                        <text class="cls-1" transform="translate(1141.74 448.89)">팔</text>
                                        <text class="cls-1" transform="translate(1141.74 456.26)">당</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ungilsan")} id="Ungilsan">
                                        <text class="cls-1" transform="translate(1143.61 468.47)">운길산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yangsu")} id="Yangsu">
                                        <text class="cls-1" transform="translate(1149.44 481.86)">양수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinwon")} id="Sinwon">
                                        <text class="cls-1" transform="translate(1154.82 497.75)">신원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Guksu")} id="Guksu">
                                        <text class="cls-1" transform="translate(1145.83 512.48)">국수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Asin")} id="Asin">
                                        <text class="cls-1" transform="translate(1134.92 526.55)">아신</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Obin")} id="Obin">
                                        <text class="cls-1" transform="translate(1124 540.62)">오빈</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yangpyeong-2")} id="Yangpyeong-2">
                                        <text class="cls-1" transform="translate(1113.08 554.69)">양평</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Wondeok")} id="Wondeok">
                                        <text class="cls-1" transform="translate(1102.17 568.76)">원덕</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yongmun")} id="Yongmun">
                                        <text class="cls-1" transform="translate(1091.25 582.83)">용문</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jipyeong")} id="Jipyeong">
                                        <text class="cls-1" transform="translate(1080.33 596.9)">지평</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Meokgol")} id="Meokgol">
                                        <text class="cls-1" transform="translate(964.56 465.32)">먹골</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Junghwa")} id="Junghwa">
                                        <text class="cls-1" transform="translate(968.55 493.9)">중화</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sangbong")} id="Sangbong">
                                        <text class="cls-1" transform="translate(984.91 517.43)">상봉</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Mangu")} id="Mangu">
                                        <text class="cls-1" transform="translate(1014.84 503.55)">망우</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Myeonmok")} id="Myeonmok">
                                        <text class="cls-1" transform="translate(997.52 540.83)">면목</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sagajeong")} id="Sagajeong">
                                        <text class="cls-1" transform="translate(1002.94 568)">사가정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yongmasan")} id="Yongmasan">
                                        <text class="cls-1" transform="translate(988.6 601.52)">용마산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Junggok")} id="Junggok">
                                        <text class="cls-1" transform="translate(976.61 635.04)">중곡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gunja")} id="Gunja">
                                        <text class="cls-1" transform="translate(963.73 668.55)">군자</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Achasan")} id="Achasan">
                                        <text class="cls-1" transform="translate(999.15 687.84)">아차산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gwangnaru")} id="Gwangnaru">
                                        <text class="cls-1" transform="translate(1037.41 707.13)">광나루</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gangbyeon")} id="Gangbyeon">
                                        <text class="cls-1" transform="translate(1016.73 744.22)">강변</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Guui")} id="Guui">
                                        <text class="cls-1" transform="translate(984.69 737.92)">구의</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("KonkukUniv")} id="KonkukUniv">
                                        <text class="cls-1" transform="translate(945.66 729.61)">건대입구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seongsu")} id="Seongsu">
                                        <text class="cls-1" transform="translate(902.48 707.54)">성수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ttukseom")} id="Ttukseom">
                                        <text class="cls-1" transform="translate(883.62 688.22)">뚝섬</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("HanyangUniv")} id="HanyangUniv">
                                        <text class="cls-1" transform="translate(861.06 668.91)">한양대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("TtukseomPark")} id="TtukseomPark">
                                        <text class="cls-1" transform="translate(936.95 758.22)">뚝섬유원지</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Janghanpyeong")} id="Janghanpyeong">
                                        <text class="cls-1" transform="translate(922.54 647.25)">장한평</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dapsimni")} id="Dapsimni">
                                        <text class="cls-1" transform="translate(883.99 623.95)">답십리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Majang")} id="Majang">
                                        <text class="cls-1" transform="translate(864.16 636.77)">마장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sindap")} id="Sindap">
                                        <text class="cls-1" transform="translate(859.42 609.57)">신답</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Wangsimni")} id="Wangsimni">
                                        <text class="cls-1" transform="translate(841.96 649.59)">왕십리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Eungbong")} id="Eungbong">
                                        <text class="cls-1" transform="translate(822.39 709.6)">응봉</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Haengdang")} id="Haengdang">
                                        <text class="cls-1" transform="translate(818.94 662.41)">행당</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Singeumho")} id="Singeumho">
                                        <text class="cls-1" transform="translate(793.53 675.23)">신금호</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seoulforest")} id="Seoulforest">
                                        <text class="cls-1" transform="translate(860.15 706.22)">서울숲</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yongdap")} id="Yongdap">
                                        <text class="cls-1" transform="translate(887.51 660.32)">용답</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("ChildrensGrandPark")} id="ChildrensGrandPark">
                                        <text class="cls-1" transform="translate(954.5 701.37)">어린이대공원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bomun")} id="Bomun">
                                        <text class="cls-1" transform="translate(779.55 564.43)">보문</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Anam")} id="Anam">
                                        <text class="cls-1" transform="translate(810.8 548.11)">안암</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("KoreaUniv")} id="KoreaUniv">
                                        <text class="cls-1" transform="translate(838.74 527.29)">고려대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongdaemun")} id="Dongdaemun">
                                        <text class="cls-1" transform="translate(767.37 618.74)">동대문</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jongno5oga")} id="Jongno5oga">
                                        <text class="cls-1" transform="translate(724.65 618.74)">종로5가</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("DongdaemunHistoryCulturePark")} id="DongdaemunHistoryCulturePark">
                                        <text class="cls-1" transform="translate(744.03 635.22)">동대문</text>
                                        <text class="cls-1" transform="translate(744.03 642.6)">역사문화공원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Euljiro4saga")} id="Euljiro4saga">
                                        <text class="cls-1" transform="translate(725.94 626.86)">을지로4가</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Myeongdong")} id="Myeongdong">
                                        <text class="cls-1" transform="translate(695.46 664.67)">명동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hoehyeon")} id="Hoehyeon">
                                        <text class="cls-1" transform="translate(674.44 678.42)">회현</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SookmyungWomensUniv")} id="SookmyungWomensUniv">
                                        <text class="cls-1" transform="translate(646.74 712.34)">숙대입구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SeoulStation")} id="SeoulStation">
                                        <text class="cls-1" transform="translate(646.74 693.6)">서울역</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Chungjeongno")} id="Chungjeongno">
                                        <text class="cls-1" transform="translate(626.02 665.56)">충정로</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seodaemun")} id="Seodaemun">
                                        <text class="cls-1" transform="translate(645.34 641.71)">서대문</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Aeogae")} id="Aeogae">
                                        <text class="cls-1" transform="translate(605.47 689)">애오개</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ahyeon")} id="Ahyeon">
                                        <text class="cls-1" transform="translate(597.61 665.56)">아현</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("EwhaWomansUniv")} id="EwhaWomansUniv">
                                        <text class="cls-1" transform="translate(568.11 665.56)">이대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinchon")} id="Sinchon">
                                        <text class="cls-1" transform="translate(538.61 665.56)">신촌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("HongikUniv")} id="HongikUniv">
                                        <text class="cls-1" transform="translate(503.22 646.57)">홍대입구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gajwa")} id="Gajwa">
                                        <text class="cls-1" transform="translate(471.58 620.92)">가좌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Namyeong")} id="Namyeong">
                                        <text class="cls-1" transform="translate(646.74 732.06)">남영</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("CityHall")} id="CityHall">
                                        <text class="cls-1" transform="translate(656.08 653.03)">시청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jonggak")} id="Jonggak">
                                        <text class="cls-1" transform="translate(672.48 634.4)">종각</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gwanghwamun")} id="Gwanghwamun">
                                        <text class="cls-1" transform="translate(664.15 618.74)">광화문</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gupabal")} id="Gupabal">
                                        <text class="cls-1" transform="translate(489.21 424.11)">구파발</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jichuk")} id="Jichuk">
                                        <text class="cls-1" transform="translate(481.97 410.74)">지축</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Samsong")} id="Samsong">
                                        <text class="cls-1" transform="translate(471.86 397.36)">삼송</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Wonheung")} id="Wonheung">
                                        <text class="cls-1" transform="translate(461.76 383.99)">원흥</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Wondang")} id="Wondang">
                                        <text class="cls-1" transform="translate(451.62 370.61)">원당</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hwajeong")} id="Hwajeong">
                                        <text class="cls-1" transform="translate(429.35 344.68)">화</text>
                                        <text class="cls-1" transform="translate(429.35 352.06)">정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Nokbeon")} id="Nokbeon">
                                        <text class="cls-1" transform="translate(547.68 502.42)">녹번</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hongje")} id="Hongje">
                                        <text class="cls-1" transform="translate(574.71 536.24)">홍제</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Muakjae")} id="Muakjae">
                                        <text class="cls-1" transform="translate(590.61 575.02)">무악재</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongnimmun")} id="Dongnimmun">
                                        <text class="cls-1" transform="translate(627.24 599.69)">독립문</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gyeongbokgung")} id="Gyeongbokgung">
                                        <text class="cls-1" transform="translate(676.35 600.65)">경복궁</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jongno3samga")} id="Jongno3samga">
                                        <text class="cls-1" transform="translate(691.78 618.74)">종로3가</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Euljiro3samga")} id="Euljiro3samga">
                                        <text class="cls-1" transform="translate(703.67 635.22)">을지로3가</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Euljiro1ilga")} id="Euljiro1ilga">
                                        <text class="cls-1" transform="translate(679.95 643.52)">을지로입구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Chungmuro")} id="Chungmuro">
                                        <text class="cls-1" transform="translate(717.76 651.04)">충무로</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("DonggukUniv")} id="DonggukUniv">
                                        <text class="cls-1" transform="translate(738.01 669.13)">동대입구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yaksu")} id="Yaksu">
                                        <text class="cls-1" transform="translate(761.13 682.58)">약수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Oksu")} id="Oksu">
                                        <text class="cls-1" transform="translate(788.39 731.83)">옥수</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Apgujeong")} id="Apgujeong">
                                        <text class="cls-1" transform="translate(810.4 788.23)">압구정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinsa")} id="Sinsa">
                                        <text class="cls-1" transform="translate(792.49 817.04)">신사</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jamwon")} id="Jamwon">
                                        <text class="cls-1" transform="translate(775.21 846)">잠원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongjak")} id="Dongjak">
                                        <text class="cls-1" transform="translate(670.9 889.91)">동작</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gubanpo")} id="Gubanpo">
                                        <text class="cls-1" transform="translate(691.66 875.09)">구반포</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinbanpo")} id="Sinbanpo">
                                        <text class="cls-1" transform="translate(724.12 875.09)">신반포</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Nodeul")} id="Nodeul">
                                        <text class="cls-1" transform="translate(588.83 835.46)">노들</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Heukseok")} id="Heukseok">
                                        <text class="cls-1" transform="translate(629.95 862.77)">흑석</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Daebang")} id="Daebang">
                                        <text class="cls-1" transform="translate(507.69 836.98)">대방</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Saetgang")} id="Saetgang">
                                        <text class="cls-1" transform="translate(526.8 817.88)">샛강</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Noryangjin")} id="Noryangjin">
                                        <text class="cls-1" transform="translate(544.27 835.46)">노량진</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SeoulNatlUnivofEducation")} id="SeoulNatlUnivofEducation">
                                        <text class="cls-1" transform="translate(771.24 897.96)">교대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("ExpressBusTerminal")} id="ExpressBusTerminal">
                                        <text class="cls-1" transform="translate(753.49 874.92)">고속터미널</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sapyeong")} id="Sapyeong">
                                        <text class="cls-1" transform="translate(788.89 874.92)">사평</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("NambuBusTerminal")} id="NambuBusTerminal">
                                        <text class="cls-1" transform="translate(800.6 925.68)">남부터미널</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seocho")} id="Seocho">
                                        <text class="cls-1" transform="translate(745.47 928.36)">서초</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bangbae")} id="Bangbae">
                                        <text class="cls-1" transform="translate(709.44 956.78)">방배</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sadang")} id="Sadang">
                                        <text class="cls-1" transform="translate(670.9 984.77)">사당</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Namtaeryeong")} id="Namtaeryeong">
                                        <text class="cls-1" transform="translate(670.9 997.45)">남태령</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seonbawi")} id="Seonbawi">
                                        <text class="cls-1" transform="translate(670.9 1010.14)">선바위</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SeoulRacecoursePark")} id="SeoulRacecoursePark">
                                        <text class="cls-1" transform="translate(670.19 1022.83)">경마공원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SeoulGrandPark")} id="SeoulGrandPark">
                                        <text class="cls-1" transform="translate(670.61 1035.52)">대공원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gwacheon")} id="Gwacheon">
                                        <text class="cls-1" transform="translate(633.68 1064.15)">과천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GovernmentComplexGwacheon")} id="GovernmentComplexGwacheon">
                                        <text class="cls-1" transform="translate(618.71 1078.46)">과천정부청사</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Nakseongdae")} id="Nakseongdae">
                                        <text class="cls-1" transform="translate(630.72 969.55)">낙성대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SeoulNatlUniv")} id="SeoulNatlUniv">
                                        <text class="cls-1" transform="translate(581.86 954.33)">서울대입구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bongcheon")} id="Bongcheon">
                                        <text class="cls-1" transform="translate(551.79 939.11)">봉천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sillim")} id="Sillim">
                                        <text class="cls-1" transform="translate(516.89 939.11)">신림</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sindaebang")} id="Sindaebang">
                                        <text class="cls-1" transform="translate(485.5 939.11)">신대방</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GuroDigitalComplex")} id="GuroDigitalComplex">
                                        <text class="cls-1" transform="translate(431.87 939.11)">구로디지털단지</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Maebong")} id="Maebong">
                                        <text class="cls-1" transform="translate(872.3 930.71)">매봉</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gangnam")} id="Gangnam">
                                        <text class="cls-1" transform="translate(807.27 898.14)">강남</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yangjae")} id="Yangjae">
                                        <text class="cls-1" transform="translate(834.6 950.9)">양재</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("YangjaeCitizensForest")} id="YangjaeCitizensForest">
                                        <text class="cls-1" transform="translate(851.18 993.82)">양재시민의숲</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Cheonggyesan")} id="Cheonggyesan">
                                        <text class="cls-1" transform="translate(881.26 1043.17)">청계산입구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Pangyo")} id="Pangyo">
                                        <text class="cls-1" transform="translate(1008.56 1065.34)">판교</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jeongja")} id="Jeongja">
                                        <text class="cls-1" transform="translate(985.07 1065.34)">정자</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Migeum")} id="Migeum">
                                        <text class="cls-1" transform="translate(964.78 1065.34)">미금</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ori")} id="Ori">
                                        <text class="cls-1" transform="translate(939.02 1079.93)">오리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jukjeon")} id="Jukjeon">
                                        <text class="cls-1" transform="translate(914 1079.93)">죽전</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bojeong")} id="Bojeong">
                                        <text class="cls-1" transform="translate(888.99 1079.93)">보정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Guseong")} id="Guseong">
                                        <text class="cls-1" transform="translate(863.97 1079.93)">구성</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Singal")} id="Singal">
                                        <text class="cls-1" transform="translate(838.92 1079.93)">신갈</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Giheung")} id="Giheung">
                                        <text class="cls-1" transform="translate(813.94 1079.93)">기흥</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("KangnamUniv")} id="KangnamUniv">
                                        <text class="cls-1" transform="translate(830.08 1101.76)">강</text>
                                        <text class="cls-1" transform="translate(830.08 1109.14)">남</text>
                                        <text class="cls-1" transform="translate(830.08 1116.52)">대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jiseok")} id="Jiseok">
                                        <text class="cls-1" transform="translate(851.05 1101.76)">지</text>
                                        <text class="cls-1" transform="translate(851.05 1109.14)">석</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Eojeong")} id="Eojeong">
                                        <text class="cls-1" transform="translate(871.97 1101.76)">어</text>
                                        <text class="cls-1" transform="translate(871.97 1109.14)">정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongbaek")} id="Dongbaek">
                                        <text class="cls-1" transform="translate(892.89 1101.76)">동</text>
                                        <text class="cls-1" transform="translate(892.89 1109.14)">백</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Chodang")} id="Chodang">
                                        <text class="cls-1" transform="translate(913.79 1101.76)">초</text>
                                        <text class="cls-1" transform="translate(913.79 1109.14)">당</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Samga")} id="Samga">
                                        <text class="cls-1" transform="translate(934.71 1101.76)">삼</text>
                                        <text class="cls-1" transform="translate(934.71 1109.14)">가</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("CityHallYonginUniv")} id="CityHallYonginUniv">
                                        <text class="cls-1" transform="translate(955.68 1101.76)">시</text>
                                        <text class="cls-1" transform="translate(955.68 1109.14)">청</text>
                                        <text class="cls-1" transform="translate(955.68 1116.52)">용</text>
                                        <text class="cls-1" transform="translate(955.68 1123.9)">인</text>
                                        <text class="cls-1" transform="translate(955.68 1131.28)">대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("MyongjiUniv")} id="MyongjiUniv">
                                        <text class="cls-1" transform="translate(976.6 1101.76)">명</text>
                                        <text class="cls-1" transform="translate(976.6 1109.14)">지</text>
                                        <text class="cls-1" transform="translate(976.6 1116.52)">대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gimnyangjang")} id="Gimnyangjang">
                                        <text class="cls-1" transform="translate(997.49 1101.76)">김</text>
                                        <text class="cls-1" transform="translate(997.49 1109.14)">량</text>
                                        <text class="cls-1" transform="translate(997.49 1116.52)">장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("StadiumSongdamCollege")} id="StadiumSongdamCollege">
                                        <text class="cls-1" transform="translate(1018.41 1101.76)">운</text>
                                        <text class="cls-1" transform="translate(1018.41 1109.14)">동</text>
                                        <text class="cls-1" transform="translate(1018.41 1116.52)">장</text>
                                        <text class="cls-1" transform="translate(1018.41 1123.9)">송</text>
                                        <text class="cls-1" transform="translate(1018.41 1130.66)">담</text>
                                        <text class="cls-1" transform="translate(1018.41 1137.04)">대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gojin")} id="Gojin">
                                        <text class="cls-1" transform="translate(1035.52 1102.21)">고</text>
                                        <text class="cls-1" transform="translate(1035.52 1109.59)">진</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bopyeong")} id="Bopyeong">
                                        <text class="cls-1" transform="translate(1050.38 1087.8)">보</text>
                                        <text class="cls-1" transform="translate(1050.38 1095.17)">평</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dunjeon")} id="Dunjeon">
                                        <text class="cls-1" transform="translate(1065.23 1073.63)">둔</text>
                                        <text class="cls-1" transform="translate(1065.23 1081.01)">전</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("JeondaeEverland")} id="JeondaeEverland">
                                        <text class="cls-1" transform="translate(1080.09 1059.61)">전</text>
                                        <text class="cls-1" transform="translate(1080.09 1066.99)">대</text>
                                        <text class="cls-1" transform="translate(1080.09 1074.37)">에</text>
                                        <text class="cls-1" transform="translate(1080.09 1081.75)">버</text>
                                        <text class="cls-1" transform="translate(1080.09 1089.13)">랜</text>
                                        <text class="cls-1" transform="translate(1080.09 1096.51)">드</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sanggal")} id="Sanggal">
                                        <text class="cls-1" transform="translate(788.88 1079.93)">상갈</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Cheongmyeong")} id="Cheongmyeong">
                                        <text class="cls-1" transform="translate(763.91 1079.93)">청명</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yeongtong")} id="Yeongtong">
                                        <text class="cls-1" transform="translate(738.89 1079.93)">영통</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Mangpo")} id="Mangpo">
                                        <text class="cls-1" transform="translate(713.87 1079.93)">망포</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("MaetanGwonseon")} id="MaetanGwonseon">
                                        <text class="cls-1" transform="translate(713.87 1092.39)">매탄권선</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SuwonCityHall")} id="SuwonCityHall">
                                        <text class="cls-1" transform="translate(713.87 1104.85)">수원시청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Maegyo")} id="Maegyo">
                                        <text class="cls-1" transform="translate(713.87 1117.32)">매교</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dongcheon")} id="Dongcheon">
                                        <text class="cls-1" transform="translate(944.28 1065.34)">동천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sujiguoffice")} id="Sujiguoffice">
                                        <text class="cls-1" transform="translate(909.06 1065.34)">수지구청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seongbok")} id="Seongbok">
                                        <text class="cls-1" transform="translate(887.09 1065.34)">성복</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sanghyeon")} id="Sanghyeon">
                                        <text class="cls-1" transform="translate(864.5 1065.34)">상현</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GwanggyoJungang")} id="GwanggyoJungang">
                                        <text class="cls-1" transform="translate(830.64 1065.34)">광교중앙</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gwanggyo")} id="Gwanggyo">
                                        <text class="cls-1" transform="translate(807.32 1065.34)">광교</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinnonhyeon")} id="Sinnonhyeon">
                                        <text class="cls-1" transform="translate(810.22 874.92)">신논현</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Nonhyeon")} id="Nonhyeon">
                                        <text class="cls-1" transform="translate(809.23 841.98)">논현</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Banpo")} id="Banpo">
                                        <text class="cls-1" transform="translate(783.57 857.34)">반포</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hakdong")} id="Hakdong">
                                        <text class="cls-1" transform="translate(834.03 828.1)">학동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Eonju")} id="Eonju">
                                        <text class="cls-1" transform="translate(835.95 859.03)">언주</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yeoksam")} id="Yeoksam">
                                        <text class="cls-1" transform="translate(843.33 898.14)">역삼</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seolleung")} id="Seolleung">
                                        <text class="cls-1" transform="translate(860.15 875.92)">선릉</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hanti")} id="Hanti">
                                        <text class="cls-1" transform="translate(880.77 893.67)">한티</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seonjeongneung")} id="Seonjeongneung">
                                        <text class="cls-1" transform="translate(860.15 845.16)">선정릉</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GangnamguOffice")} id="GangnamguOffice">
                                        <text class="cls-1" transform="translate(860.15 811.97)">강남구청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Cheongdam")} id="Cheongdam">
                                        <text class="cls-1" transform="translate(888.96 794.67)">청담</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Apgujeongrodeo")} id="Apgujeongrodeo">
                                        <text class="cls-1" transform="translate(860.15 779.57)">압구정로데오</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SamseongJungang")} id="SamseongJungang">
                                        <text class="cls-1" transform="translate(885.73 827.89)">삼성중앙</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bongeunsa")} id="Bongeunsa">
                                        <text class="cls-1" transform="translate(920.25 836.29)">봉은사</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Samseong")} id="Samseong">
                                        <text class="cls-1" transform="translate(903.48 862.76)">삼성</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SportsComplex")} id="SportsComplex">
                                        <text class="cls-1" transform="translate(945.83 844.69)">종합운동장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Samjeon")} id="Samjeon">
                                        <text class="cls-1" transform="translate(985.32 853.09)">삼전</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SeokchonGobun")} id="SeokchonGobun">
                                        <text class="cls-1" transform="translate(1010.7 861.49)">석촌고분</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("SeokchonHansolHospital")} id="SeokchonHansolHospital">
                                        <text class="cls-1" transform="translate(1042.9 869.89)">석촌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jamsil")} id="Jamsil">
                                        <text class="cls-1" transform="translate(1042.9 823.63)">잠실</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jamsillaru")} id="Jamsillaru">
                                        <text class="cls-1" transform="translate(1042.9 782.94)">잠실나루</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jamsilsaenae")} id="Jamsilsaenae">
                                        <text class="cls-1" transform="translate(994.61 824.33)">잠실새내</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Mongchontoseong")} id="Mongchontoseong">
                                        <text class="cls-1" transform="translate(1066.12 792.75)">몽촌토성</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GangdongguOffice")} id="GangdongguOffice">
                                        <text class="cls-1" transform="translate(1087.47 768.34)">강동구청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Cheonho")} id="Cheonho">
                                        <text class="cls-1" transform="translate(1085.33 729.05)">천호</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gangdong")} id="Gangdong">
                                        <text class="cls-1" transform="translate(1125.9 745.72)">강동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Amsa")} id="Amsa">
                                        <text class="cls-1" transform="translate(1099.33 693.39)">암사</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gildong")} id="Gildong">
                                        <text class="cls-1" transform="translate(1144.56 729.11)">길동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Godeok")} id="Godeok">
                                        <text class="cls-1" transform="translate(1194.22 674.28)">고덕</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sangildong")} id="Sangildong">
                                        <text class="cls-1" transform="translate(1210.95 657.03)">상일동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Misa")} id="Misa">
                                        <text class="cls-1" transform="translate(1228.35 638.57)">미사</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("HanamPungsan")} id="HanamPungsan">
                                        <text class="cls-1" transform="translate(1250.31 657.03)">하남풍산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Myeongil")} id="Myeongil">
                                        <text class="cls-1" transform="translate(1176.91 692.69)">명일</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gubeundari")} id="Gubeundari">
                                        <text class="cls-1" transform="translate(1158.78 711.95)">굽은다리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dunchondong")} id="Dunchondong">
                                        <text class="cls-1" transform="translate(1125.85 777.85)">둔촌동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("DunchonOryun")} id="DunchonOryun">
                                        <text class="cls-1" transform="translate(1160.43 784.3)">둔촌오륜</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("VHSMedicalCenter")} id="VHSMedicalCenter">
                                        <text class="cls-1" transform="translate(1177.67 757.51)">중앙보훈병원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("OlympicPark")} id="OlympicPark">
                                        <text class="cls-1" transform="translate(1124.26 809.64)">올림픽공원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bangi")} id="Bangi">
                                        <text class="cls-1" transform="translate(1123.29 842.12)">방이</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gaerong")} id="Gaerong">
                                        <text class="cls-1" transform="translate(1136.54 883.16)">개롱</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Geoyeo")} id="Geoyeo">
                                        <text class="cls-1" transform="translate(1161.41 873.9)">거여</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Macheon")} id="Macheon">
                                        <text class="cls-1" transform="translate(1186.29 864.64)">마천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Munjeong")} id="Munjeong">
                                        <text class="cls-1" transform="translate(1092.29 936.4)">문정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Jeongja-2")} id="Jeongja-2">
                                        <text class="cls-1" transform="translate(1102.52 963.41)">정자</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bokjeong")} id="Bokjeong">
                                        <text class="cls-1" transform="translate(1112.09 990.43)">복정</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GachonUniv")} id="GachonUniv">
                                        <text class="cls-1" transform="translate(1093.09 1008.55)">가천대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Taepyeong")} id="Taepyeong">
                                        <text class="cls-1" transform="translate(1075.42 1026.69)">태평</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Moran")} id="Moran">
                                        <text class="cls-1" transform="translate(1059.69 1044.99)">모란</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yatap")} id="Yatap">
                                        <text class="cls-1" transform="translate(1044 1063.3)">야탑</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Imae")} id="Imae">
                                        <text class="cls-1" transform="translate(1028.35 1081.6)">이매</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Samdong")} id="Samdong">
                                        <text class="cls-1" transform="translate(1061.44 1131.48)">삼동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GyeonggiGwangju")} id="GyeonggiGwangju">
                                        <text class="cls-1" transform="translate(1073.58 1119.5)">경기광주</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Chowol")} id="Chowol">
                                        <text class="cls-1" transform="translate(1091.04 1107.53)">초월</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gonjiam")} id="Gonjiam">
                                        <text class="cls-1" transform="translate(1104.58 1095.55)">곤지암</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sindundoyechon")} id="Sindundoyechon">
                                        <text class="cls-1" transform="translate(1117.64 1083.57)">신둔도예촌</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Icheon")} id="Icheon">
                                        <text class="cls-1" transform="translate(1135.11 1070.77)">이천</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bubal")} id="Bubal">
                                        <text class="cls-1" transform="translate(1149.46 1059.62)">부발</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sejongdaewangneung")} id="Sejongdaewangneung">
                                        <text class="cls-1" transform="translate(1158.34 1044.36)">세종대왕릉</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Yeoju")} id="Yeoju">
                                        <text class="cls-1" transform="translate(1169.67 1030.1)">여주</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sanseong")} id="Sanseong">
                                        <text class="cls-1" transform="translate(1144.59 998.69)">산성</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Namhansanseong")} id="Namhansanseong">
                                        <text class="cls-1" transform="translate(1132.48 1015.56)">남한산성입구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dandaeogeori")} id="Dandaeogeori">
                                        <text class="cls-1" transform="translate(1115.29 1029.38)">단대오거리</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sinheung")} id="Sinheung">
                                        <text class="cls-1" transform="translate(1098.77 1044.69)">신흥</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sujin")} id="Sujin">
                                        <text class="cls-1" transform="translate(1079.34 1044.69)">수진</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Seohyeon")} id="Seohyeon">
                                        <text class="cls-1" transform="translate(1010.5 1081.6)">서현</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sunae")} id="Sunae">
                                        <text class="cls-1" transform="translate(992.67 1081.6)">수내</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Songpanaru")} id="Songpanaru">
                                        <text class="cls-1" transform="translate(1067.29 850.41)">송파나루</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("HanseongBaekje")} id="HanseongBaekje">
                                        <text class="cls-1" transform="translate(1092.95 830.11)">한성백제</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Dogok")} id="Dogok">
                                        <text class="cls-1" transform="translate(900.04 913.22)">도곡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Guryong")} id="Guryong">
                                        <text class="cls-1" transform="translate(918.14 932.17)">구룡</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Gaepodong")} id="Gaepodong">
                                        <text class="cls-1" transform="translate(937.96 922.68)">개포동</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Daechi")} id="Daechi">
                                        <text class="cls-1" transform="translate(926.08 897.48)">대치</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Hangnyeoul")} id="Hangnyeoul">
                                        <text class="cls-1" transform="translate(951.41 881.69)">학여울</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Daemosan")} id="Daemosan">
                                        <text class="cls-1" transform="translate(956.43 912.19)">대모산입구</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Daecheong")} id="Daecheong">
                                        <text class="cls-1" transform="translate(980.45 902.37)">대청</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Suseo")} id="Suseo">
                                        <text class="cls-1" transform="translate(1043.11 917.22)">수서</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Irwon")} id="Irwon">
                                        <text class="cls-1" transform="translate(1006.31 924.03)">일원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("GarakMarket")} id="GarakMarket">
                                        <text class="cls-1" transform="translate(1078.25 909.38)">가락시장</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("NationalPoliceHospital")} id="NationalPoliceHospital">
                                        <text class="cls-1" transform="translate(1102.51 891.47)">경찰병원</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Songpa")} id="Songpa">
                                        <text class="cls-1" transform="translate(1067.82 882.37)">송파</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Ogeum")} id="Ogeum">
                                        <text class="cls-1" transform="translate(1123.29 868.09)">오금</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Byeongjeom")} id="Byeongjeom">
                                        <text class="cls-1" transform="translate(759.82 1158.78)">병</text>
                                        <text class="cls-1" transform="translate(759.82 1166.16)">점</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("OsanCollege")} id="OsanCollege">
                                        <text class="cls-1" transform="translate(805.73 1182.55)">오</text>
                                        <text class="cls-1" transform="translate(805.73 1189.93)">산</text>
                                        <text class="cls-1" transform="translate(805.73 1197.31)">대</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Sema")} id="Sema">
                                        <text class="cls-1" transform="translate(782.74 1173.87)">세</text>
                                        <text class="cls-1" transform="translate(782.74 1181.25)">마</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Osan")} id="Osan">
                                        <text class="cls-1" transform="translate(828.71 1182.55)">오</text>
                                        <text class="cls-1" transform="translate(828.71 1189.93)">산</text>
                                    </g>
                                    <g onClick={()=> this.getLocation("Bongmyeong")} id="Bongmyeong">
                                        <text class="cls-1" transform="translate(1035.51 1182.55)">봉</text>
                                        <text class="cls-1" transform="translate(1035.51 1189.93)">명</text>
                                    </g>
                                
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