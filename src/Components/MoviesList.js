//  Parent component: Movies.js
// Click on Menu button from the 
import React from 'react'
import { POSTER_URL } from '../Constants/apiKey'

const MoviesList = (props) => {
    const { poster_path } = props.data;
    return (
        <div className='w-[180px] xl:w-[240px] overflow-hidden rounded-lg '>
            <img
                src={POSTER_URL+poster_path}
                alt="movie"
                className='hover:scale-105 transition-transform duration-600 w-[100%] h-[100%]'
            />
            
        </div>
    )
}

export default MoviesList