import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import useSearch from "../CustomHooks/useSearch";
import Shimmer from './Shimmer'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
import { addMoviePage } from '../ReduxStore/moviesSlice'
 // Calling from <NavigationBar />



const Search = () =>{
    const dispatch = useDispatch();
    const searchData = useSelector((store)=>store.movie.searchResult);
    const moviePage = useSelector((store) => store.movie.moviePage)

    const searchBarValue = useSelector((store) => store.theme.inputValue)
    useSearch();
    const { results, total_pages } = searchData;

    const previousPage = () => {
        moviePage > 1 && dispatch(addMoviePage(moviePage - 1))
      }
      const nextPage = () => {
        moviePage < total_pages && dispatch(addMoviePage(moviePage + 1))
      }
      // the componenet will render after getting data from API
      if (searchData === "") return <Shimmer />
    

    return(
        <div className='w-screen min-h-screen py-20 bg-gradient-to-br from-slate-800 to-red-950 flex flex-col items-center relative'>
            <div className=' flex flex-wrap px-2 gap-5 justify-center mt-[70px]'>
            {
                  results.map(
                    (item)=>(
                      <Link to = {`/details/${item.media_type}/${item.id}`} key = {item.id } >
                          <MovieCard film = {item} key = {item.id}/>
                      </Link>
                  ))
                }
            </div>

      <footer className='flex justify-between items-center w-[80%] mt-4 text-white font-semibold text-xs'>
        <div className={`p-2 rounded-full  ${moviePage === 1 ? 'bg-gray-500 opacity-50' : ('bg-gray-500 cursor-pointer hover:scale-105')}`}
          onClick={previousPage}
        >
          <p>Previous Page</p>
        </div>
        <div className={`p-2 rounded-full ${moviePage === total_pages ? 'bg-gray-500 opacity-50' : ('bg-gray-500 cursor-pointer hover:scale-105')}`}
          onClick={nextPage}
        >
          <p>Next Page</p>
        </div>
      </footer>
    </div>
    )
}
export default Search;