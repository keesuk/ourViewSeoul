import React, {PureComponent} from "react";
import styled from 'styled-components';
import Window from './Window';

const Svg = styled.svg`
	.st0{font-family:'Noto Sans KR'; font-weight:900;}
	.st1{font-size:6.5759px;}
	.st2{font-size:4.5326px;}
	.st3{fill:#E5E5E4;}
  .st4{font-size:9.0311px;}
  #Ilsan text:hover {font-size:100px;}
`;

class Map extends PureComponent {
  state = { show: false }

  onHandle = (event) => {
    const attribute = event.target.getAttribute('data');
    console.log(attribute)
    this.setState({ show : true })
  }

  render() {
    return (
    <>
    <Window />
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 1280 1280"
      version="1.1"
      viewBox="0 0 1280 1280"
      xmlSpace="preserve"
    >
    <g id="map" key="map_Station" data="map">
      <g onClick={ this.onHandle() } id="Ilsan" key="Ilsan_Station" data="Ilsan">
        <text transform="translate(475.475 290.839)" className="st0 st1">일</text>
        <text transform="translate(475.475 298.739)" className="st0 st1">산</text>
      </g>
      <g onClick={ this.onHandle() } id="Pungsan" key="Pungsan_Station" data="Pungsan">
        <text transform="translate(458.472 290.839)" className="st0 st1">풍</text>
        <text transform="translate(458.472 298.739)" className="st0 st1">산</text>
      </g>
      <g onClick={ this.onHandle() } id="Baengma" key="Baengma_Station" data="Baengma">
        <text transform="translate(441.4681 290.839)" className="st0 st1">백</text>
        <text transform="translate(441.4681 298.739)" className="st0 st1">마</text>
      </g>
      <g onClick={ this.onHandle() } id="Hwajeong" key="Hwajeong_Station" data="Hwajeong">
        <text transform="translate(438.1742 337.1858)" className="st0 st1">화</text>
        <text transform="translate(438.1742 345.0857)" className="st0 st1">정</text>
      </g>
      <g onClick={ this.onHandle() } id="Wondang" key="Wondang_Station" data="Wondang">
        <text transform="translate(453.7806 337.1858)" className="st0 st1">원</text>
        <text transform="translate(453.7806 345.0857)" className="st0 st1">당</text>
      </g>
      <g onClick={ this.onHandle() } id="Wonheung" key="Wonheung_Station" data="Wonheung">
        <text transform="translate(469.3881 337.1858)" className="st0 st1">원</text>
        <text transform="translate(469.3881 345.0857)" className="st0 st1">흥</text>
      </g>
      <g onClick={ this.onHandle() } id="Samsong" key="Samsong_Station" data="Samsong">
        <text transform="translate(484.9955 337.1858)" className="st0 st1">삼</text>
        <text transform="translate(484.9955 345.0857)" className="st0 st1">송</text>
      </g>
      <g onClick={ this.onHandle() } id="Tanhyeon" key="Tanhyeon_Station" data="Tanhyeon">
        <text transform="translate(492.474 290.839)" className="st0 st1">탄</text>
        <text transform="translate(492.474 298.739)" className="st0 st1">현</text>
      </g>
      <g onClick={ this.onHandle() } id="Unjeong" key="Unjeong_Station" data="Unjeong">
        <text transform="translate(509.4779 290.839)" className="st0 st1">운</text>
        <text transform="translate(509.4779 298.739)" className="st0 st1">정</text>
      </g>
      <g onClick={ this.onHandle() } id="Geumneung" key="Geumneung_Station" data="Geumneung">
        <text transform="translate(526.4818 290.839)" className="st0 st1">금</text>
        <text transform="translate(526.4818 298.739)" className="st0 st1">릉</text>
      </g>
      <g onClick={ this.onHandle() } id="Geumchon" key="Geumchon_Station" data="Geumchon">
        <text transform="translate(543.4847 290.839)" className="st0 st1">금</text>
        <text transform="translate(543.4847 298.739)" className="st0 st1">촌</text>
      </g>
      <g onClick={ this.onHandle() } id="Wollong" key="Wollong_Station" data="Wollong">
        <text transform="translate(560.4886 290.839)" className="st0 st1">월</text>
        <text transform="translate(560.4886 298.739)" className="st0 st1">롱</text>
      </g>
      <g onClick={ this.onHandle() } id="Paju" key="Paju_Station" data="Paju">
        <text transform="translate(577.4926 290.839)" className="st0 st1">파</text>
        <text transform="translate(577.4926 298.739)" className="st0 st1">주</text>
      </g>
      <g onClick={ this.onHandle() } id="Munsan" key="Munsan_Station" data="Munsan">
        <text transform="translate(594.4965 290.839)" className="st0 st1">문</text>
        <text transform="translate(594.4965 298.739)" className="st0 st1">산</text>
      </g>
      <g onClick={ this.onHandle() } id="Bugae" key="Bugae_Station" data="Bugae">
        <text transform="translate(129.2299 906.9034)" className="st0 st1">부</text>
        <text transform="translate(129.2299 914.8034)" className="st0 st1">개</text>
      </g>
      <g onClick={ this.onHandle() } id="Songnae" key="Songnae_Station" data="Songnae">
        <text transform="translate(141.976 906.9034)" className="st0 st1">송</text>
        <text transform="translate(141.976 914.8034)" className="st0 st1">내</text>
      </g>
      <g onClick={ this.onHandle() } id="Jungdong" key="Jungdong_Station" data="Jungdong">
        <text transform="translate(154.7201 906.9034)" className="st0 st1">중</text>
        <text transform="translate(154.7201 914.8034)" className="st0 st1">동</text>
      </g>
      <g onClick={ this.onHandle() } id="Bucheon" key="Bucheon_Station" data="Bucheon">
        <text transform="translate(167.4652 906.9034)" className="st0 st1">부</text>
        <text transform="translate(167.4652 914.8034)" className="st0 st1">천</text>
      </g>
      <g onClick={ this.onHandle() } id="Sosa" key="Sosa_Station" data="Sosa">
        <text transform="translate(180.2103 906.9034)" className="st0 st1">소</text>
        <text transform="translate(180.2103 914.8034)" className="st0 st1">사</text>
      </g>
      <g onClick={ this.onHandle() } id="Yeokgok" key="Yeokgok_Station" data="Yeokgok">
        <text transform="translate(192.9554 906.9034)" className="st0 st1">역</text>
        <text transform="translate(192.9554 914.8034)" className="st0 st1">곡</text>
      </g>
      <g onClick={ this.onHandle() } id="Technopark" key="Technopark_Station" data="Technopark">
        <text transform="translate(232.8939 1145.3849)" className="st0 st1">테</text>
        <text transform="translate(232.8939 1153.2849)" className="st0 st1">크</text>
        <text transform="translate(232.8939 1161.1849)" className="st0 st1">노</text>
        <text transform="translate(232.8939 1169.085)" className="st0 st1">파</text>
        <text transform="translate(232.8939 1176.9849)" className="st0 st1">크</text>
      </g>
      <g onClick={ this.onHandle() } id="BITZone" key="BITZone_Station" data="BITZone">
        <text transform="translate(277.5551 1145.3849)" className="st0 st1">지</text>
        <text transform="translate(277.5551 1153.2849)" className="st0 st1">식</text>
        <text transform="translate(277.5551 1161.1849)" className="st0 st1">정</text>
        <text transform="translate(277.5551 1169.085)" className="st0 st1">보</text>
        <text transform="translate(277.5551 1176.9849)" className="st0 st1">단</text>
        <text transform="translate(277.5551 1184.8849)" className="st0 st1">지</text>
      </g>
      <g onClick={ this.onHandle() } id="IncheonNatlUniv" key="IncheonNatlUniv_Station" data="IncheonNatlUniv">
        <text transform="translate(299.8822 1145.3849)" className="st0 st1">인</text>
        <text transform="translate(299.8822 1153.2849)" className="st0 st1">천</text>
        <text transform="translate(299.8822 1161.1849)" className="st0 st1">대</text>
        <text transform="translate(299.8822 1169.085)" className="st0 st1">입</text>
        <text transform="translate(299.8822 1176.9849)" className="st0 st1">구</text>
      </g>
      <g onClick={ this.onHandle() } id="CentralPark" key="CentralPark_Station" data="CentralPark">
        <text transform="translate(322.2162 1145.3849)" className="st0 st1">센</text>
        <text transform="translate(322.2162 1153.2849)" className="st0 st1">트</text>
        <text transform="translate(322.2162 1161.1849)" className="st0 st1">럴</text>
        <text transform="translate(322.2162 1169.085)" className="st0 st1">파</text>
        <text transform="translate(322.2162 1176.9849)" className="st0 st1">크</text>
      </g>
      <g onClick={ this.onHandle() } id="IntlBusinessDistrict" key="IntlBusinessDistrict_Station" data="IntlBusinessDistrict">
        <text transform="translate(348.4261 1145.3849)" className="st0 st1">국</text>
        <text transform="translate(348.4261 1153.2849)" className="st0 st1">제</text>
        <text transform="translate(348.4261 1161.1849)" className="st0 st1">업</text>
        <text transform="translate(348.4261 1169.085)" className="st0 st1">무</text>
        <text transform="translate(348.4261 1176.9849)" className="st0 st1">지</text>
        <text transform="translate(348.4261 1184.8849)" className="st0 st1">구</text>
      </g>
      <g onClick={ this.onHandle() } id="SingilonCheon" key="SingilonCheon_Station" data="SingilonCheon">
        <text transform="translate(454.4388 1145.798)" className="st0 st1">신</text>
        <text transform="translate(454.4388 1153.698)" className="st0 st1">길</text>
        <text transform="translate(454.4388 1161.598)" className="st0 st1">온</text>
        <text transform="translate(454.4388 1169.498)" className="st0 st1">천</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinchang" key="Sinchang_Station" data="Sinchang">
        <text transform="translate(456.6 1193.088)" className="st0 st1">신</text>
        <text transform="translate(456.6 1200.988)" className="st0 st1">창</text>
      </g>
      <g onClick={ this.onHandle() } id="OnyangonCheon" key="OnyangonCheon_Station" data="OnyangonCheon">
        <text transform="translate(475.1576 1193.088)" className="st0 st1">온</text>
        <text transform="translate(475.1576 1200.988)" className="st0 st1">양</text>
        <text transform="translate(475.1576 1208.8881)" className="st0 st1">온</text>
        <text transform="translate(475.1576 1216.7881)" className="st0 st1">천</text>
      </g>
      <g onClick={ this.onHandle() } id="Baebang" key="Baebang_Station" data="Baebang">
        <text transform="translate(493.7133 1193.088)" className="st0 st1">배</text>
        <text transform="translate(493.7133 1200.988)" className="st0 st1">방</text>
      </g>
      <g onClick={ this.onHandle() } id="Asan" key="Asan_Station" data="Asan">
        <text transform="translate(512.2699 1193.088)" className="st0 st1">아</text>
        <text transform="translate(512.2699 1200.988)" className="st0 st1">산</text>
      </g>
      <g onClick={ this.onHandle() } id="Ssangyong" key="Ssangyong_Station" data="Ssangyong">
        <text transform="translate(530.8275 1193.088)" className="st0 st1">쌍</text>
        <text transform="translate(530.8275 1200.988)" className="st0 st1">용</text>
      </g>
      <g onClick={ this.onHandle() } id="Bongmyeong" key="Bongmyeong_Station" data="Bongmyeong">
        <text transform="translate(549.3851 1193.088)" className="st0 st1">봉</text>
        <text transform="translate(549.3851 1200.988)" className="st0 st1">명</text>
      </g>
      <g onClick={ this.onHandle() } id="Cheonan" key="Cheonan_Station" data="Cheonan">
        <text transform="translate(567.9418 1193.088)" className="st0 st1">천</text>
        <text transform="translate(567.9418 1200.988)" className="st0 st1">안</text>
      </g>
      <g onClick={ this.onHandle() } id="Dujeong" key="Dujeong_Station" data="Dujeong">
        <text transform="translate(586.4994 1193.088)" className="st0 st1">두</text>
        <text transform="translate(586.4994 1200.988)" className="st0 st1">정</text>
      </g>
      <g onClick={ this.onHandle() } id="Jiksan" key="Jiksan_Station" data="Jiksan">
        <text transform="translate(605.056 1193.088)" className="st0 st1">직</text>
        <text transform="translate(605.056 1200.988)" className="st0 st1">산</text>
      </g>
      <g onClick={ this.onHandle() } id="Seonghwan" key="Seonghwan_Station" data="Seonghwan">
        <text transform="translate(623.6127 1193.088)" className="st0 st1">성</text>
        <text transform="translate(623.6127 1200.988)" className="st0 st1">환</text>
      </g>
      <g onClick={ this.onHandle() } id="Pyeongtaek" key="Pyeongtaek_Station" data="Pyeongtaek">
        <text transform="translate(642.1688 1193.088)" className="st0 st1">평</text>
        <text transform="translate(642.1688 1200.988)" className="st0 st1">택</text>
      </g>
      <g onClick={ this.onHandle() } id="Jije" key="Jije_Station" data="Jije">
        <text transform="translate(660.7264 1193.088)" className="st0 st1">지</text>
        <text transform="translate(660.7264 1200.988)" className="st0 st1">제</text>
      </g>
      <g onClick={ this.onHandle() } id="Seojeongri" key="Seojeongri_Station" data="Seojeongri">
        <text transform="translate(679.2841 1193.088)" className="st0 st1">서</text>
        <text transform="translate(679.2841 1200.988)" className="st0 st1">정</text>
        <text transform="translate(679.2841 1208.8881)" className="st0 st1">리</text>
      </g>
      <g onClick={ this.onHandle() } id="Songtan" key="Songtan_Station" data="Songtan">
        <text transform="translate(697.8397 1193.088)" className="st0 st1">송</text>
        <text transform="translate(697.8397 1200.988)" className="st0 st1">탄</text>
      </g>
      <g onClick={ this.onHandle() } id="Osan" key="Osan_Station" data="Osan">
        <text transform="translate(734.9559 1193.088)" className="st0 st1">오</text>
        <text transform="translate(734.9559 1200.988)" className="st0 st1">산</text>
      </g>
      <g onClick={ this.onHandle() } id="OsanCollege" key="OsanCollege_Station" data="OsanCollege">
        <text transform="translate(753.5106 1193.088)" className="st0 st1">오</text>
        <text transform="translate(753.5106 1200.988)" className="st0 st1">산</text>
        <text transform="translate(753.5106 1208.8881)" className="st0 st1">대</text>
      </g>
      <g onClick={ this.onHandle() } id="Sema" key="Sema_Station" data="Sema">
        <text transform="translate(772.0682 1193.6027)" className="st0 st1">세</text>
        <text transform="translate(772.0682 1201.5027)" className="st0 st1">마</text>
      </g>
      <g onClick={ this.onHandle() } id="Seodongtan" key="Seodongtan_Station" data="Seodongtan">
        <text transform="translate(803.8661 1193.088)" className="st0 st1">서</text>
        <text transform="translate(803.8661 1200.988)" className="st0 st1">동</text>
        <text transform="translate(803.8661 1208.8881)" className="st0 st1">탄</text>
      </g>
      <g onClick={ this.onHandle() } id="Jinwi" key="Jinwi_Station" data="Jinwi">
        <text transform="translate(716.3915 1193.088)" className="st0 st1">진</text>
        <text transform="translate(716.3915 1200.988)" className="st0 st1">위</text>
      </g>
      <g onClick={ this.onHandle() } id="Ansan" key="Ansan_Station" data="Ansan">
        <text transform="translate(476.7289 1145.798)" className="st0 st1">안</text>
        <text transform="translate(476.7289 1153.698)" className="st0 st1">산</text>
      </g>
      <g onClick={ this.onHandle() } id="Choji" key="Choji_Station" data="Choji">
        <text transform="translate(499.0433 1145.798)" className="st0 st1">초</text>
        <text transform="translate(499.0433 1153.698)" className="st0 st1">지</text>
      </g>
      <g onClick={ this.onHandle() } id="Gojan" key="Gojan_Station" data="Gojan">
        <text transform="translate(521.3578 1145.798)" className="st0 st1">고</text>
        <text transform="translate(521.3578 1153.698)" className="st0 st1">잔</text>
      </g>
      <g onClick={ this.onHandle() } id="Jungang" key="Jungang_Station" data="Jungang">
        <text transform="translate(543.6732 1145.798)" className="st0 st1">중</text>
        <text transform="translate(543.6732 1153.698)" className="st0 st1">앙</text>
      </g>
      <g onClick={ this.onHandle() } id="HanyangUnivatAnsan" key="HanyangUnivatAnsan_Station" data="HanyangUnivatAnsan">
        <text transform="translate(565.9877 1145.798)" className="st0 st1">한</text>
        <text transform="translate(565.9877 1153.698)" className="st0 st1">대</text>
        <text transform="translate(565.9877 1161.598)" className="st0 st1">앞</text>
      </g>
      <g onClick={ this.onHandle() } id="Sangnoksu" key="Sangnoksu_Station" data="Sangnoksu">
        <text transform="translate(588.3021 1145.798)" className="st0 st1">상</text>
        <text transform="translate(588.3021 1153.698)" className="st0 st1">록</text>
        <text transform="translate(588.3021 1161.598)" className="st0 st1">수</text>
      </g>
      <g onClick={ this.onHandle() } id="Banwol" key="Banwol_Station" data="Banwol">
        <text transform="translate(610.6166 1145.798)" className="st0 st1">반</text>
        <text transform="translate(610.6166 1153.698)" className="st0 st1">월</text>
      </g>
      <g onClick={ this.onHandle() } id="Daeyami" key="Daeyami_Station" data="Daeyami">
        <text transform="translate(632.932 1145.798)" className="st0 st1">대</text>
        <text transform="translate(632.932 1153.698)" className="st0 st1">야</text>
        <text transform="translate(632.932 1161.598)" className="st0 st1">미</text>
      </g>
      <g onClick={ this.onHandle() } id="Surisan" key="Surisan_Station" data="Surisan">
        <text transform="translate(655.2469 1145.798)" className="st0 st1">수</text>
        <text transform="translate(655.2469 1153.698)" className="st0 st1">리</text>
        <text transform="translate(655.2469 1161.598)" className="st0 st1">산</text>
      </g>
      <g onClick={ this.onHandle() } id="SuwonCityHall1" key="SuwonCityHall1_Station" data="SuwonCityHall1">
        <text transform="translate(799.0936 1129.4171)" className="st0 st1">매</text>
        <text transform="translate(799.0936 1136.4171)" className="st0 st1">교</text>
      </g>
      <g onClick={ this.onHandle() } id="SuwonCityHall" key="SuwonCityHall_Station" data="SuwonCityHall">
        <text transform="translate(817.0663 1115.4171)" className="st0 st1">수</text>
        <text transform="translate(817.0663 1123.3171)" className="st0 st1">원</text>
        <text transform="translate(817.0663 1131.2172)" className="st0 st1">시</text>
        <text transform="translate(817.0663 1139.1172)" className="st0 st1">청</text>
      </g>
      <g onClick={ this.onHandle() } id="MaetanGwonseon" key="MaetanGwonseon_Station" data="MaetanGwonseon">
        <text transform="translate(835.0428 1115.4171)" className="st0 st1">매</text>
        <text transform="translate(835.0428 1123.3171)" className="st0 st1">탄</text>
        <text transform="translate(835.0428 1131.2172)" className="st0 st1">권</text>
        <text transform="translate(835.0428 1139.1172)" className="st0 st1">선</text>
      </g>
      <g onClick={ this.onHandle() } id="Mangpo" key="Mangpo_Station" data="Mangpo">
        <text transform="translate(853.0165 1129.4171)" className="st0 st1">망</text>
        <text transform="translate(853.0165 1137.3171)" className="st0 st1">포</text>
      </g>
      <g onClick={ this.onHandle() } id="Yeongtong" key="Yeongtong_Station" data="Yeongtong">
        <text transform="translate(870.9911 1129.4171)" className="st0 st1">영</text>
        <text transform="translate(870.9911 1137.3171)" className="st0 st1">통</text>
      </g>
      <g onClick={ this.onHandle() } id="Cheongmyeong" key="Cheongmyeong_Station" data="Cheongmyeong">
        <text transform="translate(888.9667 1129.4171)" className="st0 st1">청</text>
        <text transform="translate(888.9667 1137.3171)" className="st0 st1">명</text>
      </g>
      <g onClick={ this.onHandle() } id="Sanggal" key="Sanggal_Station" data="Sanggal">
        <text transform="translate(906.9403 1129.4171)" className="st0 st1">상</text>
        <text transform="translate(906.9403 1137.3171)" className="st0 st1">갈</text>
      </g>
      <g onClick={ this.onHandle() } id="Singal" key="Singal_Station" data="Singal">
        <text transform="translate(942.5009 1129.4171)" className="st0 st1">신</text>
        <text transform="translate(942.5009 1137.3171)" className="st0 st1">갈</text>
      </g>
      <g onClick={ this.onHandle() } id="Guseong" key="Guseong_Station" data="Guseong">
        <text transform="translate(960.0868 1129.4171)" className="st0 st1">구</text>
        <text transform="translate(960.0868 1137.3171)" className="st0 st1">성</text>
      </g>
      <g onClick={ this.onHandle() } id="Bojeong" key="Bojeong_Station" data="Bojeong">
        <text transform="translate(977.6737 1129.4171)" className="st0 st1">보</text>
        <text transform="translate(977.6737 1137.3171)" className="st0 st1">정</text>
      </g>
      <g onClick={ this.onHandle() } id="Jukjeon" key="Jukjeon_Station" data="Jukjeon">
        <text transform="translate(995.2606 1129.4171)" className="st0 st1">죽</text>
        <text transform="translate(995.2606 1137.3171)" className="st0 st1">전</text>
      </g>
      <g onClick={ this.onHandle() } id="Ori" key="Ori_Station" data="Ori">
        <text transform="translate(1012.8475 1129.4171)" className="st0 st1">오</text>
        <text transform="translate(1012.8475 1137.3171)" className="st0 st1">리</text>
      </g>
      <g onClick={ this.onHandle() } id="MyongjiUniv" key="MyongjiUniv_Station" data="MyongjiUniv">
        <text transform="translate(1051.3641 1168.5323)" className="st0 st1">명</text>
        <text transform="translate(1051.3641 1176.4324)" className="st0 st1">지</text>
        <text transform="translate(1051.3641 1184.3324)" className="st0 st1">대</text>
      </g>
      <g onClick={ this.onHandle() } id="Samga1" key="Samga1_Station" data="Samga1">
        <text transform="translate(1033.4882 1168.9581)" className="st0 st1">시</text>
        <text transform="translate(1033.4882 1176.8582)" className="st0 st1">청</text>
        <text transform="translate(1033.4882 1184.7582)" className="st0 st1">·</text>
        <text transform="translate(1033.4882 1192.6582)" className="st0 st1">용</text>
        <text transform="translate(1033.4882 1200.5581)" className="st0 st1">인</text>
        <text transform="translate(1033.4882 1208.4581)" className="st0 st1">대</text>
      </g>
      <g onClick={ this.onHandle() } id="Samga" key="Samga_Station" data="Samga">
        <text transform="translate(1015.6268 1168.9464)" className="st0 st1">삼</text>
        <text transform="translate(1015.6268 1176.8464)" className="st0 st1">가</text>
      </g>
      <g onClick={ this.onHandle() } id="Chodang" key="Chodang_Station" data="Chodang">
        <text transform="translate(997.7518 1168.9464)" className="st0 st1">초</text>
        <text transform="translate(997.7518 1176.8464)" className="st0 st1">당</text>
      </g>
      <g onClick={ this.onHandle() } id="Dongbaek" key="Dongbaek_Station" data="Dongbaek">
        <text transform="translate(979.8788 1168.9464)" className="st0 st1">동</text>
        <text transform="translate(979.8788 1176.8464)" className="st0 st1">백</text>
      </g>
      <g onClick={ this.onHandle() } id="Eojeong" key="Eojeong_Station" data="Eojeong">
        <text transform="translate(962.0048 1168.9464)" className="st0 st1">어</text>
        <text transform="translate(962.0048 1176.8464)" className="st0 st1">정</text>
      </g>
      <g onClick={ this.onHandle() } id="Jiseok" key="Jiseok_Station" data="Jiseok">
        <text transform="translate(944.1298 1168.9464)" className="st0 st1">지</text>
        <text transform="translate(944.1298 1176.8464)" className="st0 st1">석</text>
      </g>
      <g onClick={ this.onHandle() } id="Gulpocheon" key="Gulpocheon_Station" data="Gulpocheon">
        <text transform="translate(108.5511 825.8993)" className="st0 st1">굴</text>
        <text transform="translate(108.5511 833.7993)" className="st0 st1">포</text>
        <text transform="translate(108.5511 841.6993)" className="st0 st1">천</text>
      </g>
      <g onClick={ this.onHandle() } id="SamsanGymnasium" key="SamsanGymnasium_Station" data="SamsanGymnasium">
        <text transform="translate(123.099 811.8993)" className="st0 st1">삼</text>
        <text transform="translate(123.099 819.7993)" className="st0 st1">산</text>
        <text transform="translate(123.099 827.6993)" className="st0 st1">체</text>
        <text transform="translate(123.099 835.5993)" className="st0 st1">육</text>
        <text transform="translate(123.099 843.4993)" className="st0 st1">관</text>
      </g>
      <g onClick={ this.onHandle() } id="BucheonCityHall" key="BucheonCityHall_Station" data="BucheonCityHall">
        <text transform="translate(152.1967 818.8993)" className="st0 st1">부</text>
        <text transform="translate(152.1967 826.7993)" className="st0 st1">천</text>
        <text transform="translate(152.1967 834.6993)" className="st0 st1">시</text>
        <text transform="translate(152.1967 842.5993)" className="st0 st1">청</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinjungdong" key="Sinjungdong_Station" data="Sinjungdong">
        <text transform="translate(166.7455 826.7902)" className="st0 st1">신</text>
        <text transform="translate(166.7455 834.6902)" className="st0 st1">중</text>
        <text transform="translate(166.7455 842.5903)" className="st0 st1">동</text>
      </g>
      <g onClick={ this.onHandle() } id="Sangdong" key="Sangdong_Station" data="Sangdong">
        <text transform="translate(137.6283 835.5721)" className="st0 st1">상</text>
        <text transform="translate(137.6283 843.4721)" className="st0 st1">동</text>
      </g>
      <g onClick={ this.onHandle() } id="Songdo" key="Songdo_Station" data="Songdo">
        <text transform="translate(151.8392 1099.4786)" className="st0 st1">송</text>
        <text transform="translate(151.8392 1107.3787)" className="st0 st1">도</text>
      </g>
      <g onClick={ this.onHandle() } id="Jeongwang" key="Jeongwang_Station" data="Jeongwang">
        <text transform="translate(432.0863 1145.7921)" className="st0 st1">정</text>
        <text transform="translate(432.0863 1153.6921)" className="st0 st1">왕</text>
      </g>
      <g onClick={ this.onHandle() } id="Ungilsan1" key="Ungilsan1_Station" data="Ungilsan1">
        <text transform="translate(169.6888 1099.4786)" className="st0 st1">연</text>
        <text transform="translate(169.6888 1107.3787)" className="st0 st1">수</text>
      </g>
      <g onClick={ this.onHandle() } id="Ungilsan" key="Ungilsan_Station" data="Ungilsan">
        <text transform="translate(1102.5878 600.6925)" className="st0 st1">운</text>
        <text transform="translate(1102.5878 608.5925)" className="st0 st1">길</text>
        <text transform="translate(1102.5878 616.4925)" className="st0 st1">산</text>
      </g>
      <g onClick={ this.onHandle() } id="Yangsu" key="Yangsu_Station" data="Yangsu">
        <text transform="translate(1117.6132 600.6925)" className="st0 st1">양</text>
        <text transform="translate(1117.6132 608.5925)" className="st0 st1">수</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinwon" key="Sinwon_Station" data="Sinwon">
        <text transform="translate(1132.6376 600.6925)" className="st0 st1">신</text>
        <text transform="translate(1132.6376 608.5925)" className="st0 st1">원</text>
      </g>
      <g onClick={ this.onHandle() } id="Guksu" key="Guksu_Station" data="Guksu">
        <text transform="translate(1147.663 600.6925)" className="st0 st1">국</text>
        <text transform="translate(1147.663 608.5925)" className="st0 st1">수</text>
      </g>
      <g onClick={ this.onHandle() } id="Asin" key="Asin_Station" data="Asin">
        <text transform="translate(1162.6864 600.6925)" className="st0 st1">아</text>
        <text transform="translate(1162.6864 608.5925)" className="st0 st1">신</text>
      </g>
      <g onClick={ this.onHandle() } id="Obin" key="Obin_Station" data="Obin">
        <text transform="translate(1177.7118 600.6925)" className="st0 st1">오</text>
        <text transform="translate(1177.7118 608.5925)" className="st0 st1">빈</text>
      </g>
      <g onClick={ this.onHandle() } id="Yangpyeong1" key="Yangpyeong1_Station" data="Yangpyeong1">
        <text transform="translate(1192.7372 600.6925)" className="st0 st1">양</text>
        <text transform="translate(1192.7372 608.5925)" className="st0 st1">평</text>
      </g>
      <g onClick={ this.onHandle() } id="Wondeok" key="Wondeok_Station" data="Wondeok">
        <text transform="translate(1207.7616 600.6925)" className="st0 st1">원</text>
        <text transform="translate(1207.7616 608.5925)" className="st0 st1">덕</text>
      </g>
      <g onClick={ this.onHandle() } id="Yongmun" key="Yongmun_Station" data="Yongmun">
        <text transform="translate(1222.787 600.6925)" className="st0 st1">용</text>
        <text transform="translate(1222.787 608.5925)" className="st0 st1">문</text>
      </g>
      <g onClick={ this.onHandle() } id="Paldang" key="Paldang_Station" data="Paldang">
        <text transform="translate(1087.2684 600.6925)" className="st0 st1">팔</text>
        <text transform="translate(1087.2684 608.5925)" className="st0 st1">당</text>
      </g>
      <g onClick={ this.onHandle() } id="CampusTown" key="CampusTown_Station" data="CampusTown">
        <text transform="translate(255.8285 1145.379)" className="st0 st1">캠</text>
        <text transform="translate(255.8285 1153.2791)" className="st0 st1">퍼</text>
        <text transform="translate(255.8285 1161.1791)" className="st0 st1">스</text>
        <text transform="translate(255.8285 1169.0791)" className="st0 st1">타</text>
        <text transform="translate(255.8285 1176.979)" className="st0 st1">운</text>
      </g>
      <g onClick={ this.onHandle() } id="KangnamUniv" key="KangnamUniv_Station" data="KangnamUniv">
        <text transform="translate(928.7225 1168.1075)" className="st0 st1">강</text>
        <text transform="translate(928.7225 1176.0076)" className="st0 st1">남</text>
        <text transform="translate(928.7225 1183.9076)" className="st0 st1">대</text>
      </g>
      <g onClick={ this.onHandle() } id="Sanbon" key="Sanbon_Station" data="Sanbon">
        <text transform="translate(675.2616 1145.1974)" className="st0 st1">산</text>
        <text transform="translate(675.2616 1153.0974)" className="st0 st1">본</text>
      </g>
      <g onClick={ this.onHandle() } id="Mullae" key="Mullae_Station" data="Mullae">
        <text transform="translate(421.9213 808.1027)" className="st0 st1">문래</text>
      </g>
      <g onClick={ this.onHandle() } id="Beomgye" key="Beomgye_Station" data="Beomgye">
        <text transform="translate(689.579 1103.5685)" className="st0 st1">범계</text>
      </g>
      <g onClick={ this.onHandle() } id="Pyeongchon" key="Pyeongchon_Station" data="Pyeongchon">
        <text transform="translate(689.579 1088.3175)" className="st0 st1">평촌</text>
      </g>
      <g onClick={ this.onHandle() } id="Indeogwon" key="Indeogwon_Station" data="Indeogwon">
        <text transform="translate(689.579 1073.0675)" className="st0 st1">인덕원</text>
      </g>
      <g onClick={ this.onHandle() } id="GovernmentComplexGwacheon" key="GovernmentComplexGwacheon_Station" data="GovernmentComplexGwacheon">
        <text transform="translate(689.579 1057.8116)" className="st0 st1">정부과천청사</text>
      </g>
      <g onClick={ this.onHandle() } id="Gwacheon" key="Gwacheon_Station" data="Gwacheon">
        <text transform="translate(689.579 1042.5616)" className="st0 st1">과천</text>
      </g>
      <g onClick={ this.onHandle() } id="SeoulGrandPark" key="SeoulGrandPark_Station" data="SeoulGrandPark">
        <text transform="translate(689.579 1027.3038)" className="st0 st1">대공원</text>
      </g>
      <g onClick={ this.onHandle() } id="SeoulRacecoursePark" key="SeoulRacecoursePark_Station" data="SeoulRacecoursePark">
        <text transform="translate(689.579 1012.0548)" className="st0 st1">경마공원</text>
      </g>
      <g onClick={ this.onHandle() } id="Seonbawi" key="Seonbawi_Station" data="Seonbawi">
        <text transform="translate(689.579 996.8038)" className="st0 st1">선바위</text>
      </g>
      <g onClick={ this.onHandle() } id="Namtaeryeong" key="Namtaeryeong_Station" data="Namtaeryeong">
        <text transform="translate(689.579 981.547)" className="st0 st1">남태령</text>
      </g>
      <g onClick={ this.onHandle() } id="Geomam" key="Geomam_Station" data="Geomam">
        <text transform="translate(74.4359 557.6925)" className="st0 st1">검암</text>
      </g>
      <g onClick={ this.onHandle() } id="Gyulhyeon" key="Gyulhyeon_Station" data="Gyulhyeon">
        <text transform="translate(74.4359 626.3771)" className="st0 st1">귤현</text>
      </g>
      <g onClick={ this.onHandle() } id="Bakchon" key="Bakchon_Station" data="Bakchon">
        <text transform="translate(74.4359 659.2882)" className="st0 st1">박촌</text>
      </g>
      <g onClick={ this.onHandle() } id="Imhak" key="Imhak_Station" data="Imhak">
        <text transform="translate(74.4359 692.1993)" className="st0 st1">임학</text>
      </g>
      <g onClick={ this.onHandle() } id="Gyesan" key="Gyesan_Station" data="Gyesan">
        <text transform="translate(74.4359 725.1183)" className="st0 st1">계산</text>
      </g>
      <g onClick={ this.onHandle() } id="GyeonginNatlUnivofEducation" key="GyeonginNatlUnivofEducation_Station" data="GyeonginNatlUnivofEducation">
        <text transform="translate(74.4359 758.0304)" className="st0 st1">경인교대입구</text>
      </g>
      <g onClick={ this.onHandle() } id="CheongnaIntlCityStation" key="CheongnaIntlCityStation_Station" data="CheongnaIntlCityStation">
        <text transform="translate(75.9447 539.4855)" className="st0 st1">청라국제도시</text>
      </g>
      <g onClick={ this.onHandle() } id="Yongmasan" key="Yongmasan_Station" data="Yongmasan">
        <text transform="translate(999.2616 602.9288)" className="st0 st1">용마산</text>
      </g>
      <g onClick={ this.onHandle() } id="Sagajeong" key="Sagajeong_Station" data="Sagajeong">
        <text transform="translate(999.2616 576.5245)" className="st0 st1">사가정</text>
      </g>
      <g onClick={ this.onHandle() } id="Myeonmok" key="Myeonmok_Station" data="Myeonmok">
        <text transform="translate(999.2616 547.546)" className="st0 st1">면목</text>
      </g>
      <g onClick={ this.onHandle() } id="Jungnang" key="Jungnang_Station" data="Jungnang">
        <text transform="translate(952.6971 533.172)" className="st0 st1">중랑</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinnae" key="Sinnae_Station" data="Sinnae">
        <text transform="translate(1045.7147 457.4913)" className="st0 st1">신내</text>
      </g>
      <g onClick={ this.onHandle() } id="Changsin" key="Changsin_Station" data="Changsin">
        <text transform="translate(786.6542 581.3898)" className="st0 st1">창신</text>
      </g>
      <g onClick={ this.onHandle() } id="Apgujeong" key="Apgujeong_Station" data="Apgujeong">
        <text transform="translate(798.9677 779.5177)" className="st0 st1">압구정</text>
      </g>
      <g onClick={ this.onHandle() } id="Saejeol" key="Saejeol_Station" data="Saejeol">
        <text transform="translate(487.3246 536.0724)" className="st0 st1">새절</text>
      </g>
      <g onClick={ this.onHandle() } id="Eungam" key="Eungam_Station" data="Eungam">
        <text transform="translate(487.3246 509.6984)" className="st0 st1">응암</text>
      </g>
      <g onClick={ this.onHandle() } id="Gupabal" key="Gupabal_Station" data="Gupabal">
        <text transform="translate(503.6517 366.7472)" className="st0 st1">구파발</text>
      </g>
      <g onClick={ this.onHandle() } id="SookmyungWomensUniv" key="SookmyungWomensUniv_Station" data="SookmyungWomensUniv">
        <text transform="translate(662.0165 707.6759)" className="st0 st1">숙대입구</text>
      </g>
      <g onClick={ this.onHandle() } id="Namyeong" key="Namyeong_Station" data="Namyeong">
        <text transform="translate(657.6512 724.6798)" className="st0 st1">남영</text>
      </g>
      <g onClick={ this.onHandle() } id="Seryu" key="Seryu_Station" data="Seryu">
        <text transform="translate(790.1747 1155.4816)" className="st0 st1">세류</text>
      </g>
      <g onClick={ this.onHandle() } id="GachonUniv" key="GachonUniv_Station" data="GachonUniv">
        <text transform="translate(1084.0741 1012.7999)" className="st0 st1">가천대</text>
      </g>
      <g onClick={ this.onHandle() } id="Jangji" key="Jangji_Station" data="Jangji">
        <text transform="translate(1114.5497 957.3292)" className="st0 st1">장지</text>
      </g>
      <g onClick={ this.onHandle() } id="Dandaeogeori" key="Dandaeogeori_Station" data="Dandaeogeori">
        <text transform="translate(1144.9891 1032.671)" className="st0 st1">단대오거리</text>
      </g>
      <g onClick={ this.onHandle() } id="Taepyeong" key="Taepyeong_Station" data="Taepyeong">
        <text transform="translate(1089.6171 1036.5177)" className="st0 st1">태평</text>
      </g>
      <g onClick={ this.onHandle() } id="Banghak" key="Banghak_Station" data="Banghak">
        <text transform="translate(861.9227 253.8585)" className="st0 st1">방학</text>
      </g>
      <g onClick={ this.onHandle() } id="Dobong" key="Dobong_Station" data="Dobong">
        <text transform="translate(862.0604 209.5226)" className="st0 st1">도봉</text>
      </g>
      <g onClick={ this.onHandle() } id="Dokbawi" key="Dokbawi_Station" data="Dokbawi">
        <text transform="translate(547.1039 434.4816)" className="st0 st1">독바위</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinheung" key="Sinheung_Station" data="Sinheung">
        <text transform="translate(1144.5682 1052.2491)" className="st0 st1">신흥</text>
      </g>
      <g onClick={ this.onHandle() } id="Geumho" key="Geumho_Station" data="Geumho">
        <text transform="translate(789.7303 696.9347)" className="st0 st1">금호</text>
      </g>
      <g onClick={ this.onHandle() } id="Hyehwa" key="Hyehwa_Station" data="Hyehwa">
        <text transform="translate(744.8182 571.2072)" className="st0 st1">혜화</text>
      </g>
      <g onClick={ this.onHandle() } id="Achasan" key="Achasan_Station" data="Achasan">
        <text transform="translate(1007.2538 683.2189)" className="st0 st1">아차산</text>
      </g>
      <g onClick={ this.onHandle() } id="Jichuk" key="Jichuk_Station" data="Jichuk">
        <text transform="translate(503.5902 339.8673)" className="st0 st1">지축</text>
      </g>
      <g onClick={ this.onHandle() } id="Gusan" key="Gusan_Station" data="Gusan">
        <text transform="translate(487.3314 461.13)" className="st0 st1">구산</text>
      </g>
      <g onClick={ this.onHandle() } id="Munjeong" key="Munjeong_Station" data="Munjeong">
        <text transform="translate(1114.5575 926.8282)" className="st0 st1">문정</text>
      </g>
      <g onClick={ this.onHandle() } id="Mangwolsa" key="Mangwolsa_Station" data="Mangwolsa">
        <text transform="translate(880.5663 83.1691)" className="st0 st1">망월사</text>
      </g>
      <g onClick={ this.onHandle() } id="NamdongInduspark" key="NamdongInduspark_Station" data="NamdongInduspark">
        <text transform="translate(225.4779 1078.2042)" className="st0 st1">남동</text>
        <text transform="translate(225.4779 1086.1042)" className="st0 st1">인더스파크</text>
      </g>
      <g onClick={ this.onHandle() } id="Hogupo" key="Hogupo_Station" data="Hogupo">
        <text transform="translate(258.9594 1085.7189)" className="st0 st1">호구포</text>
      </g>
      <g onClick={ this.onHandle() } id="IncheonNonhyeon" key="IncheonNonhyeon_Station" data="IncheonNonhyeon">
        <text transform="translate(290.5687 1085.7189)" className="st0 st1">인천논현</text>
      </g>
      <g onClick={ this.onHandle() } id="Gwanak" key="Gwanak_Station" data="Gwanak">
        <text transform="translate(499.1869 1111.7286)" className="st0 st1">관악</text>
      </g>
      <g onClick={ this.onHandle() } id="Anyang" key="Anyang_Station" data="Anyang">
        <text transform="translate(559.2426 1111.7286)" className="st0 st1">안양</text>
      </g>
      <g onClick={ this.onHandle() } id="Myeonghak" key="Myeonghak_Station" data="Myeonghak">
        <text transform="translate(619.598 1111.7286)" className="st0 st1">명학</text>
      </g>
      <g onClick={ this.onHandle() } id="Gunpo" key="Gunpo_Station" data="Gunpo">
        <text transform="translate(700.3573 1111.7286)" className="st0 st1">군포</text>
      </g>
      <g onClick={ this.onHandle() } id="Dangjeong" key="Dangjeong_Station" data="Dangjeong">
        <text transform="translate(720.6688 1111.7286)" className="st0 st1">당정</text>
      </g>
      <g onClick={ this.onHandle() } id="Uiwang" key="Uiwang_Station" data="Uiwang">
        <text transform="translate(740.9227 1111.7286)" className="st0 st1">의왕</text>
      </g>
      <g onClick={ this.onHandle() } id="SungkyunkwanUniv" key="SungkyunkwanUniv_Station" data="SungkyunkwanUniv">
        <text transform="translate(755.7469 1111.7286)" className="st0 st1">성균관대</text>
      </g>
      <g onClick={ this.onHandle() } id="Sindaebang" key="Sindaebang_Station" data="Sindaebang">
        <text transform="translate(470.9662 936.3361)" className="st0 st1">신대방</text>
      </g>
      <g onClick={ this.onHandle() } id="Bongcheon" key="Bongcheon_Station" data="Bongcheon">
        <text transform="translate(555.9603 938.84)" className="st0 st1">봉천</text>
      </g>
      <g onClick={ this.onHandle() } id="Euljiro1ilga" key="Euljiro1ilga_Station" data="Euljiro1ilga">
        <text transform="translate(671.5243 639.88)" className="st0 st1">을지로입구</text>
      </g>
      <g onClick={ this.onHandle() } id="Jonggak" key="Jonggak_Station" data="Jonggak">
        <text transform="translate(678.6317 619.6505)" className="st0 st1">종각역</text>
      </g>
      <g onClick={ this.onHandle() } id="Jongno5oga" key="Jongno5oga_Station" data="Jongno5oga">
        <text transform="translate(732.6561 605.4894)" className="st0 st1">종로5가</text>
      </g>
      <g onClick={ this.onHandle() } id="Daebang" key="Daebang_Station" data="Daebang">
        <text transform="translate(512.4271 830.09)" className="st0 st1">대방</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinpung" key="Sinpung_Station" data="Sinpung">
        <text transform="translate(459.8558 883.8019)" className="st0 st1">신풍</text>
      </g>
      <g onClick={ this.onHandle() } id="Namguro" key="Namguro_Station" data="Namguro">
        <text transform="translate(384.9515 922.6007)" className="st0 st1">남구로</text>
      </g>
      <g onClick={ this.onHandle() } id="Boramae" key="Boramae_Station" data="Boramae">
        <text transform="translate(490.9633 883.6583)" className="st0 st1">보라매</text>
      </g>
      <g onClick={ this.onHandle() } id="YangcheonHyanggyo" key="YangcheonHyanggyo_Station" data="YangcheonHyanggyo">
        <text transform="translate(258.7406 614.8595)" className="st0 st1">양천향교</text>
      </g>
      <g onClick={ this.onHandle() } id="Magongnaru" key="Magongnaru_Station" data="Magongnaru">
        <text transform="translate(214.4369 614.8595)" className="st0 st1">마곡나루</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinbanghwa" key="Sinbanghwa_Station" data="Sinbanghwa">
        <text transform="translate(187.6635 614.8654)" className="st0 st1">신방화</text>
      </g>
      <g onClick={ this.onHandle() } id="IncheonIntlAirportCargoTerminal1" key="IncheonIntlAirportCargoTerminal1_Station" data="IncheonIntlAirportCargoTerminal1">
        <text transform="translate(138.6185 523.8781)" className="st0 st1">인천국제공항</text>
      </g>
      <g onClick={ this.onHandle() } id="IncheonIntlAirportCargoTerminal" key="IncheonIntlAirportCargoTerminal_Station" data="IncheonIntlAirportCargoTerminal">
        <text transform="translate(114.3617 516.3615)" className="st0 st1">공항화물</text>
        <text transform="translate(114.3617 524.2615)" className="st0 st1">청사</text>
      </g>
      <g onClick={ this.onHandle() } id="Songjeong" key="Songjeong_Station" data="Songjeong">
        <text transform="translate(177.6615 651.3849)" className="st0 st1">송정</text>
      </g>
      <g onClick={ this.onHandle() } id="Magok" key="Magok_Station" data="Magok">
        <text transform="translate(211.1859 651.3849)" className="st0 st1">마곡</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinjeong" key="Sinjeong_Station" data="Sinjeong">
        <text transform="translate(304.0209 776.3175)" className="st0 st1">신정</text>
      </g>
      <g onClick={ this.onHandle() } id="Mokdong" key="Mokdong_Station" data="Mokdong">
        <text transform="translate(328.5228 776.3175)" className="st0 st1">목동</text>
      </g>
      <g onClick={ this.onHandle() } id="Omokgyo" key="Omokgyo_Station" data="Omokgyo">
        <text transform="translate(357.6205 776.3175)" className="st0 st1">오목교</text>
      </g>
      <g onClick={ this.onHandle() } id="Yangpyeong" key="Yangpyeong_Station" data="Yangpyeong">
        <text transform="translate(391.1205 776.3175)" className="st0 st1">양평</text>
      </g>
      <g onClick={ this.onHandle() } id="Gwanghwamun" key="Gwanghwamun_Station" data="Gwanghwamun">
        <text transform="translate(658.2391 601.0743)" className="st0 st1">광화문</text>
      </g>
      <g onClick={ this.onHandle() } id="Itaewon" key="Itaewon_Station" data="Itaewon">
        <text transform="translate(712.5272 752.3615)" className="st0 st1">이태원</text>
      </g>
      <g onClick={ this.onHandle() } id="Noksapyeong" key="Noksapyeong_Station" data="Noksapyeong">
        <text transform="translate(688.8143 752.3927)" className="st0 st1">녹사평</text>
      </g>
      <g onClick={ this.onHandle() } id="Seobinggo" key="Seobinggo_Station" data="Seobinggo">
        <text transform="translate(692.8485 808.8419)" className="st0 st1">서빙고</text>
      </g>
      <g onClick={ this.onHandle() } id="Gwangheungchang" key="Gwangheungchang_Station" data="Gwangheungchang">
        <text transform="translate(526.0931 706.4865)" className="st0 st1">광흥창</text>
      </g>
      <g onClick={ this.onHandle() } id="Sangsu" key="Sangsu_Station" data="Sangsu">
        <text transform="translate(502.5941 706.4865)" className="st0 st1">상수</text>
      </g>
      <g onClick={ this.onHandle() } id="Baekseok" key="Baekseok_Station" data="Baekseok">
        <text transform="translate(396.8383 337.1681)" className="st0 st1">백석</text>
      </g>
      <g onClick={ this.onHandle() } id="Gyeongbokgung" key="Gyeongbokgung_Station" data="Gyeongbokgung">
        <text transform="translate(650.2665 584.1642)" className="st0 st1">경복궁</text>
      </g>
      <g onClick={ this.onHandle() } id="Anguk" key="Anguk_Station" data="Anguk">
        <text transform="translate(688.5907 584.1466)" className="st0 st1">안국</text>
      </g>
      <g onClick={ this.onHandle() } id="Myeongdong" key="Myeongdong_Station" data="Myeongdong">
        <text transform="translate(690.7069 655.4435)" className="st0 st1">명동</text>
      </g>
      <g onClick={ this.onHandle() } id="LrtUijeongbu" key="LrtUijeongbu_Station" data="LrtUijeongbu">
        <text transform="translate(772.9696 68.6573)" className="st0 st1">경전철</text>
        <text transform="translate(772.9696 76.5573)" className="st0 st1">의정부</text>
      </g>
      <g onClick={ this.onHandle() } id="Beomgol" key="Beomgol_Station" data="Beomgol">
        <text transform="translate(794.1708 76.173)" className="st0 st1">범골</text>
      </g>
      <g onClick={ this.onHandle() } id="EwhaWomansUniv" key="EwhaWomansUniv_Station" data="EwhaWomansUniv">
        <text transform="translate(570.973 668.4698)" className="st0 st1">이대</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinchon" key="Sinchon_Station" data="Sinchon">
        <text transform="translate(545.3705 668.4698)" className="st0 st1">신촌</text>
      </g>
      <g onClick={ this.onHandle() } id="SeoulNatlUniv" key="SeoulNatlUniv_Station" data="SeoulNatlUniv">
        <text transform="translate(580.7113 938.84)" className="st0 st1">서울대입구</text>
      </g>
      <g onClick={ this.onHandle() } id="SportsComplex" key="SportsComplex_Station" data="SportsComplex">
        <text transform="translate(940.2528 837.0118)" className="st0 st1">종합운동장</text>
      </g>
      <g onClick={ this.onHandle() } id="Sincheon" key="Sincheon_Station" data="Sincheon">
        <text transform="translate(984.3182 837.0118)" className="st0 st1">신천</text>
      </g>
      <g onClick={ this.onHandle() } id="Guui" key="Guui_Station" data="Guui">
        <text transform="translate(986.1659 730.9562)" className="st0 st1">구의</text>
      </g>
      <g onClick={ this.onHandle() } id="Yongdu" key="Yongdu_Station" data="Yongdu">
        <text transform="translate(854.2069 598.9894)" className="st0 st1">용두</text>
      </g>
      <g onClick={ this.onHandle() } id="Sangwangsimni" key="Sangwangsimni_Station" data="Sangwangsimni">
        <text transform="translate(811.2499 625.713)" className="st0 st1">상왕십리</text>
      </g>
      <g onClick={ this.onHandle() } id="Baegun" key="Baegun_Station" data="Baegun">
        <text transform="translate(93.6683 908.3273)" className="st0 st1">백운</text>
      </g>
      <g onClick={ this.onHandle() } id="Anam" key="Anam_Station" data="Anam">
        <text transform="translate(817.7626 562.1447)" className="st0 st1">안암</text>
      </g>
      <g onClick={ this.onHandle() } id="Bomun" key="Bomun_Station" data="Bomun">
        <text transform="translate(788.6659 562.1447)" className="st0 st1">보문</text>
      </g>
      <g onClick={ this.onHandle() } id="Sujin" key="Sujin_Station" data="Sujin">
        <text transform="translate(1117.7938 1067.3058)" className="st0 st1">수진</text>
      </g>
      <g onClick={ this.onHandle() } id="DonggukUniv" key="DonggukUniv_Station" data="DonggukUniv">
        <text transform="translate(740.4032 660.8849)" className="st0 st1">동대입구</text>
      </g>
      <g onClick={ this.onHandle() } id="Unseo" key="Unseo_Station" data="Unseo">
        <text transform="translate(93.0424 523.8722)" className="st0 st1">운서</text>
      </g>
      <g onClick={ this.onHandle() } id="Balgok" key="Balgok_Station" data="Balgok">
        <text transform="translate(834.3466 90.2462)" className="st0 st1">발곡</text>
      </g>
      <g onClick={ this.onHandle() } id="YangcheonguOffice" key="YangcheonguOffice_Station" data="YangcheonguOffice">
        <text transform="translate(334.5287 832.7032)" className="st0 st1">양천구청</text>
      </g>
      <g onClick={ this.onHandle() } id="Oryudong" key="Oryudong_Station" data="Oryudong">
        <text transform="translate(273.8597 904.9142)" className="st0 st1">오류동</text>
      </g>
      <g onClick={ this.onHandle() } id="Gaebong" key="Gaebong_Station" data="Gaebong">
        <text transform="translate(308.5941 890.5294)" className="st0 st1">개봉</text>
      </g>
      <g onClick={ this.onHandle() } id="Guil" key="Guil_Station" data="Guil">
        <text transform="translate(343.3285 876.1427)" className="st0 st1">구일</text>
      </g>
      <g onClick={ this.onHandle() } id="Yeongdeungpo" key="Yeongdeungpo_Station" data="Yeongdeungpo">
        <text transform="translate(461.0404 827.3663)" className="st0 st1">영등포</text>
      </g>
      <g onClick={ this.onHandle() } id="Nakseongdae" key="Nakseongdae_Station" data="Nakseongdae">
        <text transform="translate(626.4066 952.9073)" className="st0 st1">낙성대</text>
      </g>
      <g onClick={ this.onHandle() } id="Jangseungbaegi" key="Jangseungbaegi_Station" data="Jangseungbaegi">
        <text transform="translate(536.3138 855.7374)" className="st0 st1">장승배기</text>
      </g>
      <g onClick={ this.onHandle() } id="Seocho" key="Seocho_Station" data="Seocho">
        <text transform="translate(750.3729 914.8907)" className="st0 st1">서초</text>
      </g>
      <g onClick={ this.onHandle() } id="Yeoksam" key="Yeoksam_Station" data="Yeoksam">
        <text transform="translate(841.0106 877.3517)" className="st0 st1">역삼</text>
      </g>
      <g onClick={ this.onHandle() } id="Samseong" key="Samseong_Station" data="Samseong">
        <text transform="translate(918.3514 845.3156)" className="st0 st1">삼성</text>
      </g>
      <g onClick={ this.onHandle() } id="Naebang" key="Naebang_Station" data="Naebang">
        <text transform="translate(707.8348 915.2042)" className="st0 st1">내방</text>
      </g>
      <g onClick={ this.onHandle() } id="Maebong" key="Maebong_Station" data="Maebong">
        <text transform="translate(866.4755 918.6427)" className="st0 st1">매봉</text>
      </g>
      <g onClick={ this.onHandle() } id="Daechi" key="Daechi_Station" data="Daechi">
        <text transform="translate(917.5995 897.4679)" className="st0 st1">대치</text>
      </g>
      <g onClick={ this.onHandle() } id="Hangnyeoul" key="Hangnyeoul_Station" data="Hangnyeoul">
        <text transform="translate(933.3632 888.6437)" className="st0 st1">학여울</text>
      </g>
      <g onClick={ this.onHandle() } id="Gaepodong" key="Gaepodong_Station" data="Gaepodong">
        <text transform="translate(930.5643 924.6866)" className="st0 st1">개포동</text>
      </g>
      <g onClick={ this.onHandle() } id="Banpo" key="Banpo_Station" data="Banpo">
        <text transform="translate(763.3944 841.714)" className="st0 st1">반포</text>
      </g>
      <g onClick={ this.onHandle() } id="Nonhyeon" key="Nonhyeon_Station" data="Nonhyeon">
        <text transform="translate(792.5858 830.3976)" className="st0 st1">논현</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinnonhyeon" key="Sinnonhyeon_Station" data="Sinnonhyeon">
        <text transform="translate(807.8163 865.4386)" className="st0 st1">신논현</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinbanpo" key="Sinbanpo_Station" data="Sinbanpo">
        <text transform="translate(723.537 873.8068)" className="st0 st1">신반포</text>
      </g>
      <g onClick={ this.onHandle() } id="Gubanpo" key="Gubanpo_Station" data="Gubanpo">
        <text transform="translate(697.9911 884.3849)" className="st0 st1">구반포</text>
      </g>
      <g onClick={ this.onHandle() } id="Hakdong" key="Hakdong_Station" data="Hakdong">
        <text transform="translate(821.8788 819.0372)" className="st0 st1">학동</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinsa" key="Sinsa_Station" data="Sinsa">
        <text transform="translate(788.1005 807.3068)" className="st0 st1">신사</text>
      </g>
      <g onClick={ this.onHandle() } id="Jamwon" key="Jamwon_Station" data="Jamwon">
        <text transform="translate(760.9706 818.6056)" className="st0 st1">잠원</text>
      </g>
      <g onClick={ this.onHandle() } id="Ssangmun" key="Ssangmun_Station" data="Ssangmun">
        <text transform="translate(837.9159 328.844)" className="st0 st1">쌍문</text>
      </g>
      <g onClick={ this.onHandle() } id="Sanggye" key="Sanggye_Station" data="Sanggye">
        <text transform="translate(951.1698 281.9347)" className="st0 st1">상계</text>
      </g>
      <g onClick={ this.onHandle() } id="Dolgoji" key="Dolgoji_Station" data="Dolgoji">
        <text transform="translate(891.8915 461.8497)" className="st0 st1">돌곶이</text>
      </g>
      <g onClick={ this.onHandle() } id="Sangwolgok" key="Sangwolgok_Station" data="Sangwolgok">
        <text transform="translate(866.8143 472.2335)" className="st0 st1">상월곡</text>
      </g>
      <g onClick={ this.onHandle() } id="Cheonwang" key="Cheonwang_Station" data="Cheonwang">
        <text transform="translate(249.766 921.631)" className="st0 st1">천왕</text>
      </g>
      <g onClick={ this.onHandle() } id="Gwangmyeongsageori" key="Gwangmyeongsageori_Station" data="Gwangmyeongsageori">
        <text transform="translate(293.5443 939.7677)" className="st0 st1">광명사거리</text>
      </g>
      <g onClick={ this.onHandle() } id="Cheolsan" key="Cheolsan_Station" data="Cheolsan">
        <text transform="translate(337.347 957.9113)" className="st0 st1">철산</text>
      </g>
      <g onClick={ this.onHandle() } id="Dapsimni" key="Dapsimni_Station" data="Dapsimni">
        <text transform="translate(891.2655 617.3282)" className="st0 st1">답십리</text>
      </g>
      <g onClick={ this.onHandle() } id="Janghanpyeong" key="Janghanpyeong_Station" data="Janghanpyeong">
        <text transform="translate(927.871 632.5148)" className="st0 st1">장한평</text>
      </g>
      <g onClick={ this.onHandle() } id="Gwangnaru" key="Gwangnaru_Station" data="Gwangnaru">
        <text transform="translate(1041.4052 700.6486)" className="st0 st1">광나루</text>
      </g>
      <g onClick={ this.onHandle() } id="Heukseok" key="Heukseok_Station" data="Heukseok">
        <text transform="translate(614.0482 858.0861)" className="st0 st1">흑석</text>
      </g>
      <g onClick={ this.onHandle() } id="Nodeul" key="Nodeul_Station" data="Nodeul">
        <text transform="translate(584.6439 845.9044)" className="st0 st1">노들</text>
      </g>
      <g onClick={ this.onHandle() } id="YeongdeungpoMarket" key="YeongdeungpoMarket_Station" data="YeongdeungpoMarket">
        <text transform="translate(450.4623 786.9825)" className="st0 st1">영등포시장</text>
      </g>
      <g onClick={ this.onHandle() } id="Cheonggyesan" key="Cheonggyesan_Station" data="Cheonggyesan">
        <text transform="translate(896.7645 1058.3624)" className="st0 st1">청계산입구</text>
      </g>
      <g onClick={ this.onHandle() } id="Pangyo" key="Pangyo_Station" data="Pangyo">
        <text transform="translate(1013.1346 1106.5685)" className="st0 st1">판교</text>
      </g>
      <g onClick={ this.onHandle() } id="Gaerong" key="Gaerong_Station" data="Gaerong">
        <text transform="translate(1132.4061 879.6427)" className="st0 st1">개롱</text>
      </g>
      <g onClick={ this.onHandle() } id="Geoyeo" key="Geoyeo_Station" data="Geoyeo">
        <text transform="translate(1160.6444 891.3429)" className="st0 st1">거여</text>
      </g>
      <g onClick={ this.onHandle() } id="Jegidong" key="Jegidong_Station" data="Jegidong">
        <text transform="translate(826.6044 581.4777)" className="st0 st1">제기동</text>
      </g>
      <g onClick={ this.onHandle() } id="Hwarangdae" key="Hwarangdae_Station" data="Hwarangdae">
        <text transform="translate(969.8944 429.5343)" className="st0 st1">화랑대</text>
      </g>
      <g onClick={ this.onHandle() } id="Gaehwa" key="Gaehwa_Station" data="Gaehwa">
        <text transform="translate(134.14 583.5577)" className="st0 st1">개화</text>
      </g>
      <g onClick={ this.onHandle() } id="Daemosan" key="Daemosan_Station" data="Daemosan">
        <text transform="translate(948.701 917.171)" className="st0 st1">대모산입구</text>
      </g>
      <g onClick={ this.onHandle() } id="Namhansanseong" key="Namhansanseong_Station" data="Namhansanseong">
        <text transform="translate(1129.3563 1006.9806)" className="st0 st1">남한산성입구</text>
      </g>
      <g onClick={ this.onHandle() } id="Sanseong" key="Sanseong_Station" data="Sanseong">
        <text transform="translate(1112.1952 999.3146)" className="st0 st1">산성</text>
      </g>
      <g onClick={ this.onHandle() } id="Godeok" key="Godeok_Station" data="Godeok">
        <text transform="translate(1189.4667 675.1017)" className="st0 st1">고덕</text>
      </g>
      <g onClick={ this.onHandle() } id="Sangildong" key="Sangildong_Station" data="Sangildong">
        <text transform="translate(1223.0487 661.1915)" className="st0 st1">상일동</text>
      </g>
      <g onClick={ this.onHandle() } id="Bangbae" key="Bangbae_Station" data="Bangbae">
        <text transform="translate(726.4237 955.3624)" className="st0 st1">방배</text>
      </g>
      <g onClick={ this.onHandle() } id="Sindaebangsamgeori" key="Sindaebangsamgeori_Station" data="Sindaebangsamgeori">
        <text transform="translate(520.8383 882.881)" className="st0 st1">신대방삼거리</text>
      </g>
      <g onClick={ this.onHandle() } id="Cheongdam" key="Cheongdam_Station" data="Cheongdam">
        <text transform="translate(880.7245 796.1652)" className="st0 st1">청담</text>
      </g>
      <g onClick={ this.onHandle() } id="Guryong" key="Guryong_Station" data="Guryong">
        <text transform="translate(908.663 932.1075)" className="st0 st1">구룡</text>
      </g>
      <g onClick={ this.onHandle() } id="Sapyeong" key="Sapyeong_Station" data="Sapyeong">
        <text transform="translate(771.16 866.7296)" className="st0 st1">사평</text>
      </g>
      <g onClick={ this.onHandle() } id="Daeheung" key="Daeheung_Station" data="Daeheung">
        <text transform="translate(552.9603 710.6827)" className="st0 st1">대흥</text>
      </g>
      <g onClick={ this.onHandle() } id="Hyochangpark" key="Hyochangpark_Station" data="Hyochangpark">
        <text transform="translate(619.6166 721.6671)" className="st0 st1">효창공원앞</text>
      </g>
      <g onClick={ this.onHandle() } id="Hoehyeon" key="Hoehyeon_Station" data="Hoehyeon">
        <text transform="translate(668.2919 662.4005)" className="st0 st1">회현</text>
      </g>
      <g onClick={ this.onHandle() } id="Ahyeon" key="Ahyeon_Station" data="Ahyeon">
        <text transform="translate(603.4515 666.7609)" className="st0 st1">아현</text>
      </g>
      <g onClick={ this.onHandle() } id="Ttukseom" key="Ttukseom_Station" data="Ttukseom">
        <text transform="translate(872.4559 695.8458)" className="st0 st1">뚝섬</text>
      </g>
      <g onClick={ this.onHandle() } id="HanyangUniv" key="HanyangUniv_Station" data="HanyangUniv">
        <text transform="translate(870.9344 665.6212)" className="st0 st1">한양대</text>
      </g>
      <g onClick={ this.onHandle() } id="Seonyudo" key="Seonyudo_Station" data="Seonyudo">
        <text transform="translate(420.4056 723.2706)" className="st0 st1">선유도</text>
      </g>
      <g onClick={ this.onHandle() } id="Bonghwasan" key="Bonghwasan_Station" data="Bonghwasan">
        <text transform="translate(1004.6229 435.257)" className="st0 st1">봉화산</text>
      </g>
      <g onClick={ this.onHandle() } id="HankukUnivofForeignStudies" key="HankukUnivofForeignStudies_Station" data="HankukUnivofForeignStudies">
        <text transform="translate(893.3124 517.6534)" className="st0 st1">외대앞</text>
      </g>
      <g onClick={ this.onHandle() } id="HansungUniv" key="HansungUniv_Station" data="HansungUniv">
        <text transform="translate(755.1346 544.089)" className="st0 st1">한성대입구</text>
      </g>
      <g onClick={ this.onHandle() } id="SungshinWomensUniv" key="SungshinWomensUniv_Station" data="SungshinWomensUniv">
        <text transform="translate(780.286 518.923)" className="st0 st1">성신여대입구</text>
      </g>
      <g onClick={ this.onHandle() } id="Gireum" key="Gireum_Station" data="Gireum">
        <text transform="translate(809.5702 489.632)" className="st0 st1">길음</text>
      </g>
      <g onClick={ this.onHandle() } id="Uijeongbu" key="Uijeongbu_Station" data="Uijeongbu">
        <text transform="translate(810.5536 96.9786)" className="st0 st1">의정부</text>
      </g>
      <g onClick={ this.onHandle() } id="Ganeung" key="Ganeung_Station" data="Ganeung">
        <text transform="translate(799.1678 108.3645)" className="st0 st1">가능</text>
      </g>
      <g onClick={ this.onHandle() } id="Nogyang" key="Nogyang_Station" data="Nogyang">
        <text transform="translate(787.7821 119.7511)" className="st0 st1">녹양</text>
      </g>
      <g onClick={ this.onHandle() } id="Yangju" key="Yangju_Station" data="Yangju">
        <text transform="translate(776.3964 131.1368)" className="st0 st1">양주</text>
      </g>
      <g onClick={ this.onHandle() } id="Deokgye" key="Deokgye_Station" data="Deokgye">
        <text transform="translate(765.0106 142.5226)" className="st0 st1">덕계</text>
      </g>
      <g onClick={ this.onHandle() } id="Deokjeong" key="Deokjeong_Station" data="Deokjeong">
        <text transform="translate(753.6249 153.9083)" className="st0 st1">덕정</text>
      </g>
      <g onClick={ this.onHandle() } id="Jihaeng" key="Jihaeng_Station" data="Jihaeng">
        <text transform="translate(742.2382 165.2941)" className="st0 st1">지행</text>
      </g>
      <g onClick={ this.onHandle() } id="Dongducheonjungang" key="Dongducheonjungang_Station" data="Dongducheonjungang">
        <text transform="translate(730.8524 176.6798)" className="st0 st1">동두천중앙</text>
      </g>
      <g onClick={ this.onHandle() } id="Bosan" key="Bosan_Station" data="Bosan">
        <text transform="translate(719.4667 188.0656)" className="st0 st1">보산</text>
      </g>
      <g onClick={ this.onHandle() } id="Dongducheon" key="Dongducheon_Station" data="Dongducheon">
        <text transform="translate(708.08 199.4513)" className="st0 st1">동두천</text>
      </g>
      <g onClick={ this.onHandle() } id="Soyosan" key="Soyosan_Station" data="Soyosan">
        <text transform="translate(695.1903 210.837)" className="st0 st1">소요산</text>
      </g>
      <g onClick={ this.onHandle() } id="Tapseok" key="Tapseok_Station" data="Tapseok">
        <text transform="translate(642.1503 210.5558)" className="st0 st1">탑석</text>
      </g>
      <g onClick={ this.onHandle() } id="Songsan" key="Songsan_Station" data="Songsan">
        <text transform="translate(654.5829 198.1241)" className="st0 st1">송산</text>
      </g>
      <g onClick={ this.onHandle() } id="eoryong" key="eoryong_Station" data="eoryong">
        <text transform="translate(667.0145 185.6925)" className="st0 st1">어룡</text>
      </g>
      <g onClick={ this.onHandle() } id="gonjae" key="gonjae_Station" data="gonjae">
        <text transform="translate(679.4452 173.2609)" className="st0 st1">곤제</text>
      </g>
      <g onClick={ this.onHandle() } id="hyoja" key="hyoja_Station" data="hyoja">
        <text transform="translate(691.8778 160.8282)" className="st0 st1">효자</text>
      </g>
      <g onClick={ this.onHandle() } id="GyeonggiProvincialGovernmentNorthernOffice" key="GyeonggiProvincialGovernmentNorthernOffice_Station" data="GyeonggiProvincialGovernmentNorthernOffice">
        <text transform="translate(704.3094 148.3966)" className="st0 st1">경기도청</text>
        <text transform="translate(704.3094 156.2966)" className="st0 st1">북부청사</text>
      </g>
      <g onClick={ this.onHandle() } id="saemal" key="saemal_Station" data="saemal">
        <text transform="translate(716.7352 135.965)" className="st0 st1">새말</text>
      </g>
      <g onClick={ this.onHandle() } id="Dongo" key="Dongo_Station" data="Dongo">
        <text transform="translate(729.1669 123.5392)" className="st0 st1">동오</text>
      </g>
      <g onClick={ this.onHandle() } id="UijeongbuJungang" key="UijeongbuJungang_Station" data="UijeongbuJungang">
        <text transform="translate(741.5995 111.1075)" className="st0 st1">의정부중앙</text>
      </g>
      <g onClick={ this.onHandle() } id="Heungseon" key="Heungseon_Station" data="Heungseon">
        <text transform="translate(754.0321 98.6749)" className="st0 st1">흥선</text>
      </g>
      <g onClick={ this.onHandle() } id="UijeongbuCityHall" key="UijeongbuCityHall_Station" data="UijeongbuCityHall">
        <text transform="translate(763.5253 89.8507)" className="st0 st1">의정부시청</text>
      </g>
      <g onClick={ this.onHandle() } id="Yatap" key="Yatap_Station" data="Yatap">
        <text transform="translate(1094.1073 1077.0128)" className="st0 st1">야탑</text>
      </g>
      <g onClick={ this.onHandle() } id="Imae" key="Imae_Station" data="Imae">
        <text transform="translate(1082.1708 1088.9445)" className="st0 st1">이매</text>
      </g>
      <g onClick={ this.onHandle() } id="Dunjeon" key="Dunjeon_Station" data="Dunjeon">
        <text transform="translate(1121.7157 1106.173)" className="st0 st1">둔전</text>
      </g>
      <g onClick={ this.onHandle() } id="Bopyeong" key="Bopyeong_Station" data="Bopyeong">
        <text transform="translate(1109.5399 1118.3478)" className="st0 st1">보평</text>
      </g>
      <g onClick={ this.onHandle() } id="Gojin" key="Gojin_Station" data="Gojin">
        <text transform="translate(1097.371 1130.5167)" className="st0 st1">고진</text>
      </g>
      <g onClick={ this.onHandle() } id="Gimnyangjang" key="Gimnyangjang_Station" data="Gimnyangjang">
        <text transform="translate(1073.0262 1154.8605)" className="st0 st1">김량장</text>
      </g>
      <g onClick={ this.onHandle() } id="StadiumSongdamCollege" key="StadiumSongdamCollege_Station" data="StadiumSongdamCollege">
        <text transform="translate(1085.1962 1142.6925)" className="st0 st1">운동장 · 송담대</text>
      </g>
      <g onClick={ this.onHandle() } id="Seohyeon" key="Seohyeon_Station" data="Seohyeon">
        <text transform="translate(1069.7206 1101.4825)" className="st0 st1">서현</text>
      </g>
      <g onClick={ this.onHandle() } id="Migeum" key="Migeum_Station" data="Migeum">
        <text transform="translate(1033.5135 1137.5939)" className="st0 st1">미금</text>
      </g>
      <g onClick={ this.onHandle() } id="JeondaeEverland" key="JeondaeEverland_Station" data="JeondaeEverland">
        <text transform="translate(1133.8778 1094.0109)" className="st0 st1">전대 · 에버랜드</text>
      </g>
      <g onClick={ this.onHandle() } id="Yeouinaru" key="Yeouinaru_Station" data="Yeouinaru">
        <text transform="translate(535.2054 770.4552)" className="st0 st1">여의나루</text>
      </g>
      <g onClick={ this.onHandle() } id="Mapo" key="Mapo_Station" data="Mapo">
        <text transform="translate(577.6615 727.9991)" className="st0 st1">마포</text>
      </g>
      <g onClick={ this.onHandle() } id="Haengdang" key="Haengdang_Station" data="Haengdang">
        <text transform="translate(827.621 663.5157)" className="st0 st1">행당</text>
      </g>
      <g onClick={ this.onHandle() } id="Jeungsan" key="Jeungsan_Station" data="Jeungsan">
        <text transform="translate(479.2523 571.1251)" className="st0 st1">증산</text>
      </g>
      <g onClick={ this.onHandle() } id="Yeokchon" key="Yeokchon_Station" data="Yeokchon">
        <text transform="translate(513.5922 481.5597)" className="st0 st1">역촌</text>
      </g>
      <g onClick={ this.onHandle() } id="Sangdo" key="Sangdo_Station" data="Sangdo">
        <text transform="translate(582.7338 865.4386)" className="st0 st1">상도</text>
      </g>
      <g onClick={ this.onHandle() } id="SoongsilUniv" key="SoongsilUniv_Station" data="SoongsilUniv">
        <text transform="translate(606.9974 889.4269)" className="st0 st1">숭실대입구</text>
      </g>
      <g onClick={ this.onHandle() } id="Namseong" key="Namseong_Station" data="Namseong">
        <text transform="translate(650.2245 932.6525)" className="st0 st1">남성</text>
      </g>
      <g onClick={ this.onHandle() } id="Saetgang" key="Saetgang_Station" data="Saetgang">
        <text transform="translate(529.5365 810.9698)" className="st0 st1">샛강</text>
      </g>
      <g onClick={ this.onHandle() } id="NationalAssembly" key="NationalAssembly_Station" data="NationalAssembly">
        <text transform="translate(491.3148 772.7482)" className="st0 st1">국회의사당</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinmokdong" key="Sinmokdong_Station" data="Sinmokdong">
        <text transform="translate(391.8402 711.3087)" className="st0 st1">신목동</text>
      </g>
      <g onClick={ this.onHandle() } id="Yeomchang" key="Yeomchang_Station" data="Yeomchang">
        <text transform="translate(374.5355 694.2609)" className="st0 st1">염창</text>
      </g>
      <g onClick={ this.onHandle() } id="Deungchon" key="Deungchon_Station" data="Deungchon">
        <text transform="translate(354.1381 673.8556)" className="st0 st1">등촌</text>
      </g>
      <g onClick={ this.onHandle() } id="Jeungmi" key="Jeungmi_Station" data="Jeungmi">
        <text transform="translate(333.8324 653.546)" className="st0 st1">증미</text>
      </g>
      <g onClick={ this.onHandle() } id="Gayang" key="Gayang_Station" data="Gayang">
        <text transform="translate(316.3783 636.0909)" className="st0 st1">가양</text>
      </g>
      <g onClick={ this.onHandle() } id="Soraepogu" key="Soraepogu_Station" data="Soraepogu">
        <text transform="translate(324.9467 1085.6925)" className="st0 st1">소래포구</text>
      </g>
      <g onClick={ this.onHandle() } id="Wolgot" key="Wolgot_Station" data="Wolgot">
        <text transform="translate(368.5492 1088.9562)" className="st0 st1">월곶</text>
      </g>
      <g onClick={ this.onHandle() } id="Dalwol" key="Dalwol_Station" data="Dalwol">
        <text transform="translate(391.1771 1111.0646)" className="st0 st1">달월</text>
      </g>
      <g onClick={ this.onHandle() } id="Songpa" key="Songpa_Station" data="Songpa">
        <text transform="translate(1067.3837 879.4728)" className="st0 st1">송파</text>
      </g>
      <g onClick={ this.onHandle() } id="Mangwon" key="Mangwon_Station" data="Mangwon">
        <text transform="translate(466.764 670.1866)" className="st0 st1">망원</text>
      </g>
      <g onClick={ this.onHandle() } id="MapoguOffice" key="MapoguOffice_Station" data="MapoguOffice">
        <text transform="translate(442.4828 642.8976)" className="st0 st1">마포구청</text>
      </g>
      <g onClick={ this.onHandle() } id="Muakjae" key="Muakjae_Station" data="Muakjae">
        <text transform="translate(585.0648 567.8185)" className="st0 st1">무악재</text>
      </g>
      <g onClick={ this.onHandle() } id="Hongje" key="Hongje_Station" data="Hongje">
        <text transform="translate(563.3627 545.9542)" className="st0 st1">홍제</text>
      </g>
      <g onClick={ this.onHandle() } id="Dongnimmun" key="Dongnimmun_Station" data="Dongnimmun">
        <text transform="translate(615.5453 598.3068)" className="st0 st1">독립문</text>
      </g>
      <g onClick={ this.onHandle() } id="Aeogae" key="Aeogae_Station" data="Aeogae">
        <text transform="translate(618.6469 685.504)" className="st0 st1">애오개</text>
      </g>
      <g onClick={ this.onHandle() } id="WorldCupStadium" key="WorldCupStadium_Station" data="WorldCupStadium">
        <text transform="translate(434.9164 615.4552)" className="st0 st1">월드컵경기장</text>
      </g>
      <g onClick={ this.onHandle() } id="Sunae" key="Sunae_Station" data="Sunae">
        <text transform="translate(1057.1874 1113.9142)" className="st0 st1">수내</text>
      </g>
      <g onClick={ this.onHandle() } id="Dorimcheon" key="Dorimcheon_Station" data="Dorimcheon">
        <text transform="translate(374.4613 818.5802)" className="st0 st1">도림천</text>
      </g>
      <g onClick={ this.onHandle() } id="Gangmae" key="Gangmae_Station" data="Gangmae">
        <text transform="translate(373.265 509.6857)" className="st0 st1">강매</text>
      </g>
      <g onClick={ this.onHandle() } id="Susaek" key="Susaek_Station" data="Susaek">
        <text transform="translate(433.3324 569.7531)" className="st0 st1">수색</text>
      </g>
      <g onClick={ this.onHandle() } id="Hannam" key="Hannam_Station" data="Hannam">
        <text transform="translate(761.0575 761.4923)" className="st0 st1">한남</text>
      </g>
      <g onClick={ this.onHandle() } id="Eungbong" key="Eungbong_Station" data="Eungbong">
        <text transform="translate(836.1512 686.4015)" className="st0 st1">응봉</text>
      </g>
      <g onClick={ this.onHandle() } id="Sillim" key="Sillim_Station" data="Sillim">
        <text transform="translate(528.5287 938.8146)" className="st0 st1">신림</text>
      </g>
      <g onClick={ this.onHandle() } id="Dongam" key="Dongam_Station" data="Dongam">
        <text transform="translate(66.7377 896.8781)" className="st0 st1">동암</text>
      </g>
      <g onClick={ this.onHandle() } id="Singeumho" key="Singeumho_Station" data="Singeumho">
        <text transform="translate(798.2098 664.004)" className="st0 st1">신금호</text>
      </g>
      <g onClick={ this.onHandle() } id="Majang" key="Majang_Station" data="Majang">
        <text transform="translate(866.2372 624.8868)" className="st0 st1">마장</text>
      </g>
      <g onClick={ this.onHandle() } id="AirportMarket" key="AirportMarket_Station" data="AirportMarket">
        <text transform="translate(174.6918 628.8947)" className="st0 st1">공항시장</text>
      </g>
      <g onClick={ this.onHandle() } id="Seodaemun" key="Seodaemun_Station" data="Seodaemun">
        <text transform="translate(617.8002 624.0538)" className="st0 st1">서대문</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinimun" key="Sinimun_Station" data="Sinimun">
        <text transform="translate(915.4833 495.5314)" className="st0 st1">신이문</text>
      </g>
      <g onClick={ this.onHandle() } id="Miasamgeori" key="Miasamgeori_Station" data="Miasamgeori">
        <text transform="translate(838.6932 459.8585)" className="st0 st1">미아사거리</text>
      </g>
      <g onClick={ this.onHandle() } id="Macheon" key="Macheon_Station" data="Macheon">
        <text transform="translate(1200.8905 889.0197)" className="st0 st1">마천</text>
      </g>
      <g onClick={ this.onHandle() } id="Chunui" key="Chunui_Station" data="Chunui">
        <text transform="translate(189.9613 849.1359)" className="st0 st1">춘의</text>
      </g>
      <g onClick={ this.onHandle() } id="Hwaseo" key="Hwaseo_Station" data="Hwaseo">
        <text transform="translate(786.6737 1118.2286)" className="st0 st1">화서</text>
      </g>
      <g onClick={ this.onHandle() } id="Gajwa" key="Gajwa_Station" data="Gajwa">
        <text transform="translate(474.8744 611.84)" className="st0 st1">가좌</text>
      </g>
      <g onClick={ this.onHandle() } id="SogangUniv" key="SogangUniv_Station" data="SogangUniv">
        <text transform="translate(544.4047 681.3712)" className="st0 st1">서강대</text>
      </g>
      <g onClick={ this.onHandle() } id="TtukseomPark" key="TtukseomPark_Station" data="TtukseomPark">
        <text transform="translate(940.2401 761.049)" className="st0 st1">뚝섬유원지</text>
      </g>
      <g onClick={ this.onHandle() } id="ChildrensGrandPark" key="ChildrensGrandPark_Station" data="ChildrensGrandPark">
        <text transform="translate(965.2235 700.8429)" className="st0 st1">어린이대공원</text>
      </g>
      <g onClick={ this.onHandle() } id="Junggok" key="Junggok_Station" data="Junggok">
        <text transform="translate(992.455 635.2316)" className="st0 st1">중곡</text>
      </g>
      <g onClick={ this.onHandle() } id="Galmae" key="Galmae_Station" data="Galmae">
        <text transform="translate(1067.0897 396.6526)" className="st0 st1">갈매</text>
      </g>
      <g onClick={ this.onHandle() } id="Toegyewon" key="Toegyewon_Station" data="Toegyewon">
        <text transform="translate(1079.5028 366.3839)" className="st0 st1">퇴계원</text>
      </g>
      <g onClick={ this.onHandle() } id="Byeollae" key="Byeollae_Station" data="Byeollae">
        <text transform="translate(1073.3524 381.5157)" className="st0 st1">별내</text>
      </g>
      <g onClick={ this.onHandle() } id="Wolgok" key="Wolgok_Station" data="Wolgok">
        <text transform="translate(842.6083 495.6193)" className="st0 st1">월곡</text>
      </g>
      <g onClick={ this.onHandle() } id="KoreaUniv" key="KoreaUniv_Station" data="KoreaUniv">
        <text transform="translate(818.6522 539.2159)" className="st0 st1">고려대</text>
      </g>
      <g onClick={ this.onHandle() } id="Beotigogae" key="Beotigogae_Station" data="Beotigogae">
        <text transform="translate(730.1385 696.1583)" className="st0 st1">버티고개</text>
      </g>
      <g onClick={ this.onHandle() } id="Mongchontoseong" key="Mongchontoseong_Station" data="Mongchontoseong">
        <text transform="translate(1072.6698 811.6027)" className="st0 st1">몽촌토성</text>
      </g>
      <g onClick={ this.onHandle() } id="GangdongguOffice" key="GangdongguOffice_Station" data="GangdongguOffice">
        <text transform="translate(1093.1132 765.2765)" className="st0 st1">강동구청</text>
      </g>
      <g onClick={ this.onHandle() } id="Amsa" key="Amsa_Station" data="Amsa">
        <text transform="translate(1122.7469 693.7228)" className="st0 st1">암사</text>
      </g>
      <g onClick={ this.onHandle() } id="Hangangjin" key="Hangangjin_Station" data="Hangangjin">
        <text transform="translate(721.8885 729.4581)" className="st0 st1">한강진</text>
      </g>
      <g onClick={ this.onHandle() } id="Gildong" key="Gildong_Station" data="Gildong">
        <text transform="translate(1156.3417 738.5021)" className="st0 st1">길동</text>
      </g>
      <g onClick={ this.onHandle() } id="Dunchondong" key="Dunchondong_Station" data="Dunchondong">
        <text transform="translate(1141.3798 774.8517)" className="st0 st1">둔촌동</text>
      </g>
      <g onClick={ this.onHandle() } id="OlympicPark" key="OlympicPark_Station" data="OlympicPark">
        <text transform="translate(1124.6776 815.548)" className="st0 st1">올림픽공원</text>
      </g>
      <g onClick={ this.onHandle() } id="Bangi" key="Bangi_Station" data="Bangi">
        <text transform="translate(1112.0458 846.3185)" className="st0 st1">방이</text>
      </g>
      <g onClick={ this.onHandle() } id="Gubeundari" key="Gubeundari_Station" data="Gubeundari">
        <text transform="translate(1168.2177 709.8361)" className="st0 st1">굽은다리</text>
      </g>
      <g onClick={ this.onHandle() } id="Myeongil" key="Myeongil_Station" data="Myeongil">
        <text transform="translate(1176.8026 689.1134)" className="st0 st1">명일</text>
      </g>
      <g onClick={ this.onHandle() } id="Banghwa" key="Banghwa_Station" data="Banghwa">
        <text transform="translate(183.7484 582.7433)" className="st0 st1">방화</text>
      </g>
      <g onClick={ this.onHandle() } id="Gaehwasan" key="Gaehwasan_Station" data="Gaehwasan">
        <text transform="translate(174.4301 605.2452)" className="st0 st1">개화산</text>
      </g>
      <g onClick={ this.onHandle() } id="Suyu" key="Suyu_Station" data="Suyu">
        <text transform="translate(818.7841 363.9923)" className="st0 st1">수유</text>
      </g>
      <g onClick={ this.onHandle() } id="Daehwa" key="Daehwa_Station" data="Daehwa">
        <text transform="translate(333.683 375.8468)" className="st0 st1">대화</text>
      </g>
      <g onClick={ this.onHandle() } id="Juyeop" key="Juyeop_Station" data="Juyeop">
        <text transform="translate(341.3861 357.6085)" className="st0 st1">주엽</text>
      </g>
      <g onClick={ this.onHandle() } id="Jeongbalsan" key="Jeongbalsan_Station" data="Jeongbalsan">
        <text transform="translate(343.266 339.3722)" className="st0 st1">정발산</text>
      </g>
      <g onClick={ this.onHandle() } id="Madu" key="Madu_Station" data="Madu">
        <text transform="translate(376.183 337.0363)" className="st0 st1">마두</text>
      </g>
      <g onClick={ this.onHandle() } id="Goksan" key="Goksan_Station" data="Goksan">
        <text transform="translate(435.4496 315.0968)" className="st0 st1">곡산</text>
      </g>
      <g onClick={ this.onHandle() } id="Neunggok" key="Neunggok_Station" data="Neunggok">
        <text transform="translate(410.0219 377.4327)" className="st0 st1">능곡</text>
      </g>
      <g onClick={ this.onHandle() } id="Haengsin" key="Haengsin_Station" data="Haengsin">
        <text transform="translate(391.9594 421.0343)" className="st0 st1">행신</text>
      </g>
      <g onClick={ this.onHandle() } id="Hwajeon" key="Hwajeon_Station" data="Hwajeon">
        <text transform="translate(372.6625 467.5558)" className="st0 st1">화전</text>
      </g>
      <g onClick={ this.onHandle() } id="Jangam" key="Jangam_Station" data="Jangam">
        <text transform="translate(901.3544 130.2345)" className="st0 st1">장암</text>
      </g>
      <g onClick={ this.onHandle() } id="Guri" key="Guri_Station" data="Guri">
        <text transform="translate(1061.6542 523.5656)" className="st0 st1">구리</text>
      </g>
      <g onClick={ this.onHandle() } id="Donong" key="Donong_Station" data="Donong">
        <text transform="translate(1067.6346 537.9689)" className="st0 st1">도농</text>
      </g>
      <g onClick={ this.onHandle() } id="Yangjeong" key="Yangjeong_Station" data="Yangjeong">
        <text transform="translate(1073.6024 552.3741)" className="st0 st1">양정</text>
      </g>
      <g onClick={ this.onHandle() } id="Deokso" key="Deokso_Station" data="Deokso">
        <text transform="translate(1079.5712 566.7794)" className="st0 st1">덕소</text>
      </g>
      <g onClick={ this.onHandle() } id="Dosim" key="Dosim_Station" data="Dosim">
        <text transform="translate(1085.8661 581.1837)" className="st0 st1">도심</text>
      </g>
      <g onClick={ this.onHandle() } id="Yangwon" key="Yangwon_Station" data="Yangwon">
        <text transform="translate(1055.704 509.1593)" className="st0 st1">양원</text>
      </g>
      <g onClick={ this.onHandle() } id="Chuncheon" key="Chuncheon_Station" data="Chuncheon">
        <text transform="translate(992.1288 133.298)" className="st0 st1">춘천</text>
      </g>
      <g onClick={ this.onHandle() } id="Namchuncheon" key="Namchuncheon_Station" data="Namchuncheon">
        <text transform="translate(998.5604 148.8224)" className="st0 st1">남춘천</text>
      </g>
      <g onClick={ this.onHandle() } id="Gimyujeong" key="Gimyujeong_Station" data="Gimyujeong">
        <text transform="translate(1004.994 164.3488)" className="st0 st1">김유정</text>
      </g>
      <g onClick={ this.onHandle() } id="Gangchon" key="Gangchon_Station" data="Gangchon">
        <text transform="translate(1011.4257 179.8741)" className="st0 st1">강촌</text>
      </g>
      <g onClick={ this.onHandle() } id="Baegyangri" key="Baegyangri_Station" data="Baegyangri">
        <text transform="translate(1017.8563 197.548)" className="st0 st1">백양리</text>
      </g>
      <g onClick={ this.onHandle() } id="Gulbongsan" key="Gulbongsan_Station" data="Gulbongsan">
        <text transform="translate(1024.2889 210.9259)" className="st0 st1">굴봉산</text>
      </g>
      <g onClick={ this.onHandle() } id="Gapyeong" key="Gapyeong_Station" data="Gapyeong">
        <text transform="translate(1030.7206 226.4523)" className="st0 st1">가평</text>
      </g>
      <g onClick={ this.onHandle() } id="Sangcheon" key="Sangcheon_Station" data="Sangcheon">
        <text transform="translate(1037.1532 241.9777)" className="st0 st1">상천</text>
      </g>
      <g onClick={ this.onHandle() } id="Cheongpyeong" key="Cheongpyeong_Station" data="Cheongpyeong">
        <text transform="translate(1043.5848 257.4972)" className="st0 st1">청평</text>
      </g>
      <g onClick={ this.onHandle() } id="Daeseongri" key="Daeseongri_Station" data="Daeseongri">
        <text transform="translate(1050.0165 273.0227)" className="st0 st1">대성리</text>
      </g>
      <g onClick={ this.onHandle() } id="Maseok" key="Maseok_Station" data="Maseok">
        <text transform="translate(1056.4423 288.549)" className="st0 st1">마석</text>
      </g>
      <g onClick={ this.onHandle() } id="Cheonmasan" key="Cheonmasan_Station" data="Cheonmasan">
        <text transform="translate(1062.8759 304.0753)" className="st0 st1">천마산</text>
      </g>
      <g onClick={ this.onHandle() } id="PyeongnaeHopyeong" key="PyeongnaeHopyeong_Station" data="PyeongnaeHopyeong">
        <text transform="translate(1069.3075 319.5997)" className="st0 st1">평내호평</text>
      </g>
      <g onClick={ this.onHandle() } id="Geumgok" key="Geumgok_Station" data="Geumgok">
        <text transform="translate(1075.7323 335.1202)" className="st0 st1">금곡</text>
      </g>
      <g onClick={ this.onHandle() } id="Wolgye" key="Wolgye_Station" data="Wolgye">
        <text transform="translate(897.5272 382.2102)" className="st0 st1">월계</text>
      </g>
      <g onClick={ this.onHandle() } id="Nokcheon" key="Nokcheon_Station" data="Nokcheon">
        <text transform="translate(879.3817 338.4532)" className="st0 st1">녹천</text>
      </g>
      <g onClick={ this.onHandle() } id="Danggogae" key="Danggogae_Station" data="Danggogae">
        <text transform="translate(980.4276 238.5284)" className="st0 st1">당고개</text>
      </g>
      <g onClick={ this.onHandle() } id="Kkachiul" key="Kkachiul_Station" data="Kkachiul">
        <text transform="translate(205.3226 883.4913)" className="st0 st1">까치울</text>
      </g>
      <g onClick={ this.onHandle() } id="BucheonStadium" key="BucheonStadium_Station" data="BucheonStadium">
        <text transform="translate(198.8842 865.8341)" className="st0 st1">부천종합운동장</text>
      </g>
      <g onClick={ this.onHandle() } id="Doksan" key="Doksan_Station" data="Doksan">
        <text transform="translate(417.8304 999.2355)" className="st0 st1">독산</text>
      </g>
      <g onClick={ this.onHandle() } id="Incheon" key="Incheon_Station" data="Incheon">
        <text transform="translate(37.9779 782.6886)" className="st0 st1">인천</text>
      </g>
      <g onClick={ this.onHandle() } id="Dongincheon" key="Dongincheon_Station" data="Dongincheon">
        <text transform="translate(44.5912 798.7091)" className="st0 st1">동인천</text>
      </g>
      <g onClick={ this.onHandle() } id="Dowon" key="Dowon_Station" data="Dowon">
        <text transform="translate(51.2045 814.7306)" className="st0 st1">도원</text>
      </g>
      <g onClick={ this.onHandle() } id="Jemulpo" key="Jemulpo_Station" data="Jemulpo">
        <text transform="translate(57.8246 830.7511)" className="st0 st1">제물포</text>
      </g>
      <g onClick={ this.onHandle() } id="Dohwa" key="Dohwa_Station" data="Dohwa">
        <text transform="translate(64.4379 846.7716)" className="st0 st1">도화</text>
      </g>
      <g onClick={ this.onHandle() } id="Juan" key="Juan_Station" data="Juan">
        <text transform="translate(71.0521 862.7921)" className="st0 st1">주안</text>
      </g>
      <g onClick={ this.onHandle() } id="Ganseok" key="Ganseok_Station" data="Ganseok">
        <text transform="translate(77.6722 878.8126)" className="st0 st1">간석</text>
      </g>
      <g onClick={ this.onHandle() } id="Galsan" key="Galsan_Station" data="Galsan">
        <text transform="translate(88.7386 817.3038)" className="st0 st1">갈산</text>
      </g>
      <g onClick={ this.onHandle() } id="Dongsu" key="Dongsu_Station" data="Dongsu">
        <text transform="translate(132.347 923.4464)" className="st0 st1">동수</text>
      </g>
      <g onClick={ this.onHandle() } id="Bupyeongsamgeori" key="Bupyeongsamgeori_Station" data="Bupyeongsamgeori">
        <text transform="translate(138.7357 938.8663)" className="st0 st1">부평삼거리</text>
      </g>
      <g onClick={ this.onHandle() } id="Ganseogogeori" key="Ganseogogeori_Station" data="Ganseogogeori">
        <text transform="translate(146.6517 957.9816)" className="st0 st1">간석오거리</text>
      </g>
      <g onClick={ this.onHandle() } id="IncheonCityHall" key="IncheonCityHall_Station" data="IncheonCityHall">
        <text transform="translate(154.5687 977.0958)" className="st0 st1">인천시청</text>
      </g>
      <g onClick={ this.onHandle() } id="ArtsCenter" key="ArtsCenter_Station" data="ArtsCenter">
        <text transform="translate(162.4847 996.2111)" className="st0 st1">예술회관</text>
      </g>
      <g onClick={ this.onHandle() } id="IncheonBusTerminal" key="IncheonBusTerminal_Station" data="IncheonBusTerminal">
        <text transform="translate(170.4008 1015.3243)" className="st0 st1">인천터미널</text>
      </g>
      <g onClick={ this.onHandle() } id="MunhakSportsComplex" key="MunhakSportsComplex_Station" data="MunhakSportsComplex">
        <text transform="translate(178.3168 1034.4386)" className="st0 st1">문학경기장</text>
      </g>
      <g onClick={ this.onHandle() } id="Seonhak" key="Seonhak_Station" data="Seonhak">
        <text transform="translate(186.2338 1053.5529)" className="st0 st1">선학</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinyeonsu" key="Sinyeonsu_Station" data="Sinyeonsu">
        <text transform="translate(194.1508 1072.6681)" className="st0 st1">신연수</text>
      </g>
      <g onClick={ this.onHandle() } id="Dongchun" key="Dongchun_Station" data="Dongchun">
        <text transform="translate(210.057 1111.0656)" className="st0 st1">동춘</text>
      </g>
      <g onClick={ this.onHandle() } id="Dongmak" key="Dongmak_Station" data="Dongmak">
        <text transform="translate(218.0492 1130.3556)" className="st0 st1">동막</text>
      </g>
      <g onClick={ this.onHandle() } id="BupyeongMarket" key="BupyeongMarket_Station" data="BupyeongMarket">
        <text transform="translate(112.0804 873.6632)" className="st0 st1">부평시장</text>
      </g>
      <g onClick={ this.onHandle() } id="Balsan" key="Balsan_Station" data="Balsan">
        <text transform="translate(242.2865 660.9308)" className="st0 st1">발산</text>
      </g>
      <g onClick={ this.onHandle() } id="Ujangsan" key="Ujangsan_Station" data="Ujangsan">
        <text transform="translate(254.9261 691.4445)" className="st0 st1">우장산</text>
      </g>
      <g onClick={ this.onHandle() } id="Hwagok" key="Hwagok_Station" data="Hwagok">
        <text transform="translate(266.0736 718.3615)" className="st0 st1">화곡</text>
      </g>
      <g onClick={ this.onHandle() } id="NambuBusTerminal" key="NambuBusTerminal_Station" data="NambuBusTerminal">
        <text transform="translate(786.8661 932.298)" className="st0 st1">남부터미널</text>
      </g>
      <g onClick={ this.onHandle() } id="Hanti" key="Hanti_Station" data="Hanti">
        <text transform="translate(895.3778 890.8243)" className="st0 st1">한티</text>
      </g>
      <g onClick={ this.onHandle() } id="Seonjeongneung" key="Seonjeongneung_Station" data="Seonjeongneung">
        <text transform="translate(872.1932 834.8585)" className="st0 st1">선정릉</text>
      </g>
      <g onClick={ this.onHandle() } id="Nokbeon" key="Nokbeon_Station" data="Nokbeon">
        <text transform="translate(543.8842 500.1115)" className="st0 st1">녹번</text>
      </g>
      <g onClick={ this.onHandle() } id="Junghwa" key="Junghwa_Station" data="Junghwa">
        <text transform="translate(977.8798 495.0753)" className="st0 st1">중화</text>
      </g>
      <g onClick={ this.onHandle() } id="Meokgol" key="Meokgol_Station" data="Meokgol">
        <text transform="translate(970.5018 465.1271)" className="st0 st1">먹골</text>
      </g>
      <g onClick={ this.onHandle() } id="Hagye" key="Hagye_Station" data="Hagye">
        <text transform="translate(947.0526 370.0061)" className="st0 st1">하계</text>
      </g>
      <g onClick={ this.onHandle() } id="Junggye" key="Junggye_Station" data="Junggye">
        <text transform="translate(938.1649 333.9563)" className="st0 st1">중계</text>
      </g>
      <g onClick={ this.onHandle() } id="Madeul" key="Madeul_Station" data="Madeul">
        <text transform="translate(919.9598 260.0841)" className="st0 st1">마들</text>
      </g>
      <g onClick={ this.onHandle() } id="Suraksan" key="Suraksan_Station" data="Suraksan">
        <text transform="translate(908.7499 214.6036)" className="st0 st1">수락산</text>
      </g>
      <g onClick={ this.onHandle() } id="Gongneung" key="Gongneung_Station" data="Gongneung">
        <text transform="translate(956.6796 409.0548)" className="st0 st1">공릉</text>
      </g>
      <g onClick={ this.onHandle() } id="Jamsillaru" key="Jamsillaru_Station" data="Jamsillaru">
        <text transform="translate(1036.8446 802.9484)" className="st0 st1">잠실나루</text>
      </g>
      <g onClick={ this.onHandle() } id="Gangbyeon" key="Gangbyeon_Station" data="Gangbyeon">
        <text transform="translate(1014.8983 749.965)" className="st0 st1">강변</text>
      </g>
      <g onClick={ this.onHandle() } id="Yongdap" key="Yongdap_Station" data="Yongdap">
        <text transform="translate(892.496 644.8351)" className="st0 st1">용답</text>
      </g>
      <g onClick={ this.onHandle() } id="Sindap" key="Sindap_Station" data="Sindap">
        <text transform="translate(876.9335 610.0197)" className="st0 st1">신답</text>
      </g>
      <g onClick={ this.onHandle() } id="Sareung" key="Sareung_Station" data="Sareung">
        <text transform="translate(1081.9315 350.1526)" className="st0 st1">사릉</text>
      </g>
      <g onClick={ this.onHandle() } id="Mia" key="Mia_Station" data="Mia">
        <text transform="translate(822.2762 405.5099)" className="st0 st1">미아</text>
      </g>
      <g onClick={ this.onHandle() } id="SeokchonHansolHospital" key="SeokchonHansolHospital_Station" data="SeokchonHansolHospital">
        <text transform="translate(1051.368 857.7804)" className="st0 st1">석촌</text>
      </g>
      <g onClick={ this.onHandle() } id="NationalPoliceHospital" key="NationalPoliceHospital_Station" data="NationalPoliceHospital">
        <text transform="translate(1109.2186 895.3654)" className="st0 st1">경찰병원</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinyongsan" key="Sinyongsan_Station" data="Sinyongsan">
        <text transform="translate(637.4086 770.2814)" className="st0 st1">신용산</text>
      </g>
      <g onClick={ this.onHandle() } id="YangjaeCitizensForest" key="YangjaeCitizensForest_Station" data="YangjaeCitizensForest">
        <text transform="translate(863.3368 985.381)" className="st0 st1">양재시민의숲</text>
      </g>
      <g onClick={ this.onHandle() } id="Daecheong" key="Daecheong_Station" data="Daecheong">
        <text transform="translate(975.7118 905.424)" className="st0 st1">대청</text>
      </g>
      <g onClick={ this.onHandle() } id="Irwon" key="Irwon_Station" data="Irwon">
        <text transform="translate(989.0155 936.5255)" className="st0 st1">일원</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinjeongnegeori" key="Sinjeongnegeori_Station" data="Sinjeongnegeori">
        <text transform="translate(258.7894 801.7472)" className="st0 st1">신정네거리</text>
      </g>
      <g onClick={ this.onHandle() } id="Jakjeon" key="Jakjeon_Station" data="Jakjeon">
        <text transform="translate(77.0892 789.1583)" className="st0 st1">작전</text>
      </g>
      <g onClick={ this.onHandle() } id="Seoulforest" key="Seoulforest_Station" data="Seoulforest">
        <text transform="translate(845.7762 715.3741)" className="st0 st1">서울숲</text>
      </g>
      <g onClick={ this.onHandle() } id="Gwangmyeong" key="Gwangmyeong_Station" data="Gwangmyeong">
        <text transform="translate(412.7006 1069.9493)" className="st0 st1">광명</text>
      </g>
      <g onClick={ this.onHandle() } id="Seoksu" key="Seoksu_Station" data="Seoksu">
        <text transform="translate(458.2767 1096.8878)" className="st0 st1">석수</text>
      </g>
      <g onClick={ this.onHandle() } id="Apgujeongrodeo" key="Apgujeongrodeo_Station" data="Apgujeongrodeo">
        <text transform="translate(857.2919 774.5333)" className="st0 st1">압구정로데오</text>
      </g>
      <g onClick={ this.onHandle() } id="HongikUniv" key="HongikUniv_Station" data="HongikUniv">
        <text transform="translate(507.5287 671.1388)" className="st0 st1">홍대입구</text>
      </g>
      <g onClick={ this.onHandle() } id="Hapjeong" key="Hapjeong_Station" data="Hapjeong">
        <text transform="translate(489.9515 691.2228)" className="st0 st1">합정</text>
      </g>
      <g onClick={ this.onHandle() } id="Dangsan" key="Dangsan_Station" data="Dangsan">
        <text transform="translate(445.3617 735.4513)" className="st0 st1">당산</text>
      </g>
      <g onClick={ this.onHandle() } id="YeongdeungpoguOffice" key="YeongdeungpoguOffice_Station" data="YeongdeungpoguOffice">
        <text transform="translate(419.7943 777.0577)" className="st0 st1">영등포구청</text>
      </g>
      <g onClick={ this.onHandle() } id="Daerim" key="Daerim_Station" data="Daerim">
        <text transform="translate(422.1742 916.9064)" className="st0 st1">대림</text>
      </g>
      <g onClick={ this.onHandle() } id="GasanDigitalComplex" key="GasanDigitalComplex_Station" data="GasanDigitalComplex">
        <text transform="translate(396.7533 941.7755)" className="st0 st1">가산</text>
        <text transform="translate(396.7533 949.6755)" className="st0 st1">디지털단지</text>
      </g>
      <g onClick={ this.onHandle() } id="GeumcheonGuOffice" key="GeumcheonGuOffice_Station" data="GeumcheonGuOffice">
        <text transform="translate(438.0033 1045.7853)" className="st0 st1">금천구청</text>
      </g>
      <g onClick={ this.onHandle() } id="Guro" key="Guro_Station" data="Guro">
        <text transform="translate(377.4447 863.4972)" className="st0 st1">구로</text>
      </g>
      <g onClick={ this.onHandle() } id="Kkachisan" key="Kkachisan_Station" data="Kkachisan">
        <text transform="translate(284.4828 754.3507)" className="st0 st1">까치산</text>
      </g>
      <g onClick={ this.onHandle() } id="GimpoIntlAirport" key="GimpoIntlAirport_Station" data="GimpoIntlAirport">
        <text transform="translate(146.2113 650.7023)" className="st0 st1">김포공항</text>
      </g>
      <g onClick={ this.onHandle() } id="BupyeongguOffice" key="BupyeongguOffice_Station" data="BupyeongguOffice">
        <text transform="translate(90.1273 854.6261)" className="st0 st1">부평구청</text>
      </g>
      <g onClick={ this.onHandle() } id="Bupyeong" key="Bupyeong_Station" data="Bupyeong">
        <text transform="translate(120.389 895.672)" className="st0 st1">부평</text>
      </g>
      <g onClick={ this.onHandle() } id="Woninjae" key="Woninjae_Station" data="Woninjae">
        <text transform="translate(201.7982 1085.9435)" className="st0 st1">원인재</text>
      </g>
      <g onClick={ this.onHandle() } id="Gyeyang" key="Gyeyang_Station" data="Gyeyang">
        <text transform="translate(74.4701 582.379)" className="st0 st1">계양</text>
      </g>
      <g onClick={ this.onHandle() } id="Sindorim" key="Sindorim_Station" data="Sindorim">
        <text transform="translate(421.2543 842.3361)" className="st0 st1">신도림</text>
      </g>
      <g onClick={ this.onHandle() } id="Sadang" key="Sadang_Station" data="Sadang">
        <text transform="translate(689.5155 959.9845)" className="st0 st1">사당</text>
      </g>
      <g onClick={ this.onHandle() } id="SeoulNatlUnivofEducation" key="SeoulNatlUnivofEducation_Station" data="SeoulNatlUnivofEducation">
        <text transform="translate(775.1727 904.0958)" className="st0 st1">교대</text>
      </g>
      <g onClick={ this.onHandle() } id="Gangnam" key="Gangnam_Station" data="Gangnam">
        <text transform="translate(821.6708 884.8361)" className="st0 st1">강남</text>
      </g>
      <g onClick={ this.onHandle() } id="Seolleung" key="Seolleung_Station" data="Seolleung">
        <text transform="translate(882.4579 859.6564)" className="st0 st1">선릉</text>
      </g>
      <g onClick={ this.onHandle() } id="KonkukUniv" key="KonkukUniv_Station" data="KonkukUniv">
        <text transform="translate(952.8798 729.632)" className="st0 st1">건대입구</text>
      </g>
      <g onClick={ this.onHandle() } id="Wangsimni" key="Wangsimni_Station" data="Wangsimni">
        <text transform="translate(843.3182 640.0626)" className="st0 st1">왕십리</text>
      </g>
      <g onClick={ this.onHandle() } id="Jamsil" key="Jamsil_Station" data="Jamsil">
        <text transform="translate(1042.3436 830.9122)" className="st0 st1">잠실</text>
      </g>
      <g onClick={ this.onHandle() } id="Euljiro3samga" key="Euljiro3samga_Station" data="Euljiro3samga">
        <text transform="translate(702.4716 640.0607)" className="st0 st1">을지로3가</text>
      </g>
      <g onClick={ this.onHandle() } id="Euljiro4saga" key="Euljiro4saga_Station" data="Euljiro4saga">
        <text transform="translate(723.7313 626.3898)" className="st0 st1">을지로4가</text>
      </g>
      <g onClick={ this.onHandle() } id="ExpressBusTerminal1" key="ExpressBusTerminal1_Station" data="ExpressBusTerminal1">
        <text transform="translate(689.5106 939.004)" className="st0 st1">총신대입구(이수)</text>
      </g>
      <g onClick={ this.onHandle() } id="ExpressBusTerminal" key="ExpressBusTerminal_Station" data="ExpressBusTerminal">
        <text transform="translate(717.3983 852.5519)" className="st0 st1">고속터미널</text>
      </g>
      <g onClick={ this.onHandle() } id="Dongjak" key="Dongjak_Station" data="Dongjak">
        <text transform="translate(662.7723 880.8282)" className="st0 st1">동작</text>
      </g>
      <g onClick={ this.onHandle() } id="Noryangjin" key="Noryangjin_Station" data="Noryangjin">
        <text transform="translate(545.6771 835.1212)" className="st0 st1">노량진</text>
      </g>
      <g onClick={ this.onHandle() } id="Yeouido" key="Yeouido_Station" data="Yeouido">
        <text transform="translate(510.4633 793.9689)" className="st0 st1">여의도</text>
      </g>
      <g onClick={ this.onHandle() } id="Singil" key="Singil_Station" data="Singil">
        <text transform="translate(482.7992 818.5216)" className="st0 st1">신길</text>
      </g>
      <g onClick={ this.onHandle() } id="GangnamguOffice" key="GangnamguOffice_Station" data="GangnamguOffice">
        <text transform="translate(865.1718 817.9318)" className="st0 st1">Gangnam-gu청</text>
      </g>
      <g onClick={ this.onHandle() } id="Gunja" key="Gunja_Station" data="Gunja">
        <text transform="translate(983.4764 655.9933)" className="st0 st1">군자</text>
      </g>
      <g onClick={ this.onHandle() } id="Sangbong" key="Sangbong_Station" data="Sangbong">
        <text transform="translate(999.286 521.0245)" className="st0 st1">상봉</text>
      </g>
      <g onClick={ this.onHandle() } id="Mangu" key="Mangu_Station" data="Mangu">
        <text transform="translate(1015.8241 515.7111)" className="st0 st1">망우</text>
      </g>
      <g onClick={ this.onHandle() } id="Hoegi" key="Hoegi_Station" data="Hoegi">
        <text transform="translate(897.8134 552.0031)" className="st0 st1">회기</text>
      </g>
      <g onClick={ this.onHandle() } id="Cheongnyangni" key="Cheongnyangni_Station" data="Cheongnyangni">
        <text transform="translate(869.4061 580.4113)" className="st0 st1">청량리</text>
      </g>
      <g onClick={ this.onHandle() } id="Sinseoldong" key="Sinseoldong_Station" data="Sinseoldong">
        <text transform="translate(803.6678 592.8263)" className="st0 st1">신설동</text>
      </g>
      <g onClick={ this.onHandle() } id="Dongdaemun" key="Dongdaemun_Station" data="Dongdaemun">
        <text transform="translate(758.2802 605.4318)" className="st0 st1">동대문</text>
      </g>
      <g onClick={ this.onHandle() } id="Changdong" key="Changdong_Station" data="Changdong">
        <text transform="translate(885.8397 308.1046)" className="st0 st1">창동</text>
      </g>
      <g onClick={ this.onHandle() } id="Taereung" key="Taereung_Station" data="Taereung">
        <text transform="translate(966.203 449.9728)" className="st0 st1">태릉입구</text>
      </g>
      <g onClick={ this.onHandle() } id="Seokgye" key="Seokgye_Station" data="Seokgye">
        <text transform="translate(921.9012 452.5704)" className="st0 st1">석계</text>
      </g>
      <g onClick={ this.onHandle() } id="KwangwoonUniv" key="KwangwoonUniv_Station" data="KwangwoonUniv">
        <text transform="translate(908.5262 423.3868)" className="st0 st1">광운대</text>
      </g>
      <g onClick={ this.onHandle() } id="Dongmyo" key="Dongmyo_Station" data="Dongmyo">
        <text transform="translate(784.3339 605.4318)" className="st0 st1">동묘앞</text>
      </g>
      <g onClick={ this.onHandle() } id="Sindang" key="Sindang_Station" data="Sindang">
        <text transform="translate(784.3339 625.9747)" className="st0 st1">신당</text>
      </g>
      <g onClick={ this.onHandle() } id="Cheonggu" key="Cheonggu_Station" data="Cheonggu">
        <text transform="translate(781.7313 647.2872)" className="st0 st1">청구</text>
      </g>
      <g onClick={ this.onHandle() } id="Yaksu" key="Yaksu_Station" data="Yaksu">
        <text transform="translate(774.5106 664.2013)" className="st0 st1">약수</text>
      </g>
      <g onClick={ this.onHandle() } id="Oksu" key="Oksu_Station" data="Oksu">
        <text transform="translate(795.6766 726.4679)" className="st0 st1">옥수</text>
      </g>
      <g onClick={ this.onHandle() } id="Yangjae" key="Yangjae_Station" data="Yangjae">
        <text transform="translate(845.8456 943.2208)" className="st0 st1">양재</text>
      </g>
      <g onClick={ this.onHandle() } id="Dogok" key="Dogok_Station" data="Dogok">
        <text transform="translate(901.7587 908.4806)" className="st0 st1">도곡</text>
      </g>
      <g onClick={ this.onHandle() } id="Suseo" key="Suseo_Station" data="Suseo">
        <text transform="translate(1039.2665 932.7189)" className="st0 st1">수서</text>
      </g>
      <g onClick={ this.onHandle() } id="Bokjeong" key="Bokjeong_Station" data="Bokjeong">
        <text transform="translate(1087.0145 989.5157)" className="st0 st1">복정</text>
      </g>
      <g onClick={ this.onHandle() } id="Moran" key="Moran_Station" data="Moran">
        <text transform="translate(1085.371 1060.672)" className="st0 st1">모란</text>
      </g>
      <g onClick={ this.onHandle() } id="Jeongja" key="Jeongja_Station" data="Jeongja">
        <text transform="translate(1044.1063 1129.1329)" className="st0 st1">정자</text>
      </g>
      <g onClick={ this.onHandle() } id="Seongsu" key="Seongsu_Station" data="Seongsu">
        <text transform="translate(897.8934 706.3527)" className="st0 st1">성수</text>
      </g>
      <g onClick={ this.onHandle() } id="GarakMarket" key="GarakMarket_Station" data="GarakMarket">
        <text transform="translate(1093.3593 911.4073)" className="st0 st1">가락시장</text>
      </g>
      <g onClick={ this.onHandle() } id="Cheonho" key="Cheonho_Station" data="Cheonho">
        <text transform="translate(1107.8856 729.3146)" className="st0 st1">천호</text>
      </g>
      <g onClick={ this.onHandle() } id="Gangdong" key="Gangdong_Station" data="Gangdong">
        <text transform="translate(1133.2821 739.298)" className="st0 st1">강동</text>
      </g>
      <g onClick={ this.onHandle() } id="Gongdeok" key="Gongdeok_Station" data="Gongdeok">
        <text transform="translate(595.9095 708.6525)" className="st0 st1">공덕</text>
      </g>
      <g onClick={ this.onHandle() } id="DigitalMediaCity" key="DigitalMediaCity_Station" data="DigitalMediaCity">
        <text transform="translate(457.4496 593.5626)" className="st0 st1">디지털미디어시티</text>
      </g>
      <g onClick={ this.onHandle() } id="Yeonsinnae" key="Yeonsinnae_Station" data="Yeonsinnae">
        <text transform="translate(514.2377 428.9103)" className="st0 st1">연신내</text>
      </g>
      <g onClick={ this.onHandle() } id="Daegok" key="Daegok_Station" data="Daegok">
        <text transform="translate(408.7748 323.2697)" className="st0 st1">대곡</text>
      </g>
      <g onClick={ this.onHandle() } id="Jongno3samga" key="Jongno3samga_Station" data="Jongno3samga">
        <text transform="translate(691.2723 601.7755)" className="st0 st1">종로3가</text>
      </g>
      <g onClick={ this.onHandle() } id="Chungmuro" key="Chungmuro_Station" data="Chungmuro">
        <text transform="translate(708.0341 655.9484)" className="st0 st1">충무로</text>
      </g>
      <g onClick={ this.onHandle() } id="SeoulStation" key="SeoulStation_Station" data="SeoulStation">
        <text transform="translate(664.4169 674.1368)" className="st0 st1">서울역</text>
      </g>
      <g onClick={ this.onHandle() } id="CityHall" key="CityHall_Station" data="CityHall">
        <text transform="translate(648.0682 647.9054)" className="st0 st1">시청</text>
      </g>
      <g onClick={ this.onHandle() } id="Chungjeongno" key="Chungjeongno_Station" data="Chungjeongno">
        <text transform="translate(620.0043 659.5314)" className="st0 st1">충정로</text>
      </g>
      <g onClick={ this.onHandle() } id="Ichon" key="Ichon_Station" data="Ichon">
        <text transform="translate(659.3075 809.0988)" className="st0 st1">이촌</text>
      </g>
      <g onClick={ this.onHandle() } id="Yongsan" key="Yongsan_Station" data="Yongsan">
        <text transform="translate(612.0531 756.0587)" className="st0 st1">용산</text>
      </g>
      <g onClick={ this.onHandle() } id="Samgakji" key="Samgakji_Station" data="Samgakji">
        <text transform="translate(656.2616 752.6447)" className="st0 st1">삼각지</text>
      </g>
      <g onClick={ this.onHandle() } id="Bulgwang" key="Bulgwang_Station" data="Bulgwang">
        <text transform="translate(531.309 463.6564)" className="st0 st1">불광</text>
      </g>
      <g onClick={ this.onHandle() } id="Nowon" key="Nowon_Station" data="Nowon">
        <text transform="translate(928.2401 292.4944)" className="st0 st1">노원</text>
      </g>
      <g onClick={ this.onHandle() } id="Dobongsan" key="Dobongsan_Station" data="Dobongsan">
        <text transform="translate(854.8466 176.0548)" className="st0 st1">도봉산</text>
      </g>
      <g onClick={ this.onHandle() } id="Hoeryong" key="Hoeryong_Station" data="Hoeryong">
        <text transform="translate(810.1034 76.1222)" className="st0 st1">회룡</text>
      </g>
      <g onClick={ this.onHandle() } id="Ogeum" key="Ogeum_Station" data="Ogeum">
        <text transform="translate(1117.2557 873.9435)" className="st0 st1">오금</text>
      </g>
      <g onClick={ this.onHandle() } id="Onsu" key="Onsu_Station" data="Onsu">
        <text transform="translate(212.3871 907.1788)" className="st0 st1">온수</text>
      </g>
      <g onClick={ this.onHandle() } id="Oido" key="Oido_Station" data="Oido">
        <text transform="translate(408.5912 1146.0323)" className="st0 st1">오</text>
        <text transform="translate(408.5912 1153.9324)" className="st0 st1">이</text>
        <text transform="translate(408.5912 1161.8324)" className="st0 st1">도</text>
      </g>
      <g onClick={ this.onHandle() } id="Geumjeong" key="Geumjeong_Station" data="Geumjeong">
        <text transform="translate(669.5272 1113.2062)" className="st0 st1">금정</text>
      </g>
      <g onClick={ this.onHandle() } id="Suwon" key="Suwon_Station" data="Suwon">
        <text transform="translate(769.3934 1141.7072)" className="st0 st1">수원</text>
      </g>
      <g onClick={ this.onHandle() } id="Byeongjeom" key="Byeongjeom_Station" data="Byeongjeom">
        <text transform="translate(789.9432 1170.1271)" className="st0 st1">병점</text>
      </g>
      <g onClick={ this.onHandle() } id="Giheung" key="Giheung_Station" data="Giheung">
        <text transform="translate(924.7821 1129.089)" className="st0 st1">기</text>
        <text transform="translate(924.7821 1136.989)" className="st0 st1">흥</text>
      </g>
      <g onClick={ this.onHandle() } id="DongdaemunHistoryCulturePark" key="DongdaemunHistoryCulturePark_Station" data="DongdaemunHistoryCulturePark">
        <text transform="translate(755.0907 640.6827)" className="st0 st2">동대문</text>
        <text transform="translate(755.0907 646.0827)" className="st0 st2">역사문화</text>
        <text transform="translate(755.0907 651.5827)" className="st0 st2">공원</text>
      </g>
      <g onClick={ this.onHandle() } id="GuroDigitalComplex" key="GuroDigitalComplex_Station" data="GuroDigitalComplex">
        <text transform="translate(428.5599 936.3361)" className="st0 st1">구로</text>
        <text transform="translate(428.5599 944.2361)" className="st0 st1">디지털단지</text>
      </g>
    </g>
    <g onClick={ this.onHandle() } id="broad" key="broad_Station" data="broad">
      <g onClick={ this.onHandle() } id="GangnamGu" key="GangnamGu_Station" data="GangnamGu">
        <text transform="translate(946.6327 985.6007)" className="st3 st0 st4">강남구</text>
      </g>
      <g onClick={ this.onHandle() } id="SeochoGu" key="SeochoGu_Station" data="SeochoGu">
        <text transform="translate(758.9042 981.338)" className="st3 st0 st4">서초구</text>
      </g>
      <g onClick={ this.onHandle() } id="SongpaGu" key="SongpaGu_Station" data="SongpaGu">
        <text transform="translate(1066.1063 844.8058)" className="st3 st0 st4">송파구</text>
      </g>
      <g onClick={ this.onHandle() } id="GangdongGu" key="GangdongGu_Station" data="GangdongGu">
        <text transform="translate(1181.3065 746.673)" className="st3 st0 st4">강동구</text>
      </g>
      <g onClick={ this.onHandle() } id="GwanakGu" key="GwanakGu_Station" data="GwanakGu">
        <text transform="translate(562.64 994.1437)" className="st3 st0 st4">관악구</text>
      </g>
      <g onClick={ this.onHandle() } id="DongjakGu" key="DongjakGu_Station" data="DongjakGu">
        <text transform="translate(558.3783 900.2755)" className="st3 st0 st4">동작구</text>
      </g>
      <g onClick={ this.onHandle() } id="GeumcheonGu" key="GeumcheonGu_Station" data="GeumcheonGu">
        <text transform="translate(447.4486 985.6095)" className="st3 st0 st4">금천구</text>
      </g>
      <g onClick={ this.onHandle() } id="GuroGu" key="GuroGu_Station" data="GuroGu">
        <text transform="translate(323.7133 913.0812)" className="st3 st0 st4">구로구</text>
      </g>
      <g onClick={ this.onHandle() } id="YangcheonGu" key="YangcheonGu_Station" data="YangcheonGu">
        <text transform="translate(310.9154 806.4152)" className="st3 st0 st4">양천구</text>
      </g>
      <g onClick={ this.onHandle() } id="GangseoGu" key="GangseoGu_Station" data="GangseoGu">
        <text transform="translate(306.6537 712.545)" className="st3 st0 st4">강서구</text>
      </g>
      <g onClick={ this.onHandle() } id="MapoGu" key="MapoGu_Station" data="MapoGu">
        <text transform="translate(571.184 682.6798)" className="st3 st0 st4">마포구</text>
      </g>
      <g onClick={ this.onHandle() } id="EunpyeongGu" key="EunpyeongGu_Station" data="EunpyeongGu">
        <text transform="translate(502.9174 554.6818)" className="st3 st0 st4">은평구</text>
      </g>
      <g onClick={ this.onHandle() } id="SeodaemunGu" key="SeodaemunGu_Station" data="SeodaemunGu">
        <text transform="translate(536.7123 610.1505)" className="st3 st0 st4">서대문구</text>
      </g>
      <g onClick={ this.onHandle() } id="JongnoGu" key="JongnoGu_Station" data="JongnoGu">
        <text transform="translate(665.0526 529.087)" className="st3 st0 st4">종로구</text>
      </g>
      <g onClick={ this.onHandle() } id="JungGu" key="JungGu_Station" data="JungGu">
        <text transform="translate(708.0585 674.1534)" className="st3 st0 st4">중구</text>
      </g>
      <g onClick={ this.onHandle() } id="SeongdongGu" key="SeongdongGu_Station" data="SeongdongGu">
        <text transform="translate(822.9159 704.0197)" className="st3 st0 st4">성동구</text>
      </g>
      <g onClick={ this.onHandle() } id="DongdaemunGu" key="DongdaemunGu_Station" data="DongdaemunGu">
        <text transform="translate(907.9091 588.8195)" className="st3 st0 st4">동대문구</text>
      </g>
      <g onClick={ this.onHandle() } id="JungnangGu" key="JungnangGu_Station" data="JungnangGu">
        <text transform="translate(993.578 477.8888)" className="st3 st0 st4">중랑구</text>
      </g>
      <g onClick={ this.onHandle() } id="DobongGu" key="DobongGu_Station" data="DobongGu">
        <text transform="translate(818.6444 247.4884)" className="st3 st0 st4">도봉구</text>
      </g>
      <g onClick={ this.onHandle() } id="GangbukGu" key="GangbukGu_Station" data="GangbukGu">
        <text transform="translate(763.1757 422.42)" className="st3 st0 st4">강북구</text>
      </g>
      <g onClick={ this.onHandle() } id="SeongbukGu" key="SeongbukGu_Station" data="SeongbukGu">
        <text transform="translate(784.5077 533.3497)" className="st3 st0 st4">성북구</text>
      </g>
      <g onClick={ this.onHandle() } id="GwangjinGu" key="GwangjinGu_Station" data="GwangjinGu">
        <text transform="translate(1014.9091 652.8136)" className="st3 st0 st4">광진구</text>
      </g>
      <g onClick={ this.onHandle() } id="YongsanGu" key="YongsanGu_Station" data="YongsanGu">
        <text transform="translate(686.3749 772.2775)" className="st3 st0 st4">용산구</text>
      </g>
      <g onClick={ this.onHandle() } id="YeongdeungpoGu" key="YeongdeungpoGu_Station" data="YeongdeungpoGu">
        <text transform="translate(464.1742 853.34)" className="st3 st0 st4">영등포구</text>
      </g>
      <g onClick={ this.onHandle() } id="NowonGu" key="NowonGu_Station" data="NowonGu">
        <text transform="translate(976.5077 354.1544)" className="st3 st0 st4">노원구</text>
      </g>
    </g>
  </Svg>
  </>
  )}
}
  
  

export default Map;
