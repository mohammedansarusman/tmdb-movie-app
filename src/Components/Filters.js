import React from 'react'
import { FaFilter } from "react-icons/fa";
import { useDispatch } from'react-redux';
import { changeScreen, changeStartYear, changeEndYear, changeStartYear2, changeEndYear2, changeStartRating, changeEndRating, changeStartRating2, changeEndRating2 } from '../ReduxStore/filterSlice';
import { addMoviePage } from '../ReduxStore/moviesSlice';
const Filters = () => {
  const dispatch = useDispatch();  
  const handleReset = ()=>{
    dispatch(changeStartYear(1990));
    dispatch(changeEndYear(2024));
    dispatch(changeStartYear2(1990));
    dispatch(changeEndYear2(2024));
    dispatch(changeStartRating(0));
    dispatch(changeEndRating(10));
    dispatch(changeStartRating2(0));
    dispatch(changeEndRating2(10));
    dispatch(addMoviePage(1));
  }

  return (
    <div className='text-gray-500 w-screen h-[30px]  flex justify-around px-5 bg-gray-500'>
        <div 
            className='flex items-center justify-center  w-[50%] cursor-pointer  text-white hover:text-orange-500'
            onClick = {()=>{
                dispatch(changeScreen(0))
            }}
        >
            <FaFilter className='w-3 h-4' />  {/* Filter Icon */}
            <h1>Filters</h1>
        </div>
        <div className='flex items-center w-[50%] justify-center'>
            <button 
                className='w-[100px]  text-white hover:text-orange-500'
                onClick={handleReset}
            >X Reset</button>
        </div>
    </div>
  )
}

export default Filters

