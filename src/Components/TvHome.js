// Parent component - Browse
import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom';

const TvHome = () => {
    const tvData = useSelector((store)=>store.movie.tvResults)
    const {results} = tvData;
    if(tvData==="") return null 
  return (
    <div>
        <div className='mt-2 text-white font-extrabold text-xl opacity-75'>Popular TV Shows</div>
        <div>
            <div className='flex gap-3 mt-3 overflow-scroll'>
            {
                  results.map(
                    (item)=>(
                      <Link to = {`/details/${item.media_type}/${item.id}`} key = {item.id } >
                          <MovieCard film = {item} key = {item.id}/>
                      </Link>
                  ))
                }
            </div>
        </div>
    </div>
  )
}
export default TvHome