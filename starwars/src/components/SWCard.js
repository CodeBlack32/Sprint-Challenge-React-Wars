import React from "react";

const SWCard = props => {

    return (
        <div className='swCard'>
            <h3>Name: {props.name}</h3>
            <p>height{props.height}</p>
            <p>Birth Year{props.birth_year}</p>
        </div>
    );
};

export default SWCard;