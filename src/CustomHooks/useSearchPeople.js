import { useDispatch } from "react-redux"
import { API_OPTION,PEOPLE1 } from "../Constants/apiKey";
import { useEffect } from "react";
import { addPeople } from "../ReduxStore/moviesSlice";

const useSearchPeople = (id) => {
    console.log("hello use people")
    const dispatch = useDispatch();
    // const idValue = id
    const fetchPeopleApi = async()=>{
        const response = await fetch(PEOPLE1+id,API_OPTION);
        const data = await response.json();
        console.log("people data",data)
        dispatch(addPeople(data))
    }

    useEffect(()=>{fetchPeopleApi()},[]);

}
export default useSearchPeople;
