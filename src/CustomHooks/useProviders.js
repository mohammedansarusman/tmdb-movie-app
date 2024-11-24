import { PROVIDERS, API_OPTION } from "../Constants/apiKey"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addProviders } from "../ReduxStore/moviesSlice"
//  Calling from <Movies /> and <Television />
const useProviders = () =>{
    const dispatch = useDispatch();
    const pro = useSelector((store)=>store.movie.providers)
    const fetchProviders = async()=>{
        const response = await fetch(PROVIDERS,API_OPTION);
        const data = await response.json();
        dispatch(addProviders(data))
    }
    useEffect(()=>{!pro && fetchProviders()},[]);
}
export default useProviders