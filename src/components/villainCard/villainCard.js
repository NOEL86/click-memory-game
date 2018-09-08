import React from "react";
import "./villainCard.css";
import Game from "../Game";

const VillainCard = props => {

    return (
        // <Game onClick={() => props.handleClick(props.id)} />
        <div className="card">
            <div className="card-image">
                <img alt={props.name} src={props.image} id={props.id} />

            </div>

        </div>



    )
};

export default VillainCard;