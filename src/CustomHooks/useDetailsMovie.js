import { useEffect } from "react";
import { API_OPTION, DETAILS_MOVIE } from "../Constants/apiKey"
import { useDispatch } from "react-redux"
import { addMovieDetails } from "../ReduxStore/moviesSlice"

// Calling from <DetailsMovie />
const useDetailsMovie = (movieId) =>{
    const id = movieId;
    const dispatch = useDispatch();
    const fetchDetailsMovie = async(id) =>{
        const response = await fetch(`${DETAILS_MOVIE}${id}`,API_OPTION)
        const data = await response.json();
        dispatch(addMovieDetails(data));
    }
    useEffect(()=>{fetchDetailsMovie(id)},[])
}
export default useDetailsMovie;

