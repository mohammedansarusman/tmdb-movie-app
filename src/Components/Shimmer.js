import React from 'react'
import HomeShimmer from './HomeShimmer'
// Calling from <Browse />

const Shimmer = () => {
  return (
    <div className='w-screen bg-gradient-to-br from-slate-900 to-gray-700 text-white relative py-20 pl-5'>
      <br></br>
      {/* Heading Shimmer */}
      <div className='w-[200px] h-[35px] bg-gray-500 rounded-lg'></div>
      <div className='flex overflow-scroll mt-3'>
        <HomeShimmer />
      </div>
      <br></br>
      <div className='w-[200px] h-[35px] bg-gray-500 rounded-lg'></div>
      <div className='flex overflow-scroll mt-3'>
        <HomeShimmer />
      </div>
      <br></br>
      <div className='w-[200px] h-[35px] bg-gray-500 rounded-lg'></div>
      <div className='flex overflow-scroll mt-3'>
        <HomeShimmer />
      </div>
    </div>
  )
}

export default Shimmer