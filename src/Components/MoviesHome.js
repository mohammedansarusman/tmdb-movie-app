import React from 'react'
import { useSelector } from 'react-redux';
import useMovies from '../CustomHooks/useMovies'
import MovieCard from './MovieCard'



const MoviesHome = () => {
    const moviesData = useSelector((store)=>store.movie.moviesResult)
    const {results} = moviesData;
    console.log(results)
    useMovies();
    console.log(moviesData)
    // the componenet will render after getting data from API
    if(moviesData==="") return null 
  return (
    <div>
        <div className='text-white font-extrabold text-xl opacity-75'>Trending</div>
        <div>
            <div className='flex gap-2 mt-3 overflow-scroll'>
                {results.map((item)=><MovieCard film = {item}/>)}
            </div>
        
        </div>
        

    </div>
  )
}

export default MoviesHome
// This component will export to Browse compenent