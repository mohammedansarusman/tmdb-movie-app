import React from 'react'
import { useSelector } from 'react-redux'
import usePeople from '../CustomHooks/usePeople';
import MovieCard from './MovieCard';
import { Link } from'react-router-dom';
import { POSTER_URL,NO_IMAGE } from '../Constants/apiKey';


const DetailsPerson = (props) => {
    const {pId} = props;
    console.log("person",pId)
    usePeople() // fetch people data on component mount
    
    const data = useSelector((store)=>store.movie.peopleResults)
    const {results} = data;

    console.log("person",data)

    if(data==="") return null
    const person = results.find((persons)=>persons.id===parseInt(pId));
    const {profile_path,name,known_for,known_for_department} = person;
    return (
        <div className='w-screen min-h-screen py-20 bg-gradient-to-br from-slate-800 to-red-950 flex flex-col items-center gap-5
        sm:flex sm:flex-col  sm:items-center sm:py-20'>
            {console.log(profile_path)}
            <div className='flex flex-col items-center py-6 w-screen sm:flex-row sm:items-center sm:justify-center sm:gap-5 '>
                {profile_path ? <img src = {POSTER_URL+profile_path} alt="img"
                    className='w-[170px] rounded-lg sm:w-[200px] lg:w-[210px]'
                    />
                :
                <img src = {NO_IMAGE} alt="img"
                    className='w-[170px] rounded-lg sm:w-[200px] lg:w-[210px]'
                />}


                <h1 className='text-3xl font-bold text-white opacity-70 sm:text-4xl text-center'>{name}</h1>
            </div>
            
            <h1 className='text-xl font-bold text-white opacity-70 sm:text-2xl text-center'>Known for {known_for_department}</h1>
            <div>
            <div className='flex gap-3 overflow-scroll  items-center
                             sm:h-[275px]
                             md:h-[300px]
                             lg:h-[310px]
                             xl:h-[320px]
            '>
                {
                  known_for.map(
                    (item)=>(
                      <Link to = {`/details/${item.media_type}/${item.id}`} key = {item.id } >
                          <MovieCard film = {item} key = {item.id}/>
                      </Link>
                  ))
                }
            </div>
        </div>
            {console.log(person?.name)}
        </div>
    )
}

export default DetailsPerson