// Parent component  -  index.js
import React, { useEffect } from 'react'

import MoviesHome from './MoviesHome';
import TvHome from './TvHome';
import PeopleHome from './PeopleHome';

import useTv from '../CustomHooks/useTv'
import useMovies from '../CustomHooks/useMovies';
import usePeople from '../CustomHooks/usePeople';

import Shimmer from './Shimmer';
import { useSelector, useDispatch } from 'react-redux';
import { addMovieDetails } from '../ReduxStore/moviesSlice'



const Browse = () => {
  const dispatch = useDispatch();
  
  // Custom hooks for API calling
  useMovies(); // Trending movies
  useTv();  // Popular TV shows
  usePeople(); // Popular peoples

  useEffect(
    ()=>{
      dispatch(addMovieDetails(""))},[]
      // reason - Once u selected any movie card and navigate to another movie card. the shimmer component should execute between these time frame.
  )
  
  //  retrieve data fro redux store
  const mov = useSelector((store)=>store.movie.moviesResult)
  const tv = useSelector((store)=>store.movie.tvResults)
  const peo = useSelector((store)=>store.movie.peopleResults)

  if(!mov  || !tv || !peo) return  <Shimmer />
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