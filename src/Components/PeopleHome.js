import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom';



const PeopleHome = () => {
    const peopleData = useSelector((store) => store.movie.peopleResults)
    const { results } = peopleData;

    // the componenet will render after getting data from API
    if (peopleData === "") return null
    return (
        <div className='mt-2'>
            <div className='text-white font-extrabold text-xl opacity-75'>Popular Peoples</div>
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

export default PeopleHome