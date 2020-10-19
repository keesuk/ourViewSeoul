import React, {PureComponent} from "react";
import styled from 'styled-components';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { pxStringfier } from "./_Diagram.jsx";

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
const DiagramPurple = styled.div`
    position: absolute;
    left: 10px;
    margin-top:10px;
    font-size: ${props => console.log(props.purple)};
    color:#7B2E8E;
`;
const DiagramBlue = styled.div`
    position: absolute;
    left: 10px;
    margin-top:10px;
    font-size: 10px;
    color:#006CC4;
`;
const DiagramRed = styled.div`
    position: absolute;
    left: 10px;
    margin-top:10px;
    font-size: 10px;
    color:#E20000;
`;
const DiagramGreen = styled.div`
    position: absolute;
    left: 10px;
    margin-top:10px;
    font-size: 10px;
    color:#087A0D;
`;
const DiagramYellow = styled.div`
    position: absolute;
    left: 10px;
    margin-top:10px;
    font-size: 10px;
    color:#EFC820;
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
	.st0{
        font-family:'Noto Sans KR'; 
        font-weight:900; 
        cursor: ${props => props.pointer ? 'pointer' : 'move'};
        pointer-events: ${props => props.pointer ? '' : 'none'};
    }
	.st1{
        font-size:6.5759px;
        stroke: #333333;
        stroke-width:${props => props.stroke ? '1px' : '0px'};
    }
	.st2{
        font-size:4.5326px;
        stroke: #333333;
        stroke-width:${props => props.stroke ? '1px' : '0px'};
    }
	.st3{
        fill:#E5E5E4;
    }
    .st4{
        font-size:9.0311px;
        stroke: #E5E5E4;
        stroke-width:${props => props.stroke ? '1px' : '0px'};
    }
    .purple{
        fill:#7B2E8E;
        font-size: 20px;
    }
    .blue{
        fill:#006CC4;
        font-size: 20px;
    }
    .red{
        fill:#E20000;
        font-size: 20px;
    }
    .green{
        fill:#087A0D;
        font-size: 20px;
    }
    .yellow{
        fill:#EFC820;
        font-size: 20px;
    }
`;

class MapShow extends PureComponent {
    state={
        purple: 50,
        blue: 20,
        red: 20,
        green: 9,
        yellow: 1,
    }
  
