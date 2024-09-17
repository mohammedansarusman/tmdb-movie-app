import { DETAILS_MOVIE,VIDEO_URL,API_OPTION } from '../Constants/apiKey';

const useMovieVideo =()=>{
    const fetchMovieVideo = async (movieId) => {
        const response = await fetch(`${DETAILS_MOVIE}${movieId}${VIDEO_URL}`, API_OPTION)
        const data = await response.json();
        return data.results[0];
    }
    return fetchMovieVideo;
}