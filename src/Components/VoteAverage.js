import React from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { useSelector, useDispatch } from "react-redux";
import { changeStartRating, changeEndRating, changeStartRating2, changeEndRating2 } from "../ReduxStore/filterSlice";

const VoteAverage = () => {
  const dispatch = useDispatch();
  const startrating = useSelector((store)=>store.filterItem.startRating)
  const endrating = useSelector((store)=>store.filterItem.endRating)

  const handleInput = (e) => {
    dispatch(changeStartRating(e.minValue));
    dispatch(changeEndRating(e.maxValue));
  };

  return (
    <div className="flex flex-col items-center w-screen  mt-4 text-white px-3">
      <div className="w-screen h-10">
        <h1 className="">Voting average</h1>
      </div>
      {/*  here we will call the slider for starting and ending year */}
      <div className="w-[100%]">
        <MultiRangeSlider
          // disabled={true}
          min={0}
          max={10}
          label={false}
          ruler={false}
          step={1}
          minValue={startrating}
          maxValue={endrating}
          barLeftColor="#606060"
          barRightColor="#606060"
          barInnerColor="#A0A0A0"
          onInput={handleInput}
          onChange={(e) => {
            dispatch(changeStartRating2(e.minValue))
            dispatch(changeEndRating2(e.maxValue));
          }}
          style={{
            border: "none",
            borderRadius: "0",
            boxShadow: "none",
            background: "none",
          }}
        ></MultiRangeSlider>
      </div>
    </div>
  );
};

export default VoteAverage;
