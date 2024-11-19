import React from 'react'
import useDetailsTv from '../CustomHooks/useDetailsTv'
import { useSelector, useDispatch } from 'react-redux';
import DetailsHeader from './DetailsHeader';
import DetailsOverview from './DetailsOverview';
import { useState, useEffect } from'react';
import useTvVideo from '../Constants/useTvVideo';
import Trailer from './Trailer';
import DetailsMovieShimmer from './DetailsMovieShimmer';
import { addTvDetails } from '../ReduxStore/moviesSlice'

const DetailsTv = (props) => {
    const dispatch = useDispatch();
    useEffect(
        ()=>{dispatch(addTvDetails(""))},[]
    )
  
    const { tvId } = props;
    const [loading, setLoading] = useState(false); // state variable using to play the trailer

    const results = useSelector(store=>store.movie.tvDetails)
    const trailer_key = useSelector((store)=>store.movie.videoKey); // key value of the trailer
    const { poster_path, title, genres, production_companies,overview, original_name } = results;

    useDetailsTv(tvId)
    useTvVideo(tvId) // api calling for trailer


    if (results === "") return <DetailsMovieShimmer />;

    return (
        <div className='w-screen min-h-screen py-20 bg-gradient-to-br from-slate-800 to-red-950 flex flex-col items-center gap-5
                        sm:flex sm:flex-col  sm:items-start sm:py-20
        '>
            <DetailsHeader data = {{'poster_path': poster_path,'genres':genres,'title':title,'original_name':original_name}}/>
            <div className='w-screen flex flex-col items-center gap-5'>
                <DetailsOverview data={overview}/>
                <button 
                    className='w-[75%] h-[50px] bg-slate-100 font-semibold opacity-80 text-gray-800 rounded-full sm:w-[50%] lg:w-[40%] xl:w-[30%]'
                    onClick = {() =>setLoading(true)}
                >
                    Play Trailer
                </button>
                { loading && <Trailer data = {trailer_key} /> }
                <h1 className='font-semibold text-xl underline underline-offset-2 text-white opacity-70'>Production Companies</h1>
                <div className='flex flex-col items-center'>
                    {
                        production_companies.map(
                            (item)=>
                                <h1 className = 'text-sm text-white opacity-70' key={item.id}>{item.name}</h1>
                        )
                    }
                </div>    
            </div>
        </div>    
    )
}

export default DetailsTv