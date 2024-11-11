//  this component willl show the detailed explanation of the selected movie.
import React, { useState } from 'react'
import useDetailsMovie from '../CustomHooks/useDetailsMovie';
import { useSelector } from 'react-redux'
import { useMovieVideo } from '../CustomHooks/useMovieVideo';
import DetailsHeader from './DetailsHeader';
import DetailsOverview from './DetailsOverview';
import Trailer from './Trailer';
import DetailsMovieShimmer from './DetailsMovieShimmer';

const DetailsMovie = (props) => {
    
    const [loading, setLoading] = useState(false); // state variable using to play the trailer
    const movie_details = useSelector((store) => store.movie.movieDetails);
    const trailer_key = useSelector((store) => store.movie.videoKey); // key value of the trailer
    const { movieId } = props;
    const { poster_path, title, genres, production_companies, overview, original_name } = movie_details
    useDetailsMovie(movieId); // api callinf for detailed movie info
    useMovieVideo(movieId); // api calling for trailer

    console.log("movie_details",movie_details);

    if (movie_details === "") return <DetailsMovieShimmer />;

    return (
        <div className='w-screen min-h-screen py-20 bg-gradient-to-br from-slate-800 to-red-950 flex flex-col items-center gap-5
                        sm:flex sm:flex-col  sm:items-start sm:py-20
        '>
            <DetailsHeader data={{ 'poster_path': poster_path, 'genres': genres, 'title': title, 'original_name': original_name }} />
            <div className='w-screen flex flex-col items-center gap-5'>
                <DetailsOverview data={overview} />
                <button
                    className='w-[75%] h-[50px] bg-slate-100 font-semibold opacity-80 text-gray-800 rounded-full sm:w-[50%] lg:w-[40%] xl:w-[30%]'
                    onClick={() => setLoading(true)}
                >
                    Play Trailer
                </button>
                {loading && <Trailer data={trailer_key} />}

                <h1 className='font-semibold text-xl underline underline-offset-2 text-white opacity-70'>Production Companies</h1>
                <div className='flex flex-col items-center'>
                    {production_companies.map(
                        (item) => <h1 className='text-sm text-white opacity-70' key={item.id}>{item.name}</h1>
                    )}
                </div>
            </div>
        </div>
    )
}
export default DetailsMovie