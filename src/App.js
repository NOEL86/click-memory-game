import React, { Component } from 'react';
import Game from "./components/Game";
import Scores from './components/Scores';
import './App.css';
import VillainCard from './components/villainCard';
import villains from "./Villains.json";


class App extends Component {

  state = {
    score: 0,
    highscore: 0,
    villains
  }

  // i need to add a state = score, villains clicked??
  render() {

    return (

      <wrapper>

        <nav className="navbar sticky-top navbar-light bg-primary">
          <h2 className="navbar-brand justify-content-start">Clicky Game</h2>
          <h2 className="navbar-brand justify-content-center">Click any image to begin!</h2>
          <h2 className="navbar-brand justify-content-end">Score: <span id="score"></span>| Top Score: <span id="tScore"></span></h2>

        </nav>

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Let's Play the Disney Villain Clicky Game!</h1>
          </header>

          <div id="body" className="row">

            <div className="col-md-12">
              {this.state.villains.map(villains => {
                return <VillainCard
                  id={villains.id}
                  key={villains.id}
                  image={villains.image}
                  handleClick={this.handleClick} />
                }
                
              )}

            </div>
          </div>
        </div>


      </wrapper >
    );
  }
}

export default App;
