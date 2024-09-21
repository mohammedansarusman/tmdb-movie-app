//  this component willl show the detailed explanation of the selected movie.
import React, {useState} from 'react'
import useDetailsMovie from '../CustomHooks/useDetailsMovie';
import { useSelector } from 'react-redux'
import Shimmer from './Shimmer';
import { POSTER_URL } from '../Constants/apiKey';
import { useMovieVideo } from '../CustomHooks/useMovieVideo';

const DetailsMovie = (props) => {
    const [line,setLine] = useState('line-clamp-2');
    const [loading, setLoading] = useState(false); // state variable using to play the trailer
    const movie_details = useSelector((store) => store.movie.movieDetails);
    const genres_text = [];
    const trailer_key = useSelector((store)=>store.movie.videoKey);
    const { movieId } = props;
    const { poster_path, title, genres, production_companies,overview } = movie_details
    useDetailsMovie(movieId); // api callinf for detailed movie info
    useMovieVideo(movieId); // api calling for trailer

    const handleMore = () =>{
        setLine('line-clamp-5');
    }

    if (movie_details === "") return <Shimmer />;
    genres.map((item)=>genres_text.push(item.name))

    return (
        <div className='w-screen min-h-screen py-20 bg-gradient-to-br from-slate-800 to-red-950 flex flex-col items-center gap-5
                        sm:flex sm:flex-col  sm:items-start sm:py-20
        '>
            <div className='flex flex-col items-center sm:w-screen sm:gap-10 sm:flex-row sm:justify-center sm:items-center'>
                <img className='w-[170px] rounded-lg sm:w-[200px] lg:w-[210px]'
                     src={POSTER_URL + poster_path} alt='Movie'
                />
                <div className='flex flex-col items-center sm:flex sm:flex-col sm:items-start'>
                    <h1 className='text-3xl font-bold text-white opacity-70 sm:text-4xl'>{title}</h1>
                    <h1 className='opacity-50 text-white'>{genres_text.join(" | ")}</h1>
                </div>
            </div>
            <div className='flex flex-col items-center gap-5'>
                <div className='w-[90%] flex flex-col items-center'>
                    <p className={`${line} font-light text-white text-center lg:text-xl`}>{overview}</p>
                    {
                        line==='line-clamp-2' && 
                            <p className='text-orange-400 font-semibold cursor-pointer lg:hidden'
                                onClick = {handleMore}
                            >more..
                            </p> 
                    }    
                    {    line==='line-clamp-5' &&  <p className='text-orange-400 font-semibold cursor-pointer lg:hidden '
                                onClick = {()=>setLine('line-clamp-2')}
                            >less..
                            </p> 
                    }
                </div>
                <button 
                    className='w-[75%] h-[50px] bg-slate-100 font-semibold opacity-80 text-gray-800 rounded-full sm:w-[50%] lg:w-[40%] xl:w-[30%]'
                    onClick = {() =>setLoading(true)}
                >
                    Play Trailer
                </button>
                { loading &&
                    (<div className='w-[89%] sm:w-[70%] lg:w-[60%] xl:w-[50%]'>
                        <iframe 
                                className='w-full aspect-video rounded-lg'
                                src={"https://www.youtube.com/embed/"+trailer_key+"?autoplay=1&mute=1&controls=1"} 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" 
                                allowfullscreen>
                        </iframe>
                    </div>)
                }

                <h1 className='font-semibold text-xl underline underline-offset-2 text-white opacity-70'>Production Companies</h1>
                <div className='flex flex-col items-center'>
                    {production_companies.map(
                    (item)=><h1 className = 'text-sm text-white opacity-70' key={item.id}>{item.name}</h1>
                )}
                </div>
            </div> 
        </div>
    )
}
export default DetailsMovie