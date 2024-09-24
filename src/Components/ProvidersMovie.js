import React from 'react'
import useProviders from "../CustomHooks/useProviders"
import { useSelector } from 'react-redux';
import { POSTER_URL, NO_IMAGE } from '../Constants/apiKey';
const ProvidersMovie = () => {

    useProviders();
    const providers_data = useSelector((store) => store.movie.providers)
    const { results } = providers_data;
    console.log("..", results)
    if (providers_data === "") return null
    return (
        <div>
            <div className='w-screen h-[100px] flex overflow-scroll mb-5 bg-blue-500 items-center relative'>
                <h1 className='text-white text-xl font-bold absolute top-0 left-0'>Providers</h1>
                <div className='flex transition-transform duration-1000 ease-out  gap-3 px-5 bg-green-400'>
                    {results.map((pro)=><img src={POSTER_URL+pro.logo_path} className='w-11 h-11 object-contain rounded-xl'/>)}
                </div>
            </div>
        </div>
    )
}

export default ProvidersMovie

// https://image.tmdb.org/t/p/w220_and_h330_face/zXu75uIAMgdblYvFFPzoIHmQhxa.jpg
