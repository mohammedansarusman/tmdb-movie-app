import React, { useEffect } from 'react'
import { API_OPTION, MOVIES_URL } from '../Constants/apiKey'


const Browse = () => {
  const fetchMovies = async () => {
    const response = await fetch(MOVIES_URL,API_OPTION)
    const data = await response.json()
    console.log("result",data)
  } 
  useEffect(()=>{fetchMovies()},[]) 
  return (
    <div className = "w-full h-[100vh] bg-gradient-to-br from-black to-gray-900"></div>
  )
}

export default Browse