    render() {
        const { scale, panOff, stroke, pointer } = this.props
        const { purple, blue, red, green, yellow } = this.state

        const purplePx = pxStringfier(purple)
        const bluePx = pxStringfier(blue)
        const redPx = pxStringfier(red)
        const greenPx = pxStringfier(green)
        const yellowPx = pxStringfier(yellow)
        
        return (
                <>
                {stroke ? null :
                    <ExplainDiv>
                        <ExplainTitle>
                            잠실
                        </ExplainTitle>
                        <ExplainNumber>
                            <div style={{color:'#7B2E8E'}}>50%</div>
                            <div style={{color:'#006CC4'}}>20%</div>
                            <div style={{color:'#E20000'}}>20%</div>
                            <div style={{color:'#087A0D'}}>9%</div>
                            <div style={{color:'#EFC820'}}>1%</div>
                        </ExplainNumber>
                        <ExplainDiagram>
                            <DiagramPurple purplePx>&#9670;</DiagramPurple>
                            <DiagramBlue bluePx>■</DiagramBlue>
                            <DiagramRed redPx>●</DiagramRed>
                            <DiagramGreen greenPx>▲</DiagramGreen>
                            <DiagramYellow yellowPx>⬮</DiagramYellow>
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
                                
                                <g id="Ilsan" >
                                    <text transform="translate(475.475 290.839)" className="st0 st1">일</text>
                                    <text transform="translate(475.475 298.739)" className="st0 st1">산</text>
                                </g>
                                <g id="Pungsan" >
                                    <text transform="translate(458.472 290.839)" className="st0 st1">풍</text>
                                    <text transform="translate(458.472 298.739)" className="st0 st1">산</text>
                                </g>
                                <g id="Baengma" >
                                    <text transform="translate(441.4681 290.839)" className="st0 st1">백</text>
                                    <text transform="translate(441.4681 298.739)" className="st0 st1">마</text>
                                </g>
                                <g id="Hwajeong" >
                                    <text transform="translate(438.1742 337.1858)" className="st0 st1">화</text>
                                    <text transform="translate(438.1742 345.0857)" className="st0 st1">정</text>
                                </g>
                                <g id="Wondang" >
                                    <text transform="translate(453.7806 337.1858)" className="st0 st1">원</text>
                                    <text transform="translate(453.7806 345.0857)" className="st0 st1">당</text>
                                </g>
                                <g id="Wonheung" >
                                    <text transform="translate(469.3881 337.1858)" className="st0 st1">원</text>
                                    <text transform="translate(469.3881 345.0857)" className="st0 st1">흥</text>
                                </g>
                                <g id="Samsong" >
                                    <text transform="translate(484.9955 337.1858)" className="st0 st1">삼</text>
                                    <text transform="translate(484.9955 345.0857)" className="st0 st1">송</text>
                                </g>
                                <g id="Tanhyeon" >
                                    <text transform="translate(492.474 290.839)" className="st0 st1">탄</text>
                                    <text transform="translate(492.474 298.739)" className="st0 st1">현</text>
                                </g>
                                <g id="Unjeong" >
                                    <text transform="translate(509.4779 290.839)" className="st0 st1">운</text>
                                    <text transform="translate(509.4779 298.739)" className="st0 st1">정</text>
                                </g>
                                <g id="Geumneung" >
                                    <text transform="translate(526.4818 290.839)" className="st0 st1">금</text>
                                    <text transform="translate(526.4818 298.739)" className="st0 st1">릉</text>
                                </g>
                                <g id="Geumchon" >
                                    <text transform="translate(543.4847 290.839)" className="st0 st1">금</text>
                                    <text transform="translate(543.4847 298.739)" className="st0 st1">촌</text>
                                </g>
                                <g id="Wollong" >
                                    <text transform="translate(560.4886 290.839)" className="st0 st1">월</text>
                                    <text transform="translate(560.4886 298.739)" className="st0 st1">롱</text>
                                </g>
                                <g id="Paju" >
                                    <text transform="translate(577.4926 290.839)" className="st0 st1">파</text>
                                    <text transform="translate(577.4926 298.739)" className="st0 st1">주</text>
                                </g>
                                <g id="Munsan" >
                                    <text transform="translate(594.4965 290.839)" className="st0 st1">문</text>
                                    <text transform="translate(594.4965 298.739)" className="st0 st1">산</text>
                                </g>
                                <g id="Bugae" >
                                    <text transform="translate(129.2299 906.9034)" className="st0 st1">부</text>
                                    <text transform="translate(129.2299 914.8034)" className="st0 st1">개</text>
                                </g>
                                <g id="Songnae" >
                                    <text transform="translate(141.976 906.9034)" className="st0 st1">송</text>
                                    <text transform="translate(141.976 914.8034)" className="st0 st1">내</text>
                                </g>
                                <g id="Jungdong" >
                                    <text transform="translate(154.7201 906.9034)" className="st0 st1">중</text>
                                    <text transform="translate(154.7201 914.8034)" className="st0 st1">동</text>
                                </g>
                                <g id="Bucheon" >
                                    <text transform="translate(167.4652 906.9034)" className="st0 st1">부</text>
                                    <text transform="translate(167.4652 914.8034)" className="st0 st1">천</text>
                                </g>
                                <g id="Sosa" >
                                    <text transform="translate(180.2103 906.9034)" className="st0 st1">소</text>
                                    <text transform="translate(180.2103 914.8034)" className="st0 st1">사</text>
                                </g>
                                <g id="Yeokgok" >
                                    <text transform="translate(192.9554 906.9034)" className="st0 st1">역</text>
                                    <text transform="translate(192.9554 914.8034)" className="st0 st1">곡</text>
                                </g>
                                <g id="Technopark" >
                                    <text transform="translate(232.8939 1145.3849)" className="st0 st1">테</text>
                                    <text transform="translate(232.8939 1153.2849)" className="st0 st1">크</text>
                                    <text transform="translate(232.8939 1161.1849)" className="st0 st1">노</text>
                                    <text transform="translate(232.8939 1169.085)" className="st0 st1">파</text>
                                    <text transform="translate(232.8939 1176.9849)" className="st0 st1">크</text>
                                </g>
                                <g id="BITZone" >
                                    <text transform="translate(277.5551 1145.3849)" className="st0 st1">지</text>
                                    <text transform="translate(277.5551 1153.2849)" className="st0 st1">식</text>
                                    <text transform="translate(277.5551 1161.1849)" className="st0 st1">정</text>
                                    <text transform="translate(277.5551 1169.085)" className="st0 st1">보</text>
                                    <text transform="translate(277.5551 1176.9849)" className="st0 st1">단</text>
                                    <text transform="translate(277.5551 1184.8849)" className="st0 st1">지</text>
                                </g>
                                <g id="IncheonNatlUniv" >
                                    <text transform="translate(299.8822 1145.3849)" className="st0 st1">인</text>
                                    <text transform="translate(299.8822 1153.2849)" className="st0 st1">천</text>
                                    <text transform="translate(299.8822 1161.1849)" className="st0 st1">대</text>
                                    <text transform="translate(299.8822 1169.085)" className="st0 st1">입</text>
                                    <text transform="translate(299.8822 1176.9849)" className="st0 st1">구</text>
                                </g>
                                <g id="CentralPark" >
                                    <text transform="translate(322.2162 1145.3849)" className="st0 st1">센</text>
                                    <text transform="translate(322.2162 1153.2849)" className="st0 st1">트</text>
                                    <text transform="translate(322.2162 1161.1849)" className="st0 st1">럴</text>
                                    <text transform="translate(322.2162 1169.085)" className="st0 st1">파</text>
                                    <text transform="translate(322.2162 1176.9849)" className="st0 st1">크</text>
                                </g>
                                <g id="IntlBusinessDistrict" >
                                    <text transform="translate(348.4261 1145.3849)" className="st0 st1">국</text>
                                    <text transform="translate(348.4261 1153.2849)" className="st0 st1">제</text>
                                    <text transform="translate(348.4261 1161.1849)" className="st0 st1">업</text>
                                    <text transform="translate(348.4261 1169.085)" className="st0 st1">무</text>
                                    <text transform="translate(348.4261 1176.9849)" className="st0 st1">지</text>
                                    <text transform="translate(348.4261 1184.8849)" className="st0 st1">구</text>
                                </g>
                                <g id="SingilonCheon" >
                                    <text transform="translate(454.4388 1145.798)" className="st0 st1">신</text>
                                    <text transform="translate(454.4388 1153.698)" className="st0 st1">길</text>
                                    <text transform="translate(454.4388 1161.598)" className="st0 st1">온</text>
                                    <text transform="translate(454.4388 1169.498)" className="st0 st1">천</text>
                                </g>
                                <g id="Sinchang" >
                                    <text transform="translate(456.6 1193.088)" className="st0 st1">신</text>
                                    <text transform="translate(456.6 1200.988)" className="st0 st1">창</text>
                                </g>
                                <g id="OnyangonCheon" >
                                    <text transform="translate(475.1576 1193.088)" className="st0 st1">온</text>
                                    <text transform="translate(475.1576 1200.988)" className="st0 st1">양</text>
                                    <text transform="translate(475.1576 1208.8881)" className="st0 st1">온</text>
                                    <text transform="translate(475.1576 1216.7881)" className="st0 st1">천</text>
                                </g>
                                <g id="Baebang" >
                                    <text transform="translate(493.7133 1193.088)" className="st0 st1">배</text>
                                    <text transform="translate(493.7133 1200.988)" className="st0 st1">방</text>
                                </g>
                                <g id="Asan" >
                                    <text transform="translate(512.2699 1193.088)" className="st0 st1">아</text>
                                    <text transform="translate(512.2699 1200.988)" className="st0 st1">산</text>
                                </g>
                                <g id="Ssangyong" >
                                    <text transform="translate(530.8275 1193.088)" className="st0 st1">쌍</text>
                                    <text transform="translate(530.8275 1200.988)" className="st0 st1">용</text>
                                </g>
                                <g id="Bongmyeong" >
                                    <text transform="translate(549.3851 1193.088)" className="st0 st1">봉</text>
                                    <text transform="translate(549.3851 1200.988)" className="st0 st1">명</text>
                                </g>
                                <g id="Cheonan" >
                                    <text transform="translate(567.9418 1193.088)" className="st0 st1">천</text>
                                    <text transform="translate(567.9418 1200.988)" className="st0 st1">안</text>
                                </g>
                                <g id="Dujeong" >
                                    <text transform="translate(586.4994 1193.088)" className="st0 st1">두</text>
                                    <text transform="translate(586.4994 1200.988)" className="st0 st1">정</text>
                                </g>
                                <g id="Jiksan" >
                                    <text transform="translate(605.056 1193.088)" className="st0 st1">직</text>
                                    <text transform="translate(605.056 1200.988)" className="st0 st1">산</text>
                                </g>
                                <g id="Seonghwan" >
                                    <text transform="translate(623.6127 1193.088)" className="st0 st1">성</text>
                                    <text transform="translate(623.6127 1200.988)" className="st0 st1">환</text>
                                </g>
                                <g id="Pyeongtaek" >
                                    <text transform="translate(642.1688 1193.088)" className="st0 st1">평</text>
                                    <text transform="translate(642.1688 1200.988)" className="st0 st1">택</text>
                                </g>
                                <g id="Jije" >
                                    <text transform="translate(660.7264 1193.088)" className="st0 st1">지</text>
                                    <text transform="translate(660.7264 1200.988)" className="st0 st1">제</text>
                                </g>
                                <g id="Seojeongri" >
                                    <text transform="translate(679.2841 1193.088)" className="st0 st1">서</text>
                                    <text transform="translate(679.2841 1200.988)" className="st0 st1">정</text>
                                    <text transform="translate(679.2841 1208.8881)" className="st0 st1">리</text>
                                </g>
                                <g id="Songtan" >
                                    <text transform="translate(697.8397 1193.088)" className="st0 st1">송</text>
                                    <text transform="translate(697.8397 1200.988)" className="st0 st1">탄</text>
                                </g>
                                <g id="Osan" >
                                    <text transform="translate(734.9559 1193.088)" className="st0 st1">오</text>
                                    <text transform="translate(734.9559 1200.988)" className="st0 st1">산</text>
                                </g>
                                <g id="OsanCollege" >
                                    <text transform="translate(753.5106 1193.088)" className="st0 st1">오</text>
                                    <text transform="translate(753.5106 1200.988)" className="st0 st1">산</text>
                                    <text transform="translate(753.5106 1208.8881)" className="st0 st1">대</text>
                                </g>
                                <g id="Sema" >
                                    <text transform="translate(772.0682 1193.6027)" className="st0 st1">세</text>
                                    <text transform="translate(772.0682 1201.5027)" className="st0 st1">마</text>
                                </g>
                                <g id="Seodongtan" >
                                    <text transform="translate(803.8661 1193.088)" className="st0 st1">서</text>
                                    <text transform="translate(803.8661 1200.988)" className="st0 st1">동</text>
                                    <text transform="translate(803.8661 1208.8881)" className="st0 st1">탄</text>
                                </g>
                                <g id="Jinwi" >
                                    <text transform="translate(716.3915 1193.088)" className="st0 st1">진</text>
                                    <text transform="translate(716.3915 1200.988)" className="st0 st1">위</text>
                                </g>
                                <g id="Ansan" >
                                    <text transform="translate(476.7289 1145.798)" className="st0 st1">안</text>
                                    <text transform="translate(476.7289 1153.698)" className="st0 st1">산</text>
                                </g>
                                <g id="Choji" >
                                    <text transform="translate(499.0433 1145.798)" className="st0 st1">초</text>
                                    <text transform="translate(499.0433 1153.698)" className="st0 st1">지</text>
                                </g>
                                <g id="Gojan" >
                                    <text transform="translate(521.3578 1145.798)" className="st0 st1">고</text>
                                    <text transform="translate(521.3578 1153.698)" className="st0 st1">잔</text>
                                </g>
                                <g id="Jungang" >
                                    <text transform="translate(543.6732 1145.798)" className="st0 st1">중</text>
                                    <text transform="translate(543.6732 1153.698)" className="st0 st1">앙</text>
                                </g>
                                <g id="HanyangUnivatAnsan" >
                                    <text transform="translate(565.9877 1145.798)" className="st0 st1">한</text>
                                    <text transform="translate(565.9877 1153.698)" className="st0 st1">대</text>
                                    <text transform="translate(565.9877 1161.598)" className="st0 st1">앞</text>
                                </g>
                                <g id="Sangnoksu" >
                                    <text transform="translate(588.3021 1145.798)" className="st0 st1">상</text>
                                    <text transform="translate(588.3021 1153.698)" className="st0 st1">록</text>
                                    <text transform="translate(588.3021 1161.598)" className="st0 st1">수</text>
                                </g>
                                <g id="Banwol" >
                                    <text transform="translate(610.6166 1145.798)" className="st0 st1">반</text>
                                    <text transform="translate(610.6166 1153.698)" className="st0 st1">월</text>
                                </g>
                                <g id="Daeyami" >
                                    <text transform="translate(632.932 1145.798)" className="st0 st1">대</text>
                                    <text transform="translate(632.932 1153.698)" className="st0 st1">야</text>
                                    <text transform="translate(632.932 1161.598)" className="st0 st1">미</text>
                                </g>
                                <g id="Surisan" >
                                    <text transform="translate(655.2469 1145.798)" className="st0 st1">수</text>
                                    <text transform="translate(655.2469 1153.698)" className="st0 st1">리</text>
                                    <text transform="translate(655.2469 1161.598)" className="st0 st1">산</text>
                                </g>
                                <g id="SuwonCityHall1" >
                                    <text transform="translate(799.0936 1129.4171)" className="st0 st1">매</text>
                                    <text transform="translate(799.0936 1136.4171)" className="st0 st1">교</text>
                                </g>
                                <g id="SuwonCityHall" >
                                    <text transform="translate(817.0663 1115.4171)" className="st0 st1">수</text>
                                    <text transform="translate(817.0663 1123.3171)" className="st0 st1">원</text>
                                    <text transform="translate(817.0663 1131.2172)" className="st0 st1">시</text>
                                    <text transform="translate(817.0663 1139.1172)" className="st0 st1">청</text>
                                </g>
                                <g id="MaetanGwonseon" >
                                    <text transform="translate(835.0428 1115.4171)" className="st0 st1">매</text>
                                    <text transform="translate(835.0428 1123.3171)" className="st0 st1">탄</text>
                                    <text transform="translate(835.0428 1131.2172)" className="st0 st1">권</text>
                                    <text transform="translate(835.0428 1139.1172)" className="st0 st1">선</text>
                                </g>
                                <g id="Mangpo" >
                                    <text transform="translate(853.0165 1129.4171)" className="st0 st1">망</text>
                                    <text transform="translate(853.0165 1137.3171)" className="st0 st1">포</text>
                                </g>
                                <g id="Yeongtong" >
                                    <text transform="translate(870.9911 1129.4171)" className="st0 st1">영</text>
                                    <text transform="translate(870.9911 1137.3171)" className="st0 st1">통</text>
                                </g>
                                <g id="Cheongmyeong" >
                                    <text transform="translate(888.9667 1129.4171)" className="st0 st1">청</text>
                                    <text transform="translate(888.9667 1137.3171)" className="st0 st1">명</text>
                                </g>
                                <g id="Sanggal" >
                                    <text transform="translate(906.9403 1129.4171)" className="st0 st1">상</text>
                                    <text transform="translate(906.9403 1137.3171)" className="st0 st1">갈</text>
                                </g>
                                <g id="Singal" >
                                    <text transform="translate(942.5009 1129.4171)" className="st0 st1">신</text>
                                    <text transform="translate(942.5009 1137.3171)" className="st0 st1">갈</text>
                                </g>
                                <g id="Guseong" >
                                    <text transform="translate(960.0868 1129.4171)" className="st0 st1">구</text>
                                    <text transform="translate(960.0868 1137.3171)" className="st0 st1">성</text>
                                </g>
                                <g id="Bojeong" >
                                    <text transform="translate(977.6737 1129.4171)" className="st0 st1">보</text>
                                    <text transform="translate(977.6737 1137.3171)" className="st0 st1">정</text>
                                </g>
                                <g id="Jukjeon" >
                                    <text transform="translate(995.2606 1129.4171)" className="st0 st1">죽</text>
                                    <text transform="translate(995.2606 1137.3171)" className="st0 st1">전</text>
                                </g>
                                <g id="Ori" >
                                    <text transform="translate(1012.8475 1129.4171)" className="st0 st1">오</text>
                                    <text transform="translate(1012.8475 1137.3171)" className="st0 st1">리</text>
                                </g>
                                <g id="MyongjiUniv" >
                                    <text transform="translate(1051.3641 1168.5323)" className="st0 st1">명</text>
                                    <text transform="translate(1051.3641 1176.4324)" className="st0 st1">지</text>
                                    <text transform="translate(1051.3641 1184.3324)" className="st0 st1">대</text>
                                </g>
                                <g id="Samga1" >
                                    <text transform="translate(1033.4882 1168.9581)" className="st0 st1">시</text>
                                    <text transform="translate(1033.4882 1176.8582)" className="st0 st1">청</text>
                                    <text transform="translate(1033.4882 1184.7582)" className="st0 st1">·</text>
                                    <text transform="translate(1033.4882 1192.6582)" className="st0 st1">용</text>
                                    <text transform="translate(1033.4882 1200.5581)" className="st0 st1">인</text>
                                    <text transform="translate(1033.4882 1208.4581)" className="st0 st1">대</text>
                                </g>
                                <g id="Samga" >
                                    <text transform="translate(1015.6268 1168.9464)" className="st0 st1">삼</text>
                                    <text transform="translate(1015.6268 1176.8464)" className="st0 st1">가</text>
                                </g>
                                <g id="Chodang" >
                                    <text transform="translate(997.7518 1168.9464)" className="st0 st1">초</text>
                                    <text transform="translate(997.7518 1176.8464)" className="st0 st1">당</text>
                                </g>
                                <g id="Dongbaek" >
                                    <text transform="translate(979.8788 1168.9464)" className="st0 st1">동</text>
                                    <text transform="translate(979.8788 1176.8464)" className="st0 st1">백</text>
                                </g>
                                <g id="Eojeong" >
                                    <text transform="translate(962.0048 1168.9464)" className="st0 st1">어</text>
                                    <text transform="translate(962.0048 1176.8464)" className="st0 st1">정</text>
                                </g>
                                <g id="Jiseok" >
                                    <text transform="translate(944.1298 1168.9464)" className="st0 st1">지</text>
                                    <text transform="translate(944.1298 1176.8464)" className="st0 st1">석</text>
                                </g>
                                <g id="Gulpocheon" >
                                    <text transform="translate(108.5511 825.8993)" className="st0 st1">굴</text>
                                    <text transform="translate(108.5511 833.7993)" className="st0 st1">포</text>
                                    <text transform="translate(108.5511 841.6993)" className="st0 st1">천</text>
                                </g>
                                <g id="SamsanGymnasium" >
                                    <text transform="translate(123.099 811.8993)" className="st0 st1">삼</text>
                                    <text transform="translate(123.099 819.7993)" className="st0 st1">산</text>
                                    <text transform="translate(123.099 827.6993)" className="st0 st1">체</text>
                                    <text transform="translate(123.099 835.5993)" className="st0 st1">육</text>
                                    <text transform="translate(123.099 843.4993)" className="st0 st1">관</text>
                                </g>
                                <g id="BucheonCityHall" >
                                    <text transform="translate(152.1967 818.8993)" className="st0 st1">부</text>
                                    <text transform="translate(152.1967 826.7993)" className="st0 st1">천</text>
                                    <text transform="translate(152.1967 834.6993)" className="st0 st1">시</text>
                                    <text transform="translate(152.1967 842.5993)" className="st0 st1">청</text>
                                </g>
                                <g id="Sinjungdong" >
                                    <text transform="translate(166.7455 826.7902)" className="st0 st1">신</text>
                                    <text transform="translate(166.7455 834.6902)" className="st0 st1">중</text>
                                    <text transform="translate(166.7455 842.5903)" className="st0 st1">동</text>
                                </g>
                                <g id="Sangdong" >
                                    <text transform="translate(137.6283 835.5721)" className="st0 st1">상</text>
                                    <text transform="translate(137.6283 843.4721)" className="st0 st1">동</text>
                                </g>
                                <g id="Songdo" >
                                    <text transform="translate(151.8392 1099.4786)" className="st0 st1">송</text>
                                    <text transform="translate(151.8392 1107.3787)" className="st0 st1">도</text>
                                </g>
                                <g id="Jeongwang" >
                                    <text transform="translate(432.0863 1145.7921)" className="st0 st1">정</text>
                                    <text transform="translate(432.0863 1153.6921)" className="st0 st1">왕</text>
                                </g>
                                <g id="Ungilsan1" >
                                    <text transform="translate(169.6888 1099.4786)" className="st0 st1">연</text>
                                    <text transform="translate(169.6888 1107.3787)" className="st0 st1">수</text>
                                </g>
                                <g id="Ungilsan" >
                                    <text transform="translate(1102.5878 600.6925)" className="st0 st1">운</text>
                                    <text transform="translate(1102.5878 608.5925)" className="st0 st1">길</text>
                                    <text transform="translate(1102.5878 616.4925)" className="st0 st1">산</text>
                                </g>
                                <g id="Yangsu" >
                                    <text transform="translate(1117.6132 600.6925)" className="st0 st1">양</text>
                                    <text transform="translate(1117.6132 608.5925)" className="st0 st1">수</text>
                                </g>
                                <g id="Sinwon" >
                                    <text transform="translate(1132.6376 600.6925)" className="st0 st1">신</text>
                                    <text transform="translate(1132.6376 608.5925)" className="st0 st1">원</text>
                                </g>
                                <g id="Guksu" >
                                    <text transform="translate(1147.663 600.6925)" className="st0 st1">국</text>
                                    <text transform="translate(1147.663 608.5925)" className="st0 st1">수</text>
                                </g>
                                <g id="Asin" >
                                    <text transform="translate(1162.6864 600.6925)" className="st0 st1">아</text>
                                    <text transform="translate(1162.6864 608.5925)" className="st0 st1">신</text>
                                </g>
                                <g id="Obin" >
                                    <text transform="translate(1177.7118 600.6925)" className="st0 st1">오</text>
                                    <text transform="translate(1177.7118 608.5925)" className="st0 st1">빈</text>
                                </g>
                                <g id="Yangpyeong1" >
                                    <text transform="translate(1192.7372 600.6925)" className="st0 st1">양</text>
                                    <text transform="translate(1192.7372 608.5925)" className="st0 st1">평</text>
                                </g>
                                <g id="Wondeok" >
                                    <text transform="translate(1207.7616 600.6925)" className="st0 st1">원</text>
                                    <text transform="translate(1207.7616 608.5925)" className="st0 st1">덕</text>
                                </g>
                                <g id="Yongmun" >
                                    <text transform="translate(1222.787 600.6925)" className="st0 st1">용</text>
                                    <text transform="translate(1222.787 608.5925)" className="st0 st1">문</text>
                                </g>
                                <g id="Paldang" >
                                    <text transform="translate(1087.2684 600.6925)" className="st0 st1">팔</text>
                                    <text transform="translate(1087.2684 608.5925)" className="st0 st1">당</text>
                                </g>
                                <g id="CampusTown" >
                                    <text transform="translate(255.8285 1145.379)" className="st0 st1">캠</text>
                                    <text transform="translate(255.8285 1153.2791)" className="st0 st1">퍼</text>
                                    <text transform="translate(255.8285 1161.1791)" className="st0 st1">스</text>
                                    <text transform="translate(255.8285 1169.0791)" className="st0 st1">타</text>
                                    <text transform="translate(255.8285 1176.979)" className="st0 st1">운</text>
                                </g>
                                <g id="KangnamUniv" >
                                    <text transform="translate(928.7225 1168.1075)" className="st0 st1">강</text>
                                    <text transform="translate(928.7225 1176.0076)" className="st0 st1">남</text>
                                    <text transform="translate(928.7225 1183.9076)" className="st0 st1">대</text>
                                </g>
                                <g id="Sanbon" >
                                    <text transform="translate(675.2616 1145.1974)" className="st0 st1">산</text>
                                    <text transform="translate(675.2616 1153.0974)" className="st0 st1">본</text>
                                </g>
                                <g id="Mullae" >
                                    <text transform="translate(421.9213 808.1027)" className="st0 st1">문래</text>
                                </g>
                                <g id="Beomgye" >
                                    <text transform="translate(689.579 1103.5685)" className="st0 st1">범계</text>
                                </g>
                                <g id="Pyeongchon" >
                                    <text transform="translate(689.579 1088.3175)" className="st0 st1">평촌</text>
                                </g>
                                <g id="Indeogwon" >
                                    <text transform="translate(689.579 1073.0675)" className="st0 st1">인덕원</text>
                                </g>
                                <g id="GovernmentComplexGwacheon" >
                                    <text transform="translate(689.579 1057.8116)" className="st0 st1">정부과천청사</text>
                                </g>
                                <g id="Gwacheon" >
                                    <text transform="translate(689.579 1042.5616)" className="st0 st1">과천</text>
                                </g>
                                <g id="SeoulGrandPark" >
                                    <text transform="translate(689.579 1027.3038)" className="st0 st1">대공원</text>
                                </g>
                                <g id="SeoulRacecoursePark" >
                                    <text transform="translate(689.579 1012.0548)" className="st0 st1">경마공원</text>
                                </g>
                                <g id="Seonbawi" >
                                    <text transform="translate(689.579 996.8038)" className="st0 st1">선바위</text>
                                </g>
                                <g id="Namtaeryeong" >
                                    <text transform="translate(689.579 981.547)" className="st0 st1">남태령</text>
                                </g>
                                <g id="Geomam" >
                                    <text transform="translate(74.4359 557.6925)" className="st0 st1">검암</text>
                                </g>
                                <g id="Gyulhyeon" >
                                    <text transform="translate(74.4359 626.3771)" className="st0 st1">귤현</text>
                                </g>
                                <g id="Bakchon" >
                                    <text transform="translate(74.4359 659.2882)" className="st0 st1">박촌</text>
                                </g>
                                <g id="Imhak" >
                                    <text transform="translate(74.4359 692.1993)" className="st0 st1">임학</text>
                                </g>
                                <g id="Gyesan" >
                                    <text transform="translate(74.4359 725.1183)" className="st0 st1">계산</text>
                                </g>
                                <g id="GyeonginNatlUnivofEducation" >
                                    <text transform="translate(74.4359 758.0304)" className="st0 st1">경인교대입구</text>
                                </g>
                                <g id="CheongnaIntlCityStation" >
                                    <text transform="translate(75.9447 539.4855)" className="st0 st1">청라국제도시</text>
                                </g>
                                <g id="Yongmasan" >
                                    <text transform="translate(999.2616 602.9288)" className="st0 st1">용마산</text>
                                </g>
                                <g id="Sagajeong" >
                                    <text transform="translate(999.2616 576.5245)" className="st0 st1">사가정</text>
                                </g>
                                <g id="Myeonmok" >
                                    <text transform="translate(999.2616 547.546)" className="st0 st1">면목</text>
                                </g>
                                <g id="Jungnang" >
                                    <text transform="translate(952.6971 533.172)" className="st0 st1">중랑</text>
                                </g>
                                <g id="Sinnae" >
                                    <text transform="translate(1045.7147 457.4913)" className="st0 st1">신내</text>
                                </g>
                                <g id="Changsin" >
                                    <text transform="translate(786.6542 581.3898)" className="st0 st1">창신</text>
                                </g>
                                <g id="Apgujeong" >
                                    <text transform="translate(798.9677 779.5177)" className="st0 st1">압구정</text>
                                </g>
                                <g id="Saejeol" >
                                    <text transform="translate(487.3246 536.0724)" className="st0 st1">새절</text>
                                </g>
                                <g id="Eungam" >
                                    <text transform="translate(487.3246 509.6984)" className="st0 st1">응암</text>
                                </g>
                                <g id="Gupabal" >
                                    <text transform="translate(503.6517 366.7472)" className="st0 st1">구파발</text>
                                </g>
                                <g id="SookmyungWomensUniv" >
                                    <text transform="translate(662.0165 707.6759)" className="st0 st1">숙대입구</text>
                                </g>
                                <g id="Namyeong" >
                                    <text transform="translate(657.6512 724.6798)" className="st0 st1">남영</text>
                                </g>
                                <g id="Seryu" >
                                    <text transform="translate(790.1747 1155.4816)" className="st0 st1">세류</text>
                                </g>
                                <g id="GachonUniv" >
                                    <text transform="translate(1084.0741 1012.7999)" className="st0 st1">가천대</text>
                                </g>
                                <g id="Jangji" >
                                    <text transform="translate(1114.5497 957.3292)" className="st0 st1">장지</text>
                                </g>
                                <g id="Dandaeogeori" >
                                    <text transform="translate(1144.9891 1032.671)" className="st0 st1">단대오거리</text>
                                </g>
                                <g id="Taepyeong" >
                                    <text transform="translate(1089.6171 1036.5177)" className="st0 st1">태평</text>
                                </g>
                                <g id="Banghak" >
                                    <text transform="translate(861.9227 253.8585)" className="st0 st1">방학</text>
                                </g>
                                <g id="Dobong" >
                                    <text transform="translate(862.0604 209.5226)" className="st0 st1">도봉</text>
                                </g>
                                <g id="Dokbawi" >
                                    <text transform="translate(547.1039 434.4816)" className="st0 st1">독바위</text>
                                </g>
                                <g id="Sinheung" >
                                    <text transform="translate(1144.5682 1052.2491)" className="st0 st1">신흥</text>
                                </g>
                                <g id="Geumho" >
                                    <text transform="translate(789.7303 696.9347)" className="st0 st1">금호</text>
                                </g>
                                <g id="Hyehwa" >
                                    <text transform="translate(744.8182 571.2072)" className="st0 st1">혜화</text>
                                </g>
                                <g id="Achasan" >
                                    <text transform="translate(1007.2538 683.2189)" className="st0 st1">아차산</text>
                                </g>
                                <g id="Jichuk" >
                                    <text transform="translate(503.5902 339.8673)" className="st0 st1">지축</text>
                                </g>
                                <g id="Gusan" >
                                    <text transform="translate(487.3314 461.13)" className="st0 st1">구산</text>
                                </g>
                                <g id="Munjeong" >
                                    <text transform="translate(1114.5575 926.8282)" className="st0 st1">문정</text>
                                </g>
                                <g id="Mangwolsa" >
                                    <text transform="translate(880.5663 83.1691)" className="st0 st1">망월사</text>
                                </g>
                                <g id="NamdongInduspark" >
                                    <text transform="translate(225.4779 1078.2042)" className="st0 st1">남동</text>
                                    <text transform="translate(225.4779 1086.1042)" className="st0 st1">인더스파크</text>
                                </g>
                                <g id="Hogupo" >
                                    <text transform="translate(258.9594 1085.7189)" className="st0 st1">호구포</text>
                                </g>
                                <g id="IncheonNonhyeon" >
                                    <text transform="translate(290.5687 1085.7189)" className="st0 st1">인천논현</text>
                                </g>
                                <g id="Gwanak" >
                                    <text transform="translate(499.1869 1111.7286)" className="st0 st1">관악</text>
                                </g>
                                <g id="Anyang" >
                                    <text transform="translate(559.2426 1111.7286)" className="st0 st1">안양</text>
                                </g>
                                <g id="Myeonghak" >
                                    <text transform="translate(619.598 1111.7286)" className="st0 st1">명학</text>
                                </g>
                                <g id="Gunpo" >
                                    <text transform="translate(700.3573 1111.7286)" className="st0 st1">군포</text>
                                </g>
                                <g id="Dangjeong" >
                                    <text transform="translate(720.6688 1111.7286)" className="st0 st1">당정</text>
                                </g>
                                <g id="Uiwang" >
                                    <text transform="translate(740.9227 1111.7286)" className="st0 st1">의왕</text>
                                </g>
                                <g id="SungkyunkwanUniv" >
                                    <text transform="translate(755.7469 1111.7286)" className="st0 st1">성균관대</text>
                                </g>
                                <g id="Sindaebang" >
                                    <text transform="translate(470.9662 936.3361)" className="st0 st1">신대방</text>
                                </g>
                                <g id="Bongcheon" >
                                    <text transform="translate(555.9603 938.84)" className="st0 st1">봉천</text>
                                </g>
                                <g id="Euljiro1ilga" >
                                    <text transform="translate(671.5243 639.88)" className="st0 st1">을지로입구</text>
                                </g>
                                <g id="Jonggak" >
                                    <text transform="translate(678.6317 619.6505)" className="st0 st1">종각역</text>
                                </g>
                                <g id="Jongno5oga" >
                                    <text transform="translate(732.6561 605.4894)" className="st0 st1">종로5가</text>
                                </g>
                                <g id="Daebang" >
                                    <text transform="translate(512.4271 830.09)" className="st0 st1">대방</text>
                                </g>
                                <g id="Sinpung" >
                                    <text transform="translate(459.8558 883.8019)" className="st0 st1">신풍</text>
                                </g>
                                <g id="Namguro" >
                                    <text transform="translate(384.9515 922.6007)" className="st0 st1">남구로</text>
                                </g>
                                <g id="Boramae" >
                                    <text transform="translate(490.9633 883.6583)" className="st0 st1">보라매</text>
                                </g>
                                <g id="YangcheonHyanggyo" >
                                    <text transform="translate(258.7406 614.8595)" className="st0 st1">양천향교</text>
                                </g>
                                <g id="Magongnaru" >
                                    <text transform="translate(214.4369 614.8595)" className="st0 st1">마곡나루</text>
                                </g>
                                <g id="Sinbanghwa" >
                                    <text transform="translate(187.6635 614.8654)" className="st0 st1">신방화</text>
                                </g>
                                <g id="IncheonIntlAirportCargoTerminal1" >
                                    <text transform="translate(138.6185 523.8781)" className="st0 st1">인천국제공항</text>
                                </g>
                                <g id="IncheonIntlAirportCargoTerminal" >
                                    <text transform="translate(114.3617 516.3615)" className="st0 st1">공항화물</text>
                                    <text transform="translate(114.3617 524.2615)" className="st0 st1">청사</text>
                                </g>
                                <g id="Songjeong" >
                                    <text transform="translate(177.6615 651.3849)" className="st0 st1">송정</text>
                                </g>
                                <g id="Magok" >
                                    <text transform="translate(211.1859 651.3849)" className="st0 st1">마곡</text>
                                </g>
                                <g id="Sinjeong" >
                                    <text transform="translate(304.0209 776.3175)" className="st0 st1">신정</text>
                                </g>
                                <g id="Mokdong" >
                                    <text transform="translate(328.5228 776.3175)" className="st0 st1">목동</text>
                                </g>
                                <g id="Omokgyo" >
                                    <text transform="translate(357.6205 776.3175)" className="st0 st1">오목교</text>
                                </g>
                                <g id="Yangpyeong" >
                                    <text transform="translate(391.1205 776.3175)" className="st0 st1">양평</text>
                                </g>
                                <g id="Gwanghwamun" >
                                    <text transform="translate(658.2391 601.0743)" className="st0 st1">광화문</text>
                                </g>
                                <g id="Itaewon" >
                                    <text transform="translate(712.5272 752.3615)" className="st0 st1">이태원</text>
                                </g>
                                <g id="Noksapyeong" >
                                    <text transform="translate(688.8143 752.3927)" className="st0 st1">녹사평</text>
                                </g>
                                <g id="Seobinggo" >
                                    <text transform="translate(692.8485 808.8419)" className="st0 st1">서빙고</text>
                                </g>
                                <g id="Gwangheungchang" >
                                    <text transform="translate(526.0931 706.4865)" className="st0 st1">광흥창</text>
                                </g>
                                <g id="Sangsu" >
                                    <text transform="translate(502.5941 706.4865)" className="st0 st1">상수</text>
                                </g>
                                <g id="Baekseok" >
                                    <text transform="translate(396.8383 337.1681)" className="st0 st1">백석</text>
                                </g>
                                <g id="Gyeongbokgung" >
                                    <text transform="translate(650.2665 584.1642)" className="st0 st1">경복궁</text>
                                </g>
                                <g id="Anguk" >
                                    <text transform="translate(688.5907 584.1466)" className="st0 st1">안국</text>
                                </g>
                                <g id="Myeongdong" >
                                    <text transform="translate(690.7069 655.4435)" className="st0 st1">명동</text>
                                </g>
                                <g id="LrtUijeongbu" >
                                    <text transform="translate(772.9696 68.6573)" className="st0 st1">경전철</text>
                                    <text transform="translate(772.9696 76.5573)" className="st0 st1">의정부</text>
                                </g>
                                <g id="Beomgol" >
                                    <text transform="translate(794.1708 76.173)" className="st0 st1">범골</text>
                                </g>
                                <g id="EwhaWomansUniv" >
                                    <text transform="translate(570.973 668.4698)" className="st0 st1">이대</text>
                                </g>
                                <g id="Sinchon" >
                                    <text transform="translate(545.3705 668.4698)" className="st0 st1">신촌</text>
                                </g>
                                <g id="SeoulNatlUniv" >
                                    <text transform="translate(580.7113 938.84)" className="st0 st1">서울대입구</text>
                                </g>
                                <g id="SportsComplex" >
                                    <text transform="translate(940.2528 837.0118)" className="st0 st1">종합운동장</text>
                                </g>
                                <g id="Sincheon" >
                                    <text transform="translate(984.3182 837.0118)" className="st0 st1">신천</text>
                                </g>
                                <g id="Guui" >
                                    <text transform="translate(986.1659 730.9562)" className="st0 st1">구의</text>
                                </g>
                                <g id="Yongdu" >
                                    <text transform="translate(854.2069 598.9894)" className="st0 st1">용두</text>
                                </g>
                                <g id="Sangwangsimni" >
                                    <text transform="translate(811.2499 625.713)" className="st0 st1">상왕십리</text>
                                </g>
                                <g id="Baegun" >
                                    <text transform="translate(93.6683 908.3273)" className="st0 st1">백운</text>
                                </g>
                                <g id="Anam" >
                                    <text transform="translate(817.7626 562.1447)" className="st0 st1">안암</text>
                                </g>
                                <g id="Bomun" >
                                    <text transform="translate(788.6659 562.1447)" className="st0 st1">보문</text>
                                </g>
                                <g id="Sujin" >
                                    <text transform="translate(1117.7938 1067.3058)" className="st0 st1">수진</text>
                                </g>
                                <g id="DonggukUniv" >
                                    <text transform="translate(740.4032 660.8849)" className="st0 st1">동대입구</text>
                                </g>
                                <g id="Unseo" >
                                    <text transform="translate(93.0424 523.8722)" className="st0 st1">운서</text>
                                </g>
                                <g id="Balgok" >
                                    <text transform="translate(834.3466 90.2462)" className="st0 st1">발곡</text>
                                </g>
                                <g id="YangcheonguOffice" >
                                    <text transform="translate(334.5287 832.7032)" className="st0 st1">양천구청</text>
                                </g>
                                <g id="Oryudong" >
                                    <text transform="translate(273.8597 904.9142)" className="st0 st1">오류동</text>
                                </g>
                                <g id="Gaebong" >
                                    <text transform="translate(308.5941 890.5294)" className="st0 st1">개봉</text>
                                </g>
                                <g id="Guil" >
                                    <text transform="translate(343.3285 876.1427)" className="st0 st1">구일</text>
                                </g>
                                <g id="Yeongdeungpo" >
                                    <text transform="translate(461.0404 827.3663)" className="st0 st1">영등포</text>
                                </g>
                                <g id="Nakseongdae" >
                                    <text transform="translate(626.4066 952.9073)" className="st0 st1">낙성대</text>
                                </g>
                                <g id="Jangseungbaegi" >
                                    <text transform="translate(536.3138 855.7374)" className="st0 st1">장승배기</text>
                                </g>
                                <g id="Seocho" >
                                    <text transform="translate(750.3729 914.8907)" className="st0 st1">서초</text>
                                </g>
                                <g id="Yeoksam" >
                                    <text transform="translate(841.0106 877.3517)" className="st0 st1">역삼</text>
                                </g>
                                <g id="Samseong" >
                                    <text transform="translate(918.3514 845.3156)" className="st0 st1">삼성</text>
                                </g>
                                <g id="Naebang" >
                                    <text transform="translate(707.8348 915.2042)" className="st0 st1">내방</text>
                                </g>
                                <g id="Maebong" >
                                    <text transform="translate(866.4755 918.6427)" className="st0 st1">매봉</text>
                                </g>
                                <g id="Daechi" >
                                    <text transform="translate(917.5995 897.4679)" className="st0 st1">대치</text>
                                </g>
                                <g id="Hangnyeoul" >
                                    <text transform="translate(933.3632 888.6437)" className="st0 st1">학여울</text>
                                </g>
                                <g id="Gaepodong" >
                                    <text transform="translate(930.5643 924.6866)" className="st0 st1">개포동</text>
                                </g>
                                <g id="Banpo" >
                                    <text transform="translate(763.3944 841.714)" className="st0 st1">반포</text>
                                </g>
                                <g id="Nonhyeon" >
                                    <text transform="translate(792.5858 830.3976)" className="st0 st1">논현</text>
                                </g>
                                <g id="Sinnonhyeon" >
                                    <text transform="translate(807.8163 865.4386)" className="st0 st1">신논현</text>
                                </g>
                                <g id="Sinbanpo" >
                                    <text transform="translate(723.537 873.8068)" className="st0 st1">신반포</text>
                                </g>
                                <g id="Gubanpo" >
                                    <text transform="translate(697.9911 884.3849)" className="st0 st1">구반포</text>
                                </g>
                                <g id="Hakdong" >
                                    <text transform="translate(821.8788 819.0372)" className="st0 st1">학동</text>
                                </g>
                                <g id="Sinsa" >
                                    <text transform="translate(788.1005 807.3068)" className="st0 st1">신사</text>
                                </g>
                                <g id="Jamwon" >
                                    <text transform="translate(760.9706 818.6056)" className="st0 st1">잠원</text>
                                </g>
                                <g id="Ssangmun" >
                                    <text transform="translate(837.9159 328.844)" className="st0 st1">쌍문</text>
                                </g>
                                <g id="Sanggye" >
                                    <text transform="translate(951.1698 281.9347)" className="st0 st1">상계</text>
                                </g>
                                <g id="Dolgoji" >
                                    <text transform="translate(891.8915 461.8497)" className="st0 st1">돌곶이</text>
                                </g>
                                <g id="Sangwolgok" >
                                    <text transform="translate(866.8143 472.2335)" className="st0 st1">상월곡</text>
                                </g>
                                <g id="Cheonwang" >
                                    <text transform="translate(249.766 921.631)" className="st0 st1">천왕</text>
                                </g>
                                <g id="Gwangmyeongsageori" >
                                    <text transform="translate(293.5443 939.7677)" className="st0 st1">광명사거리</text>
                                </g>
                                <g id="Cheolsan" >
                                    <text transform="translate(337.347 957.9113)" className="st0 st1">철산</text>
                                </g>
                                <g id="Dapsimni" >
                                    <text transform="translate(891.2655 617.3282)" className="st0 st1">답십리</text>
                                </g>
                                <g id="Janghanpyeong" >
                                    <text transform="translate(927.871 632.5148)" className="st0 st1">장한평</text>
                                </g>
                                <g id="Gwangnaru" >
                                    <text transform="translate(1041.4052 700.6486)" className="st0 st1">광나루</text>
                                </g>
                                <g id="Heukseok" >
                                    <text transform="translate(614.0482 858.0861)" className="st0 st1">흑석</text>
                                </g>
                                <g id="Nodeul" >
                                    <text transform="translate(584.6439 845.9044)" className="st0 st1">노들</text>
                                </g>
                                <g id="YeongdeungpoMarket" >
                                    <text transform="translate(450.4623 786.9825)" className="st0 st1">영등포시장</text>
                                </g>
                                <g id="Cheonggyesan" >
                                    <text transform="translate(896.7645 1058.3624)" className="st0 st1">청계산입구</text>
                                </g>
                                <g id="Pangyo" >
                                    <text transform="translate(1013.1346 1106.5685)" className="st0 st1">판교</text>
                                </g>
                                <g id="Gaerong" >
                                    <text transform="translate(1132.4061 879.6427)" className="st0 st1">개롱</text>
                                </g>
                                <g id="Geoyeo" >
                                    <text transform="translate(1160.6444 891.3429)" className="st0 st1">거여</text>
                                </g>
                                <g id="Jegidong" >
                                    <text transform="translate(826.6044 581.4777)" className="st0 st1">제기동</text>
                                </g>
                                <g id="Hwarangdae" >
                                    <text transform="translate(969.8944 429.5343)" className="st0 st1">화랑대</text>
                                </g>
                                <g id="Gaehwa" >
                                    <text transform="translate(134.14 583.5577)" className="st0 st1">개화</text>
                                </g>
                                <g id="Daemosan" >
                                    <text transform="translate(948.701 917.171)" className="st0 st1">대모산입구</text>
                                </g>
                                <g id="Namhansanseong" >
                                    <text transform="translate(1129.3563 1006.9806)" className="st0 st1">남한산성입구</text>
                                </g>
                                <g id="Sanseong" >
                                    <text transform="translate(1112.1952 999.3146)" className="st0 st1">산성</text>
                                </g>
                                <g id="Godeok" >
                                    <text transform="translate(1189.4667 675.1017)" className="st0 st1">고덕</text>
                                </g>
                                <g id="Sangildong" >
                                    <text transform="translate(1223.0487 661.1915)" className="st0 st1">상일동</text>
                                </g>
                                <g id="Bangbae" >
                                    <text transform="translate(726.4237 955.3624)" className="st0 st1">방배</text>
                                </g>
                                <g id="Sindaebangsamgeori" >
                                    <text transform="translate(520.8383 882.881)" className="st0 st1">신대방삼거리</text>
                                </g>
                                <g id="Cheongdam" >
                                    <text transform="translate(880.7245 796.1652)" className="st0 st1">청담</text>
                                </g>
                                <g id="Guryong" >
                                    <text transform="translate(908.663 932.1075)" className="st0 st1">구룡</text>
                                </g>
                                <g id="Sapyeong" >
                                    <text transform="translate(771.16 866.7296)" className="st0 st1">사평</text>
                                </g>
                                <g id="Daeheung" >
                                    <text transform="translate(552.9603 710.6827)" className="st0 st1">대흥</text>
                                </g>
                                <g id="Hyochangpark" >
                                    <text transform="translate(619.6166 721.6671)" className="st0 st1">효창공원앞</text>
                                </g>
                                <g id="Hoehyeon" >
                                    <text transform="translate(668.2919 662.4005)" className="st0 st1">회현</text>
                                </g>
                                <g id="Ahyeon" >
                                    <text transform="translate(603.4515 666.7609)" className="st0 st1">아현</text>
                                </g>
                                <g id="Ttukseom" >
                                    <text transform="translate(872.4559 695.8458)" className="st0 st1">뚝섬</text>
                                </g>
                                <g id="HanyangUniv" >
                                    <text transform="translate(870.9344 665.6212)" className="st0 st1">한양대</text>
                                </g>
                                <g id="Seonyudo" >
                                    <text transform="translate(420.4056 723.2706)" className="st0 st1">선유도</text>
                                </g>
                                <g id="Bonghwasan" >
                                    <text transform="translate(1004.6229 435.257)" className="st0 st1">봉화산</text>
                                </g>
                                <g id="HankukUnivofForeignStudies" >
                                    <text transform="translate(893.3124 517.6534)" className="st0 st1">외대앞</text>
                                </g>
                                <g id="HansungUniv" >
                                    <text transform="translate(755.1346 544.089)" className="st0 st1">한성대입구</text>
                                </g>
                                <g id="SungshinWomensUniv" >
                                    <text transform="translate(780.286 518.923)" className="st0 st1">성신여대입구</text>
                                </g>
                                <g id="Gireum" >
                                    <text transform="translate(809.5702 489.632)" className="st0 st1">길음</text>
                                </g>
                                <g id="Uijeongbu" >
                                    <text transform="translate(810.5536 96.9786)" className="st0 st1">의정부</text>
                                </g>
                                <g id="Ganeung" >
                                    <text transform="translate(799.1678 108.3645)" className="st0 st1">가능</text>
                                </g>
                                <g id="Nogyang" >
                                    <text transform="translate(787.7821 119.7511)" className="st0 st1">녹양</text>
                                </g>
                                <g id="Yangju" >
                                    <text transform="translate(776.3964 131.1368)" className="st0 st1">양주</text>
                                </g>
                                <g id="Deokgye" >
                                    <text transform="translate(765.0106 142.5226)" className="st0 st1">덕계</text>
                                </g>
                                <g id="Deokjeong" >
                                    <text transform="translate(753.6249 153.9083)" className="st0 st1">덕정</text>
                                </g>
                                <g id="Jihaeng" >
                                    <text transform="translate(742.2382 165.2941)" className="st0 st1">지행</text>
                                </g>
                                <g id="Dongducheonjungang" >
                                    <text transform="translate(730.8524 176.6798)" className="st0 st1">동두천중앙</text>
                                </g>
                                <g id="Bosan" >
                                    <text transform="translate(719.4667 188.0656)" className="st0 st1">보산</text>
                                </g>
                                <g id="Dongducheon" >
                                    <text transform="translate(708.08 199.4513)" className="st0 st1">동두천</text>
                                </g>
                                <g id="Soyosan" >
                                    <text transform="translate(695.1903 210.837)" className="st0 st1">소요산</text>
                                </g>
                                <g id="Tapseok" >
                                    <text transform="translate(642.1503 210.5558)" className="st0 st1">탑석</text>
                                </g>
                                <g id="Songsan" >
                                    <text transform="translate(654.5829 198.1241)" className="st0 st1">송산</text>
                                </g>
                                <g id="eoryong" >
                                    <text transform="translate(667.0145 185.6925)" className="st0 st1">어룡</text>
                                </g>
                                <g id="gonjae" >
                                    <text transform="translate(679.4452 173.2609)" className="st0 st1">곤제</text>
                                </g>
                                <g id="hyoja" >
                                    <text transform="translate(691.8778 160.8282)" className="st0 st1">효자</text>
                                </g>
                                <g id="GyeonggiProvincialGovernmentNorthernOffice" >
                                    <text transform="translate(704.3094 148.3966)" className="st0 st1">경기도청</text>
                                    <text transform="translate(704.3094 156.2966)" className="st0 st1">북부청사</text>
                                </g>
                                <g id="saemal" >
                                    <text transform="translate(716.7352 135.965)" className="st0 st1">새말</text>
                                </g>
                                <g id="Dongo" >
                                    <text transform="translate(729.1669 123.5392)" className="st0 st1">동오</text>
                                </g>
                                <g id="UijeongbuJungang" >
                                    <text transform="translate(741.5995 111.1075)" className="st0 st1">의정부중앙</text>
                                </g>
                                <g id="Heungseon" >
                                    <text transform="translate(754.0321 98.6749)" className="st0 st1">흥선</text>
                                </g>
                                <g id="UijeongbuCityHall" >
                                    <text transform="translate(763.5253 89.8507)" className="st0 st1">의정부시청</text>
                                </g>
                                <g id="Yatap" >
                                    <text transform="translate(1094.1073 1077.0128)" className="st0 st1">야탑</text>
                                </g>
                                <g id="Imae" >
                                    <text transform="translate(1082.1708 1088.9445)" className="st0 st1">이매</text>
                                </g>
                                <g id="Dunjeon" >
                                    <text transform="translate(1121.7157 1106.173)" className="st0 st1">둔전</text>
                                </g>
                                <g id="Bopyeong" >
                                    <text transform="translate(1109.5399 1118.3478)" className="st0 st1">보평</text>
                                </g>
                                <g id="Gojin" >
                                    <text transform="translate(1097.371 1130.5167)" className="st0 st1">고진</text>
                                </g>
                                <g id="Gimnyangjang" >
                                    <text transform="translate(1073.0262 1154.8605)" className="st0 st1">김량장</text>
                                </g>
                                <g id="StadiumSongdamCollege" >
                                    <text transform="translate(1085.1962 1142.6925)" className="st0 st1">운동장 · 송담대</text>
                                </g>
                                <g id="Seohyeon" >
                                    <text transform="translate(1069.7206 1101.4825)" className="st0 st1">서현</text>
                                </g>
                                <g id="Migeum" >
                                    <text transform="translate(1033.5135 1137.5939)" className="st0 st1">미금</text>
                                </g>
                                <g id="JeondaeEverland" >
                                    <text transform="translate(1133.8778 1094.0109)" className="st0 st1">전대 · 에버랜드</text>
                                </g>
                                <g id="Yeouinaru" >
                                    <text transform="translate(535.2054 770.4552)" className="st0 st1">여의나루</text>
                                </g>
                                <g id="Mapo" >
                                    <text transform="translate(577.6615 727.9991)" className="st0 st1">마포</text>
                                </g>
                                <g id="Haengdang" >
                                    <text transform="translate(827.621 663.5157)" className="st0 st1">행당</text>
                                </g>
                                <g id="Jeungsan" >
                                    <text transform="translate(479.2523 571.1251)" className="st0 st1">증산</text>
                                </g>
                                <g id="Yeokchon" >
                                    <text transform="translate(513.5922 481.5597)" className="st0 st1">역촌</text>
                                </g>
                                <g id="Sangdo" >
                                    <text transform="translate(582.7338 865.4386)" className="st0 st1">상도</text>
                                </g>
                                <g id="SoongsilUniv" >
                                    <text transform="translate(606.9974 889.4269)" className="st0 st1">숭실대입구</text>
                                </g>
                                <g id="Namseong" >
                                    <text transform="translate(650.2245 932.6525)" className="st0 st1">남성</text>
                                </g>
                                <g id="Saetgang" >
                                    <text transform="translate(529.5365 810.9698)" className="st0 st1">샛강</text>
                                </g>
                                <g id="NationalAssembly" >
                                    <text transform="translate(491.3148 772.7482)" className="st0 st1">국회의사당</text>
                                </g>
                                <g id="Sinmokdong" >
                                    <text transform="translate(391.8402 711.3087)" className="st0 st1">신목동</text>
                                </g>
                                <g id="Yeomchang" >
                                    <text transform="translate(374.5355 694.2609)" className="st0 st1">염창</text>
                                </g>
                                <g id="Deungchon" >
                                    <text transform="translate(354.1381 673.8556)" className="st0 st1">등촌</text>
                                </g>
                                <g id="Jeungmi" >
                                    <text transform="translate(333.8324 653.546)" className="st0 st1">증미</text>
                                </g>
                                <g id="Gayang" >
                                    <text transform="translate(316.3783 636.0909)" className="st0 st1">가양</text>
                                </g>
                                <g id="Soraepogu" >
                                    <text transform="translate(324.9467 1085.6925)" className="st0 st1">소래포구</text>
                                </g>
                                <g id="Wolgot" >
                                    <text transform="translate(368.5492 1088.9562)" className="st0 st1">월곶</text>
                                </g>
                                <g id="Dalwol" >
                                    <text transform="translate(391.1771 1111.0646)" className="st0 st1">달월</text>
                                </g>
                                <g id="Songpa" >
                                    <text transform="translate(1067.3837 879.4728)" className="st0 st1">송파</text>
                                </g>
                                <g id="Mangwon" >
                                    <text transform="translate(466.764 670.1866)" className="st0 st1">망원</text>
                                </g>
                                <g id="MapoguOffice" >
                                    <text transform="translate(442.4828 642.8976)" className="st0 st1">마포구청</text>
                                </g>
                                <g id="Muakjae" >
                                    <text transform="translate(585.0648 567.8185)" className="st0 st1">무악재</text>
                                </g>
                                <g id="Hongje" >
                                    <text transform="translate(563.3627 545.9542)" className="st0 st1">홍제</text>
                                </g>
                                <g id="Dongnimmun" >
                                    <text transform="translate(615.5453 598.3068)" className="st0 st1">독립문</text>
                                </g>
                                <g id="Aeogae" >
                                    <text transform="translate(618.6469 685.504)" className="st0 st1">애오개</text>
                                </g>
                                <g id="WorldCupStadium" >
                                    <text transform="translate(434.9164 615.4552)" className="st0 st1">월드컵경기장</text>
                                </g>
                                <g id="Sunae" >
                                    <text transform="translate(1057.1874 1113.9142)" className="st0 st1">수내</text>
                                </g>
                                <g id="Dorimcheon" >
                                    <text transform="translate(374.4613 818.5802)" className="st0 st1">도림천</text>
                                </g>
                                <g id="Gangmae" >
                                    <text transform="translate(373.265 509.6857)" className="st0 st1">강매</text>
                                </g>
                                <g id="Susaek" >
                                    <text transform="translate(433.3324 569.7531)" className="st0 st1">수색</text>
                                </g>
                                <g id="Hannam" >
                                    <text transform="translate(761.0575 761.4923)" className="st0 st1">한남</text>
                                </g>
                                <g id="Eungbong" >
                                    <text transform="translate(836.1512 686.4015)" className="st0 st1">응봉</text>
                                </g>
                                <g id="Sillim" >
                                    <text transform="translate(528.5287 938.8146)" className="st0 st1">신림</text>
                                </g>
                                <g id="Dongam" >
                                    <text transform="translate(66.7377 896.8781)" className="st0 st1">동암</text>
                                </g>
                                <g id="Singeumho" >
                                    <text transform="translate(798.2098 664.004)" className="st0 st1">신금호</text>
                                </g>
                                <g id="Majang" >
                                    <text transform="translate(866.2372 624.8868)" className="st0 st1">마장</text>
                                </g>
                                <g id="AirportMarket" >
                                    <text transform="translate(174.6918 628.8947)" className="st0 st1">공항시장</text>
                                </g>
                                <g id="Seodaemun" >
                                    <text transform="translate(617.8002 624.0538)" className="st0 st1">서대문</text>
                                </g>
                                <g id="Sinimun" >
                                    <text transform="translate(915.4833 495.5314)" className="st0 st1">신이문</text>
                                </g>
                                <g id="Miasamgeori" >
                                    <text transform="translate(838.6932 459.8585)" className="st0 st1">미아사거리</text>
                                </g>
                                <g id="Macheon" >
                                    <text transform="translate(1200.8905 889.0197)" className="st0 st1">마천</text>
                                </g>
                                <g id="Chunui" >
                                    <text transform="translate(189.9613 849.1359)" className="st0 st1">춘의</text>
                                </g>
                                <g id="Hwaseo" >
                                    <text transform="translate(786.6737 1118.2286)" className="st0 st1">화서</text>
                                </g>
                                <g id="Gajwa" >
                                    <text transform="translate(474.8744 611.84)" className="st0 st1">가좌</text>
                                </g>
                                <g id="SogangUniv" >
                                    <text transform="translate(544.4047 681.3712)" className="st0 st1">서강대</text>
                                </g>
                                <g id="TtukseomPark" >
                                    <text transform="translate(940.2401 761.049)" className="st0 st1">뚝섬유원지</text>
                                </g>
                                <g id="ChildrensGrandPark" >
                                    <text transform="translate(965.2235 700.8429)" className="st0 st1">어린이대공원</text>
                                </g>
                                <g id="Junggok" >
                                    <text transform="translate(992.455 635.2316)" className="st0 st1">중곡</text>
                                </g>
                                <g id="Galmae" >
                                    <text transform="translate(1067.0897 396.6526)" className="st0 st1">갈매</text>
                                </g>
                                <g id="Toegyewon" >
                                    <text transform="translate(1079.5028 366.3839)" className="st0 st1">퇴계원</text>
                                </g>
                                <g id="Byeollae" >
                                    <text transform="translate(1073.3524 381.5157)" className="st0 st1">별내</text>
                                </g>
                                <g id="Wolgok" >
                                    <text transform="translate(842.6083 495.6193)" className="st0 st1">월곡</text>
                                </g>
                                <g id="KoreaUniv" >
                                    <text transform="translate(818.6522 539.2159)" className="st0 st1">고려대</text>
                                </g>
                                <g id="Beotigogae" >
                                    <text transform="translate(730.1385 696.1583)" className="st0 st1">버티고개</text>
                                </g>
                                <g id="Mongchontoseong" >
                                    <text transform="translate(1072.6698 811.6027)" className="st0 st1">몽촌토성</text>
                                </g>
                                <g id="GangdongguOffice" >
                                    <text transform="translate(1093.1132 765.2765)" className="st0 st1">강동구청</text>
                                </g>
                                <g id="Amsa" >
                                    <text transform="translate(1122.7469 693.7228)" className="st0 st1">암사</text>
                                </g>
                                <g id="Hangangjin" >
                                    <text transform="translate(721.8885 729.4581)" className="st0 st1">한강진</text>
                                </g>
                                <g id="Gildong" >
                                    <text transform="translate(1156.3417 738.5021)" className="st0 st1">길동</text>
                                </g>
                                <g id="Dunchondong" >
                                    <text transform="translate(1141.3798 774.8517)" className="st0 st1">둔촌동</text>
                                </g>
                                <g id="OlympicPark" >
                                    <text transform="translate(1124.6776 815.548)" className="st0 st1">올림픽공원</text>
                                </g>
                                <g id="Bangi" >
                                    <text transform="translate(1112.0458 846.3185)" className="st0 st1">방이</text>
                                </g>
                                <g id="Gubeundari" >
                                    <text transform="translate(1168.2177 709.8361)" className="st0 st1">굽은다리</text>
                                </g>
                                <g id="Myeongil" >
                                    <text transform="translate(1176.8026 689.1134)" className="st0 st1">명일</text>
                                </g>
                                <g id="Banghwa" >
                                    <text transform="translate(183.7484 582.7433)" className="st0 st1">방화</text>
                                </g>
                                <g id="Gaehwasan" >
                                    <text transform="translate(174.4301 605.2452)" className="st0 st1">개화산</text>
                                </g>
                                <g id="Suyu" >
                                    <text transform="translate(818.7841 363.9923)" className="st0 st1">수유</text>
                                </g>
                                <g id="Daehwa" >
                                    <text transform="translate(333.683 375.8468)" className="st0 st1">대화</text>
                                </g>
                                <g id="Juyeop" >
                                    <text transform="translate(341.3861 357.6085)" className="st0 st1">주엽</text>
                                </g>
                                <g id="Jeongbalsan" >
                                    <text transform="translate(343.266 339.3722)" className="st0 st1">정발산</text>
                                </g>
                                <g id="Madu" >
                                    <text transform="translate(376.183 337.0363)" className="st0 st1">마두</text>
                                </g>
                                <g id="Goksan" >
                                    <text transform="translate(435.4496 315.0968)" className="st0 st1">곡산</text>
                                </g>
                                <g id="Neunggok" >
                                    <text transform="translate(410.0219 377.4327)" className="st0 st1">능곡</text>
                                </g>
                                <g id="Haengsin" >
                                    <text transform="translate(391.9594 421.0343)" className="st0 st1">행신</text>
                                </g>
                                <g id="Hwajeon" >
                                    <text transform="translate(372.6625 467.5558)" className="st0 st1">화전</text>
                                </g>
                                <g id="Jangam" >
                                    <text transform="translate(901.3544 130.2345)" className="st0 st1">장암</text>
                                </g>
                                <g id="Guri" >
                                    <text transform="translate(1061.6542 523.5656)" className="st0 st1">구리</text>
                                </g>
                                <g id="Donong" >
                                    <text transform="translate(1067.6346 537.9689)" className="st0 st1">도농</text>
                                </g>
                                <g id="Yangjeong" >
                                    <text transform="translate(1073.6024 552.3741)" className="st0 st1">양정</text>
                                </g>
                                <g id="Deokso" >
                                    <text transform="translate(1079.5712 566.7794)" className="st0 st1">덕소</text>
                                </g>
                                <g id="Dosim" >
                                    <text transform="translate(1085.8661 581.1837)" className="st0 st1">도심</text>
                                </g>
                                <g id="Yangwon" >
                                    <text transform="translate(1055.704 509.1593)" className="st0 st1">양원</text>
                                </g>
                                <g id="Chuncheon" >
                                    <text transform="translate(992.1288 133.298)" className="st0 st1">춘천</text>
                                </g>
                                <g id="Namchuncheon" >
                                    <text transform="translate(998.5604 148.8224)" className="st0 st1">남춘천</text>
                                </g>
                                <g id="Gimyujeong" >
                                    <text transform="translate(1004.994 164.3488)" className="st0 st1">김유정</text>
                                </g>
                                <g id="Gangchon" >
                                    <text transform="translate(1011.4257 179.8741)" className="st0 st1">강촌</text>
                                </g>
                                <g id="Baegyangri" >
                                    <text transform="translate(1017.8563 197.548)" className="st0 st1">백양리</text>
                                </g>
                                <g id="Gulbongsan" >
                                    <text transform="translate(1024.2889 210.9259)" className="st0 st1">굴봉산</text>
                                </g>
                                <g id="Gapyeong" >
                                    <text transform="translate(1030.7206 226.4523)" className="st0 st1">가평</text>
                                </g>
                                <g id="Sangcheon" >
                                    <text transform="translate(1037.1532 241.9777)" className="st0 st1">상천</text>
                                </g>
                                <g id="Cheongpyeong" >
                                    <text transform="translate(1043.5848 257.4972)" className="st0 st1">청평</text>
                                </g>
                                <g id="Daeseongri" >
                                    <text transform="translate(1050.0165 273.0227)" className="st0 st1">대성리</text>
                                </g>
                                <g id="Maseok" >
                                    <text transform="translate(1056.4423 288.549)" className="st0 st1">마석</text>
                                </g>
                                <g id="Cheonmasan" >
                                    <text transform="translate(1062.8759 304.0753)" className="st0 st1">천마산</text>
                                </g>
                                <g id="PyeongnaeHopyeong" >
                                    <text transform="translate(1069.3075 319.5997)" className="st0 st1">평내호평</text>
                                </g>
                                <g id="Geumgok" >
                                    <text transform="translate(1075.7323 335.1202)" className="st0 st1">금곡</text>
                                </g>
                                <g id="Wolgye" >
                                    <text transform="translate(897.5272 382.2102)" className="st0 st1">월계</text>
                                </g>
                                <g id="Nokcheon" >
                                    <text transform="translate(879.3817 338.4532)" className="st0 st1">녹천</text>
                                </g>
                                <g id="Danggogae" >
                                    <text transform="translate(980.4276 238.5284)" className="st0 st1">당고개</text>
                                </g>
                                <g id="Kkachiul" >
                                    <text transform="translate(205.3226 883.4913)" className="st0 st1">까치울</text>
                                </g>
                                <g id="BucheonStadium" >
                                    <text transform="translate(198.8842 865.8341)" className="st0 st1">부천종합운동장</text>
                                </g>
                                <g id="Doksan" >
                                    <text transform="translate(417.8304 999.2355)" className="st0 st1">독산</text>
                                </g>
                                <g id="Incheon" >
                                    <text transform="translate(37.9779 782.6886)" className="st0 st1">인천</text>
                                </g>
                                <g id="Dongincheon" >
                                    <text transform="translate(44.5912 798.7091)" className="st0 st1">동인천</text>
                                </g>
                                <g id="Dowon" >
                                    <text transform="translate(51.2045 814.7306)" className="st0 st1">도원</text>
                                </g>
                                <g id="Jemulpo" >
                                    <text transform="translate(57.8246 830.7511)" className="st0 st1">제물포</text>
                                </g>
                                <g id="Dohwa" >
                                    <text transform="translate(64.4379 846.7716)" className="st0 st1">도화</text>
                                </g>
                                <g id="Juan" >
                                    <text transform="translate(71.0521 862.7921)" className="st0 st1">주안</text>
                                </g>
                                <g id="Ganseok" >
                                    <text transform="translate(77.6722 878.8126)" className="st0 st1">간석</text>
                                </g>
                                <g id="Galsan" >
                                    <text transform="translate(88.7386 817.3038)" className="st0 st1">갈산</text>
                                </g>
                                <g id="Dongsu" >
                                    <text transform="translate(132.347 923.4464)" className="st0 st1">동수</text>
                                </g>
                                <g id="Bupyeongsamgeori" >
                                    <text transform="translate(138.7357 938.8663)" className="st0 st1">부평삼거리</text>
                                </g>
                                <g id="Ganseogogeori" >
                                    <text transform="translate(146.6517 957.9816)" className="st0 st1">간석오거리</text>
                                </g>
                                <g id="IncheonCityHall" >
                                    <text transform="translate(154.5687 977.0958)" className="st0 st1">인천시청</text>
                                </g>
                                <g id="ArtsCenter" >
                                    <text transform="translate(162.4847 996.2111)" className="st0 st1">예술회관</text>
                                </g>
                                <g id="IncheonBusTerminal" >
                                    <text transform="translate(170.4008 1015.3243)" className="st0 st1">인천터미널</text>
                                </g>
                                <g id="MunhakSportsComplex" >
                                    <text transform="translate(178.3168 1034.4386)" className="st0 st1">문학경기장</text>
                                </g>
                                <g id="Seonhak" >
                                    <text transform="translate(186.2338 1053.5529)" className="st0 st1">선학</text>
                                </g>
                                <g id="Sinyeonsu" >
                                    <text transform="translate(194.1508 1072.6681)" className="st0 st1">신연수</text>
                                </g>
                                <g id="Dongchun" >
                                    <text transform="translate(210.057 1111.0656)" className="st0 st1">동춘</text>
                                </g>
                                <g id="Dongmak" >
                                    <text transform="translate(218.0492 1130.3556)" className="st0 st1">동막</text>
                                </g>
                                <g id="BupyeongMarket" >
                                    <text transform="translate(112.0804 873.6632)" className="st0 st1">부평시장</text>
                                </g>
                                <g id="Balsan" >
                                    <text transform="translate(242.2865 660.9308)" className="st0 st1">발산</text>
                                </g>
                                <g id="Ujangsan" >
                                    <text transform="translate(254.9261 691.4445)" className="st0 st1">우장산</text>
                                </g>
                                <g id="Hwagok" >
                                    <text transform="translate(266.0736 718.3615)" className="st0 st1">화곡</text>
                                </g>
                                <g id="NambuBusTerminal" >
                                    <text transform="translate(786.8661 932.298)" className="st0 st1">남부터미널</text>
                                </g>
                                <g id="Hanti" >
                                    <text transform="translate(895.3778 890.8243)" className="st0 st1">한티</text>
                                </g>
                                <g id="Seonjeongneung" >
                                    <text transform="translate(872.1932 834.8585)" className="st0 st1">선정릉</text>
                                </g>
                                <g id="Nokbeon" >
                                    <text transform="translate(543.8842 500.1115)" className="st0 st1">녹번</text>
                                </g>
                                <g id="Junghwa" >
                                    <text transform="translate(977.8798 495.0753)" className="st0 st1">중화</text>
                                </g>
                                <g id="Meokgol" >
                                    <text transform="translate(970.5018 465.1271)" className="st0 st1">먹골</text>
                                </g>
                                <g id="Hagye" >
                                    <text transform="translate(947.0526 370.0061)" className="st0 st1">하계</text>
                                </g>
                                <g id="Junggye" >
                                    <text transform="translate(938.1649 333.9563)" className="st0 st1">중계</text>
                                </g>
                                <g id="Madeul" >
                                    <text transform="translate(919.9598 260.0841)" className="st0 st1">마들</text>
                                </g>
                                <g id="Suraksan" >
                                    <text transform="translate(908.7499 214.6036)" className="st0 st1">수락산</text>
                                </g>
                                <g id="Gongneung" >
                                    <text transform="translate(956.6796 409.0548)" className="st0 st1">공릉</text>
                                </g>
                                <g id="Jamsillaru" >
                                    <text transform="translate(1036.8446 802.9484)" className="st0 st1">잠실나루</text>
                                </g>
                                <g id="Gangbyeon" >
                                    <text transform="translate(1014.8983 749.965)" className="st0 st1">강변</text>
                                </g>
                                <g id="Yongdap" >
                                    <text transform="translate(892.496 644.8351)" className="st0 st1">용답</text>
                                </g>
                                <g id="Sindap" >
                                    <text transform="translate(876.9335 610.0197)" className="st0 st1">신답</text>
                                </g>
                                <g id="Sareung" >
                                    <text transform="translate(1081.9315 350.1526)" className="st0 st1">사릉</text>
                                </g>
                                <g id="Mia" >
                                    <text transform="translate(822.2762 405.5099)" className="st0 st1">미아</text>
                                </g>
                                <g id="SeokchonHansolHospital" >
                                    <text transform="translate(1051.368 857.7804)" className="st0 st1">석촌</text>
                                </g>
                                <g id="NationalPoliceHospital" >
                                    <text transform="translate(1109.2186 895.3654)" className="st0 st1">경찰병원</text>
                                </g>
                                <g id="Sinyongsan" >
                                    <text transform="translate(637.4086 770.2814)" className="st0 st1">신용산</text>
                                </g>
                                <g id="YangjaeCitizensForest" >
                                    <text transform="translate(863.3368 985.381)" className="st0 st1">양재시민의숲</text>
                                </g>
                                <g id="Daecheong" >
                                    <text transform="translate(975.7118 905.424)" className="st0 st1">대청</text>
                                </g>
                                <g id="Irwon" >
                                    <text transform="translate(989.0155 936.5255)" className="st0 st1">일원</text>
                                </g>
                                <g id="Sinjeongnegeori" >
                                    <text transform="translate(258.7894 801.7472)" className="st0 st1">신정네거리</text>
                                </g>
                                <g id="Jakjeon" >
                                    <text transform="translate(77.0892 789.1583)" className="st0 st1">작전</text>
                                </g>
                                <g id="Seoulforest" >
                                    <text transform="translate(845.7762 715.3741)" className="st0 st1">서울숲</text>
                                </g>
                                <g id="Gwangmyeong" >
                                    <text transform="translate(412.7006 1069.9493)" className="st0 st1">광명</text>
                                </g>
                                <g id="Seoksu" >
                                    <text transform="translate(458.2767 1096.8878)" className="st0 st1">석수</text>
                                </g>
                                <g id="Apgujeongrodeo" >
                                    <text transform="translate(857.2919 774.5333)" className="st0 st1">압구정로데오</text>
                                </g>
                                <g id="HongikUniv" >
                                    <text transform="translate(507.5287 671.1388)" className="st0 st1">홍대입구</text>
                                </g>
                                <g id="Hapjeong" >
                                    <text transform="translate(489.9515 691.2228)" className="st0 st1">합정</text>
                                </g>
                                <g id="Dangsan" >
                                    <text transform="translate(445.3617 735.4513)" className="st0 st1">당산</text>
                                </g>
                                <g id="YeongdeungpoguOffice" >
                                    <text transform="translate(419.7943 777.0577)" className="st0 st1">영등포구청</text>
                                </g>
                                <g id="Daerim" >
                                    <text transform="translate(422.1742 916.9064)" className="st0 st1">대림</text>
                                </g>
                                <g id="GasanDigitalComplex" >
                                    <text transform="translate(396.7533 941.7755)" className="st0 st1">가산</text>
                                    <text transform="translate(396.7533 949.6755)" className="st0 st1">디지털단지</text>
                                </g>
                                <g id="GeumcheonGuOffice" >
                                    <text transform="translate(438.0033 1045.7853)" className="st0 st1">금천구청</text>
                                </g>
                                <g id="Guro" >
                                    <text transform="translate(377.4447 863.4972)" className="st0 st1">구로</text>
                                </g>
                                <g id="Kkachisan" >
                                    <text transform="translate(284.4828 754.3507)" className="st0 st1">까치산</text>
                                </g>
                                <g id="GimpoIntlAirport" >
                                    <text transform="translate(146.2113 650.7023)" className="st0 st1">김포공항</text>
                                </g>
                                <g id="BupyeongguOffice" >
                                    <text transform="translate(90.1273 854.6261)" className="st0 st1">부평구청</text>
                                </g>
                                <g id="Bupyeong" >
                                    <text transform="translate(120.389 895.672)" className="st0 st1">부평</text>
                                </g>
                                <g id="Woninjae" >
                                    <text transform="translate(201.7982 1085.9435)" className="st0 st1">원인재</text>
                                </g>
                                <g id="Gyeyang" >
                                    <text transform="translate(74.4701 582.379)" className="st0 st1">계양</text>
                                </g>
                                <g id="Sindorim" >
                                    <text transform="translate(421.2543 842.3361)" className="st0 st1">신도림</text>
                                </g>
                                <g id="Sadang" >
                                    <text transform="translate(689.5155 959.9845)" className="st0 st1">사당</text>
                                </g>
                                <g id="SeoulNatlUnivofEducation" >
                                    <text transform="translate(775.1727 904.0958)" className="st0 st1">교대</text>
                                </g>
                                <g id="Gangnam" >
                                    <text transform="translate(821.6708 884.8361)" className="st0 st1">강남</text>
                                </g>
                                <g id="Seolleung" >
                                    <text transform="translate(882.4579 859.6564)" className="st0 st1">선릉</text>
                                </g>
                                <g id="KonkukUniv" >
                                    <text transform="translate(952.8798 729.632)" className="st0 st1">건대입구</text>
                                </g>
                                <g id="Wangsimni" >
                                    <text transform="translate(843.3182 640.0626)" className="st0 st1">왕십리</text>
                                </g>
                                <g id="Jamsil" >
                                    <text transform="translate(1042.3436 830.9122)" className="st0 st1">잠실</text>
                                </g>
                                <g id="Euljiro3samga" >
                                    <text transform="translate(702.4716 640.0607)" className="st0 st1">을지로3가</text>
                                </g>
                                <g id="Euljiro4saga" >
                                    <text transform="translate(723.7313 626.3898)" className="st0 st1">을지로4가</text>
                                </g>
                                <g id="ExpressBusTerminal1" >
                                    <text transform="translate(689.5106 939.004)" className="st0 st1">총신대입구(이수)</text>
                                </g>
                                <g id="ExpressBusTerminal" >
                                    <text transform="translate(717.3983 852.5519)" className="st0 st1">고속터미널</text>
                                </g>
                                <g id="Dongjak" >
                                    <text transform="translate(662.7723 880.8282)" className="st0 st1">동작</text>
                                </g>
                                <g id="Noryangjin" >
                                    <text transform="translate(545.6771 835.1212)" className="st0 st1">노량진</text>
                                </g>
                                <g id="Yeouido" >
                                    <text transform="translate(510.4633 793.9689)" className="st0 st1">여의도</text>
                                </g>
                                <g id="Singil" >
                                    <text transform="translate(482.7992 818.5216)" className="st0 st1">신길</text>
                                </g>
                                <g id="GangnamguOffice" >
                                    <text transform="translate(865.1718 817.9318)" className="st0 st1">강남구청</text>
                                </g>
                                <g id="Gunja" >
                                    <text transform="translate(983.4764 655.9933)" className="st0 st1">군자</text>
                                </g>
                                <g id="Sangbong" >
                                    <text transform="translate(999.286 521.0245)" className="st0 st1">상봉</text>
                                </g>
                                <g id="Mangu" >
                                    <text transform="translate(1015.8241 515.7111)" className="st0 st1">망우</text>
                                </g>
                                <g id="Hoegi" >
                                    <text transform="translate(897.8134 552.0031)" className="st0 st1">회기</text>
                                </g>
                                <g id="Cheongnyangni" >
                                    <text transform="translate(869.4061 580.4113)" className="st0 st1">청량리</text>
                                </g>
                                <g id="Sinseoldong" >
                                    <text transform="translate(803.6678 592.8263)" className="st0 st1">신설동</text>
                                </g>
                                <g id="Dongdaemun" >
                                    <text transform="translate(758.2802 605.4318)" className="st0 st1">동대문</text>
                                </g>
                                <g id="Changdong" >
                                    <text transform="translate(885.8397 308.1046)" className="st0 st1">창동</text>
                                </g>
                                <g id="Taereung" >
                                    <text transform="translate(966.203 449.9728)" className="st0 st1">태릉입구</text>
                                </g>
                                <g id="Seokgye" >
                                    <text transform="translate(921.9012 452.5704)" className="st0 st1">석계</text>
                                </g>
                                <g id="KwangwoonUniv" >
                                    <text transform="translate(908.5262 423.3868)" className="st0 st1">광운대</text>
                                </g>
                                <g id="Dongmyo" >
                                    <text transform="translate(784.3339 605.4318)" className="st0 st1">동묘앞</text>
                                </g>
                                <g id="Sindang" >
                                    <text transform="translate(784.3339 625.9747)" className="st0 st1">신당</text>
                                </g>
                                <g id="Cheonggu" >
                                    <text transform="translate(781.7313 647.2872)" className="st0 st1">청구</text>
                                </g>
                                <g id="Yaksu" >
                                    <text transform="translate(774.5106 664.2013)" className="st0 st1">약수</text>
                                </g>
                                <g id="Oksu" >
                                    <text transform="translate(795.6766 726.4679)" className="st0 st1">옥수</text>
                                </g>
                                <g id="Yangjae" >
                                    <text transform="translate(845.8456 943.2208)" className="st0 st1">양재</text>
                                </g>
                                <g id="Dogok" >
                                    <text transform="translate(901.7587 908.4806)" className="st0 st1">도곡</text>
                                </g>
                                <g id="Suseo" >
                                    <text transform="translate(1039.2665 932.7189)" className="st0 st1">수서</text>
                                </g>
                                <g id="Bokjeong" >
                                    <text transform="translate(1087.0145 989.5157)" className="st0 st1">복정</text>
                                </g>
                                <g id="Moran" >
                                    <text transform="translate(1085.371 1060.672)" className="st0 st1">모란</text>
                                </g>
                                <g id="Jeongja" >
                                    <text transform="translate(1044.1063 1129.1329)" className="st0 st1">정자</text>
                                </g>
                                <g id="Seongsu" >
                                    <text transform="translate(897.8934 706.3527)" className="st0 st1">성수</text>
                                </g>
                                <g id="GarakMarket" >
                                    <text transform="translate(1093.3593 911.4073)" className="st0 st1">가락시장</text>
                                </g>
                                <g id="Cheonho" >
                                    <text transform="translate(1107.8856 729.3146)" className="st0 st1">천호</text>
                                </g>
                                <g id="Gangdong" >
                                    <text transform="translate(1133.2821 739.298)" className="st0 st1">강동</text>
                                </g>
                                <g id="Gongdeok" >
                                    <text transform="translate(595.9095 708.6525)" className="st0 st1">공덕</text>
                                </g>
                                <g id="DigitalMediaCity" >
                                    <text transform="translate(457.4496 593.5626)" className="st0 st1">디지털미디어시티</text>
                                </g>
                                <g id="Yeonsinnae" >
                                    <text transform="translate(514.2377 428.9103)" className="st0 st1">연신내</text>
                                </g>
                                <g id="Daegok" >
                                    <text transform="translate(408.7748 323.2697)" className="st0 st1">대곡</text>
                                </g>
                                <g id="Jongno3samga" >
                                    <text transform="translate(691.2723 601.7755)" className="st0 st1">종로3가</text>
                                </g>
                                <g id="Chungmuro" >
                                    <text transform="translate(708.0341 655.9484)" className="st0 st1">충무로</text>
                                </g>
                                <g id="SeoulStation" >
                                    <text transform="translate(664.4169 674.1368)" className="st0 st1">서울역</text>
                                </g>
                                <g id="CityHall" >
                                    <text transform="translate(648.0682 647.9054)" className="st0 st1">시청</text>
                                </g>
                                <g id="Chungjeongno" >
                                    <text transform="translate(620.0043 659.5314)" className="st0 st1">충정로</text>
                                </g>
                                <g id="Ichon" >
                                    <text transform="translate(659.3075 809.0988)" className="st0 st1">이촌</text>
                                </g>
                                <g id="Yongsan" >
                                    <text transform="translate(612.0531 756.0587)" className="st0 st1">용산</text>
                                </g>
                                <g id="Samgakji" >
                                    <text transform="translate(656.2616 752.6447)" className="st0 st1">삼각지</text>
                                </g>
                                <g id="Bulgwang" >
                                    <text transform="translate(531.309 463.6564)" className="st0 st1">불광</text>
                                </g>
                                <g id="Nowon" >
                                    <text transform="translate(928.2401 292.4944)" className="st0 st1">노원</text>
                                </g>
                                <g id="Dobongsan" >
                                    <text transform="translate(854.8466 176.0548)" className="st0 st1">도봉산</text>
                                </g>
                                <g id="Hoeryong" >
                                    <text transform="translate(810.1034 76.1222)" className="st0 st1">회룡</text>
                                </g>
                                <g id="Ogeum" >
                                    <text transform="translate(1117.2557 873.9435)" className="st0 st1">오금</text>
                                </g>
                                <g id="Onsu" >
                                    <text transform="translate(212.3871 907.1788)" className="st0 st1">온수</text>
                                </g>
                                <g id="Oido" >
                                    <text transform="translate(408.5912 1146.0323)" className="st0 st1">오</text>
                                    <text transform="translate(408.5912 1153.9324)" className="st0 st1">이</text>
                                    <text transform="translate(408.5912 1161.8324)" className="st0 st1">도</text>
                                </g>
                                <g id="Geumjeong" >
                                    <text transform="translate(669.5272 1113.2062)" className="st0 st1">금정</text>
                                </g>
                                <g id="Suwon" >
                                    <text transform="translate(769.3934 1141.7072)" className="st0 st1">수원</text>
                                </g>
                                <g id="Byeongjeom" >
                                    <text transform="translate(789.9432 1170.1271)" className="st0 st1">병점</text>
                                </g>
                                <g id="Giheung" >
                                    <text transform="translate(924.7821 1129.089)" className="st0 st1">기</text>
                                    <text transform="translate(924.7821 1136.989)" className="st0 st1">흥</text>
                                </g>
                                <g id="DongdaemunHistoryCulturePark" >
                                    <text transform="translate(755.0907 640.6827)" className="st0 st2">동대문</text>
                                    <text transform="translate(755.0907 646.0827)" className="st0 st2">역사문화</text>
                                    <text transform="translate(755.0907 651.5827)" className="st0 st2">공원</text>
                                </g>
                                <g id="GuroDigitalComplex" >
                                    <text transform="translate(428.5599 936.3361)" className="st0 st1">구로</text>
                                    <text transform="translate(428.5599 944.2361)" className="st0 st1">디지털단지</text>
                                </g>
                                <g id="GangnamGu" >
                                    <text transform="translate(946.6327 985.6007)" className="st3 st0 st4">강남구</text>
                                </g>
                                <g id="SeochoGu" >
                                    <text transform="translate(758.9042 981.338)" className="st3 st0 st4">서초구</text>
                                </g>
                                <g id="SongpaGu" >
                                    <text transform="translate(1066.1063 844.8058)" className="st3 st0 st4">송파구</text>
                                </g>
                                <g id="GangdongGu" >
                                    <text transform="translate(1181.3065 746.673)" className="st3 st0 st4">강동구</text>
                                </g>
                                <g id="GwanakGu" >
                                    <text transform="translate(562.64 994.1437)" className="st3 st0 st4">관악구</text>
                                </g>
                                <g id="DongjakGu" >
                                    <text transform="translate(558.3783 900.2755)" className="st3 st0 st4">동작구</text>
                                </g>
                                <g id="GeumcheonGu" >
                                    <text transform="translate(447.4486 985.6095)" className="st3 st0 st4">금천구</text>
                                </g>
                                <g id="GuroGu" >
                                    <text transform="translate(323.7133 913.0812)" className="st3 st0 st4">구로구</text>
                                </g>
                                <g id="YangcheonGu" >
                                    <text transform="translate(310.9154 806.4152)" className="st3 st0 st4">양천구</text>
                                </g>
                                <g id="GangseoGu" >
                                    <text transform="translate(306.6537 712.545)" className="st3 st0 st4">강서구</text>
                                </g>
                                <g id="MapoGu" >
                                    <text transform="translate(571.184 682.6798)" className="st3 st0 st4">마포구</text>
                                </g>
                                <g id="EunpyeongGu" >
                                    <text transform="translate(502.9174 554.6818)" className="st3 st0 st4">은평구</text>
                                </g>
                                <g id="SeodaemunGu" >
                                    <text transform="translate(536.7123 610.1505)" className="st3 st0 st4">서대문구</text>
                                </g>
                                <g id="JongnoGu" >
                                    <text transform="translate(665.0526 529.087)" className="st3 st0 st4">종로구</text>
                                </g>
                                <g id="JungGu" >
                                    <text transform="translate(708.0585 674.1534)" className="st3 st0 st4">중구</text>
                                </g>
                                <g id="SeongdongGu" >
                                    <text transform="translate(822.9159 704.0197)" className="st3 st0 st4">성동구</text>
                                </g>
                                <g id="DongdaemunGu" >
                                    <text transform="translate(907.9091 588.8195)" className="st3 st0 st4">동대문구</text>
                                </g>
                                <g id="JungnangGu" >
                                    <text transform="translate(993.578 477.8888)" className="st3 st0 st4">중랑구</text>
                                </g>
                                <g id="DobongGu" >
                                    <text transform="translate(818.6444 247.4884)" className="st3 st0 st4">도봉구</text>
                                </g>
                                <g id="GangbukGu" >
                                    <text transform="translate(763.1757 422.42)" className="st3 st0 st4">강북구</text>
                                </g>
                                <g id="SeongbukGu" >
                                    <text transform="translate(784.5077 533.3497)" className="st3 st0 st4">성북구</text>
                                </g>
                                <g id="GwangjinGu" >
                                    <text transform="translate(1014.9091 652.8136)" className="st3 st0 st4">광진구</text>
                                </g>
                                <g id="YongsanGu" >
                                    <text transform="translate(686.3749 772.2775)" className="st3 st0 st4">용산구</text>
                                </g>
                                <g id="YeongdeungpoGu" >
                                    <text transform="translate(464.1742 853.34)" className="st3 st0 st4">영등포구</text>
                                </g>
                                <g id="NowonGu" >
                                    <text transform="translate(976.5077 354.1544)" className="st3 st0 st4">노원구</text>
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