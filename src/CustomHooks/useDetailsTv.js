import { useDispatch } from "react-redux";
import { API_OPTION } from "../Constants/apiKey";
import { useEffect } from "react";
import { addTvDetails } from "../ReduxStore/moviesSlice";
import { DETAILS_TV } from "../Constants/apiKey";

const useDetailsTv = (idValue)=>{
    const id = idValue;
    const dispatch = useDispatch();
    const fetchDetailsTv = async(id) =>{
        const response = await fetch(DETAILS_TV+id+"?language=en-US",API_OPTION)
        const data = await response.json();
        dispatch(addTvDetails(data));
    }
    useEffect(()=>{fetchDetailsTv(id)},[])
}
export default useDetailsTv;