import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }
}

class Sqaure extends React.Component {
  render() {
    return {
      <button className="square">
       {this.props.value}
      </button>
    };
  }
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
