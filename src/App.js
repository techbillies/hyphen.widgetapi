import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IFrame from './IFrame'

class App extends Component {
  render() {
    return (
     
     <>
  <div>
        <select id="category-filter" className="custom-dropdown">
          <option value="all">All</option>
          {/* Add more options based on extracted categories */}
        </select>
        <div className="content-item" data-category="Local">
          <div>
            <div className="wrapper">
              <div className="kads1" style={{ float: 'left', position: 'absolute', left: '50%', margin: '-364px 0 0 -364px', top: '166px', maxWidth: '728px', width: '100%', height: '90px', border: '1px solid #bcbcbc69', textAlign: 'center', lineHeight: '5.59', fontFamily: 'arial', color: '#799bc6' }}>
                Advertise
              </div>

              <div className="panel">
                <h2 className="city" id="city">{this.state.city}</h2>
                <div className="weather" id="weather">
                  <div className="group secondary">
                    <h3 id="dt">{this.state.weather.dt}</h3>
                    <h3 id="description">{this.state.weather.description}</h3>
                  </div>
                  <div className="group secondary">
                    <h3 id="wind">{this.state.weather.wind}</h3>
                    <h3 id="humidity">{this.state.weather.humidity}</h3>
                  </div>
                  <div className="temperature" id="temperature">
                    <h1 className="temp" id="temp">
                      <i id="condition">{this.state.weather.condition}</i>
                      <span id="num">{this.state.weather.num}</span>
                      <a className="fahrenheit active" id="fahrenheit" href="#">&deg;F</a>
                      <span className="divider secondary">|</span>
                      <a className="celsius" id="celsius" href="#">&deg;C</a>
                    </h1>
                  </div>
                  <div className="forecast" id="forecast">{this.state.forecast}</div>
                </div>
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
