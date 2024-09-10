import React from 'react'
import { POSTER_URL } from '../Constants/apiKey';

const MovieCard = (props) => {
  const { title, poster_path,original_name } = props.film;
  console.log(props.film)
  return (
    <div className='w-[150px] h-[275px] rounded-t-xl'>
      <div className='overflow-hidden rounded-xl'>
        <img 
            src={POSTER_URL+poster_path} 
            alt="movie poster"
            className='rounded-xl hover:scale-105 transition-transform duration-300'
        />
      </div>
        
        <div className='text-white flex items-center text-md font-semibold w-[150px] h-[30px] '>
            <h1 className='truncate'>
              {title || original_name}
            </h1>
        </div>
    </div>
  )
}

export default MovieCard
// This compenent 'MovieCard' will implement in MovieHome Component