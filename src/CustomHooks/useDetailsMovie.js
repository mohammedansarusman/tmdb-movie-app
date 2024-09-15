import { useEffect } from "react";
import { API_OPTION, DETAILS_MOVIE } from "../Constants/apiKey"

const useDetailsMovie = (movieId) =>{
    const id = movieId;
    console.log("WHAT IS IDBCursor",id)
    const fetchDetailsMovie = async(id) =>{
        const response = await fetch(`${DETAILS_MOVIE}${id}`,API_OPTION)
        const data = await response.json();
        console.log("Details Movie",data)
    }
    useEffect(()=>{fetchDetailsMovie(1139817)},[])
}
export default useDetailsMovie;

// fetch('https://api.themoviedb.org/3/movie/1064028?language=en-US', options)
