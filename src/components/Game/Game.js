import React, { Component } from 'react';
import villainCard from "../villainCard";
import Scores from '../Scores';
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

    resetvillains = (newData) => {
        const resetData = newData.map(villain => {
            villain.clicked = false;
            return villain
        })
        return this.shuffleVillains(resetData)
    }

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