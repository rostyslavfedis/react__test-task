import React, { useState, useEffect } from "react";
import './SoloChar.css'
import axios from "axios";

export default function SoloChar(props) {
    const [char, setChar] = useState([]);
    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
            .then(res => {
                setChar(res.data);
                console.log("Response:", res);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [props.match.params.id]);

    return (
        <div className='soloChar'>
                <h3>{char.name}</h3>
                <img src={char.image} alt="profile pic" />
                <p>Status: {char.status}</p>
                <p>Species: {char.species}</p>
                <p>{char.gender}</p>
                <p>{char.origin && char.origin.name}</p>

        </div>
    );
}
