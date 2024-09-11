import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard'


const PeopleHome = () => {
    const peopleData = useSelector((store) => store.movie.peopleResults)
    const { results } = peopleData;

    // the componenet will render after getting data from API
    if (peopleData === "") return null
    return (
        <div>
            <div className='text-white font-extrabold text-xl opacity-75'>Popular Peoples</div>
            <div>
                <div className='flex gap-2 mt-3 overflow-scroll'>
                    {results.map((item) => <MovieCard film={item} key={item.id} />)}
                </div>
            </div>
        </div>
    )
}

export default PeopleHome