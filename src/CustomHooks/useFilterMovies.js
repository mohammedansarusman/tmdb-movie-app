import { FILTER_CRITERIA_1,FILTER_CRITERIA_2,FILTER_CRITERIA_3,FILTER_CRITERIA_4,FILTER_CRITERIA_5, FILTER_MOVIES1,PAGE,API_OPTION } from "../Constants/apiKey";
import { useSelector,useDispatch } from "react-redux";
import { addMovies } from "../ReduxStore/moviesSlice";
import { useEffect } from "react";
const useFilterMovies = ()=>{
    const dispatch = useDispatch();
    const sheetNo = useSelector((store)=>store.movie.moviePage)
    const startYear = useSelector((store)=>store.filterItem.startYear);
    const endYear = useSelector((store)=>store.filterItem.endYear);

    console.log("sheetNo",sheetNo)
    const fetchMovies = async () => {
        const response = await fetch(FILTER_MOVIES1+PAGE+sheetNo+FILTER_CRITERIA_1+startYear+FILTER_CRITERIA_2+endYear+FILTER_CRITERIA_3+FILTER_CRITERIA_4+FILTER_CRITERIA_5,API_OPTION)
        console.log("response",response);
        const data = await response.json()
        console.log("data from filter movies",data)
        dispatch(addMovies(data))
    } 
    useEffect(()=>{fetchMovies()},[sheetNo])    
}
export default useFilterMovies;