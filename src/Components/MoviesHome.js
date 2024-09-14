import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard'



const MoviesHome = () => {
    const moviesData = useSelector((store)=>store.movie.moviesResult)
    const {results} = moviesData;

    // the componenet will render after getting data from API
    if(moviesData==="") return null 
  return (
    <div>
        <div className='text-white font-extrabold text-xl opacity-75'>Trending Movies</div>
        <div>
            <div className='flex gap-2 overflow-scroll bg-red-500 w-screen h-[350px] items-center'>
                {results.map((item)=><MovieCard film = {item} key = {item.id}/>)}
            </div>
        
        </div>
        

    </div>
  )
}

export default MoviesHome
// This component will export to Browse compenent