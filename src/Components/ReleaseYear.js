import React from 'react'
import MultiRangeSlider from "multi-range-slider-react";
import { FaBorderNone } from 'react-icons/fa';
import { useSelector,useDispatch } from 'react-redux';
import { changeStartYear, changeEndYear, changeStartYear2, changeEndYear2 } from '../ReduxStore/filterSlice';
// <ReleaseYear /> calling from <Movies />


const ReleaseYear = () => {
  
  const startYearValue = useSelector((store)=>store.filterItem.startYear);
  const endYearValue = useSelector((store)=>store.filterItem.endYear);
  const dispatch = useDispatch();


  const handleInput = (e) => {
      dispatch(changeStartYear(e.minValue))
      dispatch(changeEndYear(e.maxValue))
  };
  return (
    <div className='flex flex-col items-center w-screen  mt-4 text-white px-3 lg:w-[100%]'>
      <div className='w-screen h-10 lg:w-[100%]'>
        <h1 className=''>Release year</h1>
      </div>
      {/*  here we will call the slider for starting and ending year */}
      <div className='w-[100%]'>
        <MultiRangeSlider
          // disabled={true}
          min={1990}
          max={2024}
          label={false}
          ruler={false}
          step={1}
          minValue={startYearValue}
          maxValue={endYearValue}
          barLeftColor='#606060'
          barRightColor='#606060'
          barInnerColor='#A0A0A0'
          onInput={handleInput}

          onChange={(e) => {
              dispatch(changeStartYear2(e.minValue));
              dispatch(changeEndYear2(e.maxValue));
          }}
          style={
            {
              border:'none',
              borderRadius:'0',
              boxShadow:'none',
              background:'none',
            }
          }
        ></MultiRangeSlider>
      </div>
    </div>
  )
}

export default ReleaseYear