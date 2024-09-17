//  this component willl show the detailed explanation of the selected movie.
import React, {useState} from 'react'
import useDetailsMovie from '../CustomHooks/useDetailsMovie';
import { useSelector } from 'react-redux'
import Shimmer from './Shimmer';
import { POSTER_URL } from '../Constants/apiKey';

const DetailsMovie = (props) => {
    const [line,setLine] = useState(2);
    const [loading, setLoading] = useState(false);
    const movie_details = useSelector((store) => store.movie.movieDetails);
    const genres_text = [];
    // const production_text = [];
    const { movieId } = props;
    const { poster_path, title, genres, production_companies,overview } = movie_details
    useDetailsMovie(movieId);
    console.log(movie_details);

    if (movie_details === "") return <Shimmer />;
    genres.map((item)=>genres_text.push(item.name))

    
    return (
        <div className='w-screen min-h-screen py-20 bg-gradient-to-br from-slate-800 to-red-950 flex flex-col items-center gap-5'>
            <img
                className='w-[170px]'
                src={POSTER_URL + poster_path}
                alt='Movie'
            />

            
            <h1 className='text-3xl font-bold text-white opacity-70'>{title}</h1>
            <h1 className='opacity-50 text-white'>{genres_text.join(" | ")}</h1>

            <div className={`w-[90%] flex flex-col items-center`}>
                <p className={`line-clamp-${line} font-light text-white`}>{overview}</p>
                {
                    line===2 ? 
                        <p className='text-orange-400 font-semibold cursor-pointer'
                            onClick = {()=>setLine(5)}
                        >more..
                        </p> 
                    : 
                        <p className='text-orange-400 font-semibold cursor-pointer '
                            onClick = {()=>setLine(2)}
                        >less..
                        </p> 
                }
            </div>
            <button 
                className='w-[75%] h-[50px] bg-slate-100 font-semibold opacity-80 text-gray-800 rounded-full'
                onClick = {() =>setLoading(true)}
            >
                Play Trailer
            </button>
            {loading &&
                <div className='w-[90%] h-[220px] bg-gray-500'>

                </div>
                }

            <h1 className='font-semibold text-xl underline underline-offset-2 text-white opacity-70'>Production Companies</h1>
            <div className='flex flex-col items-center'>
                {production_companies.map(
                (item)=><h1 className = 'text-sm text-white opacity-70' key={item.id}>{item.name}</h1>
            )}
            </div>
            
        </div>
    )
}

export default DetailsMovie