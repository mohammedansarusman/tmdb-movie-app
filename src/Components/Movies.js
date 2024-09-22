import React from 'react'
import { useSelector } from 'react-redux'
import useMovies from '../CustomHooks/useMovies'
import Shimmer from './Shimmer'
import MoviesList from './MoviesList'

const Movies = () => {
  useMovies();
  const moviesData = useSelector((store) => store.movie.moviesResult)
  const {results} = moviesData;
  // console.log("Movies",results)

  // the componenet will render after getting data from API
  if(moviesData==="") return <Shimmer />
  
  return (
    <div className='w-screen min-h-screen py-20 bg-gradient-to-br from-slate-800 to-red-950 flex flex-col items-center'>
      <div className=' flex flex-wrap px-2 gap-2 justify-center'>
        {results.map((item)=><MoviesList data = {item} key={item.id}/>)}
      </div>
    </div>
  )
}

export default Movies