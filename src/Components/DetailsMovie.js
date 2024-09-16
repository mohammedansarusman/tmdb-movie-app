//  this component willl show the detailed explanation of the selected movie.
import React from 'react'
import useDetailsMovie from '../CustomHooks/useDetailsMovie';
import { useSelector } from 'react-redux'
import Shimmer from './Shimmer';
import { POSTER_URL } from '../Constants/apiKey';

const DetailsMovie = (props) => {
    const movie_details = useSelector((store) => store.movie.movieDetails);
    const genres_text = [];
    const production_text = [];
    const { movieId } = props;
    const { poster_path, title, genres, production_companies,overview } = movie_details
    useDetailsMovie(movieId);
    console.log(movie_details);

    if (movie_details === "") return <Shimmer />;
    genres.map((item)=>genres_text.push(item.name))

    
    return (
        <div className='w-screen py-20 bg-gradient-to-br from-slate-800 to-red-950 flex flex-col justify-center items-center overflow-y-hidden'>
            <img
                className='w-[170px]'
                src={POSTER_URL + poster_path}
                alt='Movie'
            />

            <h1 className='text-3xl font-bold text-white'>{title}</h1>
            <p>{overview}</p>

            <h1>{genres_text.join(" | ")}</h1>
            <h1>Production Companies</h1>
            {production_companies.map(
                (item)=><h1>{item.name}</h1>
            )}
        </div>
    )
}

export default DetailsMovie