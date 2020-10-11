import React, {PureComponent} from "react";
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

const Svg = styled.svg`
	.st0{font-family:'Noto Sans KR'; font-weight:900; cursor:pointer;}
	.st1{font-size:6.5759px;}
	.st2{font-size:4.5326px;}
	.st3{fill:#E5E5E4;}
  .st4{font-size:9.0311px;}
`;

class Map extends PureComponent {
  
  render() {
    const {match, history} = this.props;
    return (
    <>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 1280 1280"
      version="1.1"
      viewBox="0 0 1280 1280"
      xmlSpace="preserve"
    >
    <g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ilsan"))} id="Ilsan" key="Ilsan" ref="Ilsan">
        <text transform="translate(475.475 290.839)" className="st0 st1">일</text>
        <text transform="translate(475.475 298.739)" className="st0 st1">산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Pungsan"))} id="Pungsan" key="Pungsan" ref="Pungsan">
        <text transform="translate(458.472 290.839)" className="st0 st1">풍</text>
        <text transform="translate(458.472 298.739)" className="st0 st1">산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Baengma"))} id="Baengma" key="Baengma" ref="Baengma">
        <text transform="translate(441.4681 290.839)" className="st0 st1">백</text>
        <text transform="translate(441.4681 298.739)" className="st0 st1">마</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hwajeong"))} id="Hwajeong" key="Hwajeong" ref="Hwajeong">
        <text transform="translate(438.1742 337.1858)" className="st0 st1">화</text>
        <text transform="translate(438.1742 345.0857)" className="st0 st1">정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Wondang"))} id="Wondang" key="Wondang" ref="Wondang">
        <text transform="translate(453.7806 337.1858)" className="st0 st1">원</text>
        <text transform="translate(453.7806 345.0857)" className="st0 st1">당</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Wonheung"))} id="Wonheung" key="Wonheung" ref="Wonheung">
        <text transform="translate(469.3881 337.1858)" className="st0 st1">원</text>
        <text transform="translate(469.3881 345.0857)" className="st0 st1">흥</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Samsong"))} id="Samsong" key="Samsong" ref="Samsong">
        <text transform="translate(484.9955 337.1858)" className="st0 st1">삼</text>
        <text transform="translate(484.9955 345.0857)" className="st0 st1">송</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Tanhyeon"))} id="Tanhyeon" key="Tanhyeon" ref="Tanhyeon">
        <text transform="translate(492.474 290.839)" className="st0 st1">탄</text>
        <text transform="translate(492.474 298.739)" className="st0 st1">현</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Unjeong"))} id="Unjeong" key="Unjeong" ref="Unjeong">
        <text transform="translate(509.4779 290.839)" className="st0 st1">운</text>
        <text transform="translate(509.4779 298.739)" className="st0 st1">정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Geumneung"))} id="Geumneung" key="Geumneung" ref="Geumneung">
        <text transform="translate(526.4818 290.839)" className="st0 st1">금</text>
        <text transform="translate(526.4818 298.739)" className="st0 st1">릉</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Geumchon"))} id="Geumchon" key="Geumchon" ref="Geumchon">
        <text transform="translate(543.4847 290.839)" className="st0 st1">금</text>
        <text transform="translate(543.4847 298.739)" className="st0 st1">촌</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Wollong"))} id="Wollong" key="Wollong" ref="Wollong">
        <text transform="translate(560.4886 290.839)" className="st0 st1">월</text>
        <text transform="translate(560.4886 298.739)" className="st0 st1">롱</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Paju"))} id="Paju" key="Paju" ref="Paju">
        <text transform="translate(577.4926 290.839)" className="st0 st1">파</text>
        <text transform="translate(577.4926 298.739)" className="st0 st1">주</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Munsan"))} id="Munsan" key="Munsan" ref="Munsan">
        <text transform="translate(594.4965 290.839)" className="st0 st1">문</text>
        <text transform="translate(594.4965 298.739)" className="st0 st1">산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bugae"))} id="Bugae" key="Bugae" ref="Bugae">
        <text transform="translate(129.2299 906.9034)" className="st0 st1">부</text>
        <text transform="translate(129.2299 914.8034)" className="st0 st1">개</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Songnae"))} id="Songnae" key="Songnae" ref="Songnae">
        <text transform="translate(141.976 906.9034)" className="st0 st1">송</text>
        <text transform="translate(141.976 914.8034)" className="st0 st1">내</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jungdong"))} id="Jungdong" key="Jungdong" ref="Jungdong">
        <text transform="translate(154.7201 906.9034)" className="st0 st1">중</text>
        <text transform="translate(154.7201 914.8034)" className="st0 st1">동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bucheon"))} id="Bucheon" key="Bucheon" ref="Bucheon">
        <text transform="translate(167.4652 906.9034)" className="st0 st1">부</text>
        <text transform="translate(167.4652 914.8034)" className="st0 st1">천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sosa"))} id="Sosa" key="Sosa" ref="Sosa">
        <text transform="translate(180.2103 906.9034)" className="st0 st1">소</text>
        <text transform="translate(180.2103 914.8034)" className="st0 st1">사</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yeokgok"))} id="Yeokgok" key="Yeokgok" ref="Yeokgok">
        <text transform="translate(192.9554 906.9034)" className="st0 st1">역</text>
        <text transform="translate(192.9554 914.8034)" className="st0 st1">곡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Technopark"))} id="Technopark" key="Technopark" ref="Technopark">
        <text transform="translate(232.8939 1145.3849)" className="st0 st1">테</text>
        <text transform="translate(232.8939 1153.2849)" className="st0 st1">크</text>
        <text transform="translate(232.8939 1161.1849)" className="st0 st1">노</text>
        <text transform="translate(232.8939 1169.085)" className="st0 st1">파</text>
        <text transform="translate(232.8939 1176.9849)" className="st0 st1">크</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "BITZone"))} id="BITZone" key="BITZone" ref="BITZone">
        <text transform="translate(277.5551 1145.3849)" className="st0 st1">지</text>
        <text transform="translate(277.5551 1153.2849)" className="st0 st1">식</text>
        <text transform="translate(277.5551 1161.1849)" className="st0 st1">정</text>
        <text transform="translate(277.5551 1169.085)" className="st0 st1">보</text>
        <text transform="translate(277.5551 1176.9849)" className="st0 st1">단</text>
        <text transform="translate(277.5551 1184.8849)" className="st0 st1">지</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "IncheonNatlUniv"))} id="IncheonNatlUniv" key="IncheonNatlUniv" ref="IncheonNatlUniv">
        <text transform="translate(299.8822 1145.3849)" className="st0 st1">인</text>
        <text transform="translate(299.8822 1153.2849)" className="st0 st1">천</text>
        <text transform="translate(299.8822 1161.1849)" className="st0 st1">대</text>
        <text transform="translate(299.8822 1169.085)" className="st0 st1">입</text>
        <text transform="translate(299.8822 1176.9849)" className="st0 st1">구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "CentralPark"))} id="CentralPark" key="CentralPark" ref="CentralPark">
        <text transform="translate(322.2162 1145.3849)" className="st0 st1">센</text>
        <text transform="translate(322.2162 1153.2849)" className="st0 st1">트</text>
        <text transform="translate(322.2162 1161.1849)" className="st0 st1">럴</text>
        <text transform="translate(322.2162 1169.085)" className="st0 st1">파</text>
        <text transform="translate(322.2162 1176.9849)" className="st0 st1">크</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "IntlBusinessDistrict"))} id="IntlBusinessDistrict" key="IntlBusinessDistrict" ref="IntlBusinessDistrict">
        <text transform="translate(348.4261 1145.3849)" className="st0 st1">국</text>
        <text transform="translate(348.4261 1153.2849)" className="st0 st1">제</text>
        <text transform="translate(348.4261 1161.1849)" className="st0 st1">업</text>
        <text transform="translate(348.4261 1169.085)" className="st0 st1">무</text>
        <text transform="translate(348.4261 1176.9849)" className="st0 st1">지</text>
        <text transform="translate(348.4261 1184.8849)" className="st0 st1">구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SingilonCheon"))} id="SingilonCheon" key="SingilonCheon" ref="SingilonCheon">
        <text transform="translate(454.4388 1145.798)" className="st0 st1">신</text>
        <text transform="translate(454.4388 1153.698)" className="st0 st1">길</text>
        <text transform="translate(454.4388 1161.598)" className="st0 st1">온</text>
        <text transform="translate(454.4388 1169.498)" className="st0 st1">천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinchang"))} id="Sinchang" key="Sinchang" ref="Sinchang">
        <text transform="translate(456.6 1193.088)" className="st0 st1">신</text>
        <text transform="translate(456.6 1200.988)" className="st0 st1">창</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "OnyangonCheon"))} id="OnyangonCheon" key="OnyangonCheon" ref="OnyangonCheon">
        <text transform="translate(475.1576 1193.088)" className="st0 st1">온</text>
        <text transform="translate(475.1576 1200.988)" className="st0 st1">양</text>
        <text transform="translate(475.1576 1208.8881)" className="st0 st1">온</text>
        <text transform="translate(475.1576 1216.7881)" className="st0 st1">천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Baebang"))} id="Baebang" key="Baebang" ref="Baebang">
        <text transform="translate(493.7133 1193.088)" className="st0 st1">배</text>
        <text transform="translate(493.7133 1200.988)" className="st0 st1">방</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Asan"))} id="Asan" key="Asan" ref="Asan">
        <text transform="translate(512.2699 1193.088)" className="st0 st1">아</text>
        <text transform="translate(512.2699 1200.988)" className="st0 st1">산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ssangyong"))} id="Ssangyong" key="Ssangyong" ref="Ssangyong">
        <text transform="translate(530.8275 1193.088)" className="st0 st1">쌍</text>
        <text transform="translate(530.8275 1200.988)" className="st0 st1">용</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bongmyeong"))} id="Bongmyeong" key="Bongmyeong" ref="Bongmyeong">
        <text transform="translate(549.3851 1193.088)" className="st0 st1">봉</text>
        <text transform="translate(549.3851 1200.988)" className="st0 st1">명</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Cheonan"))} id="Cheonan" key="Cheonan" ref="Cheonan">
        <text transform="translate(567.9418 1193.088)" className="st0 st1">천</text>
        <text transform="translate(567.9418 1200.988)" className="st0 st1">안</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dujeong"))} id="Dujeong" key="Dujeong" ref="Dujeong">
        <text transform="translate(586.4994 1193.088)" className="st0 st1">두</text>
        <text transform="translate(586.4994 1200.988)" className="st0 st1">정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jiksan"))} id="Jiksan" key="Jiksan" ref="Jiksan">
        <text transform="translate(605.056 1193.088)" className="st0 st1">직</text>
        <text transform="translate(605.056 1200.988)" className="st0 st1">산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seonghwan"))} id="Seonghwan" key="Seonghwan" ref="Seonghwan">
        <text transform="translate(623.6127 1193.088)" className="st0 st1">성</text>
        <text transform="translate(623.6127 1200.988)" className="st0 st1">환</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Pyeongtaek"))} id="Pyeongtaek" key="Pyeongtaek" ref="Pyeongtaek">
        <text transform="translate(642.1688 1193.088)" className="st0 st1">평</text>
        <text transform="translate(642.1688 1200.988)" className="st0 st1">택</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jije"))} id="Jije" key="Jije" ref="Jije">
        <text transform="translate(660.7264 1193.088)" className="st0 st1">지</text>
        <text transform="translate(660.7264 1200.988)" className="st0 st1">제</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seojeongri"))} id="Seojeongri" key="Seojeongri" ref="Seojeongri">
        <text transform="translate(679.2841 1193.088)" className="st0 st1">서</text>
        <text transform="translate(679.2841 1200.988)" className="st0 st1">정</text>
        <text transform="translate(679.2841 1208.8881)" className="st0 st1">리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Songtan"))} id="Songtan" key="Songtan" ref="Songtan">
        <text transform="translate(697.8397 1193.088)" className="st0 st1">송</text>
        <text transform="translate(697.8397 1200.988)" className="st0 st1">탄</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Osan"))} id="Osan" key="Osan" ref="Osan">
        <text transform="translate(734.9559 1193.088)" className="st0 st1">오</text>
        <text transform="translate(734.9559 1200.988)" className="st0 st1">산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "OsanCollege"))} id="OsanCollege" key="OsanCollege" ref="OsanCollege">
        <text transform="translate(753.5106 1193.088)" className="st0 st1">오</text>
        <text transform="translate(753.5106 1200.988)" className="st0 st1">산</text>
        <text transform="translate(753.5106 1208.8881)" className="st0 st1">대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sema"))} id="Sema" key="Sema" ref="Sema">
        <text transform="translate(772.0682 1193.6027)" className="st0 st1">세</text>
        <text transform="translate(772.0682 1201.5027)" className="st0 st1">마</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seodongtan"))} id="Seodongtan" key="Seodongtan" ref="Seodongtan">
        <text transform="translate(803.8661 1193.088)" className="st0 st1">서</text>
        <text transform="translate(803.8661 1200.988)" className="st0 st1">동</text>
        <text transform="translate(803.8661 1208.8881)" className="st0 st1">탄</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jinwi"))} id="Jinwi" key="Jinwi" ref="Jinwi">
        <text transform="translate(716.3915 1193.088)" className="st0 st1">진</text>
        <text transform="translate(716.3915 1200.988)" className="st0 st1">위</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ansan"))} id="Ansan" key="Ansan" ref="Ansan">
        <text transform="translate(476.7289 1145.798)" className="st0 st1">안</text>
        <text transform="translate(476.7289 1153.698)" className="st0 st1">산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Choji"))} id="Choji" key="Choji" ref="Choji">
        <text transform="translate(499.0433 1145.798)" className="st0 st1">초</text>
        <text transform="translate(499.0433 1153.698)" className="st0 st1">지</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gojan"))} id="Gojan" key="Gojan" ref="Gojan">
        <text transform="translate(521.3578 1145.798)" className="st0 st1">고</text>
        <text transform="translate(521.3578 1153.698)" className="st0 st1">잔</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jungang"))} id="Jungang" key="Jungang" ref="Jungang">
        <text transform="translate(543.6732 1145.798)" className="st0 st1">중</text>
        <text transform="translate(543.6732 1153.698)" className="st0 st1">앙</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "HanyangUnivatAnsan"))} id="HanyangUnivatAnsan" key="HanyangUnivatAnsan" ref="HanyangUnivatAnsan">
        <text transform="translate(565.9877 1145.798)" className="st0 st1">한</text>
        <text transform="translate(565.9877 1153.698)" className="st0 st1">대</text>
        <text transform="translate(565.9877 1161.598)" className="st0 st1">앞</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sangnoksu"))} id="Sangnoksu" key="Sangnoksu" ref="Sangnoksu">
        <text transform="translate(588.3021 1145.798)" className="st0 st1">상</text>
        <text transform="translate(588.3021 1153.698)" className="st0 st1">록</text>
        <text transform="translate(588.3021 1161.598)" className="st0 st1">수</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Banwol"))} id="Banwol" key="Banwol" ref="Banwol">
        <text transform="translate(610.6166 1145.798)" className="st0 st1">반</text>
        <text transform="translate(610.6166 1153.698)" className="st0 st1">월</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Daeyami"))} id="Daeyami" key="Daeyami" ref="Daeyami">
        <text transform="translate(632.932 1145.798)" className="st0 st1">대</text>
        <text transform="translate(632.932 1153.698)" className="st0 st1">야</text>
        <text transform="translate(632.932 1161.598)" className="st0 st1">미</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Surisan"))} id="Surisan" key="Surisan" ref="Surisan">
        <text transform="translate(655.2469 1145.798)" className="st0 st1">수</text>
        <text transform="translate(655.2469 1153.698)" className="st0 st1">리</text>
        <text transform="translate(655.2469 1161.598)" className="st0 st1">산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SuwonCityHall1"))} id="SuwonCityHall1" key="SuwonCityHall1" ref="SuwonCityHall1">
        <text transform="translate(799.0936 1129.4171)" className="st0 st1">매</text>
        <text transform="translate(799.0936 1136.4171)" className="st0 st1">교</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SuwonCityHall"))} id="SuwonCityHall" key="SuwonCityHall" ref="SuwonCityHall">
        <text transform="translate(817.0663 1115.4171)" className="st0 st1">수</text>
        <text transform="translate(817.0663 1123.3171)" className="st0 st1">원</text>
        <text transform="translate(817.0663 1131.2172)" className="st0 st1">시</text>
        <text transform="translate(817.0663 1139.1172)" className="st0 st1">청</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "MaetanGwonseon"))} id="MaetanGwonseon" key="MaetanGwonseon" ref="MaetanGwonseon">
        <text transform="translate(835.0428 1115.4171)" className="st0 st1">매</text>
        <text transform="translate(835.0428 1123.3171)" className="st0 st1">탄</text>
        <text transform="translate(835.0428 1131.2172)" className="st0 st1">권</text>
        <text transform="translate(835.0428 1139.1172)" className="st0 st1">선</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Mangpo"))} id="Mangpo" key="Mangpo" ref="Mangpo">
        <text transform="translate(853.0165 1129.4171)" className="st0 st1">망</text>
        <text transform="translate(853.0165 1137.3171)" className="st0 st1">포</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yeongtong"))} id="Yeongtong" key="Yeongtong" ref="Yeongtong">
        <text transform="translate(870.9911 1129.4171)" className="st0 st1">영</text>
        <text transform="translate(870.9911 1137.3171)" className="st0 st1">통</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Cheongmyeong"))} id="Cheongmyeong" key="Cheongmyeong" ref="Cheongmyeong">
        <text transform="translate(888.9667 1129.4171)" className="st0 st1">청</text>
        <text transform="translate(888.9667 1137.3171)" className="st0 st1">명</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sanggal"))} id="Sanggal" key="Sanggal" ref="Sanggal">
        <text transform="translate(906.9403 1129.4171)" className="st0 st1">상</text>
        <text transform="translate(906.9403 1137.3171)" className="st0 st1">갈</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Singal"))} id="Singal" key="Singal" ref="Singal">
        <text transform="translate(942.5009 1129.4171)" className="st0 st1">신</text>
        <text transform="translate(942.5009 1137.3171)" className="st0 st1">갈</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Guseong"))} id="Guseong" key="Guseong" ref="Guseong">
        <text transform="translate(960.0868 1129.4171)" className="st0 st1">구</text>
        <text transform="translate(960.0868 1137.3171)" className="st0 st1">성</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bojeong"))} id="Bojeong" key="Bojeong" ref="Bojeong">
        <text transform="translate(977.6737 1129.4171)" className="st0 st1">보</text>
        <text transform="translate(977.6737 1137.3171)" className="st0 st1">정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jukjeon"))} id="Jukjeon" key="Jukjeon" ref="Jukjeon">
        <text transform="translate(995.2606 1129.4171)" className="st0 st1">죽</text>
        <text transform="translate(995.2606 1137.3171)" className="st0 st1">전</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ori"))} id="Ori" key="Ori" ref="Ori">
        <text transform="translate(1012.8475 1129.4171)" className="st0 st1">오</text>
        <text transform="translate(1012.8475 1137.3171)" className="st0 st1">리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "MyongjiUniv"))} id="MyongjiUniv" key="MyongjiUniv" ref="MyongjiUniv">
        <text transform="translate(1051.3641 1168.5323)" className="st0 st1">명</text>
        <text transform="translate(1051.3641 1176.4324)" className="st0 st1">지</text>
        <text transform="translate(1051.3641 1184.3324)" className="st0 st1">대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Samga1"))} id="Samga1" key="Samga1" ref="Samga1">
        <text transform="translate(1033.4882 1168.9581)" className="st0 st1">시</text>
        <text transform="translate(1033.4882 1176.8582)" className="st0 st1">청</text>
        <text transform="translate(1033.4882 1184.7582)" className="st0 st1">·</text>
        <text transform="translate(1033.4882 1192.6582)" className="st0 st1">용</text>
        <text transform="translate(1033.4882 1200.5581)" className="st0 st1">인</text>
        <text transform="translate(1033.4882 1208.4581)" className="st0 st1">대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Samga"))} id="Samga" key="Samga" ref="Samga">
        <text transform="translate(1015.6268 1168.9464)" className="st0 st1">삼</text>
        <text transform="translate(1015.6268 1176.8464)" className="st0 st1">가</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Chodang"))} id="Chodang" key="Chodang" ref="Chodang">
        <text transform="translate(997.7518 1168.9464)" className="st0 st1">초</text>
        <text transform="translate(997.7518 1176.8464)" className="st0 st1">당</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dongbaek"))} id="Dongbaek" key="Dongbaek" ref="Dongbaek">
        <text transform="translate(979.8788 1168.9464)" className="st0 st1">동</text>
        <text transform="translate(979.8788 1176.8464)" className="st0 st1">백</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Eojeong"))} id="Eojeong" key="Eojeong" ref="Eojeong">
        <text transform="translate(962.0048 1168.9464)" className="st0 st1">어</text>
        <text transform="translate(962.0048 1176.8464)" className="st0 st1">정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jiseok"))} id="Jiseok" key="Jiseok" ref="Jiseok">
        <text transform="translate(944.1298 1168.9464)" className="st0 st1">지</text>
        <text transform="translate(944.1298 1176.8464)" className="st0 st1">석</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gulpocheon"))} id="Gulpocheon" key="Gulpocheon" ref="Gulpocheon">
        <text transform="translate(108.5511 825.8993)" className="st0 st1">굴</text>
        <text transform="translate(108.5511 833.7993)" className="st0 st1">포</text>
        <text transform="translate(108.5511 841.6993)" className="st0 st1">천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SamsanGymnasium"))} id="SamsanGymnasium" key="SamsanGymnasium" ref="SamsanGymnasium">
        <text transform="translate(123.099 811.8993)" className="st0 st1">삼</text>
        <text transform="translate(123.099 819.7993)" className="st0 st1">산</text>
        <text transform="translate(123.099 827.6993)" className="st0 st1">체</text>
        <text transform="translate(123.099 835.5993)" className="st0 st1">육</text>
        <text transform="translate(123.099 843.4993)" className="st0 st1">관</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "BucheonCityHall"))} id="BucheonCityHall" key="BucheonCityHall" ref="BucheonCityHall">
        <text transform="translate(152.1967 818.8993)" className="st0 st1">부</text>
        <text transform="translate(152.1967 826.7993)" className="st0 st1">천</text>
        <text transform="translate(152.1967 834.6993)" className="st0 st1">시</text>
        <text transform="translate(152.1967 842.5993)" className="st0 st1">청</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinjungdong"))} id="Sinjungdong" key="Sinjungdong" ref="Sinjungdong">
        <text transform="translate(166.7455 826.7902)" className="st0 st1">신</text>
        <text transform="translate(166.7455 834.6902)" className="st0 st1">중</text>
        <text transform="translate(166.7455 842.5903)" className="st0 st1">동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sangdong"))} id="Sangdong" key="Sangdong" ref="Sangdong">
        <text transform="translate(137.6283 835.5721)" className="st0 st1">상</text>
        <text transform="translate(137.6283 843.4721)" className="st0 st1">동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Songdo"))} id="Songdo" key="Songdo" ref="Songdo">
        <text transform="translate(151.8392 1099.4786)" className="st0 st1">송</text>
        <text transform="translate(151.8392 1107.3787)" className="st0 st1">도</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jeongwang"))} id="Jeongwang" key="Jeongwang" ref="Jeongwang">
        <text transform="translate(432.0863 1145.7921)" className="st0 st1">정</text>
        <text transform="translate(432.0863 1153.6921)" className="st0 st1">왕</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ungilsan1"))} id="Ungilsan1" key="Ungilsan1" ref="Ungilsan1">
        <text transform="translate(169.6888 1099.4786)" className="st0 st1">연</text>
        <text transform="translate(169.6888 1107.3787)" className="st0 st1">수</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ungilsan"))} id="Ungilsan" key="Ungilsan" ref="Ungilsan">
        <text transform="translate(1102.5878 600.6925)" className="st0 st1">운</text>
        <text transform="translate(1102.5878 608.5925)" className="st0 st1">길</text>
        <text transform="translate(1102.5878 616.4925)" className="st0 st1">산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yangsu"))} id="Yangsu" key="Yangsu" ref="Yangsu">
        <text transform="translate(1117.6132 600.6925)" className="st0 st1">양</text>
        <text transform="translate(1117.6132 608.5925)" className="st0 st1">수</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinwon"))} id="Sinwon" key="Sinwon" ref="Sinwon">
        <text transform="translate(1132.6376 600.6925)" className="st0 st1">신</text>
        <text transform="translate(1132.6376 608.5925)" className="st0 st1">원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Guksu"))} id="Guksu" key="Guksu" ref="Guksu">
        <text transform="translate(1147.663 600.6925)" className="st0 st1">국</text>
        <text transform="translate(1147.663 608.5925)" className="st0 st1">수</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Asin"))} id="Asin" key="Asin" ref="Asin">
        <text transform="translate(1162.6864 600.6925)" className="st0 st1">아</text>
        <text transform="translate(1162.6864 608.5925)" className="st0 st1">신</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Obin"))} id="Obin" key="Obin" ref="Obin">
        <text transform="translate(1177.7118 600.6925)" className="st0 st1">오</text>
        <text transform="translate(1177.7118 608.5925)" className="st0 st1">빈</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yangpyeong1"))} id="Yangpyeong1" key="Yangpyeong1" ref="Yangpyeong1">
        <text transform="translate(1192.7372 600.6925)" className="st0 st1">양</text>
        <text transform="translate(1192.7372 608.5925)" className="st0 st1">평</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Wondeok"))} id="Wondeok" key="Wondeok" ref="Wondeok">
        <text transform="translate(1207.7616 600.6925)" className="st0 st1">원</text>
        <text transform="translate(1207.7616 608.5925)" className="st0 st1">덕</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yongmun"))} id="Yongmun" key="Yongmun" ref="Yongmun">
        <text transform="translate(1222.787 600.6925)" className="st0 st1">용</text>
        <text transform="translate(1222.787 608.5925)" className="st0 st1">문</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Paldang"))} id="Paldang" key="Paldang" ref="Paldang">
        <text transform="translate(1087.2684 600.6925)" className="st0 st1">팔</text>
        <text transform="translate(1087.2684 608.5925)" className="st0 st1">당</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "CampusTown"))} id="CampusTown" key="CampusTown" ref="CampusTown">
        <text transform="translate(255.8285 1145.379)" className="st0 st1">캠</text>
        <text transform="translate(255.8285 1153.2791)" className="st0 st1">퍼</text>
        <text transform="translate(255.8285 1161.1791)" className="st0 st1">스</text>
        <text transform="translate(255.8285 1169.0791)" className="st0 st1">타</text>
        <text transform="translate(255.8285 1176.979)" className="st0 st1">운</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "KangnamUniv"))} id="KangnamUniv" key="KangnamUniv" ref="KangnamUniv">
        <text transform="translate(928.7225 1168.1075)" className="st0 st1">강</text>
        <text transform="translate(928.7225 1176.0076)" className="st0 st1">남</text>
        <text transform="translate(928.7225 1183.9076)" className="st0 st1">대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sanbon"))} id="Sanbon" key="Sanbon" ref="Sanbon">
        <text transform="translate(675.2616 1145.1974)" className="st0 st1">산</text>
        <text transform="translate(675.2616 1153.0974)" className="st0 st1">본</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Mullae"))} id="Mullae" key="Mullae" ref="Mullae">
        <text transform="translate(421.9213 808.1027)" className="st0 st1">문래</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Beomgye"))} id="Beomgye" key="Beomgye" ref="Beomgye">
        <text transform="translate(689.579 1103.5685)" className="st0 st1">범계</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Pyeongchon"))} id="Pyeongchon" key="Pyeongchon" ref="Pyeongchon">
        <text transform="translate(689.579 1088.3175)" className="st0 st1">평촌</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Indeogwon"))} id="Indeogwon" key="Indeogwon" ref="Indeogwon">
        <text transform="translate(689.579 1073.0675)" className="st0 st1">인덕원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GovernmentComplexGwacheon"))} id="GovernmentComplexGwacheon" key="GovernmentComplexGwacheon" ref="GovernmentComplexGwacheon">
        <text transform="translate(689.579 1057.8116)" className="st0 st1">정부과천청사</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gwacheon"))} id="Gwacheon" key="Gwacheon" ref="Gwacheon">
        <text transform="translate(689.579 1042.5616)" className="st0 st1">과천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SeoulGrandPark"))} id="SeoulGrandPark" key="SeoulGrandPark" ref="SeoulGrandPark">
        <text transform="translate(689.579 1027.3038)" className="st0 st1">대공원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SeoulRacecoursePark"))} id="SeoulRacecoursePark" key="SeoulRacecoursePark" ref="SeoulRacecoursePark">
        <text transform="translate(689.579 1012.0548)" className="st0 st1">경마공원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seonbawi"))} id="Seonbawi" key="Seonbawi" ref="Seonbawi">
        <text transform="translate(689.579 996.8038)" className="st0 st1">선바위</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Namtaeryeong"))} id="Namtaeryeong" key="Namtaeryeong" ref="Namtaeryeong">
        <text transform="translate(689.579 981.547)" className="st0 st1">남태령</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Geomam"))} id="Geomam" key="Geomam" ref="Geomam">
        <text transform="translate(74.4359 557.6925)" className="st0 st1">검암</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gyulhyeon"))} id="Gyulhyeon" key="Gyulhyeon" ref="Gyulhyeon">
        <text transform="translate(74.4359 626.3771)" className="st0 st1">귤현</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bakchon"))} id="Bakchon" key="Bakchon" ref="Bakchon">
        <text transform="translate(74.4359 659.2882)" className="st0 st1">박촌</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Imhak"))} id="Imhak" key="Imhak" ref="Imhak">
        <text transform="translate(74.4359 692.1993)" className="st0 st1">임학</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gyesan"))} id="Gyesan" key="Gyesan" ref="Gyesan">
        <text transform="translate(74.4359 725.1183)" className="st0 st1">계산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GyeonginNatlUnivofEducation"))} id="GyeonginNatlUnivofEducation" key="GyeonginNatlUnivofEducation" ref="GyeonginNatlUnivofEducation">
        <text transform="translate(74.4359 758.0304)" className="st0 st1">경인교대입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "CheongnaIntlCityStation"))} id="CheongnaIntlCityStation" key="CheongnaIntlCityStation" ref="CheongnaIntlCityStation">
        <text transform="translate(75.9447 539.4855)" className="st0 st1">청라국제도시</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yongmasan"))} id="Yongmasan" key="Yongmasan" ref="Yongmasan">
        <text transform="translate(999.2616 602.9288)" className="st0 st1">용마산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sagajeong"))} id="Sagajeong" key="Sagajeong" ref="Sagajeong">
        <text transform="translate(999.2616 576.5245)" className="st0 st1">사가정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Myeonmok"))} id="Myeonmok" key="Myeonmok" ref="Myeonmok">
        <text transform="translate(999.2616 547.546)" className="st0 st1">면목</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jungnang"))} id="Jungnang" key="Jungnang" ref="Jungnang">
        <text transform="translate(952.6971 533.172)" className="st0 st1">중랑</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinnae"))} id="Sinnae" key="Sinnae" ref="Sinnae">
        <text transform="translate(1045.7147 457.4913)" className="st0 st1">신내</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Changsin"))} id="Changsin" key="Changsin" ref="Changsin">
        <text transform="translate(786.6542 581.3898)" className="st0 st1">창신</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Apgujeong"))} id="Apgujeong" key="Apgujeong" ref="Apgujeong">
        <text transform="translate(798.9677 779.5177)" className="st0 st1">압구정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Saejeol"))} id="Saejeol" key="Saejeol" ref="Saejeol">
        <text transform="translate(487.3246 536.0724)" className="st0 st1">새절</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Eungam"))} id="Eungam" key="Eungam" ref="Eungam">
        <text transform="translate(487.3246 509.6984)" className="st0 st1">응암</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gupabal"))} id="Gupabal" key="Gupabal" ref="Gupabal">
        <text transform="translate(503.6517 366.7472)" className="st0 st1">구파발</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SookmyungWomensUniv"))} id="SookmyungWomensUniv" key="SookmyungWomensUniv" ref="SookmyungWomensUniv">
        <text transform="translate(662.0165 707.6759)" className="st0 st1">숙대입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Namyeong"))} id="Namyeong" key="Namyeong" ref="Namyeong">
        <text transform="translate(657.6512 724.6798)" className="st0 st1">남영</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seryu"))} id="Seryu" key="Seryu" ref="Seryu">
        <text transform="translate(790.1747 1155.4816)" className="st0 st1">세류</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GachonUniv"))} id="GachonUniv" key="GachonUniv" ref="GachonUniv">
        <text transform="translate(1084.0741 1012.7999)" className="st0 st1">가천대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jangji"))} id="Jangji" key="Jangji" ref="Jangji">
        <text transform="translate(1114.5497 957.3292)" className="st0 st1">장지</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dandaeogeori"))} id="Dandaeogeori" key="Dandaeogeori" ref="Dandaeogeori">
        <text transform="translate(1144.9891 1032.671)" className="st0 st1">단대오거리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Taepyeong"))} id="Taepyeong" key="Taepyeong" ref="Taepyeong">
        <text transform="translate(1089.6171 1036.5177)" className="st0 st1">태평</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Banghak"))} id="Banghak" key="Banghak" ref="Banghak">
        <text transform="translate(861.9227 253.8585)" className="st0 st1">방학</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dobong"))} id="Dobong" key="Dobong" ref="Dobong">
        <text transform="translate(862.0604 209.5226)" className="st0 st1">도봉</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dokbawi"))} id="Dokbawi" key="Dokbawi" ref="Dokbawi">
        <text transform="translate(547.1039 434.4816)" className="st0 st1">독바위</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinheung"))} id="Sinheung" key="Sinheung" ref="Sinheung">
        <text transform="translate(1144.5682 1052.2491)" className="st0 st1">신흥</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Geumho"))} id="Geumho" key="Geumho" ref="Geumho">
        <text transform="translate(789.7303 696.9347)" className="st0 st1">금호</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hyehwa"))} id="Hyehwa" key="Hyehwa" ref="Hyehwa">
        <text transform="translate(744.8182 571.2072)" className="st0 st1">혜화</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Achasan"))} id="Achasan" key="Achasan" ref="Achasan">
        <text transform="translate(1007.2538 683.2189)" className="st0 st1">아차산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jichuk"))} id="Jichuk" key="Jichuk" ref="Jichuk">
        <text transform="translate(503.5902 339.8673)" className="st0 st1">지축</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gusan"))} id="Gusan" key="Gusan" ref="Gusan">
        <text transform="translate(487.3314 461.13)" className="st0 st1">구산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Munjeong"))} id="Munjeong" key="Munjeong" ref="Munjeong">
        <text transform="translate(1114.5575 926.8282)" className="st0 st1">문정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Mangwolsa"))} id="Mangwolsa" key="Mangwolsa" ref="Mangwolsa">
        <text transform="translate(880.5663 83.1691)" className="st0 st1">망월사</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "NamdongInduspark"))} id="NamdongInduspark" key="NamdongInduspark" ref="NamdongInduspark">
        <text transform="translate(225.4779 1078.2042)" className="st0 st1">남동</text>
        <text transform="translate(225.4779 1086.1042)" className="st0 st1">인더스파크</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hogupo"))} id="Hogupo" key="Hogupo" ref="Hogupo">
        <text transform="translate(258.9594 1085.7189)" className="st0 st1">호구포</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "IncheonNonhyeon"))} id="IncheonNonhyeon" key="IncheonNonhyeon" ref="IncheonNonhyeon">
        <text transform="translate(290.5687 1085.7189)" className="st0 st1">인천논현</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gwanak"))} id="Gwanak" key="Gwanak" ref="Gwanak">
        <text transform="translate(499.1869 1111.7286)" className="st0 st1">관악</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Anyang"))} id="Anyang" key="Anyang" ref="Anyang">
        <text transform="translate(559.2426 1111.7286)" className="st0 st1">안양</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Myeonghak"))} id="Myeonghak" key="Myeonghak" ref="Myeonghak">
        <text transform="translate(619.598 1111.7286)" className="st0 st1">명학</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gunpo"))} id="Gunpo" key="Gunpo" ref="Gunpo">
        <text transform="translate(700.3573 1111.7286)" className="st0 st1">군포</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dangjeong"))} id="Dangjeong" key="Dangjeong" ref="Dangjeong">
        <text transform="translate(720.6688 1111.7286)" className="st0 st1">당정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Uiwang"))} id="Uiwang" key="Uiwang" ref="Uiwang">
        <text transform="translate(740.9227 1111.7286)" className="st0 st1">의왕</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SungkyunkwanUniv"))} id="SungkyunkwanUniv" key="SungkyunkwanUniv" ref="SungkyunkwanUniv">
        <text transform="translate(755.7469 1111.7286)" className="st0 st1">성균관대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sindaebang"))} id="Sindaebang" key="Sindaebang" ref="Sindaebang">
        <text transform="translate(470.9662 936.3361)" className="st0 st1">신대방</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bongcheon"))} id="Bongcheon" key="Bongcheon" ref="Bongcheon">
        <text transform="translate(555.9603 938.84)" className="st0 st1">봉천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Euljiro1ilga"))} id="Euljiro1ilga" key="Euljiro1ilga" ref="Euljiro1ilga">
        <text transform="translate(671.5243 639.88)" className="st0 st1">을지로입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jonggak"))} id="Jonggak" key="Jonggak" ref="Jonggak">
        <text transform="translate(678.6317 619.6505)" className="st0 st1">종각역</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jongno5oga"))} id="Jongno5oga" key="Jongno5oga" ref="Jongno5oga">
        <text transform="translate(732.6561 605.4894)" className="st0 st1">종로5가</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Daebang"))} id="Daebang" key="Daebang" ref="Daebang">
        <text transform="translate(512.4271 830.09)" className="st0 st1">대방</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinpung"))} id="Sinpung" key="Sinpung" ref="Sinpung">
        <text transform="translate(459.8558 883.8019)" className="st0 st1">신풍</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Namguro"))} id="Namguro" key="Namguro" ref="Namguro">
        <text transform="translate(384.9515 922.6007)" className="st0 st1">남구로</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Boramae"))} id="Boramae" key="Boramae" ref="Boramae">
        <text transform="translate(490.9633 883.6583)" className="st0 st1">보라매</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "YangcheonHyanggyo"))} id="YangcheonHyanggyo" key="YangcheonHyanggyo" ref="YangcheonHyanggyo">
        <text transform="translate(258.7406 614.8595)" className="st0 st1">양천향교</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Magongnaru"))} id="Magongnaru" key="Magongnaru" ref="Magongnaru">
        <text transform="translate(214.4369 614.8595)" className="st0 st1">마곡나루</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinbanghwa"))} id="Sinbanghwa" key="Sinbanghwa" ref="Sinbanghwa">
        <text transform="translate(187.6635 614.8654)" className="st0 st1">신방화</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "IncheonIntlAirportCargoTerminal1"))} id="IncheonIntlAirportCargoTerminal1" key="IncheonIntlAirportCargoTerminal1" ref="IncheonIntlAirportCargoTerminal1">
        <text transform="translate(138.6185 523.8781)" className="st0 st1">인천국제공항</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "IncheonIntlAirportCargoTerminal"))} id="IncheonIntlAirportCargoTerminal" key="IncheonIntlAirportCargoTerminal" ref="IncheonIntlAirportCargoTerminal">
        <text transform="translate(114.3617 516.3615)" className="st0 st1">공항화물</text>
        <text transform="translate(114.3617 524.2615)" className="st0 st1">청사</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Songjeong"))} id="Songjeong" key="Songjeong" ref="Songjeong">
        <text transform="translate(177.6615 651.3849)" className="st0 st1">송정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Magok"))} id="Magok" key="Magok" ref="Magok">
        <text transform="translate(211.1859 651.3849)" className="st0 st1">마곡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinjeong"))} id="Sinjeong" key="Sinjeong" ref="Sinjeong">
        <text transform="translate(304.0209 776.3175)" className="st0 st1">신정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Mokdong"))} id="Mokdong" key="Mokdong" ref="Mokdong">
        <text transform="translate(328.5228 776.3175)" className="st0 st1">목동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Omokgyo"))} id="Omokgyo" key="Omokgyo" ref="Omokgyo">
        <text transform="translate(357.6205 776.3175)" className="st0 st1">오목교</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yangpyeong"))} id="Yangpyeong" key="Yangpyeong" ref="Yangpyeong">
        <text transform="translate(391.1205 776.3175)" className="st0 st1">양평</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gwanghwamun"))} id="Gwanghwamun" key="Gwanghwamun" ref="Gwanghwamun">
        <text transform="translate(658.2391 601.0743)" className="st0 st1">광화문</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Itaewon"))} id="Itaewon" key="Itaewon" ref="Itaewon">
        <text transform="translate(712.5272 752.3615)" className="st0 st1">이태원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Noksapyeong"))} id="Noksapyeong" key="Noksapyeong" ref="Noksapyeong">
        <text transform="translate(688.8143 752.3927)" className="st0 st1">녹사평</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seobinggo"))} id="Seobinggo" key="Seobinggo" ref="Seobinggo">
        <text transform="translate(692.8485 808.8419)" className="st0 st1">서빙고</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gwangheungchang"))} id="Gwangheungchang" key="Gwangheungchang" ref="Gwangheungchang">
        <text transform="translate(526.0931 706.4865)" className="st0 st1">광흥창</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sangsu"))} id="Sangsu" key="Sangsu" ref="Sangsu">
        <text transform="translate(502.5941 706.4865)" className="st0 st1">상수</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Baekseok"))} id="Baekseok" key="Baekseok" ref="Baekseok">
        <text transform="translate(396.8383 337.1681)" className="st0 st1">백석</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gyeongbokgung"))} id="Gyeongbokgung" key="Gyeongbokgung" ref="Gyeongbokgung">
        <text transform="translate(650.2665 584.1642)" className="st0 st1">경복궁</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Anguk"))} id="Anguk" key="Anguk" ref="Anguk">
        <text transform="translate(688.5907 584.1466)" className="st0 st1">안국</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Myeongdong"))} id="Myeongdong" key="Myeongdong" ref="Myeongdong">
        <text transform="translate(690.7069 655.4435)" className="st0 st1">명동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "LrtUijeongbu"))} id="LrtUijeongbu" key="LrtUijeongbu" ref="LrtUijeongbu">
        <text transform="translate(772.9696 68.6573)" className="st0 st1">경전철</text>
        <text transform="translate(772.9696 76.5573)" className="st0 st1">의정부</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Beomgol"))} id="Beomgol" key="Beomgol" ref="Beomgol">
        <text transform="translate(794.1708 76.173)" className="st0 st1">범골</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "EwhaWomansUniv"))} id="EwhaWomansUniv" key="EwhaWomansUniv" ref="EwhaWomansUniv">
        <text transform="translate(570.973 668.4698)" className="st0 st1">이대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinchon"))} id="Sinchon" key="Sinchon" ref="Sinchon">
        <text transform="translate(545.3705 668.4698)" className="st0 st1">신촌</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SeoulNatlUniv"))} id="SeoulNatlUniv" key="SeoulNatlUniv" ref="SeoulNatlUniv">
        <text transform="translate(580.7113 938.84)" className="st0 st1">서울대입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SportsComplex"))} id="SportsComplex" key="SportsComplex" ref="SportsComplex">
        <text transform="translate(940.2528 837.0118)" className="st0 st1">종합운동장</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sincheon"))} id="Sincheon" key="Sincheon" ref="Sincheon">
        <text transform="translate(984.3182 837.0118)" className="st0 st1">신천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Guui"))} id="Guui" key="Guui" ref="Guui">
        <text transform="translate(986.1659 730.9562)" className="st0 st1">구의</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yongdu"))} id="Yongdu" key="Yongdu" ref="Yongdu">
        <text transform="translate(854.2069 598.9894)" className="st0 st1">용두</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sangwangsimni"))} id="Sangwangsimni" key="Sangwangsimni" ref="Sangwangsimni">
        <text transform="translate(811.2499 625.713)" className="st0 st1">상왕십리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Baegun"))} id="Baegun" key="Baegun" ref="Baegun">
        <text transform="translate(93.6683 908.3273)" className="st0 st1">백운</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Anam"))} id="Anam" key="Anam" ref="Anam">
        <text transform="translate(817.7626 562.1447)" className="st0 st1">안암</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bomun"))} id="Bomun" key="Bomun" ref="Bomun">
        <text transform="translate(788.6659 562.1447)" className="st0 st1">보문</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sujin"))} id="Sujin" key="Sujin" ref="Sujin">
        <text transform="translate(1117.7938 1067.3058)" className="st0 st1">수진</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "DonggukUniv"))} id="DonggukUniv" key="DonggukUniv" ref="DonggukUniv">
        <text transform="translate(740.4032 660.8849)" className="st0 st1">동대입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Unseo"))} id="Unseo" key="Unseo" ref="Unseo">
        <text transform="translate(93.0424 523.8722)" className="st0 st1">운서</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Balgok"))} id="Balgok" key="Balgok" ref="Balgok">
        <text transform="translate(834.3466 90.2462)" className="st0 st1">발곡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "YangcheonguOffice"))} id="YangcheonguOffice" key="YangcheonguOffice" ref="YangcheonguOffice">
        <text transform="translate(334.5287 832.7032)" className="st0 st1">양천구청</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Oryudong"))} id="Oryudong" key="Oryudong" ref="Oryudong">
        <text transform="translate(273.8597 904.9142)" className="st0 st1">오류동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gaebong"))} id="Gaebong" key="Gaebong" ref="Gaebong">
        <text transform="translate(308.5941 890.5294)" className="st0 st1">개봉</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Guil"))} id="Guil" key="Guil" ref="Guil">
        <text transform="translate(343.3285 876.1427)" className="st0 st1">구일</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yeongdeungpo"))} id="Yeongdeungpo" key="Yeongdeungpo" ref="Yeongdeungpo">
        <text transform="translate(461.0404 827.3663)" className="st0 st1">영등포</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Nakseongdae"))} id="Nakseongdae" key="Nakseongdae" ref="Nakseongdae">
        <text transform="translate(626.4066 952.9073)" className="st0 st1">낙성대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jangseungbaegi"))} id="Jangseungbaegi" key="Jangseungbaegi" ref="Jangseungbaegi">
        <text transform="translate(536.3138 855.7374)" className="st0 st1">장승배기</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seocho"))} id="Seocho" key="Seocho" ref="Seocho">
        <text transform="translate(750.3729 914.8907)" className="st0 st1">서초</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yeoksam"))} id="Yeoksam" key="Yeoksam" ref="Yeoksam">
        <text transform="translate(841.0106 877.3517)" className="st0 st1">역삼</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Samseong"))} id="Samseong" key="Samseong" ref="Samseong">
        <text transform="translate(918.3514 845.3156)" className="st0 st1">삼성</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Naebang"))} id="Naebang" key="Naebang" ref="Naebang">
        <text transform="translate(707.8348 915.2042)" className="st0 st1">내방</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Maebong"))} id="Maebong" key="Maebong" ref="Maebong">
        <text transform="translate(866.4755 918.6427)" className="st0 st1">매봉</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Daechi"))} id="Daechi" key="Daechi" ref="Daechi">
        <text transform="translate(917.5995 897.4679)" className="st0 st1">대치</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hangnyeoul"))} id="Hangnyeoul" key="Hangnyeoul" ref="Hangnyeoul">
        <text transform="translate(933.3632 888.6437)" className="st0 st1">학여울</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gaepodong"))} id="Gaepodong" key="Gaepodong" ref="Gaepodong">
        <text transform="translate(930.5643 924.6866)" className="st0 st1">개포동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Banpo"))} id="Banpo" key="Banpo" ref="Banpo">
        <text transform="translate(763.3944 841.714)" className="st0 st1">반포</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Nonhyeon"))} id="Nonhyeon" key="Nonhyeon" ref="Nonhyeon">
        <text transform="translate(792.5858 830.3976)" className="st0 st1">논현</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinnonhyeon"))} id="Sinnonhyeon" key="Sinnonhyeon" ref="Sinnonhyeon">
        <text transform="translate(807.8163 865.4386)" className="st0 st1">신논현</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinbanpo"))} id="Sinbanpo" key="Sinbanpo" ref="Sinbanpo">
        <text transform="translate(723.537 873.8068)" className="st0 st1">신반포</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gubanpo"))} id="Gubanpo" key="Gubanpo" ref="Gubanpo">
        <text transform="translate(697.9911 884.3849)" className="st0 st1">구반포</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hakdong"))} id="Hakdong" key="Hakdong" ref="Hakdong">
        <text transform="translate(821.8788 819.0372)" className="st0 st1">학동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinsa"))} id="Sinsa" key="Sinsa" ref="Sinsa">
        <text transform="translate(788.1005 807.3068)" className="st0 st1">신사</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jamwon"))} id="Jamwon" key="Jamwon" ref="Jamwon">
        <text transform="translate(760.9706 818.6056)" className="st0 st1">잠원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ssangmun"))} id="Ssangmun" key="Ssangmun" ref="Ssangmun">
        <text transform="translate(837.9159 328.844)" className="st0 st1">쌍문</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sanggye"))} id="Sanggye" key="Sanggye" ref="Sanggye">
        <text transform="translate(951.1698 281.9347)" className="st0 st1">상계</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dolgoji"))} id="Dolgoji" key="Dolgoji" ref="Dolgoji">
        <text transform="translate(891.8915 461.8497)" className="st0 st1">돌곶이</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sangwolgok"))} id="Sangwolgok" key="Sangwolgok" ref="Sangwolgok">
        <text transform="translate(866.8143 472.2335)" className="st0 st1">상월곡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Cheonwang"))} id="Cheonwang" key="Cheonwang" ref="Cheonwang">
        <text transform="translate(249.766 921.631)" className="st0 st1">천왕</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gwangmyeongsageori"))} id="Gwangmyeongsageori" key="Gwangmyeongsageori" ref="Gwangmyeongsageori">
        <text transform="translate(293.5443 939.7677)" className="st0 st1">광명사거리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Cheolsan"))} id="Cheolsan" key="Cheolsan" ref="Cheolsan">
        <text transform="translate(337.347 957.9113)" className="st0 st1">철산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dapsimni"))} id="Dapsimni" key="Dapsimni" ref="Dapsimni">
        <text transform="translate(891.2655 617.3282)" className="st0 st1">답십리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Janghanpyeong"))} id="Janghanpyeong" key="Janghanpyeong" ref="Janghanpyeong">
        <text transform="translate(927.871 632.5148)" className="st0 st1">장한평</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gwangnaru"))} id="Gwangnaru" key="Gwangnaru" ref="Gwangnaru">
        <text transform="translate(1041.4052 700.6486)" className="st0 st1">광나루</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Heukseok"))} id="Heukseok" key="Heukseok" ref="Heukseok">
        <text transform="translate(614.0482 858.0861)" className="st0 st1">흑석</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Nodeul"))} id="Nodeul" key="Nodeul" ref="Nodeul">
        <text transform="translate(584.6439 845.9044)" className="st0 st1">노들</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "YeongdeungpoMarket"))} id="YeongdeungpoMarket" key="YeongdeungpoMarket" ref="YeongdeungpoMarket">
        <text transform="translate(450.4623 786.9825)" className="st0 st1">영등포시장</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Cheonggyesan"))} id="Cheonggyesan" key="Cheonggyesan" ref="Cheonggyesan">
        <text transform="translate(896.7645 1058.3624)" className="st0 st1">청계산입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Pangyo"))} id="Pangyo" key="Pangyo" ref="Pangyo">
        <text transform="translate(1013.1346 1106.5685)" className="st0 st1">판교</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gaerong"))} id="Gaerong" key="Gaerong" ref="Gaerong">
        <text transform="translate(1132.4061 879.6427)" className="st0 st1">개롱</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Geoyeo"))} id="Geoyeo" key="Geoyeo" ref="Geoyeo">
        <text transform="translate(1160.6444 891.3429)" className="st0 st1">거여</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jegidong"))} id="Jegidong" key="Jegidong" ref="Jegidong">
        <text transform="translate(826.6044 581.4777)" className="st0 st1">제기동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hwarangdae"))} id="Hwarangdae" key="Hwarangdae" ref="Hwarangdae">
        <text transform="translate(969.8944 429.5343)" className="st0 st1">화랑대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gaehwa"))} id="Gaehwa" key="Gaehwa" ref="Gaehwa">
        <text transform="translate(134.14 583.5577)" className="st0 st1">개화</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Daemosan"))} id="Daemosan" key="Daemosan" ref="Daemosan">
        <text transform="translate(948.701 917.171)" className="st0 st1">대모산입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Namhansanseong"))} id="Namhansanseong" key="Namhansanseong" ref="Namhansanseong">
        <text transform="translate(1129.3563 1006.9806)" className="st0 st1">남한산성입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sanseong"))} id="Sanseong" key="Sanseong" ref="Sanseong">
        <text transform="translate(1112.1952 999.3146)" className="st0 st1">산성</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Godeok"))} id="Godeok" key="Godeok" ref="Godeok">
        <text transform="translate(1189.4667 675.1017)" className="st0 st1">고덕</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sangildong"))} id="Sangildong" key="Sangildong" ref="Sangildong">
        <text transform="translate(1223.0487 661.1915)" className="st0 st1">상일동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bangbae"))} id="Bangbae" key="Bangbae" ref="Bangbae">
        <text transform="translate(726.4237 955.3624)" className="st0 st1">방배</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sindaebangsamgeori"))} id="Sindaebangsamgeori" key="Sindaebangsamgeori" ref="Sindaebangsamgeori">
        <text transform="translate(520.8383 882.881)" className="st0 st1">신대방삼거리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Cheongdam"))} id="Cheongdam" key="Cheongdam" ref="Cheongdam">
        <text transform="translate(880.7245 796.1652)" className="st0 st1">청담</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Guryong"))} id="Guryong" key="Guryong" ref="Guryong">
        <text transform="translate(908.663 932.1075)" className="st0 st1">구룡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sapyeong"))} id="Sapyeong" key="Sapyeong" ref="Sapyeong">
        <text transform="translate(771.16 866.7296)" className="st0 st1">사평</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Daeheung"))} id="Daeheung" key="Daeheung" ref="Daeheung">
        <text transform="translate(552.9603 710.6827)" className="st0 st1">대흥</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hyochangpark"))} id="Hyochangpark" key="Hyochangpark" ref="Hyochangpark">
        <text transform="translate(619.6166 721.6671)" className="st0 st1">효창공원앞</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hoehyeon"))} id="Hoehyeon" key="Hoehyeon" ref="Hoehyeon">
        <text transform="translate(668.2919 662.4005)" className="st0 st1">회현</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ahyeon"))} id="Ahyeon" key="Ahyeon" ref="Ahyeon">
        <text transform="translate(603.4515 666.7609)" className="st0 st1">아현</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ttukseom"))} id="Ttukseom" key="Ttukseom" ref="Ttukseom">
        <text transform="translate(872.4559 695.8458)" className="st0 st1">뚝섬</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "HanyangUniv"))} id="HanyangUniv" key="HanyangUniv" ref="HanyangUniv">
        <text transform="translate(870.9344 665.6212)" className="st0 st1">한양대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seonyudo"))} id="Seonyudo" key="Seonyudo" ref="Seonyudo">
        <text transform="translate(420.4056 723.2706)" className="st0 st1">선유도</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bonghwasan"))} id="Bonghwasan" key="Bonghwasan" ref="Bonghwasan">
        <text transform="translate(1004.6229 435.257)" className="st0 st1">봉화산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "HankukUnivofForeignStudies"))} id="HankukUnivofForeignStudies" key="HankukUnivofForeignStudies" ref="HankukUnivofForeignStudies">
        <text transform="translate(893.3124 517.6534)" className="st0 st1">외대앞</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "HansungUniv"))} id="HansungUniv" key="HansungUniv" ref="HansungUniv">
        <text transform="translate(755.1346 544.089)" className="st0 st1">한성대입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SungshinWomensUniv"))} id="SungshinWomensUniv" key="SungshinWomensUniv" ref="SungshinWomensUniv">
        <text transform="translate(780.286 518.923)" className="st0 st1">성신여대입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gireum"))} id="Gireum" key="Gireum" ref="Gireum">
        <text transform="translate(809.5702 489.632)" className="st0 st1">길음</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Uijeongbu"))} id="Uijeongbu" key="Uijeongbu" ref="Uijeongbu">
        <text transform="translate(810.5536 96.9786)" className="st0 st1">의정부</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ganeung"))} id="Ganeung" key="Ganeung" ref="Ganeung">
        <text transform="translate(799.1678 108.3645)" className="st0 st1">가능</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Nogyang"))} id="Nogyang" key="Nogyang" ref="Nogyang">
        <text transform="translate(787.7821 119.7511)" className="st0 st1">녹양</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yangju"))} id="Yangju" key="Yangju" ref="Yangju">
        <text transform="translate(776.3964 131.1368)" className="st0 st1">양주</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Deokgye"))} id="Deokgye" key="Deokgye" ref="Deokgye">
        <text transform="translate(765.0106 142.5226)" className="st0 st1">덕계</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Deokjeong"))} id="Deokjeong" key="Deokjeong" ref="Deokjeong">
        <text transform="translate(753.6249 153.9083)" className="st0 st1">덕정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jihaeng"))} id="Jihaeng" key="Jihaeng" ref="Jihaeng">
        <text transform="translate(742.2382 165.2941)" className="st0 st1">지행</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dongducheonjungang"))} id="Dongducheonjungang" key="Dongducheonjungang" ref="Dongducheonjungang">
        <text transform="translate(730.8524 176.6798)" className="st0 st1">동두천중앙</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bosan"))} id="Bosan" key="Bosan" ref="Bosan">
        <text transform="translate(719.4667 188.0656)" className="st0 st1">보산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dongducheon"))} id="Dongducheon" key="Dongducheon" ref="Dongducheon">
        <text transform="translate(708.08 199.4513)" className="st0 st1">동두천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Soyosan"))} id="Soyosan" key="Soyosan" ref="Soyosan">
        <text transform="translate(695.1903 210.837)" className="st0 st1">소요산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Tapseok"))} id="Tapseok" key="Tapseok" ref="Tapseok">
        <text transform="translate(642.1503 210.5558)" className="st0 st1">탑석</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Songsan"))} id="Songsan" key="Songsan" ref="Songsan">
        <text transform="translate(654.5829 198.1241)" className="st0 st1">송산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "eoryong"))} id="eoryong" key="eoryong" ref="eoryong">
        <text transform="translate(667.0145 185.6925)" className="st0 st1">어룡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "gonjae"))} id="gonjae" key="gonjae" ref="gonjae">
        <text transform="translate(679.4452 173.2609)" className="st0 st1">곤제</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "hyoja"))} id="hyoja" key="hyoja" ref="hyoja">
        <text transform="translate(691.8778 160.8282)" className="st0 st1">효자</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GyeonggiProvincialGovernmentNorthernOffice"))} id="GyeonggiProvincialGovernmentNorthernOffice" key="GyeonggiProvincialGovernmentNorthernOffice" ref="GyeonggiProvincialGovernmentNorthernOffice">
        <text transform="translate(704.3094 148.3966)" className="st0 st1">경기도청</text>
        <text transform="translate(704.3094 156.2966)" className="st0 st1">북부청사</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "saemal"))} id="saemal" key="saemal" ref="saemal">
        <text transform="translate(716.7352 135.965)" className="st0 st1">새말</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dongo"))} id="Dongo" key="Dongo" ref="Dongo">
        <text transform="translate(729.1669 123.5392)" className="st0 st1">동오</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "UijeongbuJungang"))} id="UijeongbuJungang" key="UijeongbuJungang" ref="UijeongbuJungang">
        <text transform="translate(741.5995 111.1075)" className="st0 st1">의정부중앙</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Heungseon"))} id="Heungseon" key="Heungseon" ref="Heungseon">
        <text transform="translate(754.0321 98.6749)" className="st0 st1">흥선</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "UijeongbuCityHall"))} id="UijeongbuCityHall" key="UijeongbuCityHall" ref="UijeongbuCityHall">
        <text transform="translate(763.5253 89.8507)" className="st0 st1">의정부시청</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yatap"))} id="Yatap" key="Yatap" ref="Yatap">
        <text transform="translate(1094.1073 1077.0128)" className="st0 st1">야탑</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Imae"))} id="Imae" key="Imae" ref="Imae">
        <text transform="translate(1082.1708 1088.9445)" className="st0 st1">이매</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dunjeon"))} id="Dunjeon" key="Dunjeon" ref="Dunjeon">
        <text transform="translate(1121.7157 1106.173)" className="st0 st1">둔전</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bopyeong"))} id="Bopyeong" key="Bopyeong" ref="Bopyeong">
        <text transform="translate(1109.5399 1118.3478)" className="st0 st1">보평</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gojin"))} id="Gojin" key="Gojin" ref="Gojin">
        <text transform="translate(1097.371 1130.5167)" className="st0 st1">고진</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gimnyangjang"))} id="Gimnyangjang" key="Gimnyangjang" ref="Gimnyangjang">
        <text transform="translate(1073.0262 1154.8605)" className="st0 st1">김량장</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "StadiumSongdamCollege"))} id="StadiumSongdamCollege" key="StadiumSongdamCollege" ref="StadiumSongdamCollege">
        <text transform="translate(1085.1962 1142.6925)" className="st0 st1">운동장 · 송담대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seohyeon"))} id="Seohyeon" key="Seohyeon" ref="Seohyeon">
        <text transform="translate(1069.7206 1101.4825)" className="st0 st1">서현</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Migeum"))} id="Migeum" key="Migeum" ref="Migeum">
        <text transform="translate(1033.5135 1137.5939)" className="st0 st1">미금</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "JeondaeEverland"))} id="JeondaeEverland" key="JeondaeEverland" ref="JeondaeEverland">
        <text transform="translate(1133.8778 1094.0109)" className="st0 st1">전대 · 에버랜드</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yeouinaru"))} id="Yeouinaru" key="Yeouinaru" ref="Yeouinaru">
        <text transform="translate(535.2054 770.4552)" className="st0 st1">여의나루</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Mapo"))} id="Mapo" key="Mapo" ref="Mapo">
        <text transform="translate(577.6615 727.9991)" className="st0 st1">마포</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Haengdang"))} id="Haengdang" key="Haengdang" ref="Haengdang">
        <text transform="translate(827.621 663.5157)" className="st0 st1">행당</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jeungsan"))} id="Jeungsan" key="Jeungsan" ref="Jeungsan">
        <text transform="translate(479.2523 571.1251)" className="st0 st1">증산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yeokchon"))} id="Yeokchon" key="Yeokchon" ref="Yeokchon">
        <text transform="translate(513.5922 481.5597)" className="st0 st1">역촌</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sangdo"))} id="Sangdo" key="Sangdo" ref="Sangdo">
        <text transform="translate(582.7338 865.4386)" className="st0 st1">상도</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SoongsilUniv"))} id="SoongsilUniv" key="SoongsilUniv" ref="SoongsilUniv">
        <text transform="translate(606.9974 889.4269)" className="st0 st1">숭실대입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Namseong"))} id="Namseong" key="Namseong" ref="Namseong">
        <text transform="translate(650.2245 932.6525)" className="st0 st1">남성</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Saetgang"))} id="Saetgang" key="Saetgang" ref="Saetgang">
        <text transform="translate(529.5365 810.9698)" className="st0 st1">샛강</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "NationalAssembly"))} id="NationalAssembly" key="NationalAssembly" ref="NationalAssembly">
        <text transform="translate(491.3148 772.7482)" className="st0 st1">국회의사당</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinmokdong"))} id="Sinmokdong" key="Sinmokdong" ref="Sinmokdong">
        <text transform="translate(391.8402 711.3087)" className="st0 st1">신목동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yeomchang"))} id="Yeomchang" key="Yeomchang" ref="Yeomchang">
        <text transform="translate(374.5355 694.2609)" className="st0 st1">염창</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Deungchon"))} id="Deungchon" key="Deungchon" ref="Deungchon">
        <text transform="translate(354.1381 673.8556)" className="st0 st1">등촌</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jeungmi"))} id="Jeungmi" key="Jeungmi" ref="Jeungmi">
        <text transform="translate(333.8324 653.546)" className="st0 st1">증미</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gayang"))} id="Gayang" key="Gayang" ref="Gayang">
        <text transform="translate(316.3783 636.0909)" className="st0 st1">가양</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Soraepogu"))} id="Soraepogu" key="Soraepogu" ref="Soraepogu">
        <text transform="translate(324.9467 1085.6925)" className="st0 st1">소래포구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Wolgot"))} id="Wolgot" key="Wolgot" ref="Wolgot">
        <text transform="translate(368.5492 1088.9562)" className="st0 st1">월곶</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dalwol"))} id="Dalwol" key="Dalwol" ref="Dalwol">
        <text transform="translate(391.1771 1111.0646)" className="st0 st1">달월</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Songpa"))} id="Songpa" key="Songpa" ref="Songpa">
        <text transform="translate(1067.3837 879.4728)" className="st0 st1">송파</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Mangwon"))} id="Mangwon" key="Mangwon" ref="Mangwon">
        <text transform="translate(466.764 670.1866)" className="st0 st1">망원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "MapoguOffice"))} id="MapoguOffice" key="MapoguOffice" ref="MapoguOffice">
        <text transform="translate(442.4828 642.8976)" className="st0 st1">마포구청</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Muakjae"))} id="Muakjae" key="Muakjae" ref="Muakjae">
        <text transform="translate(585.0648 567.8185)" className="st0 st1">무악재</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hongje"))} id="Hongje" key="Hongje" ref="Hongje">
        <text transform="translate(563.3627 545.9542)" className="st0 st1">홍제</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dongnimmun"))} id="Dongnimmun" key="Dongnimmun" ref="Dongnimmun">
        <text transform="translate(615.5453 598.3068)" className="st0 st1">독립문</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Aeogae"))} id="Aeogae" key="Aeogae" ref="Aeogae">
        <text transform="translate(618.6469 685.504)" className="st0 st1">애오개</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "WorldCupStadium"))} id="WorldCupStadium" key="WorldCupStadium" ref="WorldCupStadium">
        <text transform="translate(434.9164 615.4552)" className="st0 st1">월드컵경기장</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sunae"))} id="Sunae" key="Sunae" ref="Sunae">
        <text transform="translate(1057.1874 1113.9142)" className="st0 st1">수내</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dorimcheon"))} id="Dorimcheon" key="Dorimcheon" ref="Dorimcheon">
        <text transform="translate(374.4613 818.5802)" className="st0 st1">도림천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gangmae"))} id="Gangmae" key="Gangmae" ref="Gangmae">
        <text transform="translate(373.265 509.6857)" className="st0 st1">강매</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Susaek"))} id="Susaek" key="Susaek" ref="Susaek">
        <text transform="translate(433.3324 569.7531)" className="st0 st1">수색</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hannam"))} id="Hannam" key="Hannam" ref="Hannam">
        <text transform="translate(761.0575 761.4923)" className="st0 st1">한남</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Eungbong"))} id="Eungbong" key="Eungbong" ref="Eungbong">
        <text transform="translate(836.1512 686.4015)" className="st0 st1">응봉</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sillim"))} id="Sillim" key="Sillim" ref="Sillim">
        <text transform="translate(528.5287 938.8146)" className="st0 st1">신림</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dongam"))} id="Dongam" key="Dongam" ref="Dongam">
        <text transform="translate(66.7377 896.8781)" className="st0 st1">동암</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Singeumho"))} id="Singeumho" key="Singeumho" ref="Singeumho">
        <text transform="translate(798.2098 664.004)" className="st0 st1">신금호</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Majang"))} id="Majang" key="Majang" ref="Majang">
        <text transform="translate(866.2372 624.8868)" className="st0 st1">마장</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "AirportMarket"))} id="AirportMarket" key="AirportMarket" ref="AirportMarket">
        <text transform="translate(174.6918 628.8947)" className="st0 st1">공항시장</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seodaemun"))} id="Seodaemun" key="Seodaemun" ref="Seodaemun">
        <text transform="translate(617.8002 624.0538)" className="st0 st1">서대문</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinimun"))} id="Sinimun" key="Sinimun" ref="Sinimun">
        <text transform="translate(915.4833 495.5314)" className="st0 st1">신이문</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Miasamgeori"))} id="Miasamgeori" key="Miasamgeori" ref="Miasamgeori">
        <text transform="translate(838.6932 459.8585)" className="st0 st1">미아사거리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Macheon"))} id="Macheon" key="Macheon" ref="Macheon">
        <text transform="translate(1200.8905 889.0197)" className="st0 st1">마천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Chunui"))} id="Chunui" key="Chunui" ref="Chunui">
        <text transform="translate(189.9613 849.1359)" className="st0 st1">춘의</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hwaseo"))} id="Hwaseo" key="Hwaseo" ref="Hwaseo">
        <text transform="translate(786.6737 1118.2286)" className="st0 st1">화서</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gajwa"))} id="Gajwa" key="Gajwa" ref="Gajwa">
        <text transform="translate(474.8744 611.84)" className="st0 st1">가좌</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SogangUniv"))} id="SogangUniv" key="SogangUniv" ref="SogangUniv">
        <text transform="translate(544.4047 681.3712)" className="st0 st1">서강대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "TtukseomPark"))} id="TtukseomPark" key="TtukseomPark" ref="TtukseomPark">
        <text transform="translate(940.2401 761.049)" className="st0 st1">뚝섬유원지</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "ChildrensGrandPark"))} id="ChildrensGrandPark" key="ChildrensGrandPark" ref="ChildrensGrandPark">
        <text transform="translate(965.2235 700.8429)" className="st0 st1">어린이대공원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Junggok"))} id="Junggok" key="Junggok" ref="Junggok">
        <text transform="translate(992.455 635.2316)" className="st0 st1">중곡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Galmae"))} id="Galmae" key="Galmae" ref="Galmae">
        <text transform="translate(1067.0897 396.6526)" className="st0 st1">갈매</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Toegyewon"))} id="Toegyewon" key="Toegyewon" ref="Toegyewon">
        <text transform="translate(1079.5028 366.3839)" className="st0 st1">퇴계원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Byeollae"))} id="Byeollae" key="Byeollae" ref="Byeollae">
        <text transform="translate(1073.3524 381.5157)" className="st0 st1">별내</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Wolgok"))} id="Wolgok" key="Wolgok" ref="Wolgok">
        <text transform="translate(842.6083 495.6193)" className="st0 st1">월곡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "KoreaUniv"))} id="KoreaUniv" key="KoreaUniv" ref="KoreaUniv">
        <text transform="translate(818.6522 539.2159)" className="st0 st1">고려대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Beotigogae"))} id="Beotigogae" key="Beotigogae" ref="Beotigogae">
        <text transform="translate(730.1385 696.1583)" className="st0 st1">버티고개</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Mongchontoseong"))} id="Mongchontoseong" key="Mongchontoseong" ref="Mongchontoseong">
        <text transform="translate(1072.6698 811.6027)" className="st0 st1">몽촌토성</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GangdongguOffice"))} id="GangdongguOffice" key="GangdongguOffice" ref="GangdongguOffice">
        <text transform="translate(1093.1132 765.2765)" className="st0 st1">강동구청</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Amsa"))} id="Amsa" key="Amsa" ref="Amsa">
        <text transform="translate(1122.7469 693.7228)" className="st0 st1">암사</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hangangjin"))} id="Hangangjin" key="Hangangjin" ref="Hangangjin">
        <text transform="translate(721.8885 729.4581)" className="st0 st1">한강진</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gildong"))} id="Gildong" key="Gildong" ref="Gildong">
        <text transform="translate(1156.3417 738.5021)" className="st0 st1">길동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dunchondong"))} id="Dunchondong" key="Dunchondong" ref="Dunchondong">
        <text transform="translate(1141.3798 774.8517)" className="st0 st1">둔촌동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "OlympicPark"))} id="OlympicPark" key="OlympicPark" ref="OlympicPark">
        <text transform="translate(1124.6776 815.548)" className="st0 st1">올림픽공원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bangi"))} id="Bangi" key="Bangi" ref="Bangi">
        <text transform="translate(1112.0458 846.3185)" className="st0 st1">방이</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gubeundari"))} id="Gubeundari" key="Gubeundari" ref="Gubeundari">
        <text transform="translate(1168.2177 709.8361)" className="st0 st1">굽은다리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Myeongil"))} id="Myeongil" key="Myeongil" ref="Myeongil">
        <text transform="translate(1176.8026 689.1134)" className="st0 st1">명일</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Banghwa"))} id="Banghwa" key="Banghwa" ref="Banghwa">
        <text transform="translate(183.7484 582.7433)" className="st0 st1">방화</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gaehwasan"))} id="Gaehwasan" key="Gaehwasan" ref="Gaehwasan">
        <text transform="translate(174.4301 605.2452)" className="st0 st1">개화산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Suyu"))} id="Suyu" key="Suyu" ref="Suyu">
        <text transform="translate(818.7841 363.9923)" className="st0 st1">수유</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Daehwa"))} id="Daehwa" key="Daehwa" ref="Daehwa">
        <text transform="translate(333.683 375.8468)" className="st0 st1">대화</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Juyeop"))} id="Juyeop" key="Juyeop" ref="Juyeop">
        <text transform="translate(341.3861 357.6085)" className="st0 st1">주엽</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jeongbalsan"))} id="Jeongbalsan" key="Jeongbalsan" ref="Jeongbalsan">
        <text transform="translate(343.266 339.3722)" className="st0 st1">정발산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Madu"))} id="Madu" key="Madu" ref="Madu">
        <text transform="translate(376.183 337.0363)" className="st0 st1">마두</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Goksan"))} id="Goksan" key="Goksan" ref="Goksan">
        <text transform="translate(435.4496 315.0968)" className="st0 st1">곡산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Neunggok"))} id="Neunggok" key="Neunggok" ref="Neunggok">
        <text transform="translate(410.0219 377.4327)" className="st0 st1">능곡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Haengsin"))} id="Haengsin" key="Haengsin" ref="Haengsin">
        <text transform="translate(391.9594 421.0343)" className="st0 st1">행신</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hwajeon"))} id="Hwajeon" key="Hwajeon" ref="Hwajeon">
        <text transform="translate(372.6625 467.5558)" className="st0 st1">화전</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jangam"))} id="Jangam" key="Jangam" ref="Jangam">
        <text transform="translate(901.3544 130.2345)" className="st0 st1">장암</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Guri"))} id="Guri" key="Guri" ref="Guri">
        <text transform="translate(1061.6542 523.5656)" className="st0 st1">구리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Donong"))} id="Donong" key="Donong" ref="Donong">
        <text transform="translate(1067.6346 537.9689)" className="st0 st1">도농</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yangjeong"))} id="Yangjeong" key="Yangjeong" ref="Yangjeong">
        <text transform="translate(1073.6024 552.3741)" className="st0 st1">양정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Deokso"))} id="Deokso" key="Deokso" ref="Deokso">
        <text transform="translate(1079.5712 566.7794)" className="st0 st1">덕소</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dosim"))} id="Dosim" key="Dosim" ref="Dosim">
        <text transform="translate(1085.8661 581.1837)" className="st0 st1">도심</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yangwon"))} id="Yangwon" key="Yangwon" ref="Yangwon">
        <text transform="translate(1055.704 509.1593)" className="st0 st1">양원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Chuncheon"))} id="Chuncheon" key="Chuncheon" ref="Chuncheon">
        <text transform="translate(992.1288 133.298)" className="st0 st1">춘천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Namchuncheon"))} id="Namchuncheon" key="Namchuncheon" ref="Namchuncheon">
        <text transform="translate(998.5604 148.8224)" className="st0 st1">남춘천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gimyujeong"))} id="Gimyujeong" key="Gimyujeong" ref="Gimyujeong">
        <text transform="translate(1004.994 164.3488)" className="st0 st1">김유정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gangchon"))} id="Gangchon" key="Gangchon" ref="Gangchon">
        <text transform="translate(1011.4257 179.8741)" className="st0 st1">강촌</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Baegyangri"))} id="Baegyangri" key="Baegyangri" ref="Baegyangri">
        <text transform="translate(1017.8563 197.548)" className="st0 st1">백양리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gulbongsan"))} id="Gulbongsan" key="Gulbongsan" ref="Gulbongsan">
        <text transform="translate(1024.2889 210.9259)" className="st0 st1">굴봉산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gapyeong"))} id="Gapyeong" key="Gapyeong" ref="Gapyeong">
        <text transform="translate(1030.7206 226.4523)" className="st0 st1">가평</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sangcheon"))} id="Sangcheon" key="Sangcheon" ref="Sangcheon">
        <text transform="translate(1037.1532 241.9777)" className="st0 st1">상천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Cheongpyeong"))} id="Cheongpyeong" key="Cheongpyeong" ref="Cheongpyeong">
        <text transform="translate(1043.5848 257.4972)" className="st0 st1">청평</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Daeseongri"))} id="Daeseongri" key="Daeseongri" ref="Daeseongri">
        <text transform="translate(1050.0165 273.0227)" className="st0 st1">대성리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Maseok"))} id="Maseok" key="Maseok" ref="Maseok">
        <text transform="translate(1056.4423 288.549)" className="st0 st1">마석</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Cheonmasan"))} id="Cheonmasan" key="Cheonmasan" ref="Cheonmasan">
        <text transform="translate(1062.8759 304.0753)" className="st0 st1">천마산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "PyeongnaeHopyeong"))} id="PyeongnaeHopyeong" key="PyeongnaeHopyeong" ref="PyeongnaeHopyeong">
        <text transform="translate(1069.3075 319.5997)" className="st0 st1">평내호평</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Geumgok"))} id="Geumgok" key="Geumgok" ref="Geumgok">
        <text transform="translate(1075.7323 335.1202)" className="st0 st1">금곡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Wolgye"))} id="Wolgye" key="Wolgye" ref="Wolgye">
        <text transform="translate(897.5272 382.2102)" className="st0 st1">월계</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Nokcheon"))} id="Nokcheon" key="Nokcheon" ref="Nokcheon">
        <text transform="translate(879.3817 338.4532)" className="st0 st1">녹천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Danggogae"))} id="Danggogae" key="Danggogae" ref="Danggogae">
        <text transform="translate(980.4276 238.5284)" className="st0 st1">당고개</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Kkachiul"))} id="Kkachiul" key="Kkachiul" ref="Kkachiul">
        <text transform="translate(205.3226 883.4913)" className="st0 st1">까치울</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "BucheonStadium"))} id="BucheonStadium" key="BucheonStadium" ref="BucheonStadium">
        <text transform="translate(198.8842 865.8341)" className="st0 st1">부천종합운동장</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Doksan"))} id="Doksan" key="Doksan" ref="Doksan">
        <text transform="translate(417.8304 999.2355)" className="st0 st1">독산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Incheon"))} id="Incheon" key="Incheon" ref="Incheon">
        <text transform="translate(37.9779 782.6886)" className="st0 st1">인천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dongincheon"))} id="Dongincheon" key="Dongincheon" ref="Dongincheon">
        <text transform="translate(44.5912 798.7091)" className="st0 st1">동인천</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dowon"))} id="Dowon" key="Dowon" ref="Dowon">
        <text transform="translate(51.2045 814.7306)" className="st0 st1">도원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jemulpo"))} id="Jemulpo" key="Jemulpo" ref="Jemulpo">
        <text transform="translate(57.8246 830.7511)" className="st0 st1">제물포</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dohwa"))} id="Dohwa" key="Dohwa" ref="Dohwa">
        <text transform="translate(64.4379 846.7716)" className="st0 st1">도화</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Juan"))} id="Juan" key="Juan" ref="Juan">
        <text transform="translate(71.0521 862.7921)" className="st0 st1">주안</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ganseok"))} id="Ganseok" key="Ganseok" ref="Ganseok">
        <text transform="translate(77.6722 878.8126)" className="st0 st1">간석</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Galsan"))} id="Galsan" key="Galsan" ref="Galsan">
        <text transform="translate(88.7386 817.3038)" className="st0 st1">갈산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dongsu"))} id="Dongsu" key="Dongsu" ref="Dongsu">
        <text transform="translate(132.347 923.4464)" className="st0 st1">동수</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bupyeongsamgeori"))} id="Bupyeongsamgeori" key="Bupyeongsamgeori" ref="Bupyeongsamgeori">
        <text transform="translate(138.7357 938.8663)" className="st0 st1">부평삼거리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ganseogogeori"))} id="Ganseogogeori" key="Ganseogogeori" ref="Ganseogogeori">
        <text transform="translate(146.6517 957.9816)" className="st0 st1">간석오거리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "IncheonCityHall"))} id="IncheonCityHall" key="IncheonCityHall" ref="IncheonCityHall">
        <text transform="translate(154.5687 977.0958)" className="st0 st1">인천시청</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "ArtsCenter"))} id="ArtsCenter" key="ArtsCenter" ref="ArtsCenter">
        <text transform="translate(162.4847 996.2111)" className="st0 st1">예술회관</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "IncheonBusTerminal"))} id="IncheonBusTerminal" key="IncheonBusTerminal" ref="IncheonBusTerminal">
        <text transform="translate(170.4008 1015.3243)" className="st0 st1">인천터미널</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "MunhakSportsComplex"))} id="MunhakSportsComplex" key="MunhakSportsComplex" ref="MunhakSportsComplex">
        <text transform="translate(178.3168 1034.4386)" className="st0 st1">문학경기장</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seonhak"))} id="Seonhak" key="Seonhak" ref="Seonhak">
        <text transform="translate(186.2338 1053.5529)" className="st0 st1">선학</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinyeonsu"))} id="Sinyeonsu" key="Sinyeonsu" ref="Sinyeonsu">
        <text transform="translate(194.1508 1072.6681)" className="st0 st1">신연수</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dongchun"))} id="Dongchun" key="Dongchun" ref="Dongchun">
        <text transform="translate(210.057 1111.0656)" className="st0 st1">동춘</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dongmak"))} id="Dongmak" key="Dongmak" ref="Dongmak">
        <text transform="translate(218.0492 1130.3556)" className="st0 st1">동막</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "BupyeongMarket"))} id="BupyeongMarket" key="BupyeongMarket" ref="BupyeongMarket">
        <text transform="translate(112.0804 873.6632)" className="st0 st1">부평시장</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Balsan"))} id="Balsan" key="Balsan" ref="Balsan">
        <text transform="translate(242.2865 660.9308)" className="st0 st1">발산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ujangsan"))} id="Ujangsan" key="Ujangsan" ref="Ujangsan">
        <text transform="translate(254.9261 691.4445)" className="st0 st1">우장산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hwagok"))} id="Hwagok" key="Hwagok" ref="Hwagok">
        <text transform="translate(266.0736 718.3615)" className="st0 st1">화곡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "NambuBusTerminal"))} id="NambuBusTerminal" key="NambuBusTerminal" ref="NambuBusTerminal">
        <text transform="translate(786.8661 932.298)" className="st0 st1">남부터미널</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hanti"))} id="Hanti" key="Hanti" ref="Hanti">
        <text transform="translate(895.3778 890.8243)" className="st0 st1">한티</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seonjeongneung"))} id="Seonjeongneung" key="Seonjeongneung" ref="Seonjeongneung">
        <text transform="translate(872.1932 834.8585)" className="st0 st1">선정릉</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Nokbeon"))} id="Nokbeon" key="Nokbeon" ref="Nokbeon">
        <text transform="translate(543.8842 500.1115)" className="st0 st1">녹번</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Junghwa"))} id="Junghwa" key="Junghwa" ref="Junghwa">
        <text transform="translate(977.8798 495.0753)" className="st0 st1">중화</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Meokgol"))} id="Meokgol" key="Meokgol" ref="Meokgol">
        <text transform="translate(970.5018 465.1271)" className="st0 st1">먹골</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hagye"))} id="Hagye" key="Hagye" ref="Hagye">
        <text transform="translate(947.0526 370.0061)" className="st0 st1">하계</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Junggye"))} id="Junggye" key="Junggye" ref="Junggye">
        <text transform="translate(938.1649 333.9563)" className="st0 st1">중계</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Madeul"))} id="Madeul" key="Madeul" ref="Madeul">
        <text transform="translate(919.9598 260.0841)" className="st0 st1">마들</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Suraksan"))} id="Suraksan" key="Suraksan" ref="Suraksan">
        <text transform="translate(908.7499 214.6036)" className="st0 st1">수락산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gongneung"))} id="Gongneung" key="Gongneung" ref="Gongneung">
        <text transform="translate(956.6796 409.0548)" className="st0 st1">공릉</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jamsillaru"))} id="Jamsillaru" key="Jamsillaru" ref="Jamsillaru">
        <text transform="translate(1036.8446 802.9484)" className="st0 st1">잠실나루</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gangbyeon"))} id="Gangbyeon" key="Gangbyeon" ref="Gangbyeon">
        <text transform="translate(1014.8983 749.965)" className="st0 st1">강변</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yongdap"))} id="Yongdap" key="Yongdap" ref="Yongdap">
        <text transform="translate(892.496 644.8351)" className="st0 st1">용답</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sindap"))} id="Sindap" key="Sindap" ref="Sindap">
        <text transform="translate(876.9335 610.0197)" className="st0 st1">신답</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sareung"))} id="Sareung" key="Sareung" ref="Sareung">
        <text transform="translate(1081.9315 350.1526)" className="st0 st1">사릉</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Mia"))} id="Mia" key="Mia" ref="Mia">
        <text transform="translate(822.2762 405.5099)" className="st0 st1">미아</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SeokchonHansolHospital"))} id="SeokchonHansolHospital" key="SeokchonHansolHospital" ref="SeokchonHansolHospital">
        <text transform="translate(1051.368 857.7804)" className="st0 st1">석촌</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "NationalPoliceHospital"))} id="NationalPoliceHospital" key="NationalPoliceHospital" ref="NationalPoliceHospital">
        <text transform="translate(1109.2186 895.3654)" className="st0 st1">경찰병원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinyongsan"))} id="Sinyongsan" key="Sinyongsan" ref="Sinyongsan">
        <text transform="translate(637.4086 770.2814)" className="st0 st1">신용산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "YangjaeCitizensForest"))} id="YangjaeCitizensForest" key="YangjaeCitizensForest" ref="YangjaeCitizensForest">
        <text transform="translate(863.3368 985.381)" className="st0 st1">양재시민의숲</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Daecheong"))} id="Daecheong" key="Daecheong" ref="Daecheong">
        <text transform="translate(975.7118 905.424)" className="st0 st1">대청</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Irwon"))} id="Irwon" key="Irwon" ref="Irwon">
        <text transform="translate(989.0155 936.5255)" className="st0 st1">일원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinjeongnegeori"))} id="Sinjeongnegeori" key="Sinjeongnegeori" ref="Sinjeongnegeori">
        <text transform="translate(258.7894 801.7472)" className="st0 st1">신정네거리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jakjeon"))} id="Jakjeon" key="Jakjeon" ref="Jakjeon">
        <text transform="translate(77.0892 789.1583)" className="st0 st1">작전</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seoulforest"))} id="Seoulforest" key="Seoulforest" ref="Seoulforest">
        <text transform="translate(845.7762 715.3741)" className="st0 st1">서울숲</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gwangmyeong"))} id="Gwangmyeong" key="Gwangmyeong" ref="Gwangmyeong">
        <text transform="translate(412.7006 1069.9493)" className="st0 st1">광명</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seoksu"))} id="Seoksu" key="Seoksu" ref="Seoksu">
        <text transform="translate(458.2767 1096.8878)" className="st0 st1">석수</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Apgujeongrodeo"))} id="Apgujeongrodeo" key="Apgujeongrodeo" ref="Apgujeongrodeo">
        <text transform="translate(857.2919 774.5333)" className="st0 st1">압구정로데오</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "HongikUniv"))} id="HongikUniv" key="HongikUniv" ref="HongikUniv">
        <text transform="translate(507.5287 671.1388)" className="st0 st1">홍대입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hapjeong"))} id="Hapjeong" key="Hapjeong" ref="Hapjeong">
        <text transform="translate(489.9515 691.2228)" className="st0 st1">합정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dangsan"))} id="Dangsan" key="Dangsan" ref="Dangsan">
        <text transform="translate(445.3617 735.4513)" className="st0 st1">당산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "YeongdeungpoguOffice"))} id="YeongdeungpoguOffice" key="YeongdeungpoguOffice" ref="YeongdeungpoguOffice">
        <text transform="translate(419.7943 777.0577)" className="st0 st1">영등포구청</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Daerim"))} id="Daerim" key="Daerim" ref="Daerim">
        <text transform="translate(422.1742 916.9064)" className="st0 st1">대림</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GasanDigitalComplex"))} id="GasanDigitalComplex" key="GasanDigitalComplex" ref="GasanDigitalComplex">
        <text transform="translate(396.7533 941.7755)" className="st0 st1">가산</text>
        <text transform="translate(396.7533 949.6755)" className="st0 st1">디지털단지</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GeumcheonGuOffice"))} id="GeumcheonGuOffice" key="GeumcheonGuOffice" ref="GeumcheonGuOffice">
        <text transform="translate(438.0033 1045.7853)" className="st0 st1">금천구청</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Guro"))} id="Guro" key="Guro" ref="Guro">
        <text transform="translate(377.4447 863.4972)" className="st0 st1">구로</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Kkachisan"))} id="Kkachisan" key="Kkachisan" ref="Kkachisan">
        <text transform="translate(284.4828 754.3507)" className="st0 st1">까치산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GimpoIntlAirport"))} id="GimpoIntlAirport" key="GimpoIntlAirport" ref="GimpoIntlAirport">
        <text transform="translate(146.2113 650.7023)" className="st0 st1">김포공항</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "BupyeongguOffice"))} id="BupyeongguOffice" key="BupyeongguOffice" ref="BupyeongguOffice">
        <text transform="translate(90.1273 854.6261)" className="st0 st1">부평구청</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bupyeong"))} id="Bupyeong" key="Bupyeong" ref="Bupyeong">
        <text transform="translate(120.389 895.672)" className="st0 st1">부평</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Woninjae"))} id="Woninjae" key="Woninjae" ref="Woninjae">
        <text transform="translate(201.7982 1085.9435)" className="st0 st1">원인재</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gyeyang"))} id="Gyeyang" key="Gyeyang" ref="Gyeyang">
        <text transform="translate(74.4701 582.379)" className="st0 st1">계양</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sindorim"))} id="Sindorim" key="Sindorim" ref="Sindorim">
        <text transform="translate(421.2543 842.3361)" className="st0 st1">신도림</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sadang"))} id="Sadang" key="Sadang" ref="Sadang">
        <text transform="translate(689.5155 959.9845)" className="st0 st1">사당</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SeoulNatlUnivofEducation"))} id="SeoulNatlUnivofEducation" key="SeoulNatlUnivofEducation" ref="SeoulNatlUnivofEducation">
        <text transform="translate(775.1727 904.0958)" className="st0 st1">교대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gangnam"))} id="Gangnam" key="Gangnam" ref="Gangnam">
        <text transform="translate(821.6708 884.8361)" className="st0 st1">강남</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seolleung"))} id="Seolleung" key="Seolleung" ref="Seolleung">
        <text transform="translate(882.4579 859.6564)" className="st0 st1">선릉</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "KonkukUniv"))} id="KonkukUniv" key="KonkukUniv" ref="KonkukUniv">
        <text transform="translate(952.8798 729.632)" className="st0 st1">건대입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Wangsimni"))} id="Wangsimni" key="Wangsimni" ref="Wangsimni">
        <text transform="translate(843.3182 640.0626)" className="st0 st1">왕십리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jamsil"))} id="Jamsil" key="Jamsil" ref="Jamsil">
        <text transform="translate(1042.3436 830.9122)" className="st0 st1">잠실</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Euljiro3samga"))} id="Euljiro3samga" key="Euljiro3samga" ref="Euljiro3samga">
        <text transform="translate(702.4716 640.0607)" className="st0 st1">을지로3가</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Euljiro4saga"))} id="Euljiro4saga" key="Euljiro4saga" ref="Euljiro4saga">
        <text transform="translate(723.7313 626.3898)" className="st0 st1">을지로4가</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "ExpressBusTerminal1"))} id="ExpressBusTerminal1" key="ExpressBusTerminal1" ref="ExpressBusTerminal1">
        <text transform="translate(689.5106 939.004)" className="st0 st1">총신대입구(이수)</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "ExpressBusTerminal"))} id="ExpressBusTerminal" key="ExpressBusTerminal" ref="ExpressBusTerminal">
        <text transform="translate(717.3983 852.5519)" className="st0 st1">고속터미널</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dongjak"))} id="Dongjak" key="Dongjak" ref="Dongjak">
        <text transform="translate(662.7723 880.8282)" className="st0 st1">동작</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Noryangjin"))} id="Noryangjin" key="Noryangjin" ref="Noryangjin">
        <text transform="translate(545.6771 835.1212)" className="st0 st1">노량진</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yeouido"))} id="Yeouido" key="Yeouido" ref="Yeouido">
        <text transform="translate(510.4633 793.9689)" className="st0 st1">여의도</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Singil"))} id="Singil" key="Singil" ref="Singil">
        <text transform="translate(482.7992 818.5216)" className="st0 st1">신길</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GangnamguOffice"))} id="GangnamguOffice" key="GangnamguOffice" ref="GangnamguOffice">
        <text transform="translate(865.1718 817.9318)" className="st0 st1">강남구청</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gunja"))} id="Gunja" key="Gunja" ref="Gunja">
        <text transform="translate(983.4764 655.9933)" className="st0 st1">군자</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sangbong"))} id="Sangbong" key="Sangbong" ref="Sangbong">
        <text transform="translate(999.286 521.0245)" className="st0 st1">상봉</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Mangu"))} id="Mangu" key="Mangu" ref="Mangu">
        <text transform="translate(1015.8241 515.7111)" className="st0 st1">망우</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hoegi"))} id="Hoegi" key="Hoegi" ref="Hoegi">
        <text transform="translate(897.8134 552.0031)" className="st0 st1">회기</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Cheongnyangni"))} id="Cheongnyangni" key="Cheongnyangni" ref="Cheongnyangni">
        <text transform="translate(869.4061 580.4113)" className="st0 st1">청량리</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sinseoldong"))} id="Sinseoldong" key="Sinseoldong" ref="Sinseoldong">
        <text transform="translate(803.6678 592.8263)" className="st0 st1">신설동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dongdaemun"))} id="Dongdaemun" key="Dongdaemun" ref="Dongdaemun">
        <text transform="translate(758.2802 605.4318)" className="st0 st1">동대문</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Changdong"))} id="Changdong" key="Changdong" ref="Changdong">
        <text transform="translate(885.8397 308.1046)" className="st0 st1">창동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Taereung"))} id="Taereung" key="Taereung" ref="Taereung">
        <text transform="translate(966.203 449.9728)" className="st0 st1">태릉입구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seokgye"))} id="Seokgye" key="Seokgye" ref="Seokgye">
        <text transform="translate(921.9012 452.5704)" className="st0 st1">석계</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "KwangwoonUniv"))} id="KwangwoonUniv" key="KwangwoonUniv" ref="KwangwoonUniv">
        <text transform="translate(908.5262 423.3868)" className="st0 st1">광운대</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dongmyo"))} id="Dongmyo" key="Dongmyo" ref="Dongmyo">
        <text transform="translate(784.3339 605.4318)" className="st0 st1">동묘앞</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Sindang"))} id="Sindang" key="Sindang" ref="Sindang">
        <text transform="translate(784.3339 625.9747)" className="st0 st1">신당</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Cheonggu"))} id="Cheonggu" key="Cheonggu" ref="Cheonggu">
        <text transform="translate(781.7313 647.2872)" className="st0 st1">청구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yaksu"))} id="Yaksu" key="Yaksu" ref="Yaksu">
        <text transform="translate(774.5106 664.2013)" className="st0 st1">약수</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Oksu"))} id="Oksu" key="Oksu" ref="Oksu">
        <text transform="translate(795.6766 726.4679)" className="st0 st1">옥수</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yangjae"))} id="Yangjae" key="Yangjae" ref="Yangjae">
        <text transform="translate(845.8456 943.2208)" className="st0 st1">양재</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dogok"))} id="Dogok" key="Dogok" ref="Dogok">
        <text transform="translate(901.7587 908.4806)" className="st0 st1">도곡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Suseo"))} id="Suseo" key="Suseo" ref="Suseo">
        <text transform="translate(1039.2665 932.7189)" className="st0 st1">수서</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bokjeong"))} id="Bokjeong" key="Bokjeong" ref="Bokjeong">
        <text transform="translate(1087.0145 989.5157)" className="st0 st1">복정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Moran"))} id="Moran" key="Moran" ref="Moran">
        <text transform="translate(1085.371 1060.672)" className="st0 st1">모란</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jeongja"))} id="Jeongja" key="Jeongja" ref="Jeongja">
        <text transform="translate(1044.1063 1129.1329)" className="st0 st1">정자</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Seongsu"))} id="Seongsu" key="Seongsu" ref="Seongsu">
        <text transform="translate(897.8934 706.3527)" className="st0 st1">성수</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GarakMarket"))} id="GarakMarket" key="GarakMarket" ref="GarakMarket">
        <text transform="translate(1093.3593 911.4073)" className="st0 st1">가락시장</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Cheonho"))} id="Cheonho" key="Cheonho" ref="Cheonho">
        <text transform="translate(1107.8856 729.3146)" className="st0 st1">천호</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gangdong"))} id="Gangdong" key="Gangdong" ref="Gangdong">
        <text transform="translate(1133.2821 739.298)" className="st0 st1">강동</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Gongdeok"))} id="Gongdeok" key="Gongdeok" ref="Gongdeok">
        <text transform="translate(595.9095 708.6525)" className="st0 st1">공덕</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "DigitalMediaCity"))} id="DigitalMediaCity" key="DigitalMediaCity" ref="DigitalMediaCity">
        <text transform="translate(457.4496 593.5626)" className="st0 st1">디지털미디어시티</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yeonsinnae"))} id="Yeonsinnae" key="Yeonsinnae" ref="Yeonsinnae">
        <text transform="translate(514.2377 428.9103)" className="st0 st1">연신내</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Daegok"))} id="Daegok" key="Daegok" ref="Daegok">
        <text transform="translate(408.7748 323.2697)" className="st0 st1">대곡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Jongno3samga"))} id="Jongno3samga" key="Jongno3samga" ref="Jongno3samga">
        <text transform="translate(691.2723 601.7755)" className="st0 st1">종로3가</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Chungmuro"))} id="Chungmuro" key="Chungmuro" ref="Chungmuro">
        <text transform="translate(708.0341 655.9484)" className="st0 st1">충무로</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SeoulStation"))} id="SeoulStation" key="SeoulStation" ref="SeoulStation">
        <text transform="translate(664.4169 674.1368)" className="st0 st1">서울역</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "CityHall"))} id="CityHall" key="CityHall" ref="CityHall">
        <text transform="translate(648.0682 647.9054)" className="st0 st1">시청</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Chungjeongno"))} id="Chungjeongno" key="Chungjeongno" ref="Chungjeongno">
        <text transform="translate(620.0043 659.5314)" className="st0 st1">충정로</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ichon"))} id="Ichon" key="Ichon" ref="Ichon">
        <text transform="translate(659.3075 809.0988)" className="st0 st1">이촌</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Yongsan"))} id="Yongsan" key="Yongsan" ref="Yongsan">
        <text transform="translate(612.0531 756.0587)" className="st0 st1">용산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Samgakji"))} id="Samgakji" key="Samgakji" ref="Samgakji">
        <text transform="translate(656.2616 752.6447)" className="st0 st1">삼각지</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Bulgwang"))} id="Bulgwang" key="Bulgwang" ref="Bulgwang">
        <text transform="translate(531.309 463.6564)" className="st0 st1">불광</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Nowon"))} id="Nowon" key="Nowon" ref="Nowon">
        <text transform="translate(928.2401 292.4944)" className="st0 st1">노원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Dobongsan"))} id="Dobongsan" key="Dobongsan" ref="Dobongsan">
        <text transform="translate(854.8466 176.0548)" className="st0 st1">도봉산</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Hoeryong"))} id="Hoeryong" key="Hoeryong" ref="Hoeryong">
        <text transform="translate(810.1034 76.1222)" className="st0 st1">회룡</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Ogeum"))} id="Ogeum" key="Ogeum" ref="Ogeum">
        <text transform="translate(1117.2557 873.9435)" className="st0 st1">오금</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Onsu"))} id="Onsu" key="Onsu" ref="Onsu">
        <text transform="translate(212.3871 907.1788)" className="st0 st1">온수</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Oido"))} id="Oido" key="Oido" ref="Oido">
        <text transform="translate(408.5912 1146.0323)" className="st0 st1">오</text>
        <text transform="translate(408.5912 1153.9324)" className="st0 st1">이</text>
        <text transform="translate(408.5912 1161.8324)" className="st0 st1">도</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Geumjeong"))} id="Geumjeong" key="Geumjeong" ref="Geumjeong">
        <text transform="translate(669.5272 1113.2062)" className="st0 st1">금정</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Suwon"))} id="Suwon" key="Suwon" ref="Suwon">
        <text transform="translate(769.3934 1141.7072)" className="st0 st1">수원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Byeongjeom"))} id="Byeongjeom" key="Byeongjeom" ref="Byeongjeom">
        <text transform="translate(789.9432 1170.1271)" className="st0 st1">병점</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "Giheung"))} id="Giheung" key="Giheung" ref="Giheung">
        <text transform="translate(924.7821 1129.089)" className="st0 st1">기</text>
        <text transform="translate(924.7821 1136.989)" className="st0 st1">흥</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "DongdaemunHistoryCulturePark"))} id="DongdaemunHistoryCulturePark" key="DongdaemunHistoryCulturePark" ref="DongdaemunHistoryCulturePark">
        <text transform="translate(755.0907 640.6827)" className="st0 st2">동대문</text>
        <text transform="translate(755.0907 646.0827)" className="st0 st2">역사문화</text>
        <text transform="translate(755.0907 651.5827)" className="st0 st2">공원</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GuroDigitalComplex"))} id="GuroDigitalComplex" key="GuroDigitalComplex" ref="GuroDigitalComplex">
        <text transform="translate(428.5599 936.3361)" className="st0 st1">구로</text>
        <text transform="translate(428.5599 944.2361)" className="st0 st1">디지털단지</text>
      </g>
    </g>
    <g>
      <g onClick={()=>history.push(match.path.replace(':station', "GangnamGu"))} id="GangnamGu" key="GangnamGu" ref="GangnamGu">
        <text transform="translate(946.6327 985.6007)" className="st3 st0 st4">강남구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SeochoGu"))} id="SeochoGu" key="SeochoGu" ref="SeochoGu">
        <text transform="translate(758.9042 981.338)" className="st3 st0 st4">서초구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SongpaGu"))} id="SongpaGu" key="SongpaGu" ref="SongpaGu">
        <text transform="translate(1066.1063 844.8058)" className="st3 st0 st4">송파구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GangdongGu"))} id="GangdongGu" key="GangdongGu" ref="GangdongGu">
        <text transform="translate(1181.3065 746.673)" className="st3 st0 st4">강동구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GwanakGu"))} id="GwanakGu" key="GwanakGu" ref="GwanakGu">
        <text transform="translate(562.64 994.1437)" className="st3 st0 st4">관악구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "DongjakGu"))} id="DongjakGu" key="DongjakGu" ref="DongjakGu">
        <text transform="translate(558.3783 900.2755)" className="st3 st0 st4">동작구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GeumcheonGu"))} id="GeumcheonGu" key="GeumcheonGu" ref="GeumcheonGu">
        <text transform="translate(447.4486 985.6095)" className="st3 st0 st4">금천구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GuroGu"))} id="GuroGu" key="GuroGu" ref="GuroGu">
        <text transform="translate(323.7133 913.0812)" className="st3 st0 st4">구로구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "YangcheonGu"))} id="YangcheonGu" key="YangcheonGu" ref="YangcheonGu">
        <text transform="translate(310.9154 806.4152)" className="st3 st0 st4">양천구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GangseoGu"))} id="GangseoGu" key="GangseoGu" ref="GangseoGu">
        <text transform="translate(306.6537 712.545)" className="st3 st0 st4">강서구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "MapoGu"))} id="MapoGu" key="MapoGu" ref="MapoGu">
        <text transform="translate(571.184 682.6798)" className="st3 st0 st4">마포구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "EunpyeongGu"))} id="EunpyeongGu" key="EunpyeongGu" ref="EunpyeongGu">
        <text transform="translate(502.9174 554.6818)" className="st3 st0 st4">은평구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SeodaemunGu"))} id="SeodaemunGu" key="SeodaemunGu" ref="SeodaemunGu">
        <text transform="translate(536.7123 610.1505)" className="st3 st0 st4">서대문구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "JongnoGu"))} id="JongnoGu" key="JongnoGu" ref="JongnoGu">
        <text transform="translate(665.0526 529.087)" className="st3 st0 st4">종로구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "JungGu"))} id="JungGu" key="JungGu" ref="JungGu">
        <text transform="translate(708.0585 674.1534)" className="st3 st0 st4">중구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SeongdongGu"))} id="SeongdongGu" key="SeongdongGu" ref="SeongdongGu">
        <text transform="translate(822.9159 704.0197)" className="st3 st0 st4">성동구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "DongdaemunGu"))} id="DongdaemunGu" key="DongdaemunGu" ref="DongdaemunGu">
        <text transform="translate(907.9091 588.8195)" className="st3 st0 st4">동대문구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "JungnangGu"))} id="JungnangGu" key="JungnangGu" ref="JungnangGu">
        <text transform="translate(993.578 477.8888)" className="st3 st0 st4">중랑구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "DobongGu"))} id="DobongGu" key="DobongGu" ref="DobongGu">
        <text transform="translate(818.6444 247.4884)" className="st3 st0 st4">도봉구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GangbukGu"))} id="GangbukGu" key="GangbukGu" ref="GangbukGu">
        <text transform="translate(763.1757 422.42)" className="st3 st0 st4">강북구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "SeongbukGu"))} id="SeongbukGu" key="SeongbukGu" ref="SeongbukGu">
        <text transform="translate(784.5077 533.3497)" className="st3 st0 st4">성북구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "GwangjinGu"))} id="GwangjinGu" key="GwangjinGu" ref="GwangjinGu">
        <text transform="translate(1014.9091 652.8136)" className="st3 st0 st4">광진구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "YongsanGu"))} id="YongsanGu" key="YongsanGu" ref="YongsanGu">
        <text transform="translate(686.3749 772.2775)" className="st3 st0 st4">용산구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "YeongdeungpoGu"))} id="YeongdeungpoGu" key="YeongdeungpoGu" ref="YeongdeungpoGu">
        <text transform="translate(464.1742 853.34)" className="st3 st0 st4">영등포구</text>
      </g>
      <g onClick={()=>history.push(match.path.replace(':station', "NowonGu"))} id="NowonGu" key="NowonGu" ref="NowonGu">
        <text transform="translate(976.5077 354.1544)" className="st3 st0 st4">노원구</text>
      </g>
    </g>
  </Svg>
  </>
  )}
}
  
  

export default withRouter(Map);
