import React, { useState } from 'react'
import MultiRangeSlider from "multi-range-slider-react";




const ReleaseYear = () => {
  const [minValue, setMinValue] = useState(1990);
  const [maxValue, setMaxValue] = useState(2024);
  const [minValue2, setMinValue2] = useState(0);
  const [maxValue2, setMaxValue2] = useState(0);
  const handleInput = (e) => {
    // Ensure minValue can only go up to maxValue - 1, and maxValue can only go down to minValue + 1
    if (e.minValue <= maxValue - 1 && e.maxValue >= minValue + 1) {
      setMinValue(e.minValue);
      setMaxValue(e.maxValue);
    }
  };
  return (
    <div className='flex flex-col items-center w-screen  mt-4 text-white px-3'>
      <div className='w-screen h-10'>
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
          minValue={minValue}
          maxValue={maxValue}
          barLeftColor='#606060'
          barRightColor='#606060'
          barInnerColor='#A0A0A0'
          onInput={handleInput}

          onChange={(e) => {
            if (e.maxValue - e.minValue >= 1) {
              setMinValue2(e.minValue);
              setMaxValue2(e.maxValue);
            }
          }}
          style={
            {
              border:'none',
              borderRadius:'0',
              boxShadow:'none',
              background:"green"
            }
          }
        ></MultiRangeSlider>
      </div>
      <h1>min:{minValue}</h1>
      <h1>min2:{minValue2}</h1>

    </div>
  )
}

export default ReleaseYear