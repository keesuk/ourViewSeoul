import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import {HashRouter, Route, Link, Switch} from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';


createMuiTheme({
  typography: {
  useNextVariants: true,
  fontFamily: '"Noto Sans KR"'
  }
});

ReactDOM.render(
  <HashRouter basename="/"><App />
    <div>모바일 웹 환경에서는 서비스가 많이 느립니다. 테스트를 못 해봐서, 배포하고 나서 알았네요. 데스크탑 웹은 아직 제작하지 못하여 차후에 계속해서 제작해보도록 하겠습니다. 재미있는 시도로만 봐주시면 감사하겠습니다 🙇‍♂️</div>
  </HashRouter>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
