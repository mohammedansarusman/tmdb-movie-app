import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useFilterMovies from '../CustomHooks/useFilterMovies'
import MoviesList from './MoviesList'
import useProviders from "../CustomHooks/useProviders"


import { addMoviePage, addMovieDetails } from '../ReduxStore/moviesSlice'
import { changeScreen } from '../ReduxStore/filterSlice'

import { Link } from 'react-router-dom'
import ProvidersMovie from './ProvidersMovie'
import Filters from './Filters'
import ReleaseYear from './ReleaseYear'
import VoteAverage from './VoteAverage'
import MovieShimmer from './MovieShimmer'

const Movies = () => {
  const dispatch = useDispatch();
  
  useEffect(()=>{dispatch(addMovieDetails(""))},[])
  
  const moviesData = useSelector((store) => store.movie.moviesResult)
  const moviePage = useSelector((store) => store.movie.moviePage)
  const pos = useSelector((store) => store.filterItem.position)
  const movieProviders = useSelector((store) =>store.movie.providers)

  useFilterMovies();
  useProviders();

  
  const { results, total_pages } = moviesData;

  const previousPage = () => {
    moviePage > 1 && dispatch(addMoviePage(moviePage - 1))
  }
  const nextPage = () => {
    moviePage < total_pages && dispatch(addMoviePage(moviePage + 1))
  }
  // the componenet will render after getting data from API
  if(moviesData==='' || movieProviders==="") return  <MovieShimmer />

  return (
    <div className='w-screen min-h-screen py-20 bg-gradient-to-br from-slate-800 to-red-950 flex flex-col items-center relative'>
      <div className={
        `flex flex-col justify-start w-screen h-screen bg-gray-800  z-10 top-0 fixed transition-all duration-1000 ease-out
         lg:w-[50%] xl:w-[40%]`
      }
        style={{ left: `-${pos}%` }}
      >
        <div className='bg-blue-600 w-screen h-[50px] flex justify-between items-center px-2 lg:w-[100%]'>
          <h1 className='text-white opacity-55 text-2xl'>Filters</h1>
          <div className='w-[90%] h-[25px] text-right text-green-400 cursor-pointer'
            onClick={() => {
              dispatch(changeScreen(100))
              // call custom hook for fetching data
            }}>
            Done
          </div>
        </div>
        <ReleaseYear />
        <VoteAverage />

      </div>

      {/* Movie Providers logo */}
      {<ProvidersMovie />}
      {/* Filters */}
      <Filters />
      {/* Movie List */}
      <div className=' flex flex-wrap px-2 gap-5 justify-center mt-[70px]'>
        {results.map((item) =>
          <Link to={`/details/${item.id}`} key={item.id}>
            <MoviesList data={item}/>
          </Link>
        )}
      </div>

      {/* previous page and next page */}
      <footer className='flex justify-between items-center w-[80%] mt-4 text-white font-semibold text-xs'>
        <div className={`p-2 rounded-full  ${moviePage === 1 ? 'bg-gray-500 opacity-50' : ('bg-gray-500 cursor-pointer hover:scale-105')}`}
          onClick={previousPage}
        >
          <p>Previous Page</p>
        </div>
        <div className={`p-2 rounded-full ${moviePage === total_pages ? 'bg-gray-500 opacity-50' : ('bg-gray-500 cursor-pointer hover:scale-105')}`}
          onClick={nextPage}
        >
          <p>Next Page</p>
        </div>
      </footer>
    </div>
  )
}

export default Movies