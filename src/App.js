import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import villains from './img.json';

class App extends Component {

  state = {
    villains
  };

  // moveVillain = id => {

  //   // create a function that once a villain is clicked it randomizes the images on the screen and allows the client to click again
  //   const villains;


  //   this.setState({ villains });
  // }
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

          <div className="row">
            <div className="col-md-3">

              {/* {this.state.villains.map(villain => (
                <villainCard
                  moveVillain={this.moveVillain}
                  id={villain.id}
                  key={villain.id}
                  name={villain.name}
                  image={villain.image}
                />
I want 4 villains per row. I want to randomize the villains positions on click and add correct or restart to the game points
              ))} */}
            </div>

          </div>

        </div>

      </wrapper>
    );
  }
}

export default App;
