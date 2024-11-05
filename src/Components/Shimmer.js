import React from 'react'

const Shimmer = () => {
  return (
    // <div className='w-screen h-screen bg-violet-600 text-white flex justify-center items-center'>Shimmer Loding...</div>
    <div className='w-screen h-screen bg-violet-600 text-white -ml-4 -mt-5'>
      <br></br>
      <div className='w-[200px] h-[35px] bg-gray-500 rounded-lg'></div>
      <div className = 'w-[100%] flex justify-center gap-3 mt-1'>
        <div className = 'w-[150px] h-[225px] bg-gray-500 rounded-xl sm:w-[160px] sm:h-[235px] md:w-[170px] md:h-[260px] lg:w-[190px] lg:h-[270px] xl:w-[200px] xl:h-[280px]'></div>
        <div className = 'w-[150px] h-[225px] bg-gray-500 rounded-xl sm:w-[160px] sm:h-[235px] md:w-[170px] md:h-[260px] lg:w-[190px] lg:h-[270px] xl:w-[200px] xl:h-[280px]'></div>
        <div className = 'w-[150px] h-[225px] bg-gray-500 rounded-xl sm:w-[160px] sm:h-[235px] md:w-[170px] md:h-[260px] lg:w-[190px] lg:h-[270px] xl:w-[200px] xl:h-[280px]'></div>
        <div className = 'w-[150px] h-[225px] bg-gray-500 rounded-xl sm:w-[160px] sm:h-[235px] md:w-[170px] md:h-[260px] lg:w-[190px] lg:h-[270px] xl:w-[200px] xl:h-[280px]'></div>
        
      </div>


    </div>

  )
}

export default Shimmer