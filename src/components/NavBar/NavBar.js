import React, { Component } from 'react';


class NavBar extends Component {

    render() {

        return (

            <nav className="navbar sticky-top navbar-light bg-primary">
                <h2 className="navbar-brand justify-content-start">Clicky Game</h2>
                <h2 className="navbar-brand justify-content-center">Click any image to begin!</h2>
                <h2 className="navbar-brand justify-content-end">Score: <span score={this.score}></span> | Top Score: <span highscore={this.highscore}></span></h2>

            </nav>
        );

    }
}

export default NavBar;