import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useRef,useEffect } from 'react';
import { useSelector, useDispatch } from'react-redux';
import { changeInputValue,changeSearchBar } from '../ReduxStore/themeSlice';

const LongSearchBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  console.log("input ref",inputRef.current);
  const searchInput = useSelector((store) => store.theme.inputValue);

  useEffect(()=>inputRef.current.focus(),[])

  const handleFocus = ()=> {
      dispatch(changeSearchBar(true));
  }
  const handleBlur = ()=> {
      dispatch(changeSearchBar(false));
      console.log("Im going hell")
  }
  return (
    <div className='xl:hidden
                    lg:flex lg:bg-white lg:w-[95%] lg:h-[67%] lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:rounded-full lg:flex-row lg:justify-between lg:items-center
                   bg-white w-[95%] h-[40px] absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 rounded-full flex justify-center items-center'
    >
      <input
        type="text"
        className="lg:w-[100%] lg:h-full  lg:focus:outline-none lg:text-black lg:rounded-l-full lg:px-5
                    w-[90%] h-full  focus:outline-none text-black rounded-l-full px-5"
        ref={inputRef}
        value={searchInput}
        onChange={(event)=>dispatch(changeInputValue(event.target.value))}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <FaSearch className="text-black size-5 font-thin" />
      {console.log("render longSearchComponent")}
    </div>
  )
}
export default LongSearchBar