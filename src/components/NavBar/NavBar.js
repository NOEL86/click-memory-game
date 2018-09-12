import React from 'react';
import "./sticky.css"

const NavBar = props => (

    < nav className="navbar sticky-top navbar-light bg-primary" >
        <h2 className="navbar-brand">Clicky Game</h2>
        <h2 className="navbar-brand">Click any image to begin!</h2>
        <h2 className="navbar-brand">Score: <span>{props.score}</span> | Top Score: <span>{props.highscore}</span></h2>

    </nav >
)

export default NavBar;