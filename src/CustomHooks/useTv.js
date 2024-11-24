import { API_OPTION, TV_URL } from "../Constants/apiKey"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTv } from "../ReduxStore/moviesSlice";

// Callinf from <Browse />
const useTV = () => {
    const dispatch = useDispatch();

    const fetchTV = async () => {
        const response = await fetch(TV_URL, API_OPTION)
        const data = await response.json()
        dispatch(addTv(data))
    }
    // memoisation is avoided purposesly
    useEffect(() => {
        fetchTV()
    },[])
}
export default useTV;