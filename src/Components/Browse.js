import React from 'react'
import MoviesHome from './MoviesHome';
import TvHome from './TvHome';
import useTv from '../CustomHooks/useTv'
import useMovies from '../CustomHooks/useMovies';
import usePeople from '../CustomHooks/usePeople';
import PeopleHome from './PeopleHome';
import Shimmer from './Shimmer';
import { useSelector } from 'react-redux';



const Browse = () => {

  useMovies();
  useTv();
  usePeople();
  
  return (
    <div className="w-screen bg-gradient-to-br from-slate-900 to-gray-700 pt-20 px-4 pb-20">
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