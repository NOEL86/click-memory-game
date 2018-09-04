import React from "react";
import "./villainCard.css";

const villainCard = props => {

    return (

        <div className="img-container">


            <div className="row">
                {this.state.images.map((item, i) => {
                    return <villainCard key={item.id} id={item.id} image={item.image} handleClick={this.handleClick} />
                })}

            </div>
        </div>


    );
};

export default villainCard;