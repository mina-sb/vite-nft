import React from 'react'
import './RangeSlider.css'
import MultiRangeSlider from "multi-range-slider-react";

const RangeSlider = () => {
    const inputHandler = (e) => {
        console.log(e.minValue);
        console.log(e.maxValue);
    };
  return ( 
    <MultiRangeSlider class="w-full" className="slider multi-range-slider" ruler="false" label="false"
    min={10}
    max={500}
    step={5}
    minValue={200}
    maxValue={320}
    onInput={(e) => {
        inputHandler(e);
    }}
    
></MultiRangeSlider>
  )
}

export default RangeSlider