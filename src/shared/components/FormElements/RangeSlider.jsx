import React from 'react'
import MultiRangeSlider from "multi-range-slider-react";
import './RangeSlider.css'

const RangeSlider = () => {
    const inputHandler = (e) => {
        console.log(e.minValue);
        console.log(e.maxValue);
    };
    
  return ( 
    <MultiRangeSlider  className="slider w-full multi-range-slider" ruler="false" label="false"
    min={10}
    max={500}
    step={5}
    minValue={200}
    maxValue={320}
    onInput={(e) => {
        inputHandler(e);
    }}></MultiRangeSlider>
  )
}

export default RangeSlider