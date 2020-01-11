import React, { useState, useEffect } from "react";
import SWCard from "./SWCard";
import axios from "axios";


export default function StarWarsList () {
const [data, setData] = useState([]);

useEffect(() => {
axios
    .get(`https://swapi.co/api/people/`)
    .then(res => {
    setData(res.data.results);
    // const personInfo = data.results;
    // console.log({personInfo})
    })
    .catch(error => {
    console.log("The data was not returned", error);
    });
}, []);

return (
    <div className="card">  
            {data.map(newData => {
                return (
                    <SWCard 
                    key={newData.id}
                    name={newData.name} 
                    height={newData.height} 
                    birth_year={newData.birth_year} 
                    />
                );
            })}
    </div>
);
}