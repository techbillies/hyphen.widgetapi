import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IFrame from './IFrame'

class App extends Component {
  render() {
    return (
      <div className="App">

          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
          </header>

          <IFrame
              src="https://reactjs-iframe.herokuapp.com/iFrame.html"
              height="200px"
              width="500px"
          />

      </div>
    );
  }
}

export default App;
