import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { changeColor, changeSearchBar, changeInputValue } from '../ReduxStore/themeSlice';
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { GiTv } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import LongSearchBar from './LongSearchBar';

const NavigationBar = () => {
  const searchBarColor = useSelector((store) => store.theme.searchColor);
  const longSearchBarWidth = useSelector((store) => store.theme.longSearchBar);
  const searchInput = useSelector((store) => store.theme.inputValue) || "";
  const dispatch = useDispatch();
  
  const handleFocus = () => {
    dispatch(changeColor('bg-gray-950'));
    dispatch(changeSearchBar(true))
  };
  const handleBlur = () => {
    dispatch(changeColor('bg-black'))
  }
  return (
    <div className=''>
      <div className='w-full h-[1px] bg-orange-300'></div>
      <div className="w-full h-[60px] bg-black flex-row items-center px-[3%] relative
                    sm:w-full sm:h-[60px] sm:flex-row sm:items-center sm:px-[3%] sm:relative
                    lg:w-full lg:h-[60px] lg:flex lg:justify-center lg:px-[3%]lg:bg-blue-500
                    xl:w-full xl:h-[60px]xl:flex-row xl:justify-center xl:px-[3%]">
        {/* Logo - search bar - username */}
        <div className="w-[100%] h-full flex justify-between items-center
                        lg:w-full lg:h-full
                        xl:w-full xl:flex xl:justify-center xl:items-center"
        >
          <div className='w-[20%] flex items-center
                          lg:bg-black lg:w-[13%]
          '>
            <h1 className="text-2xl font-bold text-red-500">F</h1>
            <h1 className="text-center text-2xl font-bold text-white ">ilm</h1>
            <h1 className="text-2xl font-bold text-red-500 pl-2">F</h1>
            <h1 className="text-center text-2xl font-bold text-white ">low</h1>
          </div>
          {/* Search bar */}
          <div
            className={`w-[50%] h-7 rounded-full ${searchBarColor} flex justify-center items-center  hover:bg-gray-700
                        sm:w-[50%] sm:h-7 sm:ml-5 sm:rounded-full ${searchBarColor} sm:flex sm:justify-center sm:items-center  sm:hover:sm:bg-gray-700
                        lg:w-[37%] lg:h-7 lg:rounded-full ${searchBarColor} lg:ml-2 lg:flex lg:justify-between lg:items-center lg:px-3
                        xl:w-[50%] xl:h-7 xl:rounded-full ${searchBarColor} xl:ml-2 lg:flex xl:justify-between xl:items-center xl:px-3`}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <input
              type="text"
              className="w-[90%] bg-transparent focus outline-none text-slate-50 px-2"
              value={searchInput}
              onChange={(event) => dispatch(changeInputValue(event.target.value))}
            />
            <FaSearch className="text-slate-400 cursor-pointer" />
          </div>
          {/* Navigation Bar  - Home - Movies - People */}
          <div className="w-full  bg-black text-white flex justify-around items-center bottom-0 right-0 fixed
                          sm:w-full sm:bg-black sm:text-white sm:flex sm:justify-around sm:items-center sm:bottom-0 sm:right-0 sm:fixed
                          lg:w-[50%] lg:ml-5  lg:text-slate-300 lg:font-semibold lg:flex lg:items-center lg:justify-around lg:static
                          xl:w-[50%] xl:text-slate-300 xl:font-bold xl:flex xl:items-center xl:justify-around xl:static
          ">
            {/* Home Button */}
            <div className='flex flex-col items-center p-3 cursor-pointer hover:text-orange-400
                            lg:px-4 lg:h-[35px]  lg:rounded-full lg:hover:bg-white lg:hover:text-black lg:flex-row lg:justify-center lg:items-center lg:gap-1
                            xl:px-4 xl:h-[40px]  xl:rounded-full xl:hover:bg-white xl:hover:text-black xl:flex-row xl:justify-center xl:items-center xl:gap-1'>
              <GoHome className='text-2xl lg:text-xl' />
              <h1 className='text-xs lg:text-sm xl:text-base '>Home</h1>
            </div>
            {/* Movie Button */}
            <div className='flex  flex-col items-center p-3 cursor-pointer hover:text-orange-400
                            lg:px-3 lg:h-[35px] lg:rounded-full lg:hover:bg-white lg:hover:text-black lg:flex-row lg:justify-center lg:items-center lg:gap-1
                            xl:px-4 xl:h-[40px] xl:rounded-full xl:hover:bg-white xl:hover:text-black xl:flex-row xl:justify-center xl:items-center xl:gap-1'
            >
              <BiCameraMovie className='text-2xl lg:text-xl' />
              <h1 className='lg:text-sm xl:text-base text-xs'>Movies</h1>
            </div>
            {/* TV Shows Button */}
            <div className='flex  flex-col items-center p-3 cursor-pointer hover:text-orange-400
                            lg:px-2 lg:h-[35px] lg:rounded-full lg:hover:bg-white lg:hover:text-black lg:flex-row lg:justify-center lg:items-center lg:gap-1
                            xl:px-4 xl:h-[40px] xl:rounded-full xl:hover:bg-white xl:hover:text-black xl:flex xl:justify-center xl:items-center xl:gap-1'
            >
              <GiTv className='text-2xl lg:text-xl' />
              <h1 className='lg:text-sm xl:text-base text-xs'>TV Shows</h1>
            </div>
            {/* People Button */}
            <div className='flex  flex-col items-center p-3 cursor-pointer hover:text-orange-400
                            lg:px-2 lg:h-[35px] lg:rounded-full lg:hover:bg-white lg:hover:text-black lg:flex-row lg:justify-center lg:items-center lg:gap-1
                            xl:px-4 xl:h-[40px] xl:rounded-full xl:hover:bg-white xl:hover:text-black xl:flex-row xl:justify-center xl:items-center xl:gap-1
            '>
              <IoIosPeople className='text-2xl lg:text-xl' />
              <h1 className='lg:text-sm xl:text-base text-xs'>People</h1>
            </div>
          </div>
          {/* User name */}
          <div className="w-[10%] h-full flex items-center justify-end">
            <div className="w-[40px] h-[40px] bg-rose-800 rounded-full text-white flex items-center justify-center font-extrabold">A</div>
          </div>
        </div>
        {longSearchBarWidth && <LongSearchBar />}
      </div>
    </div>
  )
}
export default NavigationBar