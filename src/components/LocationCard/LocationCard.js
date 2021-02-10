import React from "react"



export default function LocationCard({ location }) {
    return (
        <tbody>
        <tr>
            <th scope="row">{location.id}</th>
            <td>{location.name}</td>
            <td>{location.type}</td>
            <td>{location.dimension}</td>
        </tr>
        </tbody>
    );
}
