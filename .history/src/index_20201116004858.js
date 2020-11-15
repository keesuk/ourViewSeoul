import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './CSS/index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme } from '@material-ui/core/styles';

createMuiTheme({
  typography: {
  useNextVariants: true,
  fontFamily: '"Noto Sans KR"'
  }
});

ReactDOM.render(
  <BrowserRouter basename="/react">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
