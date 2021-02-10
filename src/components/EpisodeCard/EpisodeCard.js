import React from "react"

const EpisodeCard = ({ episode }) =>{
    return <tbody>
        {episode.map(episode=>
            <tr key={episode.id} className='charCard'>
                <th scope="row">{episode.id}</th>
                <td>{episode.name}</td>
                <td>{episode.air_date}</td>
                <td>{episode.episode}</td>
            </tr>
        )}
        </tbody>
}
export default  EpisodeCard;
