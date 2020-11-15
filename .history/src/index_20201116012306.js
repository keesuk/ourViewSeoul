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
  <HashRouter basename="/"><App /></HashRouter>
    ,
  document.getElementById('root')
);

serviceWorker.unregister();
