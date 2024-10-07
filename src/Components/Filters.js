import React from 'react'
import { FaFilter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useSelector, useDispatch } from'react-redux';
import { changeScreen } from '../ReduxStore/filterSlice';

// <IoIosArrowUp />
// <IoIosArrowDown />


const Filters = () => {
  const dispatch = useDispatch();  
  return (
    <div className='text-gray-500 w-screen h-[30px]  flex justify-around'>
        <div 
            className='flex items-center justify-center  w-[20%] cursor-pointer bg-blue-800'
            onClick = {()=>{
                dispatch(changeScreen(0))
                console.log("hello")
            }}
        >
            <FaFilter className='w-3 h-4' />  {/* Filter Icon */}
            <h1>Filters</h1>
        </div>
        <div className='flex items-center w-[80%] justify-end'>
            {/* <div> */}
                <button className='w-[100px] h-[25px]  text-gray-500 hover:bg-black font-semibold'>x RESET</button>
            {/* </div> */}
            
        </div>
    </div>
  )
}

export default Filters

{/* <div className='flex items-center'>
                <h1>Release Year</h1>
                <IoIosArrowDown />
            </div>
            <div className='flex items-center'>
                <h1>Rating</h1>
                <IoIosArrowDown />
            </div>
            <div className='flex items-center'>
                <h1>Genre</h1>
                <IoIosArrowDown />
            </div> */}