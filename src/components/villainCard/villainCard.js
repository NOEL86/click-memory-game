import React from "react";
import "./villainCard.css";


const VillainCard = props => {

    return (

        <div className="card">
            <div className="card-image">
                <img alt={props.name}
                    src={props.image}
                    id={props.id}
                    onClick={() => props.handleClick(props.id)} />

            </div>

        </div>
    )
};

export default VillainCard;