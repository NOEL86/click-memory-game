import React, { Component } from 'react';
import villains from "../../Villains.json";


class Game extends Component {

    state = {
        villains
    }

    componentDidMount() {
        this.setState({ villains: this.shuffleVillains(this.state.villains) });
    }

    shuffleVillains = (villains) => {
        let i = villains.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = villains[i];
            villains[i] = villains[j];
            villains[j] = temp;
            i--;
        }
        return villains;
    }

    //Handle click should take in the item's id and pass that through the function as the item clicked
    //it should determine if the item has already been clicked 
    //it should let the user know whether they guessed correctly or incorrectly
    //it should shuffle the villain cards again after the click

    handleClick = (id) => {
        console.log("this was clicked");
        let guessedCorrect = false;
        const newData = this.state.villains.map(villain => {
            const newVillain = villain
            if (villain.id === id) {
                if (!villain.clicked) {
                    newVillain.clicked = true;
                    guessedCorrect = true

                }
            }
            return newVillain
        })
        guessedCorrect ? this.correctGuess(newData) : this.incorrectGuess(newData)

    }

}

export default Game;