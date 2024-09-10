import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard'



const TvHome = () => {
    const tvData = useSelector((store)=>store.movie.tvResults)
    const {results} = tvData;

    // the componenet will render after getting data from API
    if(tvData==="") return null 
  return (
    <div>
        <div className='text-white font-extrabold text-xl opacity-75'>Popular TV Shows</div>
        <div>
            <div className='flex gap-2 mt-3 overflow-scroll'>
                {results.map((item)=><MovieCard film = {item}/>)}
            </div>
        
        </div>
        

    </div>
  )
}

export default TvHome
// This component will export to Browse compenent