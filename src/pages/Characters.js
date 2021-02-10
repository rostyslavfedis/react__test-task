import React, {Fragment, useState, useEffect } from "react";
import axios from "axios";

import './Сharacters.css';
import PaginationChar from "../components/pagination/PaginationChar"
import CharCard from "../components/CharCards/CharCard";
//"https://rickandmortyapi.com/api/character/"
export default function Characters(){
    const [chars, setChars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charPerPage, ] = useState(10);
    useEffect(() => {
       const fetchChars= async()=>{
           const res =await axios.get("https://rickandmortyapi.com/api/character/")
        setChars(res.data.results)
       };

       fetchChars();
    }, []);

    console.log("Characters:", chars);

    const indexOfLastPage= currentPage * charPerPage;
    const indexOfFirstPage= indexOfLastPage - charPerPage;
    const currentChar= chars.slice(indexOfFirstPage, indexOfLastPage);

    const paginate=(pageNumber)=>setCurrentPage(pageNumber)

    return(
        <div className='allCharacters1'>
<br/>
             <CharCard key={chars.id} char={currentChar} />
<PaginationChar charPerPage={charPerPage} totalChars={chars.length} paginate={paginate}/>
        </div>
    )
}
