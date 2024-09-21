import { useDispatch } from "react-redux";
import { API_OPTION } from "../Constants/apiKey";
import { useEffect } from "react";
import { addTvDetails } from "../ReduxStore/moviesSlice";


const useDetailsTv = (idValue)=>{
    const id = idValue;
    const dispatch = useDispatch();
    const fetchDetailsTv = async(id) =>{
        const response = await fetch("https://api.themoviedb.org/3/tv/"+id+"?language=en-US",API_OPTION)
        const data = await response.json();
        dispatch(addTvDetails(data));
    }
    useEffect(()=>{fetchDetailsTv(id)},[])
}
export default useDetailsTv;