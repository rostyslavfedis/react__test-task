import React, {Fragment, useState, useEffect } from "react";
import axios from "axios";
import LocationCard from "../components/LocationCard/LocationCard";



export default function Locations(){
    const [location, setLocation] = useState([]);
    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/location")
            .then(res => {
                setLocation(res.data.results);
            })
            .catch(err => {
                alert(err.message);
            });
    }, []);

    console.log("Location:", location);
    return(
        <table className="table table-striped table-dark">
            <thead >
            <tr>
                <th scope="col">#</th>
                <th scope="col">Location Name</th>
                <th scope="col">Type</th>
                <th scope="col">Dimension</th>
            </tr>
            </thead>
            {location.map(location => {
                return <LocationCard key={location.id} location={location} />;
            })}
        </table>
    )
}
