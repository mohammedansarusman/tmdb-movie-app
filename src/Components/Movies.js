import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useMovies from '../CustomHooks/useMovies'
import Shimmer from './Shimmer'
import MoviesList from './MoviesList'
import { addMoviePage } from '../ReduxStore/moviesSlice'
import { Link } from 'react-router-dom'
import ProvidersMovie from './ProvidersMovie'

const Movies = () => {
  const moviesData = useSelector((store) => store.movie.moviesResult)
  const moviePage = useSelector((store) => store.movie.moviePage)
  useMovies();
  const dispatch = useDispatch();
  const { results, page, total_pages } = moviesData;

  const previousPage = () => {
    moviePage > 1 && dispatch(addMoviePage(moviePage - 1))
  }
  const nextPage = () => {
    moviePage < total_pages && dispatch(addMoviePage(moviePage + 1))
  }

  // the componenet will render after getting data from API
  if (moviesData === "") return <Shimmer />

  return (
    <div className='w-screen min-h-screen py-20 bg-gradient-to-br from-slate-800 to-red-950 flex flex-col items-center'>
      {/* Movie Providers logo */}
      {<ProvidersMovie />}
      <div className=' flex flex-wrap px-2 gap-5 justify-center'>
        {results.map((item) =>
          <Link to={`/details/${item.media_type}/${item.id}`} key={item.id}>
            <MoviesList data={item} key={item.id} />
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