import { API_OPTION, SEARCH1, SEARCH2, PAGE } from '../Constants/apiKey'
import { useEffect} from'react'
import { useDispatch,useSelector } from 'react-redux'
import { addSearchResult } from '../ReduxStore/moviesSlice'

const useSearch = () =>{
    const searchBarValue = useSelector((store) => store.theme.inputValue)
    const sheetNo = useSelector((store)=>store.movie.moviePage)
    const dispatch = useDispatch();
    const fetchSearch = async () => {
        const response = await fetch(SEARCH1+searchBarValue+SEARCH2+PAGE+sheetNo,API_OPTION)
        const data = await response.json();
        dispatch(addSearchResult(data));
    } 
    useEffect(()=>{fetchSearch()},[sheetNo,searchBarValue]) 
}

export default useSearch;
//  this custom hook wil call in Browse component.