import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IFrame from './IFrame'

class App extends Component {
  render() {
    return (
     
     <>
 
        <div className="panel">
          <h2 className="city" id="city" />
          <div className="weather" id="weather">
            <div className="group secondary">
              <h3 id="dt" />
              <h3 id="description" />
            </div>
            <div className="group secondary">
              <h3 id="wind" />
              <h3 id="humidity" />
            </div>
            <div className="temperature" id="temperature">
              <h1 className="temp" id="temp">
                <i id="condition" /> <span id="num" />
                <a className="fahrenheit active" id="fahrenheit" href="#">
                  °F
                </a>
                <span className="divider secondary">|</span>
                <a className="celsius" id="celsius" href="#">
                  °C
                </a>
              </h1>
            </div>
            <div className="forecast" id="forecast" />
          </div>
        </div>
      </div>
    </div>
    <div className="content-wrapper"></div>
  </div>
</>


    );
  }
}

export default App;
