import React from "react";
import { Card, CardBody } from 'reactstrap';

const SWCard = props => {

    return (
        <Card>
           <CardBody>
            <div className='swCard'>
            <h3>Name: {props.name}</h3>
            <p>height: {props.height}</p>
            <p>Birth Year: {props.birth_year}</p>
        </div>
           </CardBody>
        </Card>
    );
};

export default SWCard;