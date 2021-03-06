import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App.js';
import * as serviceWorker from './src/serviceWorker';
import { createMuiTheme } from '@material-ui/core/styles';

createMuiTheme({
  typography: {
  useNextVariants: true,
  fontFamily: '"Noto Sans KR"'
  }
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
