import React, {useState} from 'react'
import MultiRangeSlider from "multi-range-slider-react";

const VoteAverage = () => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(10);
    const [minValue2, setMinValue2] = useState(0);
    const [maxValue2, setMaxValue2] = useState(0);

    const handleInput = (e) => {
        setMinValue(e.minValue);
        setMaxValue(e.maxValue);
    };

    return (
        <div className='flex flex-col items-center w-screen  mt-4 text-white px-3'>
            <div className='w-screen h-10'>
                <h1 className=''>Voting average</h1>
            </div>
            {/*  here we will call the slider for starting and ending year */}
            <div className='w-[100%]'>
                <MultiRangeSlider
                    // disabled={true}
                    min={0}
                    max={10}
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
                            border: 'none',
                            borderRadius: '0',
                            boxShadow: 'none',
                            background: 'none',
                        }
                    }
                ></MultiRangeSlider>
            </div>
        </div>
    )
}

export default VoteAverage