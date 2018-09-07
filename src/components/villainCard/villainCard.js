import React from "react";
import "./villainCard.css";

const VillainCard = props => {

    return (
        <div className="card">
            <div className="card-image">
                <img alt={props.name} src={props.image} />
            </div>

            <span onClick={() => props.shuffleVillains(props.id)}
            className="shuffle"></span>
        </div>
)
};

export default VillainCard;