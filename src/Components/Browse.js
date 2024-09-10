import React from 'react'
import MoviesHome from './MoviesHome';
import TvHome from './TvHome';
import useTv from '../CustomHooks/useTv'
import useMovies from '../CustomHooks/useMovies';



const Browse = () => {
  useMovies();
  useTv();

  
  return (
    <div className="w-full bg-gradient-to-br from-black to-gray-900 p-4">
        {/* Sessions Movies */}
        <MoviesHome />
        {/* Session TV Shows */}
        <TvHome />
        {/* Session People */}

    </div>
  )
}

export default Browse