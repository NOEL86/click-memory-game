import React, { Component } from 'react';
import villainCard from "../villainCard";
import score from '../Scores';
import images from "../../img.json";


class Game extends Component {

    state = {
        score: 0,
        highscore: 0,
        images
    }

    componentDidMount() {
        this.setState({ images: this.shuffle(this.state.images) });
    }

    shuffle = (images) => {
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

    // correctGuess = (guess) => {
    //     const { score, highScore } = this.state
    //     const newScore = score + 1;
    //     const newHighScore = newScore > highScore ? newScore : highScore;
    //     this.setState({
    //         images: this.shuffle(guess),
    //         score: newScore,
    //         highScore: newHighScore
    //     });
    // }

    // incorrectGuess = (guess) => {
    //     this.setState({
    //         images: this.resetImages(guess),
    //         score: 0
    //     })
    // }

    resetImages = (newData) => {
        const resetData = newData.map((item) => {
            item.clicked = false;
            return item
        })
        return this.shuffle(resetData)
    }

    handleClick = (id) => {
        console.log("this was clicked");
        let guessedCorrect = false;
        const newData = this.state.images.map((item, i) => {
            const newItem = item
            if (item.id === id) {
                if (!item.clicked) {
                    newItem.clicked = true;
                    guessedCorrect = true

                }
            }
            return newItem
        })
        guessedCorrect ? this.correctGuess(newData) : this.incorrectGuess(newData)
    }


}

export default Game;