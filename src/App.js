import React, { Component } from 'react';
import Game from "./components/Game";
import Scores from './components/Scores';
import './App.css';
import villainCard from './components/villainCard'
import './components/villainCard/villainCard.css'
import images from "./img.json"


class App extends Component {

  render() {
    return (
      <wrapper>

        <nav className="navbar sticky-top navbar-light bg-primary">
          <h2 className="navbar-brand justify-content-start">Clicky Game</h2>
          <h2 className="navbar-brand justify-content-center">Click any image to begin!</h2>
          <h2 className="navbar-brand justify-content-end">Score: <span id="score"></span>| Top Score: <span id="tScore"></span></h2>
          {/* <score score={this.state.score} highScore={this.state.highScore} /> */}
        </nav>

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Let's Play the Disney Villain Clicky Game!</h1>
          </header>

          <div className="row">
            <div className="col-md-3">


            </div>

          </div>

        </div>

      </wrapper>
    );
  }
}

export default App;
