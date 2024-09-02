import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useSelector,useDispatch } from 'react-redux';
import {changeColor} from '../ReduxStore/themeSlice';


const NavigationBar = () => {
  const searchBarColor = useSelector((store)=>store.theme.searchColor);
  const dispatch = useDispatch();
  console.log(searchBarColor);
  return (
    <div>
      {console.log("rendering")}
        <div className="lg:w-full lg:h-[60px] lg:bg-green-500 lg:flex lg:px-[3%]
          md:bg-blue-500 md:h-[60px] md:flex md:px-[3%]">
        {/* navigation 70% started */}
        <div className="w-[70%] h-full flex flex-row justify-between items-center">
          <div className='flex w-[50%] items-center'>
            <h1 className="text-3xl font-bold text-red-500 pl-2">F</h1>
            <h1 className="text-center text-3xl font-bold text-white ">ilm</h1>
            <h1 className="text-3xl font-bold text-red-500 pl-2">F</h1>
            <h1 className="text-center text-3xl font-bold text-white ">low</h1>
            {/* Search bar */}
            <div 
              className={`lg:w-[300px] lg:h-7 lg:rounded-full ${searchBarColor} lg:ml-2 lg:flex lg:justify-between lg:items-center lg:px-3
                md:w-[200px] md:h-7 md:rounded-full ${searchBarColor} md:ml-2 md:flex md:justify-between md:items-center md:px-3`}
              onFocus={()=>dispatch(changeColor('bg-rose-800'))}
              onBlur={()=>dispatch(changeColor('bg-slate-700'))}
              
            >
                <input 
                  type="text"
                  className="w-[90%] bg-transparent focus outline-none text-slate-50"
                />
                <FaSearch className = "text-slate-100 cursor-pointer"/>
            </div>
          </div>
          <div className="w-[60%] text-slate-300 font-bold flex items-center justify-around ">
            <h1>Home</h1>
            <h1>Movies</h1>
            <h1>TV Shows</h1>
            <h1>People</h1>
          </div>
        </div>
        {/* Navigation bar 30% ended */}
        <div className="w-[30%] h-full flex items-center justify-end">
          <div className="w-[40px] h-[40px] bg-rose-800 rounded-full text-white flex items-center justify-center font-extrabold">A</div>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar