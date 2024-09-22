//  Parent component: Movies.js
// Click on Menu button from the 
import React from 'react'
import { POSTER_URL } from '../Constants/apiKey'

const MoviesList = (props) => {
    console.log("props",props)
    const { poster_path } = props.data;
    return (
        <div className='w-[180px] xl:w-[240px] bg-slate-500 overflow-hidden '>
            <img
                src={'https://image.tmdb.org/t/p/w220_and_h330_face'+poster_path}
                alt="movie"
                className='rounded-xl hover:scale-105 transition-transform duration-600 w-[100%] h-[100%]'
            />
            
        </div>
    )
}

export default MoviesList