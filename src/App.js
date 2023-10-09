import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IFrame from './IFrame'

class App extends Component {
  render() {
    return (
      <div className="App">

          <header className="App-header">
          </header>

          <IFrame
              src="https://arabianpost-dubai-news.on.drv.tw/assets.hyphen.architectured.site/iFrame.html"
              height="100%"
              width="100%"
          />

      </div>
    );
  }
}

export default App;
