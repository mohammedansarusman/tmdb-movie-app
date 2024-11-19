import { useDispatch } from "react-redux"
import { API_OPTION,PEOPLE1 } from "../Constants/apiKey";
import { useEffect } from "react";
import { addPeople, addSearchPeople } from "../ReduxStore/moviesSlice";

const useSearchPeople = (id) => {
    const dispatch = useDispatch();
    // const idValue = id
    const fetchPeopleApi = async()=>{
        const response = await fetch(PEOPLE1+id,API_OPTION);
        const data = await response.json();
        dispatch(addSearchPeople(data))
    }
    useEffect(()=>{fetchPeopleApi()},[]);
}
export default useSearchPeople;
