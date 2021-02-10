import React, {Fragment, useState, useEffect } from "react";
import axios from "axios";
import EpisodeCard from "../components/EpisodeCard/EpisodeCard";
import PaginationEpisode from "../components/pagination/PaginationEpisode";

export default function Episodes(){
    const [episode, setEpisode] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [episodePerPage ] = useState(10);
    useEffect(() => {
        const fetchEpisode= async()=>{
            const res =await axios.get("https://rickandmortyapi.com/api/episode")
            setEpisode(res.data.results)
        };

        fetchEpisode();
    }, []);

    console.log("Episodes:", episode);

    const indexOfLastPage= currentPage * episodePerPage;
    const indexOfFirstPage= indexOfLastPage - episodePerPage;
    const currentEpisode= episode.slice(indexOfFirstPage, indexOfLastPage);

    const paginate=(pageNumber)=>setCurrentPage(pageNumber)

    return(
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Episode Name</th>
                <th scope="col">Relise Date</th>
                <th scope="col">Episode</th>
            </tr>
            </thead>
           <EpisodeCard key={episode.id} episode={currentEpisode} />
            <PaginationEpisode episodePerPage={episodePerPage} totalEpisode={episode.length} paginate={paginate}/>
        </table>
    )
}
