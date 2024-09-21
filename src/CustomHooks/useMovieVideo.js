import { DETAILS_MOVIE, VIDEO_URL, API_OPTION } from "../Constants/apiKey";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVideoKey } from "../ReduxStore/moviesSlice";

export const useMovieVideo = (movieId) => {
    const dispatch = useDispatch();
    const id = movieId;
    const fetchVideo = async (id) => {
        const response = await fetch(DETAILS_MOVIE + id + VIDEO_URL, API_OPTION);
        const data = await response.json();
        const { results } = data;
        const videoData = results.filter((item) => item.name === "Official Trailer" || "Trailer");
        console.log("videoData", videoData)
        dispatch(addVideoKey(videoData[0]?.key));

    }
    useEffect(() => { fetchVideo(id) }, [])
}
