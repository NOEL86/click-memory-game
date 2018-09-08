import React, { Component } from 'react';
import Game from "./components/Game";
import Scores from './components/Scores';
import './App.css';
import VillainCard from './components/villainCard';
import villains from "./Villains.json";
import Header from "./components/Header";
import NavBar from "./components/NavBar";


class App extends Component {

  state = {
    score: 0,
    highscore: 0,
    villains
  }

  // i need to add a state = score, villains clicked??
  render() {

    return (

      <container>
        {/* <Game /> I Need to get this file to read my game app too*/}
        <NavBar/>
        <Header />

        <div id="body" col="md-12">
          {this.state.villains.map(villains => {
            return <VillainCard
              id={villains.id}
              key={villains.id}
              image={villains.image}
              handleClick={this.handleClick} />
          }

          )}
        </div>

      </container >
    );
  }
}

export default App;
