import React, { Component } from 'react';
import './Window.css';
import './index.css';

class Window extends Component {
    render() {
        const { show, windowClose } = this.props;   
        return(
            <div className="window-wrapper" style={{ transform: show ? 'translateY(0vh)' : 'translateY(-120vh)'}} >
                <div className="window-content">
                    <button onClick={windowClose} className="close">
                        ← 
                    </button>
                    <div className="computer">
                        오.. 어떤 곳인데요?
                    </div>
                    <div className="answer">
                        여기는 요런 것들이 생각나요.
                    </div>
                    <div className="img-stations">
                        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20190118_58%2F1547774525170WiHRr_JPEG%2FLQR4NdfTZrK-FNfGCrcUVhVn.jpg&type=f&size=172x172"/>
                        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20150901_75%2F1441050250233sacj5_JPEG%2F11833646_0.jpg&type=f&size=172x172"/>
                        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20180227_285%2F1519697670586zofY0_JPEG%2FUo-VrL7ESWLTwty_zglU4LTz.jpg&type=f&size=172x172"/>
                        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20170925_265%2F1506300676335y3xVW_JPEG%2FhnKe29_4EnEI3oqmlh7Nbnu0.jpg&type=f&size=172x172"/>
                        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20200608_261%2F15915898830763TUIy_JPEG%2F0_%25286%2529.jpg&type=f&size=172x172"/>
                        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20171111_170%2F1510368360032j8yiT_JPEG%2Fkkt3IYRAZPNBL0yiMeAThof8.jpg&type=f&size=172x172"/>
                        <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20190227_230%2F1551252868033vdXmD_JPEG%2FyGwnyZdpHGCHxO6iwL1j-Qn7.jpg&type=f&size=172x172"/>
                    </div>
                    <button onClick={windowClose} className="input">
                        완료
                    </button>
                </div>
            </div>
        )
    }
}

export default Window;