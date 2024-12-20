import React from 'react'
import { POSTER_URL, NO_IMAGE } from '../Constants/apiKey';

// Calling from  <Details />
const DetailsHeader = (props) => {
  const { poster_path, title, genres, original_name } = props.data;
  const genres_text = [];
  genres.map((item) => genres_text.push(item.name))
  return (
    <div className='flex flex-col items-center sm:w-screen sm:gap-10 sm:flex-row sm:justify-center sm:items-center'>
      {
        poster_path ?
          <img className='w-[170px] rounded-lg sm:w-[200px] lg:w-[210px]'
            src={POSTER_URL + poster_path} alt='Movie'
          /> :
          <img src={NO_IMAGE} alt="img"
            className='w-[170px] rounded-lg sm:w-[200px] lg:w-[210px]'
          />

      }

      <div className='flex flex-col items-center sm:flex sm:flex-col sm:items-start'>
        <h1 className='text-3xl font-bold text-white opacity-70 sm:text-4xl text-center'>{title || original_name}</h1>
        <h1 className='opacity-50 text-white'>{genres_text.join(" | ")}</h1>
      </div>
    </div>
  )
}

export default DetailsHeader