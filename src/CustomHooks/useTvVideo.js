import { useDispatch } from "react-redux";
import { API_OPTION, VIDEO_URL, DETAILS_TV } from "../Constants/apiKey";
import { addVideoKey } from "../ReduxStore/moviesSlice";
import { useEffect } from "react";
// calling from <DetailsTv />

const useTvVideo = (idValue) =>{
    const id = idValue;
    const dispatch = useDispatch();
    const fetchVideo = async (id) => {
        const response = await fetch(DETAILS_TV + id + VIDEO_URL, API_OPTION);
        const data = await response.json();
        const { results } = data;
        const videoData = results.filter((item) => item.name === "Official Trailer" || "Trailer");
        dispatch(addVideoKey(videoData[0]?.key));
    }
    useEffect(() => { fetchVideo(id) }, [])

}
export default useTvVideo;