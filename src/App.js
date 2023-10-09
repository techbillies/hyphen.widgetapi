import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IFrame from './IFrame'

class App extends Component {
  render() {
    return (
     
     <>
  <div className="preloader">Loading...</div>
  <div
    style={{
      maxWidth: 500,
      margin: "0 auto",
      textAlign: "center",
      width: "100%",
      position: "absolute",
      left: "50%",
      marginLeft: "-250px",
      top: 24
    }}
  >
    <a href="https://1kochi.com" title="1Kochi.com Home">
      <img
        src="https://cms.1arabia.com/1kochi-logo-main.png?34d534"
        title="1Kochi - Unveiling Kochi's Essence"
        className="k1-logo"
        style={{ height: "auto", maxWidth: 420, width: "100%" }}
      />
    </a>
  </div>
  {/* <input type="text" id="search-input" placeholder="Search...">*/}
  <select id="category-filter" className="custom-dropdown">
    <option value="all"> /All</option>
    {/* Add more options based on extracted categories */}
  </select>{" "}
  <div className="content-item" data-category="Local">
    <div>
      <div className="wrapper">
        <div
          className="kads1"
          style={{
            float: "left",
            position: "absolute",
            left: "50%",
            marginLeft: "-364px",
            top: 166,
            maxWidth: 728,
            width: "100%",
            height: 90,
            border: "1px solid #bcbcbc69",
            textAlign: "center",
            lineHeight: "5.59",
            fontFamily: "arial",
            color: "#799bc6"
          }}
        >
          Advertise
        </div>
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
