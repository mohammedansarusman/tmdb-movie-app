import { useDispatch } from "react-redux"
import { API_OPTION,PEOPLE_URL } from "../Constants/apiKey";
import { useEffect } from "react";
import { addPeople } from "../ReduxStore/moviesSlice";

const usePeople = () => {
    const dispatch = useDispatch();
    
    const fetchPeopleApi = async()=>{
        const response = await fetch(PEOPLE_URL,API_OPTION);
        const data = await response.json();
        dispatch(addPeople(data))
    }

    useEffect(()=>{fetchPeopleApi()},[]);

}
export default usePeople;
