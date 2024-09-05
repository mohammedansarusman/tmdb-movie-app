import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux';
import {changeColor} from '../ReduxStore/themeSlice';
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { GiTv } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";





const NavigationBar = () => {
  const searchBarColor = useSelector((store)=>store.theme.searchColor);
  const longSearchBarWidth = useSelector((store)=>store.theme.longSearchBar);

  const dispatch = useDispatch();
  console.log(searchBarColor);
  const handleFocus = () =>{
    dispatch(changeColor('bg-rose-800'));
    console.log(window.innerWidth)
    if(window.innerWidth<=1150){

    }
  };
  const handleBlur = () =>{
    dispatch(changeColor('bg-slate-700'))
  }
  return (
    <div>
      {console.log("rendering")}
      <div className="xl:w-full xl:h-[60px] xl:bg-green-500 xl:flex xl:px-[3%]
                    lg:bg-blue-500 lg:h-[60px] lg:flex lg:px-[3%] lg:relative ">
        {/* navigation 70% started */}
        <div className="w-[70%] h-full flex flex-row justify-between gap-5">
          <div className='flex w-[40%] items-center'>
            <h1 className="text-3xl font-bold text-red-500 pl-2">F</h1>
            <h1 className="text-center text-3xl font-bold text-white ">ilm</h1>
            <h1 className="text-3xl font-bold text-red-500 pl-2">F</h1>
            <h1 className="text-center text-3xl font-bold text-white ">low</h1>
            {/* Search bar */}
            <div 
              className={`xl:w-[300px] xl:h-7 xl:rounded-full ${searchBarColor} xl:ml-2 lg:flex xl:justify-between xl:items-center xl:px-3
                          lg:w-[150px] lg:h-7 lg:rounded-full ${searchBarColor} lg:ml-2 lg:flex lg:justify-between lg:items-center lg:px-3`}
              onFocus={handleFocus}
              onBlur={handleBlur}
              
            >
                <input 
                  type="text"
                  className="w-[90%] bg-transparent focus outline-none text-slate-50"
                />
                <FaSearch className = "text-slate-100 cursor-pointer"/>
            </div>
          </div>
          <div className="xl:w-[60%] xl:text-slate-300 xl:font-bold xl:flex xl:items-center xl:justify-around
                          lg:w-[60%] lg:text-slate-300 lg:font-semibold lg:flex lg:items-center lg:justify-around">
            <div className='xl:px-4 xl:h-[40px] xl:bg-red-300 xl:rounded-full xl:hover:bg-white xl:hover:text-black xl:flex xl:justify-center xl:items-center xl:gap-1
                            lg:px-2 lg:h-[35px] lg:bg-red-400 lg:rounded-full lg:hover:bg-white lg:hover:text-black lg:flex lg:justify-center lg:items-center lg:gap-0'>
              <GoHome/>
              <h1 className='lg:text-sm xl:text-base'>Home</h1>
            </div>
            <div className='xl:px-4 xl:h-[40px] xl:bg-red-400 xl:rounded-full xl:hover:bg-white xl:hover:text-black xl:flex xl:justify-center xl:items-center xl:gap-1
                            lg:px-2 lg:h-[35px] lg:bg-red-400 lg:rounded-full lg:hover:bg-white lg:hover:text-black lg:flex lg:justify-center lg:items-center lg:gap-0'>
              <BiCameraMovie />
              <h1 className='lg:text-sm xl:text-base'>Movies</h1>
            </div>
            <div className='xl:px-4 xl:h-[40px] xl:bg-red-400 xl:rounded-full xl:hover:bg-white xl:hover:text-black xl:flex xl:justify-center xl:items-center xl:gap-1
                            lg:px-2 lg:h-[35px] lg:bg-red-400 lg:rounded-full lg:hover:bg-white lg:hover:text-black lg:flex lg:justify-center lg:items-center lg:gap-0'>
              <GiTv />
              <h1 className='lg:text-sm xl:text-base'>TV Shows</h1>
            </div>
            <div className='xl:px-4 xl:h-[40px] xl:bg-red-400 xl:rounded-full xl:hover:bg-white xl:hover:text-black xl:flex xl:justify-center xl:items-center xl:gap-1
                            lg:px-2 lg:h-[35px] lg:bg-red-400 lg:rounded-full lg:hover:bg-white lg:hover:text-black lg:flex lg:justify-center lg:items-center lg:gap-0'>
              <IoIosPeople className=''/>
              <h1 className='lg:text-sm xl:text-base'>People</h1>
            </div>
          </div>
        </div>
        {/* Navigation bar 30% started */}
        <div className="w-[30%] h-full flex items-center justify-end">
          <div className="w-[40px] h-[40px] bg-rose-800 rounded-full text-white flex items-center justify-center font-extrabold">A</div>
        </div>
        {longSearchBarWidth && (<div className='hidden lg:block xl:hidden lg:bg-yellow-300 lg:w-[95%] lg:h-[80%] lg:absolute lg:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:rounded-full'></div>)}
      </div>
    </div>
  )
}

export default NavigationBar