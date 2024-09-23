import { API_OPTION, MOVIES_URL,PAGE } from '../Constants/apiKey'
import { useEffect} from'react'
import { useDispatch,useSelector } from 'react-redux'
import { addMovies } from '../ReduxStore/moviesSlice'

const useMovies = () =>{
    console.log("useMovies rendered")
    const sheetNo = useSelector((store)=>store.movie.moviePage)
    console.log("sheetNo",sheetNo)
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        const response = await fetch(MOVIES_URL+PAGE+sheetNo,API_OPTION)
        const data = await response.json()
        dispatch(addMovies(data))
    } 
    useEffect(()=>{fetchMovies()},[sheetNo]) 
}

export default useMovies;
//  this custom hook wil call in Browse component.