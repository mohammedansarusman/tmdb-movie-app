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
        <div className='text-white font-extrabold text-xl opacity-75 w-full mt-2'>Trending Movies</div>
        <div>
            <div className='flex gap-3 overflow-scroll  w-screen h-[280px] items-center
                             sm:h-[275px]
                             md:h-[300px]
                             lg:h-[310px]
                             xl:h-[320px]
            '>
                {results.map((item)=><MovieCard film = {item} key = {item.id}/>)}
            </div>
        </div>
        

    </div>
  )
}

export default MoviesHome
// This component will export to Browse compenent