import React, { Component } from 'react';
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

  handleClick = (id) => {
    var shuffledVillains = this.shuffleVillains(this.state.villains);

    this.findAndUpdateVillains(shuffledVillains, id);
  }

  shuffleVillains = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  // updateHighScore = () => {
  //   if (this.state.score > this.state.highscore) {
  //     this.setState({
  //       highscore: this.state.score
  //     })

  //   } else {
  //     console.log(highscore);

  //   }
  // }

  findAndUpdateVillains = (array, id) => {
    console.log(id);

    let updatedArray = [];
    let doubleClicked = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        if (array[i].clicked === false) {
          doubleClicked = false;
          array[i].clicked = true;
          updatedArray.push(array[i])
        } else {
          console.log("You clicked this one already");
          doubleClicked = true;
          updatedArray.push(array[i]);
        }
      } else {
        updatedArray.push(array[i])
      }
    }
    if (doubleClicked === false) {
      this.setState({
        villains: updatedArray,
        score: ++this.state.score,
        // updateHighScore()
      })

    } else {
      // updateHighScore()
      this.setState({
        villains: [{
          "id": 1,
          "name": "Captain Hook",
          "image": "img/captainHook.jpg",
          "clicked": false
        },
        {
          "id": 2,
          "name": "Clayton",
          "image": "img/clayton.jpeg",
          "clicked": false
        },
        {
          "id": 3,
          "name": "Cruella",
          "image": "img/cruella.jpg",
          "clicked": false
        },
        {
          "id": 4,
          "name": "Ratigan",
          "image": "img/DVD_Ratigan.jpg",
          "clicked": false
        },
        {
          "id": 5,
          "name": "Facilier",
          "image": "img/facilier.jpg",
          "clicked": false
        },
        {
          "id": 6,
          "name": "Gaston",
          "image": "img/gaston.jpg",
          "clicked": false
        },
        {
          "id": 7,
          "name": "Hates",
          "image": "img/hates.jpg",
          "clicked": false
        },
        {
          "id": 8,
          "name": "Queen of Hearts",
          "image": "img/hearts.jpg",
          "clicked": false
        },
        {
          "id": 9,
          "name": "Jafar",
          "image": "img/jafar.jpg",
          "clicked": false
        },
        {
          "id": 10,
          "name": "King John",
          "image": "img/kingRobinHood.jpg",
          "clicked": false
        },
        {
          "id": 11,
          "name": "Mad Mad Madam Mim",
          "image": "img/Madam_Mim.jpg",
          "clicked": false
        },
        {
          "id": 12,
          "name": "Maleficent",
          "image": "img/maleficent.png",
          "clicked": false
        },
        {
          "id": 13,
          "name": "Scar",
          "image": "img/scar.gif",
          "clicked": false
        },
        {
          "id": 14,
          "name": "Sid",
          "image": "img/sid.jpg",
          "clicked": false
        },
        {
          "id": 15,
          "name": "Ursula",
          "image": "img/ursula.jpg",
          "clicked": false
        },
        {
          "id": 16,
          "name": "Yzma",
          "image": "img/Yzma.png",
          "clicked": false
        }
        ],
        score: 0

      });


    }

  }

  // i need to add a state = score, villains clicked??
  render() {

    return (

      <container>

        <NavBar />
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
