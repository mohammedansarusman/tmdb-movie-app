import React, { useState } from 'react'
import useProviders from "../CustomHooks/useProviders"
import { useSelector } from 'react-redux';
import { POSTER_URL } from '../Constants/apiKey';
const ProvidersMovie = () => {

    useProviders();
    const providers_data = useSelector((store) => store.movie.providers)
    const { results } = providers_data;
    console.log("..", results)
    const [transValue,setTransValue] = useState(0)

    if (providers_data === "") return null
    const x = results.slice(0,200);

    return (
        <div>
            <div className='w-screen h-[75px] flex  mb-5 bg-blue-500 items-center  relative'>
                    <button 
                        className='w-10 bg-red-500  top-1/2 left-0 -translate-y-1/2 z-10 absolute'
                        onClick={
                            ()=>setTransValue(transValue-1350)
                        }
                    >Left</button>
                    <button className='w-10 bg-red-500 absolute top-1/2 -translate-y-1/2 right-0 z-10'
                         onClick={
                            ()=>setTransValue(transValue+500)
                        }       
                    >Right</button>
                    <div className='overflow-scroll bg-green-700 w-screen h-[70%]'>
                        <div 
                    className='flex transition-transform duration-1000 ease-out  gap-6 px-10 bg-green-400 '
                    style={{ transform: `translateX(${transValue}px)`}}
                >
                    {x.map((pro)=><img src={POSTER_URL+pro.logo_path}  key = {pro.provider_id} className='w-11 h-11 object-contain rounded-xl'/>)}
                </div>
                    </div>
                
                
            </div>
        </div>
    )
}

export default ProvidersMovie

// https://image.tmdb.org/t/p/w220_and_h330_face/zXu75uIAMgdblYvFFPzoIHmQhxa.jpg
