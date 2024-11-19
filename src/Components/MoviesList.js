//  Parent component: Movies.js
import React from 'react'
import { POSTER_URL, NO_IMAGE } from '../Constants/apiKey'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MoviesList = (props) => {
    const { poster_path } = props.data;
    return (
        <div className='overflow-hidden rounded-xl w-[150px] h-[225px]
                      sm:w-[160px] sm:h-[235px]
                      md:w-[170px] md:h-[260px]
                      lg:w-[190px] lg:h-[270px]
                      xl:w-[230px] xl:h-[310px]'>
            {
                poster_path ?
                <LazyLoadImage 
                    src = { POSTER_URL+poster_path} 
                    alt="movie poster"
                    className='rounded-xl hover:scale-105 transition-transform duration-600 w-[100%] h-[100%]'
                    afterLoad={()=>console.log("done loading")}
                /> :
                (
                    <img src={NO_IMAGE} alt="no poster available"
                        className='rounded-xl hover:scale-105 transition-transform duration-600 w-[100%] h-[100%]'
                    />
                )  // End of ternary operator for poster_path condition.
            }
        </div>
    )
}

export default MoviesList