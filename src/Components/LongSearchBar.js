import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useRef,useEffect } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { changeInputValue } from '../ReduxStore/themeSlice';

const LongSearchBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  console.log("input ref",inputRef.current);
  const searchInput = useSelector((store) => store.theme.inputValue);

  useEffect(()=>{
      inputRef.current.focus();
      console.log("input ref focused")
    },[]
  )
  
  return (
    <div className='hidden 
                    xl:hidden
                    lg:flex lg:bg-white lg:w-[95%] lg:h-[67%] lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-full lg:flex-row lg:justify-between lg:items-center'>
      <input
        type="text"
        className="lg:w-[100%] lg:h-full  lg:focus:outline-none lg:text-black lg:bg-red-600 lg:rounded-l-full lg:px-5"
        placeholder="Search for movies..."
        ref={inputRef}
        value={searchInput}
        onChange={(event)=>dispatch(changeInputValue(event.target.value))}
      />
      <FaSearch className="text-black size-6" />
    </div>
  )
}
export default LongSearchBar