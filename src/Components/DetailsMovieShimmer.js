import React from 'react'

const DetailsMovieShimmer = () => {
  return (
    <div className='w-screen min-h-screen py-20 bg-gradient-to-br from-slate-800 to-red-950 flex flex-col items-center gap-5
                    sm:flex sm:flex-col sm:items-center sm:py-20
    '>
        <div className='flex flex-col items-center gap-2 sm:w-screen sm:gap-10 sm:flex sm:flex-row sm:justify-center'>
            {/* Image shimmer  */}
            <div className='w-[170px] h-[220px] rounded-lg bg-gray-500 sm:w-[200px] sm:h-[250px] lg:w-[210px] lg:h-[260px]'></div>
            <div className='flex flex-col items-center sm:flex sm:flex-col sm:items-start gap-2'>
                {/* Title shimmer  */}
                <div className='bg-gray-500 w-[200px] h-[50px] rounded-lg'></div>
                {/* Sub-head shimmer  */}
                <div className='bg-gray-500 w-[300px] h-[30px] rounded-lg'></div>
            </div>
        </div>
        {/* Overviee shimmer  */}
        <div className='w-[90%] h-[20px] flex flex-col items-center bg-gray-500 rounded-lg'></div>
        {/* trailer play button */}
        <div className='w-[75%] h-[50px]  bg-gray-500 rounded-full sm:w-[50%] lg:w-[40%] xl:w-[30%]'></div>
        <div className='w-[250px] h-[50px] bg-gray-500 rounded-lg'></div>
        <div className='w-[200px] h-[30px] bg-gray-500 rounded-lg'></div>
        <div className='w-[200px] h-[30px] bg-gray-500 rounded-lg'></div>
        <div className='w-[200px] h-[30px] bg-gray-500 rounded-lg'></div>




    </div>
  )
}

export default DetailsMovieShimmer