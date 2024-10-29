import React from 'react'
import { FaFilter } from "react-icons/fa";
import { useDispatch } from'react-redux';
import { changeScreen, changeStartYear, changeEndYear, changeStartYear2, changeEndYear2, changeStartRating, changeEndRating, changeStartRating2, changeEndRating2 } from '../ReduxStore/filterSlice';

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
  }
  return (
    <div className='text-gray-500 w-screen h-[30px]  flex justify-around'>
        <div 
            className='flex items-center justify-center  w-[20%] cursor-pointer bg-blue-800'
            onClick = {()=>{
                dispatch(changeScreen(0))
            }}
        >
            <FaFilter className='w-3 h-4' />  {/* Filter Icon */}
            <h1>Filters</h1>
        </div>
        <div className='flex items-center w-[80%] justify-end'>
            <button 
                className='w-[100px] h-[25px]  text-gray-500 hover:bg-black font-semibold'
                onClick={handleReset}
            >x RESET</button>
        </div>
    </div>
  )
}

export default Filters

