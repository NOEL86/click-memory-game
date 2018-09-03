import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import villains from './img.json';

class App extends Component {

  state = {
    villains
  };

  // moveVillain = id => {

  //create a function that once a villain is clicked it randomizes the images on the screen and allows the client to click again
  // const villains;

  // this.setState({ villains });
  // }
  render() {
    return (

      <wrapper>

        <nav className="navbar sticky-top navbar-light bg-primary">
          <h2 className="navbar-brand">Clicky Game</h2>
          <h2 className="navbar-brand">Click any image to begin!</h2>
          <h2 className="navbar-brand">Score: <span id="score"></span>| Top Score: <span id="tScore"></span></h2>
        </nav>
        <div className="App">
          <header className="App-header">
            <img id="disneyLogo" src="https://i.pinimg.com/originals/3d/01/41/3d0141a9eccb1145c72ea23aa1fa43ae.png" alt="Disney D" />
            <h1 className="App-title">Let's Play the Disney Villain Clicky Game!</h1>
          </header>

          <div className="row">
            <div className="col-md-12">
              {/* {this.state.villains.map(villain => (
                <villainCard
                  moveVillain={this.moveVillain}
                  id={villain.id}
                  key={villain.id}
                  name={villain.name}
                  image={villain.image}
                />

              ))} */}
            </div>

          </div>

        </div>

      </wrapper>
    );
  }
}

export default App;
