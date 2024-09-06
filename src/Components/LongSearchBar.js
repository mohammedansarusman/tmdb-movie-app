import React from 'react'
import { FaSearch } from "react-icons/fa";

const LongSearchBar = () => {
  return(
    <div className='hidden 
                    xl:hidden
                    lg:flex lg:bg-white lg:w-[95%] lg:h-[67%] lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-full lg:flex-row lg:justify-between'>
        <input 
            type="text" 
            className="w-[100%] h-full bg-transparent focus:outline-none text-slate-50 bg-red-600 rounded-l-full" 
            placeholder="Search for movies..."
        />
        <FaSearch className="text-black size-10"/>
    </div> 
  )
}
export default  LongSearchBar