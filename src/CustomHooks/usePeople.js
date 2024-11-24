import { useDispatch, useSelector } from "react-redux"
import { API_OPTION,PEOPLE_URL } from "../Constants/apiKey";
import { useEffect } from "react";
import { addPeople } from "../ReduxStore/moviesSlice";
// Calling from <Browse />
const usePeople = () => {
    const dispatch = useDispatch();
    const peopleData = useSelector((store) => store.movie.peopleResults)

    
    const fetchPeopleApi = async()=>{
        const response = await fetch(PEOPLE_URL,API_OPTION);
        const data = await response.json();
        dispatch(addPeople(data))
    }
    //  added memoisation
    useEffect(()=>{!peopleData && fetchPeopleApi()},[]);

}
export default usePeople;
