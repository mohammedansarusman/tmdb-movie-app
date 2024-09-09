import React from 'react'
import { POSTER_URL } from '../Constants/apiKey';

const MovieCard = (props) => {
  const { title, poster_path } = props.film;
  return (
    <div className='w-[150px] h-[275px] rounded-t-xl'>
        <img 
            src={POSTER_URL+poster_path} 
            alt="movie poster"
            className='rounded-xl'
        />
        <div 
            className='text-white text-sm w-[150px]'>
            {title}
        </div>
        <div className='text-white text-xs'>Release Date</div>
    </div>
  )
}

export default MovieCard
// This compenent 'MovieCard' will implement in MovieHome Component