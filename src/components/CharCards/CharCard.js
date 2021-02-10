import React from "react"
import { Link } from "react-router-dom";
import './CharCard.css'

const CharCard = ({ char }) => {
    return <div className='allCharacters'>
        {char.map(char=><div key={char.id} className='charCard'>
            <h3>{char.name}</h3>
            <img src={char.image} alt="profile picture" />
            <Link className="btn btn-warning m-1" to={`/chars/${char.id}`} key={char.id} role="button">DETAILS</Link>
            </div>
        )}

    </div>
};
export default CharCard;
