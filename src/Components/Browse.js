import React from 'react'
import MoviesHome from './MoviesHome';
import TvHome from './TvHome';
import useTv from '../CustomHooks/useTv'
import useMovies from '../CustomHooks/useMovies';
import usePeople from '../CustomHooks/usePeople';
import PeopleHome from './PeopleHome';



const Browse = () => {
  useMovies();
  useTv();
  usePeople();

  
  return (
    <div className="w-full bg-gradient-to-br from-black to-gray-900 p-4 pb-10">
        {/* Sessions Movies */}
        <MoviesHome />
        {/* Session TV Shows */}
        <TvHome />
        {/* Session People */}
        <PeopleHome />

    </div>
  )
}

export default Browse