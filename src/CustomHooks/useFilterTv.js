import { FILTER_TV,FILTER_TV_CRITERIA_1,FILTER_TV_CRITERIA_2,FILTER_TV_CRITERIA_3,FILTER_TV_CRITERIA_4, FILTER_TV_CRITERIA_5,PAGE,API_OPTION } from "../Constants/apiKey";
import { useSelector,useDispatch } from "react-redux";
import { addMovies } from "../ReduxStore/moviesSlice";
import { useEffect } from "react";
const useFilterTv = ()=>{
    const dispatch = useDispatch();
    const sheetNo = useSelector((store)=>store.movie.moviePage)
    const startYear = useSelector((store)=>store.filterItem.startYear);
    const endYear = useSelector((store)=>store.filterItem.endYear);
    const startrating = useSelector((store)=>store.filterItem.startRating2);
    const endrating = useSelector((store)=>store.filterItem.endRating2);


    console.log("sheetNo",sheetNo)
    const fetchMovies = async () => {
        const response = await fetch(FILTER_TV+PAGE+sheetNo+FILTER_TV_CRITERIA_1+startYear+FILTER_TV_CRITERIA_2+endYear+FILTER_TV_CRITERIA_3+FILTER_TV_CRITERIA_4+startrating+FILTER_TV_CRITERIA_5+endrating,API_OPTION)
        console.log("response",response);
        const data = await response.json()
        console.log("data from filter movies",data)
        dispatch(addMovies(data))
    } 
    useEffect(()=>{fetchMovies()},[sheetNo,startYear,endYear,startrating,endrating])    
}
export default useFilterTv;