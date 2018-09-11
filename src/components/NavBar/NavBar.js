import React, { Component } from 'react';
import "./sticky.css"

class NavBar extends Component {

    render() {

        return (

            <nav className="navbar sticky-top navbar-light bg-primary">
                <h2 className="navbar-brand">Clicky Game</h2>
                <h2 className="navbar-brand">Click any image to begin!</h2>
                <h2 className="navbar-brand">Score: <span score={this.score}></span> | Top Score: <span highscore={this.highscore}></span></h2>

            </nav>
        );

    }
}

export default NavBar;