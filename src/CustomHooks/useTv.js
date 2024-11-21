import { API_OPTION, TV_URL } from "../Constants/apiKey"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTv } from "../ReduxStore/moviesSlice";


const useTV = () => {
    const dispatch = useDispatch();
    const tvData = useSelector((store)=>store.movie.tvResults)

    const fetchTV = async () => {
        const response = await fetch(TV_URL, API_OPTION)
        const data = await response.json()
        dispatch(addTv(data))
    }
    useEffect(() => {
        !tvData && fetchTV()
    },[])
}
export default useTV;