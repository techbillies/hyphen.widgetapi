import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IFrame from './IFrame'

class App extends Component {
  render() {
    return (
      <main>
  <section className="cards">
    <div className="card">
      <div className="card-image">
        <img src="https://assets.codepen.io/4787486/books-mini.jpg" />
      </div>
      <div className="card-text">
        <h2>Bookmaker</h2>
        <p>
          Space, the final frontier. These are the voyages of the Starship
          Enterprise. Its five-year mission: to explore strange new worlds, to
          seek out new life and new civilizations, to boldly go where no man has
          gone before.
        </p>
      </div>
      <div className="card-inner">
        <button>Read More</button>
        <i className="fa fa-thumbs-o-up fa-lg" aria-hidden="true" />
      </div>
    </div>
    <div className="card">
      <div className="card-image">
        <img src="https://assets.codepen.io/4787486/calligraphy-dragon.jpg" />
      </div>
      <div className="card-text">
        <h2>Calligrapher</h2>
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery.
        </p>
      </div>
      <div className="card-inner">
        <button>Read More</button>
        <i className="fa fa-thumbs-o-up fa-lg" aria-hidden="true" />
      </div>
    </div>
    <div className="card">
      <div className="card-image">
        <img src="https://assets.codepen.io/4787486/calligraphy-wits.jpg" />
      </div>
      <div className="card-text">
        <h2>Famous Quotes</h2>
        <p>
          Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat
          tbh semiotics artisan synth stumptown gastropub cornhole celiac swag.
        </p>
      </div>
      <div className="card-inner">
        <button>Read More</button>
        <i className="fa fa-thumbs-o-up fa-lg" aria-hidden="true" />
      </div>
    </div>
  </section>
</main>

    );
  }
}

export default App;
