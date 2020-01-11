import React, { useState, useEffect } from "react";
import axios from "axios";


const StarWarsList = () => {
    const [data, setData] = useState({});
    useEffect(() => {
    axios
        .get(`https://swapi.co/api/`)
        .then(res => {
        setData(res.data);
        console.log(res);
        })
        .catch(error => {
        console.log("The data was not returned", error);
        });
    }, []);

    return (
        <div className="card">
            {console.log(data.people)}
            <p> Hi, {data.people}</p>
            
        </div>
    )
}

export default StarWarsList