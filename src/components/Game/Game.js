import React, { Component } from 'react';
import villainCard from "../villainCard";
import Scores from '../Scores';
import images from "../../Villains.json";


class Game extends Component {


    componentDidMount() {
        this.setState({ images: this.shuffle(this.state.images) });
    }

    shuffleVillains = (images) => {
        let i = images.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = images[i];
            images[i] = images[j];
            images[j] = temp;
            i--;
        }
        return images;
    }

    resetImages = (newData) => {
        const resetData = newData.map(villain => {
            villain.clicked = false;
            return villain
        })
        return this.shuffle(resetData)
    }

    handleClick = (id) => {
        console.log("this was clicked");
        let guessedCorrect = false;
        const newData = this.state.images.map(villain => {
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