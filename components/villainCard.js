import React from "react";
import "./villainCard.css";

const villainCard = props => (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <span onClick={() => props.randomize(props.id)} className="move"></span>
    </div>
);

export default villainCard;