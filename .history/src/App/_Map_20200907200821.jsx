import React, {PureComponent} from "react";
import styled from 'styled-components';
import { withRouter } from 'react-router-dom'

const Svg = styled.svg`
	.st0{font-family:'Noto Sans KR'; font-weight:900; cursor:'pointer';}
	.st1{font-size:6.5759px;}
	.st2{font-size:4.5326px;}
	.st3{fill:#E5E5E4;}
  .st4{font-size:9.0311px;}
`;

class Map extends PureComponent {
  executeWindow = (event) => {
    const {match, history} = this.props;
    history.push(match.path.replace(':id', `/${event.target.props.data-attri}`))

  }
  
  render() {
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
    <g id="map" key="map" data-attri="map">
      <g onClick={this.executeWindow} id="Ilsan" key="Ilsan" data-attri="Ilsan">
        <text transform="translate(475.475 290.839)" className="st0 st1">일</text>
        <text transform="translate(475.475 298.739)" className="st0 st1">산</text>
      </g>
      <g onClick={this.executeWindow} id="Pungsan" key="Pungsan" data-attri="Pungsan">
        <text transform="translate(458.472 290.839)" className="st0 st1">풍</text>
        <text transform="translate(458.472 298.739)" className="st0 st1">산</text>
      </g>
      <g onClick={this.executeWindow} id="Baengma" key="Baengma" data-attri="Baengma">
        <text transform="translate(441.4681 290.839)" className="st0 st1">백</text>
        <text transform="translate(441.4681 298.739)" className="st0 st1">마</text>
      </g>
      <g onClick={this.executeWindow} id="Hwajeong" key="Hwajeong" data-attri="Hwajeong">
        <text transform="translate(438.1742 337.1858)" className="st0 st1">화</text>
        <text transform="translate(438.1742 345.0857)" className="st0 st1">정</text>
      </g>
      <g onClick={this.executeWindow} id="Wondang" key="Wondang" data-attri="Wondang">
        <text transform="translate(453.7806 337.1858)" className="st0 st1">원</text>
        <text transform="translate(453.7806 345.0857)" className="st0 st1">당</text>
      </g>
      <g onClick={this.executeWindow} id="Wonheung" key="Wonheung" data-attri="Wonheung">
        <text transform="translate(469.3881 337.1858)" className="st0 st1">원</text>
        <text transform="translate(469.3881 345.0857)" className="st0 st1">흥</text>
      </g>
      <g onClick={this.executeWindow} id="Samsong" key="Samsong" data-attri="Samsong">
        <text transform="translate(484.9955 337.1858)" className="st0 st1">삼</text>
        <text transform="translate(484.9955 345.0857)" className="st0 st1">송</text>
      </g>
      <g onClick={this.executeWindow} id="Tanhyeon" key="Tanhyeon" data-attri="Tanhyeon">
        <text transform="translate(492.474 290.839)" className="st0 st1">탄</text>
        <text transform="translate(492.474 298.739)" className="st0 st1">현</text>
      </g>
      <g onClick={this.executeWindow} id="Unjeong" key="Unjeong" data-attri="Unjeong">
        <text transform="translate(509.4779 290.839)" className="st0 st1">운</text>
        <text transform="translate(509.4779 298.739)" className="st0 st1">정</text>
      </g>
      <g onClick={this.executeWindow} id="Geumneung" key="Geumneung" data-attri="Geumneung">
        <text transform="translate(526.4818 290.839)" className="st0 st1">금</text>
        <text transform="translate(526.4818 298.739)" className="st0 st1">릉</text>
      </g>
      <g onClick={this.executeWindow} id="Geumchon" key="Geumchon" data-attri="Geumchon">
        <text transform="translate(543.4847 290.839)" className="st0 st1">금</text>
        <text transform="translate(543.4847 298.739)" className="st0 st1">촌</text>
      </g>
      <g onClick={this.executeWindow} id="Wollong" key="Wollong" data-attri="Wollong">
        <text transform="translate(560.4886 290.839)" className="st0 st1">월</text>
        <text transform="translate(560.4886 298.739)" className="st0 st1">롱</text>
      </g>
      <g onClick={this.executeWindow} id="Paju" key="Paju" data-attri="Paju">
        <text transform="translate(577.4926 290.839)" className="st0 st1">파</text>
        <text transform="translate(577.4926 298.739)" className="st0 st1">주</text>
      </g>
      <g onClick={this.executeWindow} id="Munsan" key="Munsan" data-attri="Munsan">
        <text transform="translate(594.4965 290.839)" className="st0 st1">문</text>
        <text transform="translate(594.4965 298.739)" className="st0 st1">산</text>
      </g>
      <g onClick={this.executeWindow} id="Bugae" key="Bugae" data-attri="Bugae">
        <text transform="translate(129.2299 906.9034)" className="st0 st1">부</text>
        <text transform="translate(129.2299 914.8034)" className="st0 st1">개</text>
      </g>
      <g onClick={this.executeWindow} id="Songnae" key="Songnae" data-attri="Songnae">
        <text transform="translate(141.976 906.9034)" className="st0 st1">송</text>
        <text transform="translate(141.976 914.8034)" className="st0 st1">내</text>
      </g>
      <g onClick={this.executeWindow} id="Jungdong" key="Jungdong" data-attri="Jungdong">
        <text transform="translate(154.7201 906.9034)" className="st0 st1">중</text>
        <text transform="translate(154.7201 914.8034)" className="st0 st1">동</text>
      </g>
      <g onClick={this.executeWindow} id="Bucheon" key="Bucheon" data-attri="Bucheon">
        <text transform="translate(167.4652 906.9034)" className="st0 st1">부</text>
        <text transform="translate(167.4652 914.8034)" className="st0 st1">천</text>
      </g>
      <g onClick={this.executeWindow} id="Sosa" key="Sosa" data-attri="Sosa">
        <text transform="translate(180.2103 906.9034)" className="st0 st1">소</text>
        <text transform="translate(180.2103 914.8034)" className="st0 st1">사</text>
      </g>
      <g onClick={this.executeWindow} id="Yeokgok" key="Yeokgok" data-attri="Yeokgok">
        <text transform="translate(192.9554 906.9034)" className="st0 st1">역</text>
        <text transform="translate(192.9554 914.8034)" className="st0 st1">곡</text>
      </g>
      <g onClick={this.executeWindow} id="Technopark" key="Technopark" data-attri="Technopark">
        <text transform="translate(232.8939 1145.3849)" className="st0 st1">테</text>
        <text transform="translate(232.8939 1153.2849)" className="st0 st1">크</text>
        <text transform="translate(232.8939 1161.1849)" className="st0 st1">노</text>
        <text transform="translate(232.8939 1169.085)" className="st0 st1">파</text>
        <text transform="translate(232.8939 1176.9849)" className="st0 st1">크</text>
      </g>
      <g onClick={this.executeWindow} id="BITZone" key="BITZone" data-attri="BITZone">
        <text transform="translate(277.5551 1145.3849)" className="st0 st1">지</text>
        <text transform="translate(277.5551 1153.2849)" className="st0 st1">식</text>
        <text transform="translate(277.5551 1161.1849)" className="st0 st1">정</text>
        <text transform="translate(277.5551 1169.085)" className="st0 st1">보</text>
        <text transform="translate(277.5551 1176.9849)" className="st0 st1">단</text>
        <text transform="translate(277.5551 1184.8849)" className="st0 st1">지</text>
      </g>
      <g onClick={this.executeWindow} id="IncheonNatlUniv" key="IncheonNatlUniv" data-attri="IncheonNatlUniv">
        <text transform="translate(299.8822 1145.3849)" className="st0 st1">인</text>
        <text transform="translate(299.8822 1153.2849)" className="st0 st1">천</text>
        <text transform="translate(299.8822 1161.1849)" className="st0 st1">대</text>
        <text transform="translate(299.8822 1169.085)" className="st0 st1">입</text>
        <text transform="translate(299.8822 1176.9849)" className="st0 st1">구</text>
      </g>
      <g onClick={this.executeWindow} id="CentralPark" key="CentralPark" data-attri="CentralPark">
        <text transform="translate(322.2162 1145.3849)" className="st0 st1">센</text>
        <text transform="translate(322.2162 1153.2849)" className="st0 st1">트</text>
        <text transform="translate(322.2162 1161.1849)" className="st0 st1">럴</text>
        <text transform="translate(322.2162 1169.085)" className="st0 st1">파</text>
        <text transform="translate(322.2162 1176.9849)" className="st0 st1">크</text>
      </g>
      <g onClick={this.executeWindow} id="IntlBusinessDistrict" key="IntlBusinessDistrict" data-attri="IntlBusinessDistrict">
        <text transform="translate(348.4261 1145.3849)" className="st0 st1">국</text>
        <text transform="translate(348.4261 1153.2849)" className="st0 st1">제</text>
        <text transform="translate(348.4261 1161.1849)" className="st0 st1">업</text>
        <text transform="translate(348.4261 1169.085)" className="st0 st1">무</text>
        <text transform="translate(348.4261 1176.9849)" className="st0 st1">지</text>
        <text transform="translate(348.4261 1184.8849)" className="st0 st1">구</text>
      </g>
      <g onClick={this.executeWindow} id="SingilonCheon" key="SingilonCheon" data-attri="SingilonCheon">
        <text transform="translate(454.4388 1145.798)" className="st0 st1">신</text>
        <text transform="translate(454.4388 1153.698)" className="st0 st1">길</text>
        <text transform="translate(454.4388 1161.598)" className="st0 st1">온</text>
        <text transform="translate(454.4388 1169.498)" className="st0 st1">천</text>
      </g>
      <g onClick={this.executeWindow} id="Sinchang" key="Sinchang" data-attri="Sinchang">
        <text transform="translate(456.6 1193.088)" className="st0 st1">신</text>
        <text transform="translate(456.6 1200.988)" className="st0 st1">창</text>
      </g>
      <g onClick={this.executeWindow} id="OnyangonCheon" key="OnyangonCheon" data-attri="OnyangonCheon">
        <text transform="translate(475.1576 1193.088)" className="st0 st1">온</text>
        <text transform="translate(475.1576 1200.988)" className="st0 st1">양</text>
        <text transform="translate(475.1576 1208.8881)" className="st0 st1">온</text>
        <text transform="translate(475.1576 1216.7881)" className="st0 st1">천</text>
      </g>
      <g onClick={this.executeWindow} id="Baebang" key="Baebang" data-attri="Baebang">
        <text transform="translate(493.7133 1193.088)" className="st0 st1">배</text>
        <text transform="translate(493.7133 1200.988)" className="st0 st1">방</text>
      </g>
      <g onClick={this.executeWindow} id="Asan" key="Asan" data-attri="Asan">
        <text transform="translate(512.2699 1193.088)" className="st0 st1">아</text>
        <text transform="translate(512.2699 1200.988)" className="st0 st1">산</text>
      </g>
      <g onClick={this.executeWindow} id="Ssangyong" key="Ssangyong" data-attri="Ssangyong">
        <text transform="translate(530.8275 1193.088)" className="st0 st1">쌍</text>
        <text transform="translate(530.8275 1200.988)" className="st0 st1">용</text>
      </g>
      <g onClick={this.executeWindow} id="Bongmyeong" key="Bongmyeong" data-attri="Bongmyeong">
        <text transform="translate(549.3851 1193.088)" className="st0 st1">봉</text>
        <text transform="translate(549.3851 1200.988)" className="st0 st1">명</text>
      </g>
      <g onClick={this.executeWindow} id="Cheonan" key="Cheonan" data-attri="Cheonan">
        <text transform="translate(567.9418 1193.088)" className="st0 st1">천</text>
        <text transform="translate(567.9418 1200.988)" className="st0 st1">안</text>
      </g>
      <g onClick={this.executeWindow} id="Dujeong" key="Dujeong" data-attri="Dujeong">
        <text transform="translate(586.4994 1193.088)" className="st0 st1">두</text>
        <text transform="translate(586.4994 1200.988)" className="st0 st1">정</text>
      </g>
      <g onClick={this.executeWindow} id="Jiksan" key="Jiksan" data-attri="Jiksan">
        <text transform="translate(605.056 1193.088)" className="st0 st1">직</text>
        <text transform="translate(605.056 1200.988)" className="st0 st1">산</text>
      </g>
      <g onClick={this.executeWindow} id="Seonghwan" key="Seonghwan" data-attri="Seonghwan">
        <text transform="translate(623.6127 1193.088)" className="st0 st1">성</text>
        <text transform="translate(623.6127 1200.988)" className="st0 st1">환</text>
      </g>
      <g onClick={this.executeWindow} id="Pyeongtaek" key="Pyeongtaek" data-attri="Pyeongtaek">
        <text transform="translate(642.1688 1193.088)" className="st0 st1">평</text>
        <text transform="translate(642.1688 1200.988)" className="st0 st1">택</text>
      </g>
      <g onClick={this.executeWindow} id="Jije" key="Jije" data-attri="Jije">
        <text transform="translate(660.7264 1193.088)" className="st0 st1">지</text>
        <text transform="translate(660.7264 1200.988)" className="st0 st1">제</text>
      </g>
      <g onClick={this.executeWindow} id="Seojeongri" key="Seojeongri" data-attri="Seojeongri">
        <text transform="translate(679.2841 1193.088)" className="st0 st1">서</text>
        <text transform="translate(679.2841 1200.988)" className="st0 st1">정</text>
        <text transform="translate(679.2841 1208.8881)" className="st0 st1">리</text>
      </g>
      <g onClick={this.executeWindow} id="Songtan" key="Songtan" data-attri="Songtan">
        <text transform="translate(697.8397 1193.088)" className="st0 st1">송</text>
        <text transform="translate(697.8397 1200.988)" className="st0 st1">탄</text>
      </g>
      <g onClick={this.executeWindow} id="Osan" key="Osan" data-attri="Osan">
        <text transform="translate(734.9559 1193.088)" className="st0 st1">오</text>
        <text transform="translate(734.9559 1200.988)" className="st0 st1">산</text>
      </g>
      <g onClick={this.executeWindow} id="OsanCollege" key="OsanCollege" data-attri="OsanCollege">
        <text transform="translate(753.5106 1193.088)" className="st0 st1">오</text>
        <text transform="translate(753.5106 1200.988)" className="st0 st1">산</text>
        <text transform="translate(753.5106 1208.8881)" className="st0 st1">대</text>
      </g>
      <g onClick={this.executeWindow} id="Sema" key="Sema" data-attri="Sema">
        <text transform="translate(772.0682 1193.6027)" className="st0 st1">세</text>
        <text transform="translate(772.0682 1201.5027)" className="st0 st1">마</text>
      </g>
      <g onClick={this.executeWindow} id="Seodongtan" key="Seodongtan" data-attri="Seodongtan">
        <text transform="translate(803.8661 1193.088)" className="st0 st1">서</text>
        <text transform="translate(803.8661 1200.988)" className="st0 st1">동</text>
        <text transform="translate(803.8661 1208.8881)" className="st0 st1">탄</text>
      </g>
      <g onClick={this.executeWindow} id="Jinwi" key="Jinwi" data-attri="Jinwi">
        <text transform="translate(716.3915 1193.088)" className="st0 st1">진</text>
        <text transform="translate(716.3915 1200.988)" className="st0 st1">위</text>
      </g>
      <g onClick={this.executeWindow} id="Ansan" key="Ansan" data-attri="Ansan">
        <text transform="translate(476.7289 1145.798)" className="st0 st1">안</text>
        <text transform="translate(476.7289 1153.698)" className="st0 st1">산</text>
      </g>
      <g onClick={this.executeWindow} id="Choji" key="Choji" data-attri="Choji">
        <text transform="translate(499.0433 1145.798)" className="st0 st1">초</text>
        <text transform="translate(499.0433 1153.698)" className="st0 st1">지</text>
      </g>
      <g onClick={this.executeWindow} id="Gojan" key="Gojan" data-attri="Gojan">
        <text transform="translate(521.3578 1145.798)" className="st0 st1">고</text>
        <text transform="translate(521.3578 1153.698)" className="st0 st1">잔</text>
      </g>
      <g onClick={this.executeWindow} id="Jungang" key="Jungang" data-attri="Jungang">
        <text transform="translate(543.6732 1145.798)" className="st0 st1">중</text>
        <text transform="translate(543.6732 1153.698)" className="st0 st1">앙</text>
      </g>
      <g onClick={this.executeWindow} id="HanyangUnivatAnsan" key="HanyangUnivatAnsan" data-attri="HanyangUnivatAnsan">
        <text transform="translate(565.9877 1145.798)" className="st0 st1">한</text>
        <text transform="translate(565.9877 1153.698)" className="st0 st1">대</text>
        <text transform="translate(565.9877 1161.598)" className="st0 st1">앞</text>
      </g>
      <g onClick={this.executeWindow} id="Sangnoksu" key="Sangnoksu" data-attri="Sangnoksu">
        <text transform="translate(588.3021 1145.798)" className="st0 st1">상</text>
        <text transform="translate(588.3021 1153.698)" className="st0 st1">록</text>
        <text transform="translate(588.3021 1161.598)" className="st0 st1">수</text>
      </g>
      <g onClick={this.executeWindow} id="Banwol" key="Banwol" data-attri="Banwol">
        <text transform="translate(610.6166 1145.798)" className="st0 st1">반</text>
        <text transform="translate(610.6166 1153.698)" className="st0 st1">월</text>
      </g>
      <g onClick={this.executeWindow} id="Daeyami" key="Daeyami" data-attri="Daeyami">
        <text transform="translate(632.932 1145.798)" className="st0 st1">대</text>
        <text transform="translate(632.932 1153.698)" className="st0 st1">야</text>
        <text transform="translate(632.932 1161.598)" className="st0 st1">미</text>
      </g>
      <g onClick={this.executeWindow} id="Surisan" key="Surisan" data-attri="Surisan">
        <text transform="translate(655.2469 1145.798)" className="st0 st1">수</text>
        <text transform="translate(655.2469 1153.698)" className="st0 st1">리</text>
        <text transform="translate(655.2469 1161.598)" className="st0 st1">산</text>
      </g>
      <g onClick={this.executeWindow} id="SuwonCityHall1" key="SuwonCityHall1" data-attri="SuwonCityHall1">
        <text transform="translate(799.0936 1129.4171)" className="st0 st1">매</text>
        <text transform="translate(799.0936 1136.4171)" className="st0 st1">교</text>
      </g>
      <g onClick={this.executeWindow} id="SuwonCityHall" key="SuwonCityHall" data-attri="SuwonCityHall">
        <text transform="translate(817.0663 1115.4171)" className="st0 st1">수</text>
        <text transform="translate(817.0663 1123.3171)" className="st0 st1">원</text>
        <text transform="translate(817.0663 1131.2172)" className="st0 st1">시</text>
        <text transform="translate(817.0663 1139.1172)" className="st0 st1">청</text>
      </g>
      <g onClick={this.executeWindow} id="MaetanGwonseon" key="MaetanGwonseon" data-attri="MaetanGwonseon">
        <text transform="translate(835.0428 1115.4171)" className="st0 st1">매</text>
        <text transform="translate(835.0428 1123.3171)" className="st0 st1">탄</text>
        <text transform="translate(835.0428 1131.2172)" className="st0 st1">권</text>
        <text transform="translate(835.0428 1139.1172)" className="st0 st1">선</text>
      </g>
      <g onClick={this.executeWindow} id="Mangpo" key="Mangpo" data-attri="Mangpo">
        <text transform="translate(853.0165 1129.4171)" className="st0 st1">망</text>
        <text transform="translate(853.0165 1137.3171)" className="st0 st1">포</text>
      </g>
      <g onClick={this.executeWindow} id="Yeongtong" key="Yeongtong" data-attri="Yeongtong">
        <text transform="translate(870.9911 1129.4171)" className="st0 st1">영</text>
        <text transform="translate(870.9911 1137.3171)" className="st0 st1">통</text>
      </g>
      <g onClick={this.executeWindow} id="Cheongmyeong" key="Cheongmyeong" data-attri="Cheongmyeong">
        <text transform="translate(888.9667 1129.4171)" className="st0 st1">청</text>
        <text transform="translate(888.9667 1137.3171)" className="st0 st1">명</text>
      </g>
      <g onClick={this.executeWindow} id="Sanggal" key="Sanggal" data-attri="Sanggal">
        <text transform="translate(906.9403 1129.4171)" className="st0 st1">상</text>
        <text transform="translate(906.9403 1137.3171)" className="st0 st1">갈</text>
      </g>
      <g onClick={this.executeWindow} id="Singal" key="Singal" data-attri="Singal">
        <text transform="translate(942.5009 1129.4171)" className="st0 st1">신</text>
        <text transform="translate(942.5009 1137.3171)" className="st0 st1">갈</text>
      </g>
      <g onClick={this.executeWindow} id="Guseong" key="Guseong" data-attri="Guseong">
        <text transform="translate(960.0868 1129.4171)" className="st0 st1">구</text>
        <text transform="translate(960.0868 1137.3171)" className="st0 st1">성</text>
      </g>
      <g onClick={this.executeWindow} id="Bojeong" key="Bojeong" data-attri="Bojeong">
        <text transform="translate(977.6737 1129.4171)" className="st0 st1">보</text>
        <text transform="translate(977.6737 1137.3171)" className="st0 st1">정</text>
      </g>
      <g onClick={this.executeWindow} id="Jukjeon" key="Jukjeon" data-attri="Jukjeon">
        <text transform="translate(995.2606 1129.4171)" className="st0 st1">죽</text>
        <text transform="translate(995.2606 1137.3171)" className="st0 st1">전</text>
      </g>
      <g onClick={this.executeWindow} id="Ori" key="Ori" data-attri="Ori">
        <text transform="translate(1012.8475 1129.4171)" className="st0 st1">오</text>
        <text transform="translate(1012.8475 1137.3171)" className="st0 st1">리</text>
      </g>
      <g onClick={this.executeWindow} id="MyongjiUniv" key="MyongjiUniv" data-attri="MyongjiUniv">
        <text transform="translate(1051.3641 1168.5323)" className="st0 st1">명</text>
        <text transform="translate(1051.3641 1176.4324)" className="st0 st1">지</text>
        <text transform="translate(1051.3641 1184.3324)" className="st0 st1">대</text>
      </g>
      <g onClick={this.executeWindow} id="Samga1" key="Samga1" data-attri="Samga1">
        <text transform="translate(1033.4882 1168.9581)" className="st0 st1">시</text>
        <text transform="translate(1033.4882 1176.8582)" className="st0 st1">청</text>
        <text transform="translate(1033.4882 1184.7582)" className="st0 st1">·</text>
        <text transform="translate(1033.4882 1192.6582)" className="st0 st1">용</text>
        <text transform="translate(1033.4882 1200.5581)" className="st0 st1">인</text>
        <text transform="translate(1033.4882 1208.4581)" className="st0 st1">대</text>
      </g>
      <g onClick={this.executeWindow} id="Samga" key="Samga" data-attri="Samga">
        <text transform="translate(1015.6268 1168.9464)" className="st0 st1">삼</text>
        <text transform="translate(1015.6268 1176.8464)" className="st0 st1">가</text>
      </g>
      <g onClick={this.executeWindow} id="Chodang" key="Chodang" data-attri="Chodang">
        <text transform="translate(997.7518 1168.9464)" className="st0 st1">초</text>
        <text transform="translate(997.7518 1176.8464)" className="st0 st1">당</text>
      </g>
      <g onClick={this.executeWindow} id="Dongbaek" key="Dongbaek" data-attri="Dongbaek">
        <text transform="translate(979.8788 1168.9464)" className="st0 st1">동</text>
        <text transform="translate(979.8788 1176.8464)" className="st0 st1">백</text>
      </g>
      <g onClick={this.executeWindow} id="Eojeong" key="Eojeong" data-attri="Eojeong">
        <text transform="translate(962.0048 1168.9464)" className="st0 st1">어</text>
        <text transform="translate(962.0048 1176.8464)" className="st0 st1">정</text>
      </g>
      <g onClick={this.executeWindow} id="Jiseok" key="Jiseok" data-attri="Jiseok">
        <text transform="translate(944.1298 1168.9464)" className="st0 st1">지</text>
        <text transform="translate(944.1298 1176.8464)" className="st0 st1">석</text>
      </g>
      <g onClick={this.executeWindow} id="Gulpocheon" key="Gulpocheon" data-attri="Gulpocheon">
        <text transform="translate(108.5511 825.8993)" className="st0 st1">굴</text>
        <text transform="translate(108.5511 833.7993)" className="st0 st1">포</text>
        <text transform="translate(108.5511 841.6993)" className="st0 st1">천</text>
      </g>
      <g onClick={this.executeWindow} id="SamsanGymnasium" key="SamsanGymnasium" data-attri="SamsanGymnasium">
        <text transform="translate(123.099 811.8993)" className="st0 st1">삼</text>
        <text transform="translate(123.099 819.7993)" className="st0 st1">산</text>
        <text transform="translate(123.099 827.6993)" className="st0 st1">체</text>
        <text transform="translate(123.099 835.5993)" className="st0 st1">육</text>
        <text transform="translate(123.099 843.4993)" className="st0 st1">관</text>
      </g>
      <g onClick={this.executeWindow} id="BucheonCityHall" key="BucheonCityHall" data-attri="BucheonCityHall">
        <text transform="translate(152.1967 818.8993)" className="st0 st1">부</text>
        <text transform="translate(152.1967 826.7993)" className="st0 st1">천</text>
        <text transform="translate(152.1967 834.6993)" className="st0 st1">시</text>
        <text transform="translate(152.1967 842.5993)" className="st0 st1">청</text>
      </g>
      <g onClick={this.executeWindow} id="Sinjungdong" key="Sinjungdong" data-attri="Sinjungdong">
        <text transform="translate(166.7455 826.7902)" className="st0 st1">신</text>
        <text transform="translate(166.7455 834.6902)" className="st0 st1">중</text>
        <text transform="translate(166.7455 842.5903)" className="st0 st1">동</text>
      </g>
      <g onClick={this.executeWindow} id="Sangdong" key="Sangdong" data-attri="Sangdong">
        <text transform="translate(137.6283 835.5721)" className="st0 st1">상</text>
        <text transform="translate(137.6283 843.4721)" className="st0 st1">동</text>
      </g>
      <g onClick={this.executeWindow} id="Songdo" key="Songdo" data-attri="Songdo">
        <text transform="translate(151.8392 1099.4786)" className="st0 st1">송</text>
        <text transform="translate(151.8392 1107.3787)" className="st0 st1">도</text>
      </g>
      <g onClick={this.executeWindow} id="Jeongwang" key="Jeongwang" data-attri="Jeongwang">
        <text transform="translate(432.0863 1145.7921)" className="st0 st1">정</text>
        <text transform="translate(432.0863 1153.6921)" className="st0 st1">왕</text>
      </g>
      <g onClick={this.executeWindow} id="Ungilsan1" key="Ungilsan1" data-attri="Ungilsan1">
        <text transform="translate(169.6888 1099.4786)" className="st0 st1">연</text>
        <text transform="translate(169.6888 1107.3787)" className="st0 st1">수</text>
      </g>
      <g onClick={this.executeWindow} id="Ungilsan" key="Ungilsan" data-attri="Ungilsan">
        <text transform="translate(1102.5878 600.6925)" className="st0 st1">운</text>
        <text transform="translate(1102.5878 608.5925)" className="st0 st1">길</text>
        <text transform="translate(1102.5878 616.4925)" className="st0 st1">산</text>
      </g>
      <g onClick={this.executeWindow} id="Yangsu" key="Yangsu" data-attri="Yangsu">
        <text transform="translate(1117.6132 600.6925)" className="st0 st1">양</text>
        <text transform="translate(1117.6132 608.5925)" className="st0 st1">수</text>
      </g>
      <g onClick={this.executeWindow} id="Sinwon" key="Sinwon" data-attri="Sinwon">
        <text transform="translate(1132.6376 600.6925)" className="st0 st1">신</text>
        <text transform="translate(1132.6376 608.5925)" className="st0 st1">원</text>
      </g>
      <g onClick={this.executeWindow} id="Guksu" key="Guksu" data-attri="Guksu">
        <text transform="translate(1147.663 600.6925)" className="st0 st1">국</text>
        <text transform="translate(1147.663 608.5925)" className="st0 st1">수</text>
      </g>
      <g onClick={this.executeWindow} id="Asin" key="Asin" data-attri="Asin">
        <text transform="translate(1162.6864 600.6925)" className="st0 st1">아</text>
        <text transform="translate(1162.6864 608.5925)" className="st0 st1">신</text>
      </g>
      <g onClick={this.executeWindow} id="Obin" key="Obin" data-attri="Obin">
        <text transform="translate(1177.7118 600.6925)" className="st0 st1">오</text>
        <text transform="translate(1177.7118 608.5925)" className="st0 st1">빈</text>
      </g>
      <g onClick={this.executeWindow} id="Yangpyeong1" key="Yangpyeong1" data-attri="Yangpyeong1">
        <text transform="translate(1192.7372 600.6925)" className="st0 st1">양</text>
        <text transform="translate(1192.7372 608.5925)" className="st0 st1">평</text>
      </g>
      <g onClick={this.executeWindow} id="Wondeok" key="Wondeok" data-attri="Wondeok">
        <text transform="translate(1207.7616 600.6925)" className="st0 st1">원</text>
        <text transform="translate(1207.7616 608.5925)" className="st0 st1">덕</text>
      </g>
      <g onClick={this.executeWindow} id="Yongmun" key="Yongmun" data-attri="Yongmun">
        <text transform="translate(1222.787 600.6925)" className="st0 st1">용</text>
        <text transform="translate(1222.787 608.5925)" className="st0 st1">문</text>
      </g>
      <g onClick={this.executeWindow} id="Paldang" key="Paldang" data-attri="Paldang">
        <text transform="translate(1087.2684 600.6925)" className="st0 st1">팔</text>
        <text transform="translate(1087.2684 608.5925)" className="st0 st1">당</text>
      </g>
      <g onClick={this.executeWindow} id="CampusTown" key="CampusTown" data-attri="CampusTown">
        <text transform="translate(255.8285 1145.379)" className="st0 st1">캠</text>
        <text transform="translate(255.8285 1153.2791)" className="st0 st1">퍼</text>
        <text transform="translate(255.8285 1161.1791)" className="st0 st1">스</text>
        <text transform="translate(255.8285 1169.0791)" className="st0 st1">타</text>
        <text transform="translate(255.8285 1176.979)" className="st0 st1">운</text>
      </g>
      <g onClick={this.executeWindow} id="KangnamUniv" key="KangnamUniv" data-attri="KangnamUniv">
        <text transform="translate(928.7225 1168.1075)" className="st0 st1">강</text>
        <text transform="translate(928.7225 1176.0076)" className="st0 st1">남</text>
        <text transform="translate(928.7225 1183.9076)" className="st0 st1">대</text>
      </g>
      <g onClick={this.executeWindow} id="Sanbon" key="Sanbon" data-attri="Sanbon">
        <text transform="translate(675.2616 1145.1974)" className="st0 st1">산</text>
        <text transform="translate(675.2616 1153.0974)" className="st0 st1">본</text>
      </g>
      <g onClick={this.executeWindow} id="Mullae" key="Mullae" data-attri="Mullae">
        <text transform="translate(421.9213 808.1027)" className="st0 st1">문래</text>
      </g>
      <g onClick={this.executeWindow} id="Beomgye" key="Beomgye" data-attri="Beomgye">
        <text transform="translate(689.579 1103.5685)" className="st0 st1">범계</text>
      </g>
      <g onClick={this.executeWindow} id="Pyeongchon" key="Pyeongchon" data-attri="Pyeongchon">
        <text transform="translate(689.579 1088.3175)" className="st0 st1">평촌</text>
      </g>
      <g onClick={this.executeWindow} id="Indeogwon" key="Indeogwon" data-attri="Indeogwon">
        <text transform="translate(689.579 1073.0675)" className="st0 st1">인덕원</text>
      </g>
      <g onClick={this.executeWindow} id="GovernmentComplexGwacheon" key="GovernmentComplexGwacheon" data-attri="GovernmentComplexGwacheon">
        <text transform="translate(689.579 1057.8116)" className="st0 st1">정부과천청사</text>
      </g>
      <g onClick={this.executeWindow} id="Gwacheon" key="Gwacheon" data-attri="Gwacheon">
        <text transform="translate(689.579 1042.5616)" className="st0 st1">과천</text>
      </g>
      <g onClick={this.executeWindow} id="SeoulGrandPark" key="SeoulGrandPark" data-attri="SeoulGrandPark">
        <text transform="translate(689.579 1027.3038)" className="st0 st1">대공원</text>
      </g>
      <g onClick={this.executeWindow} id="SeoulRacecoursePark" key="SeoulRacecoursePark" data-attri="SeoulRacecoursePark">
        <text transform="translate(689.579 1012.0548)" className="st0 st1">경마공원</text>
      </g>
      <g onClick={this.executeWindow} id="Seonbawi" key="Seonbawi" data-attri="Seonbawi">
        <text transform="translate(689.579 996.8038)" className="st0 st1">선바위</text>
      </g>
      <g onClick={this.executeWindow} id="Namtaeryeong" key="Namtaeryeong" data-attri="Namtaeryeong">
        <text transform="translate(689.579 981.547)" className="st0 st1">남태령</text>
      </g>
      <g onClick={this.executeWindow} id="Geomam" key="Geomam" data-attri="Geomam">
        <text transform="translate(74.4359 557.6925)" className="st0 st1">검암</text>
      </g>
      <g onClick={this.executeWindow} id="Gyulhyeon" key="Gyulhyeon" data-attri="Gyulhyeon">
        <text transform="translate(74.4359 626.3771)" className="st0 st1">귤현</text>
      </g>
      <g onClick={this.executeWindow} id="Bakchon" key="Bakchon" data-attri="Bakchon">
        <text transform="translate(74.4359 659.2882)" className="st0 st1">박촌</text>
      </g>
      <g onClick={this.executeWindow} id="Imhak" key="Imhak" data-attri="Imhak">
        <text transform="translate(74.4359 692.1993)" className="st0 st1">임학</text>
      </g>
      <g onClick={this.executeWindow} id="Gyesan" key="Gyesan" data-attri="Gyesan">
        <text transform="translate(74.4359 725.1183)" className="st0 st1">계산</text>
      </g>
      <g onClick={this.executeWindow} id="GyeonginNatlUnivofEducation" key="GyeonginNatlUnivofEducation" data-attri="GyeonginNatlUnivofEducation">
        <text transform="translate(74.4359 758.0304)" className="st0 st1">경인교대입구</text>
      </g>
      <g onClick={this.executeWindow} id="CheongnaIntlCityStation" key="CheongnaIntlCityStation" data-attri="CheongnaIntlCityStation">
        <text transform="translate(75.9447 539.4855)" className="st0 st1">청라국제도시</text>
      </g>
      <g onClick={this.executeWindow} id="Yongmasan" key="Yongmasan" data-attri="Yongmasan">
        <text transform="translate(999.2616 602.9288)" className="st0 st1">용마산</text>
      </g>
      <g onClick={this.executeWindow} id="Sagajeong" key="Sagajeong" data-attri="Sagajeong">
        <text transform="translate(999.2616 576.5245)" className="st0 st1">사가정</text>
      </g>
      <g onClick={this.executeWindow} id="Myeonmok" key="Myeonmok" data-attri="Myeonmok">
        <text transform="translate(999.2616 547.546)" className="st0 st1">면목</text>
      </g>
      <g onClick={this.executeWindow} id="Jungnang" key="Jungnang" data-attri="Jungnang">
        <text transform="translate(952.6971 533.172)" className="st0 st1">중랑</text>
      </g>
      <g onClick={this.executeWindow} id="Sinnae" key="Sinnae" data-attri="Sinnae">
        <text transform="translate(1045.7147 457.4913)" className="st0 st1">신내</text>
      </g>
      <g onClick={this.executeWindow} id="Changsin" key="Changsin" data-attri="Changsin">
        <text transform="translate(786.6542 581.3898)" className="st0 st1">창신</text>
      </g>
      <g onClick={this.executeWindow} id="Apgujeong" key="Apgujeong" data-attri="Apgujeong">
        <text transform="translate(798.9677 779.5177)" className="st0 st1">압구정</text>
      </g>
      <g onClick={this.executeWindow} id="Saejeol" key="Saejeol" data-attri="Saejeol">
        <text transform="translate(487.3246 536.0724)" className="st0 st1">새절</text>
      </g>
      <g onClick={this.executeWindow} id="Eungam" key="Eungam" data-attri="Eungam">
        <text transform="translate(487.3246 509.6984)" className="st0 st1">응암</text>
      </g>
      <g onClick={this.executeWindow} id="Gupabal" key="Gupabal" data-attri="Gupabal">
        <text transform="translate(503.6517 366.7472)" className="st0 st1">구파발</text>
      </g>
      <g onClick={this.executeWindow} id="SookmyungWomensUniv" key="SookmyungWomensUniv" data-attri="SookmyungWomensUniv">
        <text transform="translate(662.0165 707.6759)" className="st0 st1">숙대입구</text>
      </g>
      <g onClick={this.executeWindow} id="Namyeong" key="Namyeong" data-attri="Namyeong">
        <text transform="translate(657.6512 724.6798)" className="st0 st1">남영</text>
      </g>
      <g onClick={this.executeWindow} id="Seryu" key="Seryu" data-attri="Seryu">
        <text transform="translate(790.1747 1155.4816)" className="st0 st1">세류</text>
      </g>
      <g onClick={this.executeWindow} id="GachonUniv" key="GachonUniv" data-attri="GachonUniv">
        <text transform="translate(1084.0741 1012.7999)" className="st0 st1">가천대</text>
      </g>
      <g onClick={this.executeWindow} id="Jangji" key="Jangji" data-attri="Jangji">
        <text transform="translate(1114.5497 957.3292)" className="st0 st1">장지</text>
      </g>
      <g onClick={this.executeWindow} id="Dandaeogeori" key="Dandaeogeori" data-attri="Dandaeogeori">
        <text transform="translate(1144.9891 1032.671)" className="st0 st1">단대오거리</text>
      </g>
      <g onClick={this.executeWindow} id="Taepyeong" key="Taepyeong" data-attri="Taepyeong">
        <text transform="translate(1089.6171 1036.5177)" className="st0 st1">태평</text>
      </g>
      <g onClick={this.executeWindow} id="Banghak" key="Banghak" data-attri="Banghak">
        <text transform="translate(861.9227 253.8585)" className="st0 st1">방학</text>
      </g>
      <g onClick={this.executeWindow} id="Dobong" key="Dobong" data-attri="Dobong">
        <text transform="translate(862.0604 209.5226)" className="st0 st1">도봉</text>
      </g>
      <g onClick={this.executeWindow} id="Dokbawi" key="Dokbawi" data-attri="Dokbawi">
        <text transform="translate(547.1039 434.4816)" className="st0 st1">독바위</text>
      </g>
      <g onClick={this.executeWindow} id="Sinheung" key="Sinheung" data-attri="Sinheung">
        <text transform="translate(1144.5682 1052.2491)" className="st0 st1">신흥</text>
      </g>
      <g onClick={this.executeWindow} id="Geumho" key="Geumho" data-attri="Geumho">
        <text transform="translate(789.7303 696.9347)" className="st0 st1">금호</text>
      </g>
      <g onClick={this.executeWindow} id="Hyehwa" key="Hyehwa" data-attri="Hyehwa">
        <text transform="translate(744.8182 571.2072)" className="st0 st1">혜화</text>
      </g>
      <g onClick={this.executeWindow} id="Achasan" key="Achasan" data-attri="Achasan">
        <text transform="translate(1007.2538 683.2189)" className="st0 st1">아차산</text>
      </g>
      <g onClick={this.executeWindow} id="Jichuk" key="Jichuk" data-attri="Jichuk">
        <text transform="translate(503.5902 339.8673)" className="st0 st1">지축</text>
      </g>
      <g onClick={this.executeWindow} id="Gusan" key="Gusan" data-attri="Gusan">
        <text transform="translate(487.3314 461.13)" className="st0 st1">구산</text>
      </g>
      <g onClick={this.executeWindow} id="Munjeong" key="Munjeong" data-attri="Munjeong">
        <text transform="translate(1114.5575 926.8282)" className="st0 st1">문정</text>
      </g>
      <g onClick={this.executeWindow} id="Mangwolsa" key="Mangwolsa" data-attri="Mangwolsa">
        <text transform="translate(880.5663 83.1691)" className="st0 st1">망월사</text>
      </g>
      <g onClick={this.executeWindow} id="NamdongInduspark" key="NamdongInduspark" data-attri="NamdongInduspark">
        <text transform="translate(225.4779 1078.2042)" className="st0 st1">남동</text>
        <text transform="translate(225.4779 1086.1042)" className="st0 st1">인더스파크</text>
      </g>
      <g onClick={this.executeWindow} id="Hogupo" key="Hogupo" data-attri="Hogupo">
        <text transform="translate(258.9594 1085.7189)" className="st0 st1">호구포</text>
      </g>
      <g onClick={this.executeWindow} id="IncheonNonhyeon" key="IncheonNonhyeon" data-attri="IncheonNonhyeon">
        <text transform="translate(290.5687 1085.7189)" className="st0 st1">인천논현</text>
      </g>
      <g onClick={this.executeWindow} id="Gwanak" key="Gwanak" data-attri="Gwanak">
        <text transform="translate(499.1869 1111.7286)" className="st0 st1">관악</text>
      </g>
      <g onClick={this.executeWindow} id="Anyang" key="Anyang" data-attri="Anyang">
        <text transform="translate(559.2426 1111.7286)" className="st0 st1">안양</text>
      </g>
      <g onClick={this.executeWindow} id="Myeonghak" key="Myeonghak" data-attri="Myeonghak">
        <text transform="translate(619.598 1111.7286)" className="st0 st1">명학</text>
      </g>
      <g onClick={this.executeWindow} id="Gunpo" key="Gunpo" data-attri="Gunpo">
        <text transform="translate(700.3573 1111.7286)" className="st0 st1">군포</text>
      </g>
      <g onClick={this.executeWindow} id="Dangjeong" key="Dangjeong" data-attri="Dangjeong">
        <text transform="translate(720.6688 1111.7286)" className="st0 st1">당정</text>
      </g>
      <g onClick={this.executeWindow} id="Uiwang" key="Uiwang" data-attri="Uiwang">
        <text transform="translate(740.9227 1111.7286)" className="st0 st1">의왕</text>
      </g>
      <g onClick={this.executeWindow} id="SungkyunkwanUniv" key="SungkyunkwanUniv" data-attri="SungkyunkwanUniv">
        <text transform="translate(755.7469 1111.7286)" className="st0 st1">성균관대</text>
      </g>
      <g onClick={this.executeWindow} id="Sindaebang" key="Sindaebang" data-attri="Sindaebang">
        <text transform="translate(470.9662 936.3361)" className="st0 st1">신대방</text>
      </g>
      <g onClick={this.executeWindow} id="Bongcheon" key="Bongcheon" data-attri="Bongcheon">
        <text transform="translate(555.9603 938.84)" className="st0 st1">봉천</text>
      </g>
      <g onClick={this.executeWindow} id="Euljiro1ilga" key="Euljiro1ilga" data-attri="Euljiro1ilga">
        <text transform="translate(671.5243 639.88)" className="st0 st1">을지로입구</text>
      </g>
      <g onClick={this.executeWindow} id="Jonggak" key="Jonggak" data-attri="Jonggak">
        <text transform="translate(678.6317 619.6505)" className="st0 st1">종각역</text>
      </g>
      <g onClick={this.executeWindow} id="Jongno5oga" key="Jongno5oga" data-attri="Jongno5oga">
        <text transform="translate(732.6561 605.4894)" className="st0 st1">종로5가</text>
      </g>
      <g onClick={this.executeWindow} id="Daebang" key="Daebang" data-attri="Daebang">
        <text transform="translate(512.4271 830.09)" className="st0 st1">대방</text>
      </g>
      <g onClick={this.executeWindow} id="Sinpung" key="Sinpung" data-attri="Sinpung">
        <text transform="translate(459.8558 883.8019)" className="st0 st1">신풍</text>
      </g>
      <g onClick={this.executeWindow} id="Namguro" key="Namguro" data-attri="Namguro">
        <text transform="translate(384.9515 922.6007)" className="st0 st1">남구로</text>
      </g>
      <g onClick={this.executeWindow} id="Boramae" key="Boramae" data-attri="Boramae">
        <text transform="translate(490.9633 883.6583)" className="st0 st1">보라매</text>
      </g>
      <g onClick={this.executeWindow} id="YangcheonHyanggyo" key="YangcheonHyanggyo" data-attri="YangcheonHyanggyo">
        <text transform="translate(258.7406 614.8595)" className="st0 st1">양천향교</text>
      </g>
      <g onClick={this.executeWindow} id="Magongnaru" key="Magongnaru" data-attri="Magongnaru">
        <text transform="translate(214.4369 614.8595)" className="st0 st1">마곡나루</text>
      </g>
      <g onClick={this.executeWindow} id="Sinbanghwa" key="Sinbanghwa" data-attri="Sinbanghwa">
        <text transform="translate(187.6635 614.8654)" className="st0 st1">신방화</text>
      </g>
      <g onClick={this.executeWindow} id="IncheonIntlAirportCargoTerminal1" key="IncheonIntlAirportCargoTerminal1" data-attri="IncheonIntlAirportCargoTerminal1">
        <text transform="translate(138.6185 523.8781)" className="st0 st1">인천국제공항</text>
      </g>
      <g onClick={this.executeWindow} id="IncheonIntlAirportCargoTerminal" key="IncheonIntlAirportCargoTerminal" data-attri="IncheonIntlAirportCargoTerminal">
        <text transform="translate(114.3617 516.3615)" className="st0 st1">공항화물</text>
        <text transform="translate(114.3617 524.2615)" className="st0 st1">청사</text>
      </g>
      <g onClick={this.executeWindow} id="Songjeong" key="Songjeong" data-attri="Songjeong">
        <text transform="translate(177.6615 651.3849)" className="st0 st1">송정</text>
      </g>
      <g onClick={this.executeWindow} id="Magok" key="Magok" data-attri="Magok">
        <text transform="translate(211.1859 651.3849)" className="st0 st1">마곡</text>
      </g>
      <g onClick={this.executeWindow} id="Sinjeong" key="Sinjeong" data-attri="Sinjeong">
        <text transform="translate(304.0209 776.3175)" className="st0 st1">신정</text>
      </g>
      <g onClick={this.executeWindow} id="Mokdong" key="Mokdong" data-attri="Mokdong">
        <text transform="translate(328.5228 776.3175)" className="st0 st1">목동</text>
      </g>
      <g onClick={this.executeWindow} id="Omokgyo" key="Omokgyo" data-attri="Omokgyo">
        <text transform="translate(357.6205 776.3175)" className="st0 st1">오목교</text>
      </g>
      <g onClick={this.executeWindow} id="Yangpyeong" key="Yangpyeong" data-attri="Yangpyeong">
        <text transform="translate(391.1205 776.3175)" className="st0 st1">양평</text>
      </g>
      <g onClick={this.executeWindow} id="Gwanghwamun" key="Gwanghwamun" data-attri="Gwanghwamun">
        <text transform="translate(658.2391 601.0743)" className="st0 st1">광화문</text>
      </g>
      <g onClick={this.executeWindow} id="Itaewon" key="Itaewon" data-attri="Itaewon">
        <text transform="translate(712.5272 752.3615)" className="st0 st1">이태원</text>
      </g>
      <g onClick={this.executeWindow} id="Noksapyeong" key="Noksapyeong" data-attri="Noksapyeong">
        <text transform="translate(688.8143 752.3927)" className="st0 st1">녹사평</text>
      </g>
      <g onClick={this.executeWindow} id="Seobinggo" key="Seobinggo" data-attri="Seobinggo">
        <text transform="translate(692.8485 808.8419)" className="st0 st1">서빙고</text>
      </g>
      <g onClick={this.executeWindow} id="Gwangheungchang" key="Gwangheungchang" data-attri="Gwangheungchang">
        <text transform="translate(526.0931 706.4865)" className="st0 st1">광흥창</text>
      </g>
      <g onClick={this.executeWindow} id="Sangsu" key="Sangsu" data-attri="Sangsu">
        <text transform="translate(502.5941 706.4865)" className="st0 st1">상수</text>
      </g>
      <g onClick={this.executeWindow} id="Baekseok" key="Baekseok" data-attri="Baekseok">
        <text transform="translate(396.8383 337.1681)" className="st0 st1">백석</text>
      </g>
      <g onClick={this.executeWindow} id="Gyeongbokgung" key="Gyeongbokgung" data-attri="Gyeongbokgung">
        <text transform="translate(650.2665 584.1642)" className="st0 st1">경복궁</text>
      </g>
      <g onClick={this.executeWindow} id="Anguk" key="Anguk" data-attri="Anguk">
        <text transform="translate(688.5907 584.1466)" className="st0 st1">안국</text>
      </g>
      <g onClick={this.executeWindow} id="Myeongdong" key="Myeongdong" data-attri="Myeongdong">
        <text transform="translate(690.7069 655.4435)" className="st0 st1">명동</text>
      </g>
      <g onClick={this.executeWindow} id="LrtUijeongbu" key="LrtUijeongbu" data-attri="LrtUijeongbu">
        <text transform="translate(772.9696 68.6573)" className="st0 st1">경전철</text>
        <text transform="translate(772.9696 76.5573)" className="st0 st1">의정부</text>
      </g>
      <g onClick={this.executeWindow} id="Beomgol" key="Beomgol" data-attri="Beomgol">
        <text transform="translate(794.1708 76.173)" className="st0 st1">범골</text>
      </g>
      <g onClick={this.executeWindow} id="EwhaWomansUniv" key="EwhaWomansUniv" data-attri="EwhaWomansUniv">
        <text transform="translate(570.973 668.4698)" className="st0 st1">이대</text>
      </g>
      <g onClick={this.executeWindow} id="Sinchon" key="Sinchon" data-attri="Sinchon">
        <text transform="translate(545.3705 668.4698)" className="st0 st1">신촌</text>
      </g>
      <g onClick={this.executeWindow} id="SeoulNatlUniv" key="SeoulNatlUniv" data-attri="SeoulNatlUniv">
        <text transform="translate(580.7113 938.84)" className="st0 st1">서울대입구</text>
      </g>
      <g onClick={this.executeWindow} id="SportsComplex" key="SportsComplex" data-attri="SportsComplex">
        <text transform="translate(940.2528 837.0118)" className="st0 st1">종합운동장</text>
      </g>
      <g onClick={this.executeWindow} id="Sincheon" key="Sincheon" data-attri="Sincheon">
        <text transform="translate(984.3182 837.0118)" className="st0 st1">신천</text>
      </g>
      <g onClick={this.executeWindow} id="Guui" key="Guui" data-attri="Guui">
        <text transform="translate(986.1659 730.9562)" className="st0 st1">구의</text>
      </g>
      <g onClick={this.executeWindow} id="Yongdu" key="Yongdu" data-attri="Yongdu">
        <text transform="translate(854.2069 598.9894)" className="st0 st1">용두</text>
      </g>
      <g onClick={this.executeWindow} id="Sangwangsimni" key="Sangwangsimni" data-attri="Sangwangsimni">
        <text transform="translate(811.2499 625.713)" className="st0 st1">상왕십리</text>
      </g>
      <g onClick={this.executeWindow} id="Baegun" key="Baegun" data-attri="Baegun">
        <text transform="translate(93.6683 908.3273)" className="st0 st1">백운</text>
      </g>
      <g onClick={this.executeWindow} id="Anam" key="Anam" data-attri="Anam">
        <text transform="translate(817.7626 562.1447)" className="st0 st1">안암</text>
      </g>
      <g onClick={this.executeWindow} id="Bomun" key="Bomun" data-attri="Bomun">
        <text transform="translate(788.6659 562.1447)" className="st0 st1">보문</text>
      </g>
      <g onClick={this.executeWindow} id="Sujin" key="Sujin" data-attri="Sujin">
        <text transform="translate(1117.7938 1067.3058)" className="st0 st1">수진</text>
      </g>
      <g onClick={this.executeWindow} id="DonggukUniv" key="DonggukUniv" data-attri="DonggukUniv">
        <text transform="translate(740.4032 660.8849)" className="st0 st1">동대입구</text>
      </g>
      <g onClick={this.executeWindow} id="Unseo" key="Unseo" data-attri="Unseo">
        <text transform="translate(93.0424 523.8722)" className="st0 st1">운서</text>
      </g>
      <g onClick={this.executeWindow} id="Balgok" key="Balgok" data-attri="Balgok">
        <text transform="translate(834.3466 90.2462)" className="st0 st1">발곡</text>
      </g>
      <g onClick={this.executeWindow} id="YangcheonguOffice" key="YangcheonguOffice" data-attri="YangcheonguOffice">
        <text transform="translate(334.5287 832.7032)" className="st0 st1">양천구청</text>
      </g>
      <g onClick={this.executeWindow} id="Oryudong" key="Oryudong" data-attri="Oryudong">
        <text transform="translate(273.8597 904.9142)" className="st0 st1">오류동</text>
      </g>
      <g onClick={this.executeWindow} id="Gaebong" key="Gaebong" data-attri="Gaebong">
        <text transform="translate(308.5941 890.5294)" className="st0 st1">개봉</text>
      </g>
      <g onClick={this.executeWindow} id="Guil" key="Guil" data-attri="Guil">
        <text transform="translate(343.3285 876.1427)" className="st0 st1">구일</text>
      </g>
      <g onClick={this.executeWindow} id="Yeongdeungpo" key="Yeongdeungpo" data-attri="Yeongdeungpo">
        <text transform="translate(461.0404 827.3663)" className="st0 st1">영등포</text>
      </g>
      <g onClick={this.executeWindow} id="Nakseongdae" key="Nakseongdae" data-attri="Nakseongdae">
        <text transform="translate(626.4066 952.9073)" className="st0 st1">낙성대</text>
      </g>
      <g onClick={this.executeWindow} id="Jangseungbaegi" key="Jangseungbaegi" data-attri="Jangseungbaegi">
        <text transform="translate(536.3138 855.7374)" className="st0 st1">장승배기</text>
      </g>
      <g onClick={this.executeWindow} id="Seocho" key="Seocho" data-attri="Seocho">
        <text transform="translate(750.3729 914.8907)" className="st0 st1">서초</text>
      </g>
      <g onClick={this.executeWindow} id="Yeoksam" key="Yeoksam" data-attri="Yeoksam">
        <text transform="translate(841.0106 877.3517)" className="st0 st1">역삼</text>
      </g>
      <g onClick={this.executeWindow} id="Samseong" key="Samseong" data-attri="Samseong">
        <text transform="translate(918.3514 845.3156)" className="st0 st1">삼성</text>
      </g>
      <g onClick={this.executeWindow} id="Naebang" key="Naebang" data-attri="Naebang">
        <text transform="translate(707.8348 915.2042)" className="st0 st1">내방</text>
      </g>
      <g onClick={this.executeWindow} id="Maebong" key="Maebong" data-attri="Maebong">
        <text transform="translate(866.4755 918.6427)" className="st0 st1">매봉</text>
      </g>
      <g onClick={this.executeWindow} id="Daechi" key="Daechi" data-attri="Daechi">
        <text transform="translate(917.5995 897.4679)" className="st0 st1">대치</text>
      </g>
      <g onClick={this.executeWindow} id="Hangnyeoul" key="Hangnyeoul" data-attri="Hangnyeoul">
        <text transform="translate(933.3632 888.6437)" className="st0 st1">학여울</text>
      </g>
      <g onClick={this.executeWindow} id="Gaepodong" key="Gaepodong" data-attri="Gaepodong">
        <text transform="translate(930.5643 924.6866)" className="st0 st1">개포동</text>
      </g>
      <g onClick={this.executeWindow} id="Banpo" key="Banpo" data-attri="Banpo">
        <text transform="translate(763.3944 841.714)" className="st0 st1">반포</text>
      </g>
      <g onClick={this.executeWindow} id="Nonhyeon" key="Nonhyeon" data-attri="Nonhyeon">
        <text transform="translate(792.5858 830.3976)" className="st0 st1">논현</text>
      </g>
      <g onClick={this.executeWindow} id="Sinnonhyeon" key="Sinnonhyeon" data-attri="Sinnonhyeon">
        <text transform="translate(807.8163 865.4386)" className="st0 st1">신논현</text>
      </g>
      <g onClick={this.executeWindow} id="Sinbanpo" key="Sinbanpo" data-attri="Sinbanpo">
        <text transform="translate(723.537 873.8068)" className="st0 st1">신반포</text>
      </g>
      <g onClick={this.executeWindow} id="Gubanpo" key="Gubanpo" data-attri="Gubanpo">
        <text transform="translate(697.9911 884.3849)" className="st0 st1">구반포</text>
      </g>
      <g onClick={this.executeWindow} id="Hakdong" key="Hakdong" data-attri="Hakdong">
        <text transform="translate(821.8788 819.0372)" className="st0 st1">학동</text>
      </g>
      <g onClick={this.executeWindow} id="Sinsa" key="Sinsa" data-attri="Sinsa">
        <text transform="translate(788.1005 807.3068)" className="st0 st1">신사</text>
      </g>
      <g onClick={this.executeWindow} id="Jamwon" key="Jamwon" data-attri="Jamwon">
        <text transform="translate(760.9706 818.6056)" className="st0 st1">잠원</text>
      </g>
      <g onClick={this.executeWindow} id="Ssangmun" key="Ssangmun" data-attri="Ssangmun">
        <text transform="translate(837.9159 328.844)" className="st0 st1">쌍문</text>
      </g>
      <g onClick={this.executeWindow} id="Sanggye" key="Sanggye" data-attri="Sanggye">
        <text transform="translate(951.1698 281.9347)" className="st0 st1">상계</text>
      </g>
      <g onClick={this.executeWindow} id="Dolgoji" key="Dolgoji" data-attri="Dolgoji">
        <text transform="translate(891.8915 461.8497)" className="st0 st1">돌곶이</text>
      </g>
      <g onClick={this.executeWindow} id="Sangwolgok" key="Sangwolgok" data-attri="Sangwolgok">
        <text transform="translate(866.8143 472.2335)" className="st0 st1">상월곡</text>
      </g>
      <g onClick={this.executeWindow} id="Cheonwang" key="Cheonwang" data-attri="Cheonwang">
        <text transform="translate(249.766 921.631)" className="st0 st1">천왕</text>
      </g>
      <g onClick={this.executeWindow} id="Gwangmyeongsageori" key="Gwangmyeongsageori" data-attri="Gwangmyeongsageori">
        <text transform="translate(293.5443 939.7677)" className="st0 st1">광명사거리</text>
      </g>
      <g onClick={this.executeWindow} id="Cheolsan" key="Cheolsan" data-attri="Cheolsan">
        <text transform="translate(337.347 957.9113)" className="st0 st1">철산</text>
      </g>
      <g onClick={this.executeWindow} id="Dapsimni" key="Dapsimni" data-attri="Dapsimni">
        <text transform="translate(891.2655 617.3282)" className="st0 st1">답십리</text>
      </g>
      <g onClick={this.executeWindow} id="Janghanpyeong" key="Janghanpyeong" data-attri="Janghanpyeong">
        <text transform="translate(927.871 632.5148)" className="st0 st1">장한평</text>
      </g>
      <g onClick={this.executeWindow} id="Gwangnaru" key="Gwangnaru" data-attri="Gwangnaru">
        <text transform="translate(1041.4052 700.6486)" className="st0 st1">광나루</text>
      </g>
      <g onClick={this.executeWindow} id="Heukseok" key="Heukseok" data-attri="Heukseok">
        <text transform="translate(614.0482 858.0861)" className="st0 st1">흑석</text>
      </g>
      <g onClick={this.executeWindow} id="Nodeul" key="Nodeul" data-attri="Nodeul">
        <text transform="translate(584.6439 845.9044)" className="st0 st1">노들</text>
      </g>
      <g onClick={this.executeWindow} id="YeongdeungpoMarket" key="YeongdeungpoMarket" data-attri="YeongdeungpoMarket">
        <text transform="translate(450.4623 786.9825)" className="st0 st1">영등포시장</text>
      </g>
      <g onClick={this.executeWindow} id="Cheonggyesan" key="Cheonggyesan" data-attri="Cheonggyesan">
        <text transform="translate(896.7645 1058.3624)" className="st0 st1">청계산입구</text>
      </g>
      <g onClick={this.executeWindow} id="Pangyo" key="Pangyo" data-attri="Pangyo">
        <text transform="translate(1013.1346 1106.5685)" className="st0 st1">판교</text>
      </g>
      <g onClick={this.executeWindow} id="Gaerong" key="Gaerong" data-attri="Gaerong">
        <text transform="translate(1132.4061 879.6427)" className="st0 st1">개롱</text>
      </g>
      <g onClick={this.executeWindow} id="Geoyeo" key="Geoyeo" data-attri="Geoyeo">
        <text transform="translate(1160.6444 891.3429)" className="st0 st1">거여</text>
      </g>
      <g onClick={this.executeWindow} id="Jegidong" key="Jegidong" data-attri="Jegidong">
        <text transform="translate(826.6044 581.4777)" className="st0 st1">제기동</text>
      </g>
      <g onClick={this.executeWindow} id="Hwarangdae" key="Hwarangdae" data-attri="Hwarangdae">
        <text transform="translate(969.8944 429.5343)" className="st0 st1">화랑대</text>
      </g>
      <g onClick={this.executeWindow} id="Gaehwa" key="Gaehwa" data-attri="Gaehwa">
        <text transform="translate(134.14 583.5577)" className="st0 st1">개화</text>
      </g>
      <g onClick={this.executeWindow} id="Daemosan" key="Daemosan" data-attri="Daemosan">
        <text transform="translate(948.701 917.171)" className="st0 st1">대모산입구</text>
      </g>
      <g onClick={this.executeWindow} id="Namhansanseong" key="Namhansanseong" data-attri="Namhansanseong">
        <text transform="translate(1129.3563 1006.9806)" className="st0 st1">남한산성입구</text>
      </g>
      <g onClick={this.executeWindow} id="Sanseong" key="Sanseong" data-attri="Sanseong">
        <text transform="translate(1112.1952 999.3146)" className="st0 st1">산성</text>
      </g>
      <g onClick={this.executeWindow} id="Godeok" key="Godeok" data-attri="Godeok">
        <text transform="translate(1189.4667 675.1017)" className="st0 st1">고덕</text>
      </g>
      <g onClick={this.executeWindow} id="Sangildong" key="Sangildong" data-attri="Sangildong">
        <text transform="translate(1223.0487 661.1915)" className="st0 st1">상일동</text>
      </g>
      <g onClick={this.executeWindow} id="Bangbae" key="Bangbae" data-attri="Bangbae">
        <text transform="translate(726.4237 955.3624)" className="st0 st1">방배</text>
      </g>
      <g onClick={this.executeWindow} id="Sindaebangsamgeori" key="Sindaebangsamgeori" data-attri="Sindaebangsamgeori">
        <text transform="translate(520.8383 882.881)" className="st0 st1">신대방삼거리</text>
      </g>
      <g onClick={this.executeWindow} id="Cheongdam" key="Cheongdam" data-attri="Cheongdam">
        <text transform="translate(880.7245 796.1652)" className="st0 st1">청담</text>
      </g>
      <g onClick={this.executeWindow} id="Guryong" key="Guryong" data-attri="Guryong">
        <text transform="translate(908.663 932.1075)" className="st0 st1">구룡</text>
      </g>
      <g onClick={this.executeWindow} id="Sapyeong" key="Sapyeong" data-attri="Sapyeong">
        <text transform="translate(771.16 866.7296)" className="st0 st1">사평</text>
      </g>
      <g onClick={this.executeWindow} id="Daeheung" key="Daeheung" data-attri="Daeheung">
        <text transform="translate(552.9603 710.6827)" className="st0 st1">대흥</text>
      </g>
      <g onClick={this.executeWindow} id="Hyochangpark" key="Hyochangpark" data-attri="Hyochangpark">
        <text transform="translate(619.6166 721.6671)" className="st0 st1">효창공원앞</text>
      </g>
      <g onClick={this.executeWindow} id="Hoehyeon" key="Hoehyeon" data-attri="Hoehyeon">
        <text transform="translate(668.2919 662.4005)" className="st0 st1">회현</text>
      </g>
      <g onClick={this.executeWindow} id="Ahyeon" key="Ahyeon" data-attri="Ahyeon">
        <text transform="translate(603.4515 666.7609)" className="st0 st1">아현</text>
      </g>
      <g onClick={this.executeWindow} id="Ttukseom" key="Ttukseom" data-attri="Ttukseom">
        <text transform="translate(872.4559 695.8458)" className="st0 st1">뚝섬</text>
      </g>
      <g onClick={this.executeWindow} id="HanyangUniv" key="HanyangUniv" data-attri="HanyangUniv">
        <text transform="translate(870.9344 665.6212)" className="st0 st1">한양대</text>
      </g>
      <g onClick={this.executeWindow} id="Seonyudo" key="Seonyudo" data-attri="Seonyudo">
        <text transform="translate(420.4056 723.2706)" className="st0 st1">선유도</text>
      </g>
      <g onClick={this.executeWindow} id="Bonghwasan" key="Bonghwasan" data-attri="Bonghwasan">
        <text transform="translate(1004.6229 435.257)" className="st0 st1">봉화산</text>
      </g>
      <g onClick={this.executeWindow} id="HankukUnivofForeignStudies" key="HankukUnivofForeignStudies" data-attri="HankukUnivofForeignStudies">
        <text transform="translate(893.3124 517.6534)" className="st0 st1">외대앞</text>
      </g>
      <g onClick={this.executeWindow} id="HansungUniv" key="HansungUniv" data-attri="HansungUniv">
        <text transform="translate(755.1346 544.089)" className="st0 st1">한성대입구</text>
      </g>
      <g onClick={this.executeWindow} id="SungshinWomensUniv" key="SungshinWomensUniv" data-attri="SungshinWomensUniv">
        <text transform="translate(780.286 518.923)" className="st0 st1">성신여대입구</text>
      </g>
      <g onClick={this.executeWindow} id="Gireum" key="Gireum" data-attri="Gireum">
        <text transform="translate(809.5702 489.632)" className="st0 st1">길음</text>
      </g>
      <g onClick={this.executeWindow} id="Uijeongbu" key="Uijeongbu" data-attri="Uijeongbu">
        <text transform="translate(810.5536 96.9786)" className="st0 st1">의정부</text>
      </g>
      <g onClick={this.executeWindow} id="Ganeung" key="Ganeung" data-attri="Ganeung">
        <text transform="translate(799.1678 108.3645)" className="st0 st1">가능</text>
      </g>
      <g onClick={this.executeWindow} id="Nogyang" key="Nogyang" data-attri="Nogyang">
        <text transform="translate(787.7821 119.7511)" className="st0 st1">녹양</text>
      </g>
      <g onClick={this.executeWindow} id="Yangju" key="Yangju" data-attri="Yangju">
        <text transform="translate(776.3964 131.1368)" className="st0 st1">양주</text>
      </g>
      <g onClick={this.executeWindow} id="Deokgye" key="Deokgye" data-attri="Deokgye">
        <text transform="translate(765.0106 142.5226)" className="st0 st1">덕계</text>
      </g>
      <g onClick={this.executeWindow} id="Deokjeong" key="Deokjeong" data-attri="Deokjeong">
        <text transform="translate(753.6249 153.9083)" className="st0 st1">덕정</text>
      </g>
      <g onClick={this.executeWindow} id="Jihaeng" key="Jihaeng" data-attri="Jihaeng">
        <text transform="translate(742.2382 165.2941)" className="st0 st1">지행</text>
      </g>
      <g onClick={this.executeWindow} id="Dongducheonjungang" key="Dongducheonjungang" data-attri="Dongducheonjungang">
        <text transform="translate(730.8524 176.6798)" className="st0 st1">동두천중앙</text>
      </g>
      <g onClick={this.executeWindow} id="Bosan" key="Bosan" data-attri="Bosan">
        <text transform="translate(719.4667 188.0656)" className="st0 st1">보산</text>
      </g>
      <g onClick={this.executeWindow} id="Dongducheon" key="Dongducheon" data-attri="Dongducheon">
        <text transform="translate(708.08 199.4513)" className="st0 st1">동두천</text>
      </g>
      <g onClick={this.executeWindow} id="Soyosan" key="Soyosan" data-attri="Soyosan">
        <text transform="translate(695.1903 210.837)" className="st0 st1">소요산</text>
      </g>
      <g onClick={this.executeWindow} id="Tapseok" key="Tapseok" data-attri="Tapseok">
        <text transform="translate(642.1503 210.5558)" className="st0 st1">탑석</text>
      </g>
      <g onClick={this.executeWindow} id="Songsan" key="Songsan" data-attri="Songsan">
        <text transform="translate(654.5829 198.1241)" className="st0 st1">송산</text>
      </g>
      <g onClick={this.executeWindow} id="eoryong" key="eoryong" data-attri="eoryong">
        <text transform="translate(667.0145 185.6925)" className="st0 st1">어룡</text>
      </g>
      <g onClick={this.executeWindow} id="gonjae" key="gonjae" data-attri="gonjae">
        <text transform="translate(679.4452 173.2609)" className="st0 st1">곤제</text>
      </g>
      <g onClick={this.executeWindow} id="hyoja" key="hyoja" data-attri="hyoja">
        <text transform="translate(691.8778 160.8282)" className="st0 st1">효자</text>
      </g>
      <g onClick={this.executeWindow} id="GyeonggiProvincialGovernmentNorthernOffice" key="GyeonggiProvincialGovernmentNorthernOffice" data-attri="GyeonggiProvincialGovernmentNorthernOffice">
        <text transform="translate(704.3094 148.3966)" className="st0 st1">경기도청</text>
        <text transform="translate(704.3094 156.2966)" className="st0 st1">북부청사</text>
      </g>
      <g onClick={this.executeWindow} id="saemal" key="saemal" data-attri="saemal">
        <text transform="translate(716.7352 135.965)" className="st0 st1">새말</text>
      </g>
      <g onClick={this.executeWindow} id="Dongo" key="Dongo" data-attri="Dongo">
        <text transform="translate(729.1669 123.5392)" className="st0 st1">동오</text>
      </g>
      <g onClick={this.executeWindow} id="UijeongbuJungang" key="UijeongbuJungang" data-attri="UijeongbuJungang">
        <text transform="translate(741.5995 111.1075)" className="st0 st1">의정부중앙</text>
      </g>
      <g onClick={this.executeWindow} id="Heungseon" key="Heungseon" data-attri="Heungseon">
        <text transform="translate(754.0321 98.6749)" className="st0 st1">흥선</text>
      </g>
      <g onClick={this.executeWindow} id="UijeongbuCityHall" key="UijeongbuCityHall" data-attri="UijeongbuCityHall">
        <text transform="translate(763.5253 89.8507)" className="st0 st1">의정부시청</text>
      </g>
      <g onClick={this.executeWindow} id="Yatap" key="Yatap" data-attri="Yatap">
        <text transform="translate(1094.1073 1077.0128)" className="st0 st1">야탑</text>
      </g>
      <g onClick={this.executeWindow} id="Imae" key="Imae" data-attri="Imae">
        <text transform="translate(1082.1708 1088.9445)" className="st0 st1">이매</text>
      </g>
      <g onClick={this.executeWindow} id="Dunjeon" key="Dunjeon" data-attri="Dunjeon">
        <text transform="translate(1121.7157 1106.173)" className="st0 st1">둔전</text>
      </g>
      <g onClick={this.executeWindow} id="Bopyeong" key="Bopyeong" data-attri="Bopyeong">
        <text transform="translate(1109.5399 1118.3478)" className="st0 st1">보평</text>
      </g>
      <g onClick={this.executeWindow} id="Gojin" key="Gojin" data-attri="Gojin">
        <text transform="translate(1097.371 1130.5167)" className="st0 st1">고진</text>
      </g>
      <g onClick={this.executeWindow} id="Gimnyangjang" key="Gimnyangjang" data-attri="Gimnyangjang">
        <text transform="translate(1073.0262 1154.8605)" className="st0 st1">김량장</text>
      </g>
      <g onClick={this.executeWindow} id="StadiumSongdamCollege" key="StadiumSongdamCollege" data-attri="StadiumSongdamCollege">
        <text transform="translate(1085.1962 1142.6925)" className="st0 st1">운동장 · 송담대</text>
      </g>
      <g onClick={this.executeWindow} id="Seohyeon" key="Seohyeon" data-attri="Seohyeon">
        <text transform="translate(1069.7206 1101.4825)" className="st0 st1">서현</text>
      </g>
      <g onClick={this.executeWindow} id="Migeum" key="Migeum" data-attri="Migeum">
        <text transform="translate(1033.5135 1137.5939)" className="st0 st1">미금</text>
      </g>
      <g onClick={this.executeWindow} id="JeondaeEverland" key="JeondaeEverland" data-attri="JeondaeEverland">
        <text transform="translate(1133.8778 1094.0109)" className="st0 st1">전대 · 에버랜드</text>
      </g>
      <g onClick={this.executeWindow} id="Yeouinaru" key="Yeouinaru" data-attri="Yeouinaru">
        <text transform="translate(535.2054 770.4552)" className="st0 st1">여의나루</text>
      </g>
      <g onClick={this.executeWindow} id="Mapo" key="Mapo" data-attri="Mapo">
        <text transform="translate(577.6615 727.9991)" className="st0 st1">마포</text>
      </g>
      <g onClick={this.executeWindow} id="Haengdang" key="Haengdang" data-attri="Haengdang">
        <text transform="translate(827.621 663.5157)" className="st0 st1">행당</text>
      </g>
      <g onClick={this.executeWindow} id="Jeungsan" key="Jeungsan" data-attri="Jeungsan">
        <text transform="translate(479.2523 571.1251)" className="st0 st1">증산</text>
      </g>
      <g onClick={this.executeWindow} id="Yeokchon" key="Yeokchon" data-attri="Yeokchon">
        <text transform="translate(513.5922 481.5597)" className="st0 st1">역촌</text>
      </g>
      <g onClick={this.executeWindow} id="Sangdo" key="Sangdo" data-attri="Sangdo">
        <text transform="translate(582.7338 865.4386)" className="st0 st1">상도</text>
      </g>
      <g onClick={this.executeWindow} id="SoongsilUniv" key="SoongsilUniv" data-attri="SoongsilUniv">
        <text transform="translate(606.9974 889.4269)" className="st0 st1">숭실대입구</text>
      </g>
      <g onClick={this.executeWindow} id="Namseong" key="Namseong" data-attri="Namseong">
        <text transform="translate(650.2245 932.6525)" className="st0 st1">남성</text>
      </g>
      <g onClick={this.executeWindow} id="Saetgang" key="Saetgang" data-attri="Saetgang">
        <text transform="translate(529.5365 810.9698)" className="st0 st1">샛강</text>
      </g>
      <g onClick={this.executeWindow} id="NationalAssembly" key="NationalAssembly" data-attri="NationalAssembly">
        <text transform="translate(491.3148 772.7482)" className="st0 st1">국회의사당</text>
      </g>
      <g onClick={this.executeWindow} id="Sinmokdong" key="Sinmokdong" data-attri="Sinmokdong">
        <text transform="translate(391.8402 711.3087)" className="st0 st1">신목동</text>
      </g>
      <g onClick={this.executeWindow} id="Yeomchang" key="Yeomchang" data-attri="Yeomchang">
        <text transform="translate(374.5355 694.2609)" className="st0 st1">염창</text>
      </g>
      <g onClick={this.executeWindow} id="Deungchon" key="Deungchon" data-attri="Deungchon">
        <text transform="translate(354.1381 673.8556)" className="st0 st1">등촌</text>
      </g>
      <g onClick={this.executeWindow} id="Jeungmi" key="Jeungmi" data-attri="Jeungmi">
        <text transform="translate(333.8324 653.546)" className="st0 st1">증미</text>
      </g>
      <g onClick={this.executeWindow} id="Gayang" key="Gayang" data-attri="Gayang">
        <text transform="translate(316.3783 636.0909)" className="st0 st1">가양</text>
      </g>
      <g onClick={this.executeWindow} id="Soraepogu" key="Soraepogu" data-attri="Soraepogu">
        <text transform="translate(324.9467 1085.6925)" className="st0 st1">소래포구</text>
      </g>
      <g onClick={this.executeWindow} id="Wolgot" key="Wolgot" data-attri="Wolgot">
        <text transform="translate(368.5492 1088.9562)" className="st0 st1">월곶</text>
      </g>
      <g onClick={this.executeWindow} id="Dalwol" key="Dalwol" data-attri="Dalwol">
        <text transform="translate(391.1771 1111.0646)" className="st0 st1">달월</text>
      </g>
      <g onClick={this.executeWindow} id="Songpa" key="Songpa" data-attri="Songpa">
        <text transform="translate(1067.3837 879.4728)" className="st0 st1">송파</text>
      </g>
      <g onClick={this.executeWindow} id="Mangwon" key="Mangwon" data-attri="Mangwon">
        <text transform="translate(466.764 670.1866)" className="st0 st1">망원</text>
      </g>
      <g onClick={this.executeWindow} id="MapoguOffice" key="MapoguOffice" data-attri="MapoguOffice">
        <text transform="translate(442.4828 642.8976)" className="st0 st1">마포구청</text>
      </g>
      <g onClick={this.executeWindow} id="Muakjae" key="Muakjae" data-attri="Muakjae">
        <text transform="translate(585.0648 567.8185)" className="st0 st1">무악재</text>
      </g>
      <g onClick={this.executeWindow} id="Hongje" key="Hongje" data-attri="Hongje">
        <text transform="translate(563.3627 545.9542)" className="st0 st1">홍제</text>
      </g>
      <g onClick={this.executeWindow} id="Dongnimmun" key="Dongnimmun" data-attri="Dongnimmun">
        <text transform="translate(615.5453 598.3068)" className="st0 st1">독립문</text>
      </g>
      <g onClick={this.executeWindow} id="Aeogae" key="Aeogae" data-attri="Aeogae">
        <text transform="translate(618.6469 685.504)" className="st0 st1">애오개</text>
      </g>
      <g onClick={this.executeWindow} id="WorldCupStadium" key="WorldCupStadium" data-attri="WorldCupStadium">
        <text transform="translate(434.9164 615.4552)" className="st0 st1">월드컵경기장</text>
      </g>
      <g onClick={this.executeWindow} id="Sunae" key="Sunae" data-attri="Sunae">
        <text transform="translate(1057.1874 1113.9142)" className="st0 st1">수내</text>
      </g>
      <g onClick={this.executeWindow} id="Dorimcheon" key="Dorimcheon" data-attri="Dorimcheon">
        <text transform="translate(374.4613 818.5802)" className="st0 st1">도림천</text>
      </g>
      <g onClick={this.executeWindow} id="Gangmae" key="Gangmae" data-attri="Gangmae">
        <text transform="translate(373.265 509.6857)" className="st0 st1">강매</text>
      </g>
      <g onClick={this.executeWindow} id="Susaek" key="Susaek" data-attri="Susaek">
        <text transform="translate(433.3324 569.7531)" className="st0 st1">수색</text>
      </g>
      <g onClick={this.executeWindow} id="Hannam" key="Hannam" data-attri="Hannam">
        <text transform="translate(761.0575 761.4923)" className="st0 st1">한남</text>
      </g>
      <g onClick={this.executeWindow} id="Eungbong" key="Eungbong" data-attri="Eungbong">
        <text transform="translate(836.1512 686.4015)" className="st0 st1">응봉</text>
      </g>
      <g onClick={this.executeWindow} id="Sillim" key="Sillim" data-attri="Sillim">
        <text transform="translate(528.5287 938.8146)" className="st0 st1">신림</text>
      </g>
      <g onClick={this.executeWindow} id="Dongam" key="Dongam" data-attri="Dongam">
        <text transform="translate(66.7377 896.8781)" className="st0 st1">동암</text>
      </g>
      <g onClick={this.executeWindow} id="Singeumho" key="Singeumho" data-attri="Singeumho">
        <text transform="translate(798.2098 664.004)" className="st0 st1">신금호</text>
      </g>
      <g onClick={this.executeWindow} id="Majang" key="Majang" data-attri="Majang">
        <text transform="translate(866.2372 624.8868)" className="st0 st1">마장</text>
      </g>
      <g onClick={this.executeWindow} id="AirportMarket" key="AirportMarket" data-attri="AirportMarket">
        <text transform="translate(174.6918 628.8947)" className="st0 st1">공항시장</text>
      </g>
      <g onClick={this.executeWindow} id="Seodaemun" key="Seodaemun" data-attri="Seodaemun">
        <text transform="translate(617.8002 624.0538)" className="st0 st1">서대문</text>
      </g>
      <g onClick={this.executeWindow} id="Sinimun" key="Sinimun" data-attri="Sinimun">
        <text transform="translate(915.4833 495.5314)" className="st0 st1">신이문</text>
      </g>
      <g onClick={this.executeWindow} id="Miasamgeori" key="Miasamgeori" data-attri="Miasamgeori">
        <text transform="translate(838.6932 459.8585)" className="st0 st1">미아사거리</text>
      </g>
      <g onClick={this.executeWindow} id="Macheon" key="Macheon" data-attri="Macheon">
        <text transform="translate(1200.8905 889.0197)" className="st0 st1">마천</text>
      </g>
      <g onClick={this.executeWindow} id="Chunui" key="Chunui" data-attri="Chunui">
        <text transform="translate(189.9613 849.1359)" className="st0 st1">춘의</text>
      </g>
      <g onClick={this.executeWindow} id="Hwaseo" key="Hwaseo" data-attri="Hwaseo">
        <text transform="translate(786.6737 1118.2286)" className="st0 st1">화서</text>
      </g>
      <g onClick={this.executeWindow} id="Gajwa" key="Gajwa" data-attri="Gajwa">
        <text transform="translate(474.8744 611.84)" className="st0 st1">가좌</text>
      </g>
      <g onClick={this.executeWindow} id="SogangUniv" key="SogangUniv" data-attri="SogangUniv">
        <text transform="translate(544.4047 681.3712)" className="st0 st1">서강대</text>
      </g>
      <g onClick={this.executeWindow} id="TtukseomPark" key="TtukseomPark" data-attri="TtukseomPark">
        <text transform="translate(940.2401 761.049)" className="st0 st1">뚝섬유원지</text>
      </g>
      <g onClick={this.executeWindow} id="ChildrensGrandPark" key="ChildrensGrandPark" data-attri="ChildrensGrandPark">
        <text transform="translate(965.2235 700.8429)" className="st0 st1">어린이대공원</text>
      </g>
      <g onClick={this.executeWindow} id="Junggok" key="Junggok" data-attri="Junggok">
        <text transform="translate(992.455 635.2316)" className="st0 st1">중곡</text>
      </g>
      <g onClick={this.executeWindow} id="Galmae" key="Galmae" data-attri="Galmae">
        <text transform="translate(1067.0897 396.6526)" className="st0 st1">갈매</text>
      </g>
      <g onClick={this.executeWindow} id="Toegyewon" key="Toegyewon" data-attri="Toegyewon">
        <text transform="translate(1079.5028 366.3839)" className="st0 st1">퇴계원</text>
      </g>
      <g onClick={this.executeWindow} id="Byeollae" key="Byeollae" data-attri="Byeollae">
        <text transform="translate(1073.3524 381.5157)" className="st0 st1">별내</text>
      </g>
      <g onClick={this.executeWindow} id="Wolgok" key="Wolgok" data-attri="Wolgok">
        <text transform="translate(842.6083 495.6193)" className="st0 st1">월곡</text>
      </g>
      <g onClick={this.executeWindow} id="KoreaUniv" key="KoreaUniv" data-attri="KoreaUniv">
        <text transform="translate(818.6522 539.2159)" className="st0 st1">고려대</text>
      </g>
      <g onClick={this.executeWindow} id="Beotigogae" key="Beotigogae" data-attri="Beotigogae">
        <text transform="translate(730.1385 696.1583)" className="st0 st1">버티고개</text>
      </g>
      <g onClick={this.executeWindow} id="Mongchontoseong" key="Mongchontoseong" data-attri="Mongchontoseong">
        <text transform="translate(1072.6698 811.6027)" className="st0 st1">몽촌토성</text>
      </g>
      <g onClick={this.executeWindow} id="GangdongguOffice" key="GangdongguOffice" data-attri="GangdongguOffice">
        <text transform="translate(1093.1132 765.2765)" className="st0 st1">강동구청</text>
      </g>
      <g onClick={this.executeWindow} id="Amsa" key="Amsa" data-attri="Amsa">
        <text transform="translate(1122.7469 693.7228)" className="st0 st1">암사</text>
      </g>
      <g onClick={this.executeWindow} id="Hangangjin" key="Hangangjin" data-attri="Hangangjin">
        <text transform="translate(721.8885 729.4581)" className="st0 st1">한강진</text>
      </g>
      <g onClick={this.executeWindow} id="Gildong" key="Gildong" data-attri="Gildong">
        <text transform="translate(1156.3417 738.5021)" className="st0 st1">길동</text>
      </g>
      <g onClick={this.executeWindow} id="Dunchondong" key="Dunchondong" data-attri="Dunchondong">
        <text transform="translate(1141.3798 774.8517)" className="st0 st1">둔촌동</text>
      </g>
      <g onClick={this.executeWindow} id="OlympicPark" key="OlympicPark" data-attri="OlympicPark">
        <text transform="translate(1124.6776 815.548)" className="st0 st1">올림픽공원</text>
      </g>
      <g onClick={this.executeWindow} id="Bangi" key="Bangi" data-attri="Bangi">
        <text transform="translate(1112.0458 846.3185)" className="st0 st1">방이</text>
      </g>
      <g onClick={this.executeWindow} id="Gubeundari" key="Gubeundari" data-attri="Gubeundari">
        <text transform="translate(1168.2177 709.8361)" className="st0 st1">굽은다리</text>
      </g>
      <g onClick={this.executeWindow} id="Myeongil" key="Myeongil" data-attri="Myeongil">
        <text transform="translate(1176.8026 689.1134)" className="st0 st1">명일</text>
      </g>
      <g onClick={this.executeWindow} id="Banghwa" key="Banghwa" data-attri="Banghwa">
        <text transform="translate(183.7484 582.7433)" className="st0 st1">방화</text>
      </g>
      <g onClick={this.executeWindow} id="Gaehwasan" key="Gaehwasan" data-attri="Gaehwasan">
        <text transform="translate(174.4301 605.2452)" className="st0 st1">개화산</text>
      </g>
      <g onClick={this.executeWindow} id="Suyu" key="Suyu" data-attri="Suyu">
        <text transform="translate(818.7841 363.9923)" className="st0 st1">수유</text>
      </g>
      <g onClick={this.executeWindow} id="Daehwa" key="Daehwa" data-attri="Daehwa">
        <text transform="translate(333.683 375.8468)" className="st0 st1">대화</text>
      </g>
      <g onClick={this.executeWindow} id="Juyeop" key="Juyeop" data-attri="Juyeop">
        <text transform="translate(341.3861 357.6085)" className="st0 st1">주엽</text>
      </g>
      <g onClick={this.executeWindow} id="Jeongbalsan" key="Jeongbalsan" data-attri="Jeongbalsan">
        <text transform="translate(343.266 339.3722)" className="st0 st1">정발산</text>
      </g>
      <g onClick={this.executeWindow} id="Madu" key="Madu" data-attri="Madu">
        <text transform="translate(376.183 337.0363)" className="st0 st1">마두</text>
      </g>
      <g onClick={this.executeWindow} id="Goksan" key="Goksan" data-attri="Goksan">
        <text transform="translate(435.4496 315.0968)" className="st0 st1">곡산</text>
      </g>
      <g onClick={this.executeWindow} id="Neunggok" key="Neunggok" data-attri="Neunggok">
        <text transform="translate(410.0219 377.4327)" className="st0 st1">능곡</text>
      </g>
      <g onClick={this.executeWindow} id="Haengsin" key="Haengsin" data-attri="Haengsin">
        <text transform="translate(391.9594 421.0343)" className="st0 st1">행신</text>
      </g>
      <g onClick={this.executeWindow} id="Hwajeon" key="Hwajeon" data-attri="Hwajeon">
        <text transform="translate(372.6625 467.5558)" className="st0 st1">화전</text>
      </g>
      <g onClick={this.executeWindow} id="Jangam" key="Jangam" data-attri="Jangam">
        <text transform="translate(901.3544 130.2345)" className="st0 st1">장암</text>
      </g>
      <g onClick={this.executeWindow} id="Guri" key="Guri" data-attri="Guri">
        <text transform="translate(1061.6542 523.5656)" className="st0 st1">구리</text>
      </g>
      <g onClick={this.executeWindow} id="Donong" key="Donong" data-attri="Donong">
        <text transform="translate(1067.6346 537.9689)" className="st0 st1">도농</text>
      </g>
      <g onClick={this.executeWindow} id="Yangjeong" key="Yangjeong" data-attri="Yangjeong">
        <text transform="translate(1073.6024 552.3741)" className="st0 st1">양정</text>
      </g>
      <g onClick={this.executeWindow} id="Deokso" key="Deokso" data-attri="Deokso">
        <text transform="translate(1079.5712 566.7794)" className="st0 st1">덕소</text>
      </g>
      <g onClick={this.executeWindow} id="Dosim" key="Dosim" data-attri="Dosim">
        <text transform="translate(1085.8661 581.1837)" className="st0 st1">도심</text>
      </g>
      <g onClick={this.executeWindow} id="Yangwon" key="Yangwon" data-attri="Yangwon">
        <text transform="translate(1055.704 509.1593)" className="st0 st1">양원</text>
      </g>
      <g onClick={this.executeWindow} id="Chuncheon" key="Chuncheon" data-attri="Chuncheon">
        <text transform="translate(992.1288 133.298)" className="st0 st1">춘천</text>
      </g>
      <g onClick={this.executeWindow} id="Namchuncheon" key="Namchuncheon" data-attri="Namchuncheon">
        <text transform="translate(998.5604 148.8224)" className="st0 st1">남춘천</text>
      </g>
      <g onClick={this.executeWindow} id="Gimyujeong" key="Gimyujeong" data-attri="Gimyujeong">
        <text transform="translate(1004.994 164.3488)" className="st0 st1">김유정</text>
      </g>
      <g onClick={this.executeWindow} id="Gangchon" key="Gangchon" data-attri="Gangchon">
        <text transform="translate(1011.4257 179.8741)" className="st0 st1">강촌</text>
      </g>
      <g onClick={this.executeWindow} id="Baegyangri" key="Baegyangri" data-attri="Baegyangri">
        <text transform="translate(1017.8563 197.548)" className="st0 st1">백양리</text>
      </g>
      <g onClick={this.executeWindow} id="Gulbongsan" key="Gulbongsan" data-attri="Gulbongsan">
        <text transform="translate(1024.2889 210.9259)" className="st0 st1">굴봉산</text>
      </g>
      <g onClick={this.executeWindow} id="Gapyeong" key="Gapyeong" data-attri="Gapyeong">
        <text transform="translate(1030.7206 226.4523)" className="st0 st1">가평</text>
      </g>
      <g onClick={this.executeWindow} id="Sangcheon" key="Sangcheon" data-attri="Sangcheon">
        <text transform="translate(1037.1532 241.9777)" className="st0 st1">상천</text>
      </g>
      <g onClick={this.executeWindow} id="Cheongpyeong" key="Cheongpyeong" data-attri="Cheongpyeong">
        <text transform="translate(1043.5848 257.4972)" className="st0 st1">청평</text>
      </g>
      <g onClick={this.executeWindow} id="Daeseongri" key="Daeseongri" data-attri="Daeseongri">
        <text transform="translate(1050.0165 273.0227)" className="st0 st1">대성리</text>
      </g>
      <g onClick={this.executeWindow} id="Maseok" key="Maseok" data-attri="Maseok">
        <text transform="translate(1056.4423 288.549)" className="st0 st1">마석</text>
      </g>
      <g onClick={this.executeWindow} id="Cheonmasan" key="Cheonmasan" data-attri="Cheonmasan">
        <text transform="translate(1062.8759 304.0753)" className="st0 st1">천마산</text>
      </g>
      <g onClick={this.executeWindow} id="PyeongnaeHopyeong" key="PyeongnaeHopyeong" data-attri="PyeongnaeHopyeong">
        <text transform="translate(1069.3075 319.5997)" className="st0 st1">평내호평</text>
      </g>
      <g onClick={this.executeWindow} id="Geumgok" key="Geumgok" data-attri="Geumgok">
        <text transform="translate(1075.7323 335.1202)" className="st0 st1">금곡</text>
      </g>
      <g onClick={this.executeWindow} id="Wolgye" key="Wolgye" data-attri="Wolgye">
        <text transform="translate(897.5272 382.2102)" className="st0 st1">월계</text>
      </g>
      <g onClick={this.executeWindow} id="Nokcheon" key="Nokcheon" data-attri="Nokcheon">
        <text transform="translate(879.3817 338.4532)" className="st0 st1">녹천</text>
      </g>
      <g onClick={this.executeWindow} id="Danggogae" key="Danggogae" data-attri="Danggogae">
        <text transform="translate(980.4276 238.5284)" className="st0 st1">당고개</text>
      </g>
      <g onClick={this.executeWindow} id="Kkachiul" key="Kkachiul" data-attri="Kkachiul">
        <text transform="translate(205.3226 883.4913)" className="st0 st1">까치울</text>
      </g>
      <g onClick={this.executeWindow} id="BucheonStadium" key="BucheonStadium" data-attri="BucheonStadium">
        <text transform="translate(198.8842 865.8341)" className="st0 st1">부천종합운동장</text>
      </g>
      <g onClick={this.executeWindow} id="Doksan" key="Doksan" data-attri="Doksan">
        <text transform="translate(417.8304 999.2355)" className="st0 st1">독산</text>
      </g>
      <g onClick={this.executeWindow} id="Incheon" key="Incheon" data-attri="Incheon">
        <text transform="translate(37.9779 782.6886)" className="st0 st1">인천</text>
      </g>
      <g onClick={this.executeWindow} id="Dongincheon" key="Dongincheon" data-attri="Dongincheon">
        <text transform="translate(44.5912 798.7091)" className="st0 st1">동인천</text>
      </g>
      <g onClick={this.executeWindow} id="Dowon" key="Dowon" data-attri="Dowon">
        <text transform="translate(51.2045 814.7306)" className="st0 st1">도원</text>
      </g>
      <g onClick={this.executeWindow} id="Jemulpo" key="Jemulpo" data-attri="Jemulpo">
        <text transform="translate(57.8246 830.7511)" className="st0 st1">제물포</text>
      </g>
      <g onClick={this.executeWindow} id="Dohwa" key="Dohwa" data-attri="Dohwa">
        <text transform="translate(64.4379 846.7716)" className="st0 st1">도화</text>
      </g>
      <g onClick={this.executeWindow} id="Juan" key="Juan" data-attri="Juan">
        <text transform="translate(71.0521 862.7921)" className="st0 st1">주안</text>
      </g>
      <g onClick={this.executeWindow} id="Ganseok" key="Ganseok" data-attri="Ganseok">
        <text transform="translate(77.6722 878.8126)" className="st0 st1">간석</text>
      </g>
      <g onClick={this.executeWindow} id="Galsan" key="Galsan" data-attri="Galsan">
        <text transform="translate(88.7386 817.3038)" className="st0 st1">갈산</text>
      </g>
      <g onClick={this.executeWindow} id="Dongsu" key="Dongsu" data-attri="Dongsu">
        <text transform="translate(132.347 923.4464)" className="st0 st1">동수</text>
      </g>
      <g onClick={this.executeWindow} id="Bupyeongsamgeori" key="Bupyeongsamgeori" data-attri="Bupyeongsamgeori">
        <text transform="translate(138.7357 938.8663)" className="st0 st1">부평삼거리</text>
      </g>
      <g onClick={this.executeWindow} id="Ganseogogeori" key="Ganseogogeori" data-attri="Ganseogogeori">
        <text transform="translate(146.6517 957.9816)" className="st0 st1">간석오거리</text>
      </g>
      <g onClick={this.executeWindow} id="IncheonCityHall" key="IncheonCityHall" data-attri="IncheonCityHall">
        <text transform="translate(154.5687 977.0958)" className="st0 st1">인천시청</text>
      </g>
      <g onClick={this.executeWindow} id="ArtsCenter" key="ArtsCenter" data-attri="ArtsCenter">
        <text transform="translate(162.4847 996.2111)" className="st0 st1">예술회관</text>
      </g>
      <g onClick={this.executeWindow} id="IncheonBusTerminal" key="IncheonBusTerminal" data-attri="IncheonBusTerminal">
        <text transform="translate(170.4008 1015.3243)" className="st0 st1">인천터미널</text>
      </g>
      <g onClick={this.executeWindow} id="MunhakSportsComplex" key="MunhakSportsComplex" data-attri="MunhakSportsComplex">
        <text transform="translate(178.3168 1034.4386)" className="st0 st1">문학경기장</text>
      </g>
      <g onClick={this.executeWindow} id="Seonhak" key="Seonhak" data-attri="Seonhak">
        <text transform="translate(186.2338 1053.5529)" className="st0 st1">선학</text>
      </g>
      <g onClick={this.executeWindow} id="Sinyeonsu" key="Sinyeonsu" data-attri="Sinyeonsu">
        <text transform="translate(194.1508 1072.6681)" className="st0 st1">신연수</text>
      </g>
      <g onClick={this.executeWindow} id="Dongchun" key="Dongchun" data-attri="Dongchun">
        <text transform="translate(210.057 1111.0656)" className="st0 st1">동춘</text>
      </g>
      <g onClick={this.executeWindow} id="Dongmak" key="Dongmak" data-attri="Dongmak">
        <text transform="translate(218.0492 1130.3556)" className="st0 st1">동막</text>
      </g>
      <g onClick={this.executeWindow} id="BupyeongMarket" key="BupyeongMarket" data-attri="BupyeongMarket">
        <text transform="translate(112.0804 873.6632)" className="st0 st1">부평시장</text>
      </g>
      <g onClick={this.executeWindow} id="Balsan" key="Balsan" data-attri="Balsan">
        <text transform="translate(242.2865 660.9308)" className="st0 st1">발산</text>
      </g>
      <g onClick={this.executeWindow} id="Ujangsan" key="Ujangsan" data-attri="Ujangsan">
        <text transform="translate(254.9261 691.4445)" className="st0 st1">우장산</text>
      </g>
      <g onClick={this.executeWindow} id="Hwagok" key="Hwagok" data-attri="Hwagok">
        <text transform="translate(266.0736 718.3615)" className="st0 st1">화곡</text>
      </g>
      <g onClick={this.executeWindow} id="NambuBusTerminal" key="NambuBusTerminal" data-attri="NambuBusTerminal">
        <text transform="translate(786.8661 932.298)" className="st0 st1">남부터미널</text>
      </g>
      <g onClick={this.executeWindow} id="Hanti" key="Hanti" data-attri="Hanti">
        <text transform="translate(895.3778 890.8243)" className="st0 st1">한티</text>
      </g>
      <g onClick={this.executeWindow} id="Seonjeongneung" key="Seonjeongneung" data-attri="Seonjeongneung">
        <text transform="translate(872.1932 834.8585)" className="st0 st1">선정릉</text>
      </g>
      <g onClick={this.executeWindow} id="Nokbeon" key="Nokbeon" data-attri="Nokbeon">
        <text transform="translate(543.8842 500.1115)" className="st0 st1">녹번</text>
      </g>
      <g onClick={this.executeWindow} id="Junghwa" key="Junghwa" data-attri="Junghwa">
        <text transform="translate(977.8798 495.0753)" className="st0 st1">중화</text>
      </g>
      <g onClick={this.executeWindow} id="Meokgol" key="Meokgol" data-attri="Meokgol">
        <text transform="translate(970.5018 465.1271)" className="st0 st1">먹골</text>
      </g>
      <g onClick={this.executeWindow} id="Hagye" key="Hagye" data-attri="Hagye">
        <text transform="translate(947.0526 370.0061)" className="st0 st1">하계</text>
      </g>
      <g onClick={this.executeWindow} id="Junggye" key="Junggye" data-attri="Junggye">
        <text transform="translate(938.1649 333.9563)" className="st0 st1">중계</text>
      </g>
      <g onClick={this.executeWindow} id="Madeul" key="Madeul" data-attri="Madeul">
        <text transform="translate(919.9598 260.0841)" className="st0 st1">마들</text>
      </g>
      <g onClick={this.executeWindow} id="Suraksan" key="Suraksan" data-attri="Suraksan">
        <text transform="translate(908.7499 214.6036)" className="st0 st1">수락산</text>
      </g>
      <g onClick={this.executeWindow} id="Gongneung" key="Gongneung" data-attri="Gongneung">
        <text transform="translate(956.6796 409.0548)" className="st0 st1">공릉</text>
      </g>
      <g onClick={this.executeWindow} id="Jamsillaru" key="Jamsillaru" data-attri="Jamsillaru">
        <text transform="translate(1036.8446 802.9484)" className="st0 st1">잠실나루</text>
      </g>
      <g onClick={this.executeWindow} id="Gangbyeon" key="Gangbyeon" data-attri="Gangbyeon">
        <text transform="translate(1014.8983 749.965)" className="st0 st1">강변</text>
      </g>
      <g onClick={this.executeWindow} id="Yongdap" key="Yongdap" data-attri="Yongdap">
        <text transform="translate(892.496 644.8351)" className="st0 st1">용답</text>
      </g>
      <g onClick={this.executeWindow} id="Sindap" key="Sindap" data-attri="Sindap">
        <text transform="translate(876.9335 610.0197)" className="st0 st1">신답</text>
      </g>
      <g onClick={this.executeWindow} id="Sareung" key="Sareung" data-attri="Sareung">
        <text transform="translate(1081.9315 350.1526)" className="st0 st1">사릉</text>
      </g>
      <g onClick={this.executeWindow} id="Mia" key="Mia" data-attri="Mia">
        <text transform="translate(822.2762 405.5099)" className="st0 st1">미아</text>
      </g>
      <g onClick={this.executeWindow} id="SeokchonHansolHospital" key="SeokchonHansolHospital" data-attri="SeokchonHansolHospital">
        <text transform="translate(1051.368 857.7804)" className="st0 st1">석촌</text>
      </g>
      <g onClick={this.executeWindow} id="NationalPoliceHospital" key="NationalPoliceHospital" data-attri="NationalPoliceHospital">
        <text transform="translate(1109.2186 895.3654)" className="st0 st1">경찰병원</text>
      </g>
      <g onClick={this.executeWindow} id="Sinyongsan" key="Sinyongsan" data-attri="Sinyongsan">
        <text transform="translate(637.4086 770.2814)" className="st0 st1">신용산</text>
      </g>
      <g onClick={this.executeWindow} id="YangjaeCitizensForest" key="YangjaeCitizensForest" data-attri="YangjaeCitizensForest">
        <text transform="translate(863.3368 985.381)" className="st0 st1">양재시민의숲</text>
      </g>
      <g onClick={this.executeWindow} id="Daecheong" key="Daecheong" data-attri="Daecheong">
        <text transform="translate(975.7118 905.424)" className="st0 st1">대청</text>
      </g>
      <g onClick={this.executeWindow} id="Irwon" key="Irwon" data-attri="Irwon">
        <text transform="translate(989.0155 936.5255)" className="st0 st1">일원</text>
      </g>
      <g onClick={this.executeWindow} id="Sinjeongnegeori" key="Sinjeongnegeori" data-attri="Sinjeongnegeori">
        <text transform="translate(258.7894 801.7472)" className="st0 st1">신정네거리</text>
      </g>
      <g onClick={this.executeWindow} id="Jakjeon" key="Jakjeon" data-attri="Jakjeon">
        <text transform="translate(77.0892 789.1583)" className="st0 st1">작전</text>
      </g>
      <g onClick={this.executeWindow} id="Seoulforest" key="Seoulforest" data-attri="Seoulforest">
        <text transform="translate(845.7762 715.3741)" className="st0 st1">서울숲</text>
      </g>
      <g onClick={this.executeWindow} id="Gwangmyeong" key="Gwangmyeong" data-attri="Gwangmyeong">
        <text transform="translate(412.7006 1069.9493)" className="st0 st1">광명</text>
      </g>
      <g onClick={this.executeWindow} id="Seoksu" key="Seoksu" data-attri="Seoksu">
        <text transform="translate(458.2767 1096.8878)" className="st0 st1">석수</text>
      </g>
      <g onClick={this.executeWindow} id="Apgujeongrodeo" key="Apgujeongrodeo" data-attri="Apgujeongrodeo">
        <text transform="translate(857.2919 774.5333)" className="st0 st1">압구정로데오</text>
      </g>
      <g onClick={this.executeWindow} id="HongikUniv" key="HongikUniv" data-attri="HongikUniv">
        <text transform="translate(507.5287 671.1388)" className="st0 st1">홍대입구</text>
      </g>
      <g onClick={this.executeWindow} id="Hapjeong" key="Hapjeong" data-attri="Hapjeong">
        <text transform="translate(489.9515 691.2228)" className="st0 st1">합정</text>
      </g>
      <g onClick={this.executeWindow} id="Dangsan" key="Dangsan" data-attri="Dangsan">
        <text transform="translate(445.3617 735.4513)" className="st0 st1">당산</text>
      </g>
      <g onClick={this.executeWindow} id="YeongdeungpoguOffice" key="YeongdeungpoguOffice" data-attri="YeongdeungpoguOffice">
        <text transform="translate(419.7943 777.0577)" className="st0 st1">영등포구청</text>
      </g>
      <g onClick={this.executeWindow} id="Daerim" key="Daerim" data-attri="Daerim">
        <text transform="translate(422.1742 916.9064)" className="st0 st1">대림</text>
      </g>
      <g onClick={this.executeWindow} id="GasanDigitalComplex" key="GasanDigitalComplex" data-attri="GasanDigitalComplex">
        <text transform="translate(396.7533 941.7755)" className="st0 st1">가산</text>
        <text transform="translate(396.7533 949.6755)" className="st0 st1">디지털단지</text>
      </g>
      <g onClick={this.executeWindow} id="GeumcheonGuOffice" key="GeumcheonGuOffice" data-attri="GeumcheonGuOffice">
        <text transform="translate(438.0033 1045.7853)" className="st0 st1">금천구청</text>
      </g>
      <g onClick={this.executeWindow} id="Guro" key="Guro" data-attri="Guro">
        <text transform="translate(377.4447 863.4972)" className="st0 st1">구로</text>
      </g>
      <g onClick={this.executeWindow} id="Kkachisan" key="Kkachisan" data-attri="Kkachisan">
        <text transform="translate(284.4828 754.3507)" className="st0 st1">까치산</text>
      </g>
      <g onClick={this.executeWindow} id="GimpoIntlAirport" key="GimpoIntlAirport" data-attri="GimpoIntlAirport">
        <text transform="translate(146.2113 650.7023)" className="st0 st1">김포공항</text>
      </g>
      <g onClick={this.executeWindow} id="BupyeongguOffice" key="BupyeongguOffice" data-attri="BupyeongguOffice">
        <text transform="translate(90.1273 854.6261)" className="st0 st1">부평구청</text>
      </g>
      <g onClick={this.executeWindow} id="Bupyeong" key="Bupyeong" data-attri="Bupyeong">
        <text transform="translate(120.389 895.672)" className="st0 st1">부평</text>
      </g>
      <g onClick={this.executeWindow} id="Woninjae" key="Woninjae" data-attri="Woninjae">
        <text transform="translate(201.7982 1085.9435)" className="st0 st1">원인재</text>
      </g>
      <g onClick={this.executeWindow} id="Gyeyang" key="Gyeyang" data-attri="Gyeyang">
        <text transform="translate(74.4701 582.379)" className="st0 st1">계양</text>
      </g>
      <g onClick={this.executeWindow} id="Sindorim" key="Sindorim" data-attri="Sindorim">
        <text transform="translate(421.2543 842.3361)" className="st0 st1">신도림</text>
      </g>
      <g onClick={this.executeWindow} id="Sadang" key="Sadang" data-attri="Sadang">
        <text transform="translate(689.5155 959.9845)" className="st0 st1">사당</text>
      </g>
      <g onClick={this.executeWindow} id="SeoulNatlUnivofEducation" key="SeoulNatlUnivofEducation" data-attri="SeoulNatlUnivofEducation">
        <text transform="translate(775.1727 904.0958)" className="st0 st1">교대</text>
      </g>
      <g onClick={this.executeWindow} id="Gangnam" key="Gangnam" data-attri="Gangnam">
        <text transform="translate(821.6708 884.8361)" className="st0 st1">강남</text>
      </g>
      <g onClick={this.executeWindow} id="Seolleung" key="Seolleung" data-attri="Seolleung">
        <text transform="translate(882.4579 859.6564)" className="st0 st1">선릉</text>
      </g>
      <g onClick={this.executeWindow} id="KonkukUniv" key="KonkukUniv" data-attri="KonkukUniv">
        <text transform="translate(952.8798 729.632)" className="st0 st1">건대입구</text>
      </g>
      <g onClick={this.executeWindow} id="Wangsimni" key="Wangsimni" data-attri="Wangsimni">
        <text transform="translate(843.3182 640.0626)" className="st0 st1">왕십리</text>
      </g>
      <g onClick={this.executeWindow} id="Jamsil" key="Jamsil" data-attri="Jamsil">
        <text transform="translate(1042.3436 830.9122)" className="st0 st1">잠실</text>
      </g>
      <g onClick={this.executeWindow} id="Euljiro3samga" key="Euljiro3samga" data-attri="Euljiro3samga">
        <text transform="translate(702.4716 640.0607)" className="st0 st1">을지로3가</text>
      </g>
      <g onClick={this.executeWindow} id="Euljiro4saga" key="Euljiro4saga" data-attri="Euljiro4saga">
        <text transform="translate(723.7313 626.3898)" className="st0 st1">을지로4가</text>
      </g>
      <g onClick={this.executeWindow} id="ExpressBusTerminal1" key="ExpressBusTerminal1" data-attri="ExpressBusTerminal1">
        <text transform="translate(689.5106 939.004)" className="st0 st1">총신대입구(이수)</text>
      </g>
      <g onClick={this.executeWindow} id="ExpressBusTerminal" key="ExpressBusTerminal" data-attri="ExpressBusTerminal">
        <text transform="translate(717.3983 852.5519)" className="st0 st1">고속터미널</text>
      </g>
      <g onClick={this.executeWindow} id="Dongjak" key="Dongjak" data-attri="Dongjak">
        <text transform="translate(662.7723 880.8282)" className="st0 st1">동작</text>
      </g>
      <g onClick={this.executeWindow} id="Noryangjin" key="Noryangjin" data-attri="Noryangjin">
        <text transform="translate(545.6771 835.1212)" className="st0 st1">노량진</text>
      </g>
      <g onClick={this.executeWindow} id="Yeouido" key="Yeouido" data-attri="Yeouido">
        <text transform="translate(510.4633 793.9689)" className="st0 st1">여의도</text>
      </g>
      <g onClick={this.executeWindow} id="Singil" key="Singil" data-attri="Singil">
        <text transform="translate(482.7992 818.5216)" className="st0 st1">신길</text>
      </g>
      <g onClick={this.executeWindow} id="GangnamguOffice" key="GangnamguOffice" data-attri="GangnamguOffice">
        <text transform="translate(865.1718 817.9318)" className="st0 st1">강남구청</text>
      </g>
      <g onClick={this.executeWindow} id="Gunja" key="Gunja" data-attri="Gunja">
        <text transform="translate(983.4764 655.9933)" className="st0 st1">군자</text>
      </g>
      <g onClick={this.executeWindow} id="Sangbong" key="Sangbong" data-attri="Sangbong">
        <text transform="translate(999.286 521.0245)" className="st0 st1">상봉</text>
      </g>
      <g onClick={this.executeWindow} id="Mangu" key="Mangu" data-attri="Mangu">
        <text transform="translate(1015.8241 515.7111)" className="st0 st1">망우</text>
      </g>
      <g onClick={this.executeWindow} id="Hoegi" key="Hoegi" data-attri="Hoegi">
        <text transform="translate(897.8134 552.0031)" className="st0 st1">회기</text>
      </g>
      <g onClick={this.executeWindow} id="Cheongnyangni" key="Cheongnyangni" data-attri="Cheongnyangni">
        <text transform="translate(869.4061 580.4113)" className="st0 st1">청량리</text>
      </g>
      <g onClick={this.executeWindow} id="Sinseoldong" key="Sinseoldong" data-attri="Sinseoldong">
        <text transform="translate(803.6678 592.8263)" className="st0 st1">신설동</text>
      </g>
      <g onClick={this.executeWindow} id="Dongdaemun" key="Dongdaemun" data-attri="Dongdaemun">
        <text transform="translate(758.2802 605.4318)" className="st0 st1">동대문</text>
      </g>
      <g onClick={this.executeWindow} id="Changdong" key="Changdong" data-attri="Changdong">
        <text transform="translate(885.8397 308.1046)" className="st0 st1">창동</text>
      </g>
      <g onClick={this.executeWindow} id="Taereung" key="Taereung" data-attri="Taereung">
        <text transform="translate(966.203 449.9728)" className="st0 st1">태릉입구</text>
      </g>
      <g onClick={this.executeWindow} id="Seokgye" key="Seokgye" data-attri="Seokgye">
        <text transform="translate(921.9012 452.5704)" className="st0 st1">석계</text>
      </g>
      <g onClick={this.executeWindow} id="KwangwoonUniv" key="KwangwoonUniv" data-attri="KwangwoonUniv">
        <text transform="translate(908.5262 423.3868)" className="st0 st1">광운대</text>
      </g>
      <g onClick={this.executeWindow} id="Dongmyo" key="Dongmyo" data-attri="Dongmyo">
        <text transform="translate(784.3339 605.4318)" className="st0 st1">동묘앞</text>
      </g>
      <g onClick={this.executeWindow} id="Sindang" key="Sindang" data-attri="Sindang">
        <text transform="translate(784.3339 625.9747)" className="st0 st1">신당</text>
      </g>
      <g onClick={this.executeWindow} id="Cheonggu" key="Cheonggu" data-attri="Cheonggu">
        <text transform="translate(781.7313 647.2872)" className="st0 st1">청구</text>
      </g>
      <g onClick={this.executeWindow} id="Yaksu" key="Yaksu" data-attri="Yaksu">
        <text transform="translate(774.5106 664.2013)" className="st0 st1">약수</text>
      </g>
      <g onClick={this.executeWindow} id="Oksu" key="Oksu" data-attri="Oksu">
        <text transform="translate(795.6766 726.4679)" className="st0 st1">옥수</text>
      </g>
      <g onClick={this.executeWindow} id="Yangjae" key="Yangjae" data-attri="Yangjae">
        <text transform="translate(845.8456 943.2208)" className="st0 st1">양재</text>
      </g>
      <g onClick={this.executeWindow} id="Dogok" key="Dogok" data-attri="Dogok">
        <text transform="translate(901.7587 908.4806)" className="st0 st1">도곡</text>
      </g>
      <g onClick={this.executeWindow} id="Suseo" key="Suseo" data-attri="Suseo">
        <text transform="translate(1039.2665 932.7189)" className="st0 st1">수서</text>
      </g>
      <g onClick={this.executeWindow} id="Bokjeong" key="Bokjeong" data-attri="Bokjeong">
        <text transform="translate(1087.0145 989.5157)" className="st0 st1">복정</text>
      </g>
      <g onClick={this.executeWindow} id="Moran" key="Moran" data-attri="Moran">
        <text transform="translate(1085.371 1060.672)" className="st0 st1">모란</text>
      </g>
      <g onClick={this.executeWindow} id="Jeongja" key="Jeongja" data-attri="Jeongja">
        <text transform="translate(1044.1063 1129.1329)" className="st0 st1">정자</text>
      </g>
      <g onClick={this.executeWindow} id="Seongsu" key="Seongsu" data-attri="Seongsu">
        <text transform="translate(897.8934 706.3527)" className="st0 st1">성수</text>
      </g>
      <g onClick={this.executeWindow} id="GarakMarket" key="GarakMarket" data-attri="GarakMarket">
        <text transform="translate(1093.3593 911.4073)" className="st0 st1">가락시장</text>
      </g>
      <g onClick={this.executeWindow} id="Cheonho" key="Cheonho" data-attri="Cheonho">
        <text transform="translate(1107.8856 729.3146)" className="st0 st1">천호</text>
      </g>
      <g onClick={this.executeWindow} id="Gangdong" key="Gangdong" data-attri="Gangdong">
        <text transform="translate(1133.2821 739.298)" className="st0 st1">강동</text>
      </g>
      <g onClick={this.executeWindow} id="Gongdeok" key="Gongdeok" data-attri="Gongdeok">
        <text transform="translate(595.9095 708.6525)" className="st0 st1">공덕</text>
      </g>
      <g onClick={this.executeWindow} id="DigitalMediaCity" key="DigitalMediaCity" data-attri="DigitalMediaCity">
        <text transform="translate(457.4496 593.5626)" className="st0 st1">디지털미디어시티</text>
      </g>
      <g onClick={this.executeWindow} id="Yeonsinnae" key="Yeonsinnae" data-attri="Yeonsinnae">
        <text transform="translate(514.2377 428.9103)" className="st0 st1">연신내</text>
      </g>
      <g onClick={this.executeWindow} id="Daegok" key="Daegok" data-attri="Daegok">
        <text transform="translate(408.7748 323.2697)" className="st0 st1">대곡</text>
      </g>
      <g onClick={this.executeWindow} id="Jongno3samga" key="Jongno3samga" data-attri="Jongno3samga">
        <text transform="translate(691.2723 601.7755)" className="st0 st1">종로3가</text>
      </g>
      <g onClick={this.executeWindow} id="Chungmuro" key="Chungmuro" data-attri="Chungmuro">
        <text transform="translate(708.0341 655.9484)" className="st0 st1">충무로</text>
      </g>
      <g onClick={this.executeWindow} id="SeoulStation" key="SeoulStation" data-attri="SeoulStation">
        <text transform="translate(664.4169 674.1368)" className="st0 st1">서울역</text>
      </g>
      <g onClick={this.executeWindow} id="CityHall" key="CityHall" data-attri="CityHall">
        <text transform="translate(648.0682 647.9054)" className="st0 st1">시청</text>
      </g>
      <g onClick={this.executeWindow} id="Chungjeongno" key="Chungjeongno" data-attri="Chungjeongno">
        <text transform="translate(620.0043 659.5314)" className="st0 st1">충정로</text>
      </g>
      <g onClick={this.executeWindow} id="Ichon" key="Ichon" data-attri="Ichon">
        <text transform="translate(659.3075 809.0988)" className="st0 st1">이촌</text>
      </g>
      <g onClick={this.executeWindow} id="Yongsan" key="Yongsan" data-attri="Yongsan">
        <text transform="translate(612.0531 756.0587)" className="st0 st1">용산</text>
      </g>
      <g onClick={this.executeWindow} id="Samgakji" key="Samgakji" data-attri="Samgakji">
        <text transform="translate(656.2616 752.6447)" className="st0 st1">삼각지</text>
      </g>
      <g onClick={this.executeWindow} id="Bulgwang" key="Bulgwang" data-attri="Bulgwang">
        <text transform="translate(531.309 463.6564)" className="st0 st1">불광</text>
      </g>
      <g onClick={this.executeWindow} id="Nowon" key="Nowon" data-attri="Nowon">
        <text transform="translate(928.2401 292.4944)" className="st0 st1">노원</text>
      </g>
      <g onClick={this.executeWindow} id="Dobongsan" key="Dobongsan" data-attri="Dobongsan">
        <text transform="translate(854.8466 176.0548)" className="st0 st1">도봉산</text>
      </g>
      <g onClick={this.executeWindow} id="Hoeryong" key="Hoeryong" data-attri="Hoeryong">
        <text transform="translate(810.1034 76.1222)" className="st0 st1">회룡</text>
      </g>
      <g onClick={this.executeWindow} id="Ogeum" key="Ogeum" data-attri="Ogeum">
        <text transform="translate(1117.2557 873.9435)" className="st0 st1">오금</text>
      </g>
      <g onClick={this.executeWindow} id="Onsu" key="Onsu" data-attri="Onsu">
        <text transform="translate(212.3871 907.1788)" className="st0 st1">온수</text>
      </g>
      <g onClick={this.executeWindow} id="Oido" key="Oido" data-attri="Oido">
        <text transform="translate(408.5912 1146.0323)" className="st0 st1">오</text>
        <text transform="translate(408.5912 1153.9324)" className="st0 st1">이</text>
        <text transform="translate(408.5912 1161.8324)" className="st0 st1">도</text>
      </g>
      <g onClick={this.executeWindow} id="Geumjeong" key="Geumjeong" data-attri="Geumjeong">
        <text transform="translate(669.5272 1113.2062)" className="st0 st1">금정</text>
      </g>
      <g onClick={this.executeWindow} id="Suwon" key="Suwon" data-attri="Suwon">
        <text transform="translate(769.3934 1141.7072)" className="st0 st1">수원</text>
      </g>
      <g onClick={this.executeWindow} id="Byeongjeom" key="Byeongjeom" data-attri="Byeongjeom">
        <text transform="translate(789.9432 1170.1271)" className="st0 st1">병점</text>
      </g>
      <g onClick={this.executeWindow} id="Giheung" key="Giheung" data-attri="Giheung">
        <text transform="translate(924.7821 1129.089)" className="st0 st1">기</text>
        <text transform="translate(924.7821 1136.989)" className="st0 st1">흥</text>
      </g>
      <g onClick={this.executeWindow} id="DongdaemunHistoryCulturePark" key="DongdaemunHistoryCulturePark" data-attri="DongdaemunHistoryCulturePark">
        <text transform="translate(755.0907 640.6827)" className="st0 st2">동대문</text>
        <text transform="translate(755.0907 646.0827)" className="st0 st2">역사문화</text>
        <text transform="translate(755.0907 651.5827)" className="st0 st2">공원</text>
      </g>
      <g onClick={this.executeWindow} id="GuroDigitalComplex" key="GuroDigitalComplex" data-attri="GuroDigitalComplex">
        <text transform="translate(428.5599 936.3361)" className="st0 st1">구로</text>
        <text transform="translate(428.5599 944.2361)" className="st0 st1">디지털단지</text>
      </g>
    </g>
    <g id="broad" key="broad" data-attri="broad">
      <g onClick={this.executeWindow} id="GangnamGu" key="GangnamGu" data-attri="GangnamGu">
        <text transform="translate(946.6327 985.6007)" className="st3 st0 st4">강남구</text>
      </g>
      <g onClick={this.executeWindow} id="SeochoGu" key="SeochoGu" data-attri="SeochoGu">
        <text transform="translate(758.9042 981.338)" className="st3 st0 st4">서초구</text>
      </g>
      <g onClick={this.executeWindow} id="SongpaGu" key="SongpaGu" data-attri="SongpaGu">
        <text transform="translate(1066.1063 844.8058)" className="st3 st0 st4">송파구</text>
      </g>
      <g onClick={this.executeWindow} id="GangdongGu" key="GangdongGu" data-attri="GangdongGu">
        <text transform="translate(1181.3065 746.673)" className="st3 st0 st4">강동구</text>
      </g>
      <g onClick={this.executeWindow} id="GwanakGu" key="GwanakGu" data-attri="GwanakGu">
        <text transform="translate(562.64 994.1437)" className="st3 st0 st4">관악구</text>
      </g>
      <g onClick={this.executeWindow} id="DongjakGu" key="DongjakGu" data-attri="DongjakGu">
        <text transform="translate(558.3783 900.2755)" className="st3 st0 st4">동작구</text>
      </g>
      <g onClick={this.executeWindow} id="GeumcheonGu" key="GeumcheonGu" data-attri="GeumcheonGu">
        <text transform="translate(447.4486 985.6095)" className="st3 st0 st4">금천구</text>
      </g>
      <g onClick={this.executeWindow} id="GuroGu" key="GuroGu" data-attri="GuroGu">
        <text transform="translate(323.7133 913.0812)" className="st3 st0 st4">구로구</text>
      </g>
      <g onClick={this.executeWindow} id="YangcheonGu" key="YangcheonGu" data-attri="YangcheonGu">
        <text transform="translate(310.9154 806.4152)" className="st3 st0 st4">양천구</text>
      </g>
      <g onClick={this.executeWindow} id="GangseoGu" key="GangseoGu" data-attri="GangseoGu">
        <text transform="translate(306.6537 712.545)" className="st3 st0 st4">강서구</text>
      </g>
      <g onClick={this.executeWindow} id="MapoGu" key="MapoGu" data-attri="MapoGu">
        <text transform="translate(571.184 682.6798)" className="st3 st0 st4">마포구</text>
      </g>
      <g onClick={this.executeWindow} id="EunpyeongGu" key="EunpyeongGu" data-attri="EunpyeongGu">
        <text transform="translate(502.9174 554.6818)" className="st3 st0 st4">은평구</text>
      </g>
      <g onClick={this.executeWindow} id="SeodaemunGu" key="SeodaemunGu" data-attri="SeodaemunGu">
        <text transform="translate(536.7123 610.1505)" className="st3 st0 st4">서대문구</text>
      </g>
      <g onClick={this.executeWindow} id="JongnoGu" key="JongnoGu" data-attri="JongnoGu">
        <text transform="translate(665.0526 529.087)" className="st3 st0 st4">종로구</text>
      </g>
      <g onClick={this.executeWindow} id="JungGu" key="JungGu" data-attri="JungGu">
        <text transform="translate(708.0585 674.1534)" className="st3 st0 st4">중구</text>
      </g>
      <g onClick={this.executeWindow} id="SeongdongGu" key="SeongdongGu" data-attri="SeongdongGu">
        <text transform="translate(822.9159 704.0197)" className="st3 st0 st4">성동구</text>
      </g>
      <g onClick={this.executeWindow} id="DongdaemunGu" key="DongdaemunGu" data-attri="DongdaemunGu">
        <text transform="translate(907.9091 588.8195)" className="st3 st0 st4">동대문구</text>
      </g>
      <g onClick={this.executeWindow} id="JungnangGu" key="JungnangGu" data-attri="JungnangGu">
        <text transform="translate(993.578 477.8888)" className="st3 st0 st4">중랑구</text>
      </g>
      <g onClick={this.executeWindow} id="DobongGu" key="DobongGu" data-attri="DobongGu">
        <text transform="translate(818.6444 247.4884)" className="st3 st0 st4">도봉구</text>
      </g>
      <g onClick={this.executeWindow} id="GangbukGu" key="GangbukGu" data-attri="GangbukGu">
        <text transform="translate(763.1757 422.42)" className="st3 st0 st4">강북구</text>
      </g>
      <g onClick={this.executeWindow} id="SeongbukGu" key="SeongbukGu" data-attri="SeongbukGu">
        <text transform="translate(784.5077 533.3497)" className="st3 st0 st4">성북구</text>
      </g>
      <g onClick={this.executeWindow} id="GwangjinGu" key="GwangjinGu" data-attri="GwangjinGu">
        <text transform="translate(1014.9091 652.8136)" className="st3 st0 st4">광진구</text>
      </g>
      <g onClick={this.executeWindow} id="YongsanGu" key="YongsanGu" data-attri="YongsanGu">
        <text transform="translate(686.3749 772.2775)" className="st3 st0 st4">용산구</text>
      </g>
      <g onClick={this.executeWindow} id="YeongdeungpoGu" key="YeongdeungpoGu" data-attri="YeongdeungpoGu">
        <text transform="translate(464.1742 853.34)" className="st3 st0 st4">영등포구</text>
      </g>
      <g onClick={this.executeWindow} id="NowonGu" key="NowonGu" data-attri="NowonGu">
        <text transform="translate(976.5077 354.1544)" className="st3 st0 st4">노원구</text>
      </g>
    </g>
  </Svg>
  </>
  )}
}
  
  

export default withRouter(Map);
