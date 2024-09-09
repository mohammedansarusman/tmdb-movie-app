import { API_OPTION, MOVIES_URL } from '../Constants/apiKey'
import { useEffect } from'react'
import { useDispatch } from 'react-redux'
import { addMovies } from '../ReduxStore/moviesSlice'

const useMovies = () =>{
    const dispatch = useDispatch();
    const fetchMovies = async () => {
        const response = await fetch(MOVIES_URL,API_OPTION)
        const data = await response.json()
        dispatch(addMovies(data))
    } 
    useEffect(()=>{fetchMovies()},[]) 
}

export default useMovies;
//  this custom hook wil call in Browse component.