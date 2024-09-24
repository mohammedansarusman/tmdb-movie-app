import { PROVIDERS, API_OPTION } from "../Constants/apiKey"
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { addProviders } from "../ReduxStore/moviesSlice"

const useProviders = () =>{
    const dispatch = useDispatch();
    const fetchProviders = async()=>{
        const response = await fetch(PROVIDERS,API_OPTION);
        const data = await response.json();
        // console.log("data from providers",data)
        dispatch(addProviders(data))
    }
    useEffect(()=>{fetchProviders()},[]);
}
export default useProviders