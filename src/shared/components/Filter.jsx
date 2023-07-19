import React, { useState } from 'react'
import DropDown from './FormElements/DropDown'
import RangeSlider from './FormElements/RangeSlider'
import Button from './FormElements/Button'
import {FaFilter} from 'react-icons/fa'


const Filter = () => {
  const[isFilterOpen , setIsFilterOpen] = useState(false);
  const openFilterHandler = () =>{
    setIsFilterOpen(!isFilterOpen);
  }

  return (
    <>
    <div class="flex justify-between items-center">
    <h3 className='font-bold text-4xl'> Explore Product</h3>
    <Button onClick={openFilterHandler} class="mx-0  text-sm md:text-base px-6 py-3  rounded-lg font-semibold md:font-bold bg-sky-500 hover:bg-gray-900">
       <span class="flex items-center">Filter <FaFilter class="ml-2" /></span>
    </Button>
    </div>
    {isFilterOpen ?    <div>

<div class=" w-full border-b-2 my-10"></div>
<div class="flex flex-wrap w-full justify-between items-start">
<div  class="basis-1/2 lg:basis-1/5 pr-6 py-1" > 
<label class="text-gray-500 text-xs block">LIKES</label>
    <DropDown />
   </div>  
   <div  class="basis-1/2 lg:basis-1/5 pr-6 py-2"> 
   <label class="text-gray-500 text-xs block">CATEGORY</label>
    <DropDown />
   </div> 
   <div  class="basis-1/2 lg:basis-1/5 pr-6 py-2"> 
   <label class="text-gray-500 text-xs  block">COLLECTIONS</label>
    <DropDown />
   </div> 
   <div  class="basis-1/2 lg:basis-1/5 pr-6 py-2"> 
   <label class="text-gray-500 text-xs block">SALE TYPE</label>
    <DropDown />
   </div> 
   <div  class="basis-1/2 lg:basis-1/5 pr-6 py-2"> 
   <label class="text-gray-500 text-xs block">PRICE RANGE
</label>
   <RangeSlider class="pt-0" />
  <div class="flex justify-between w-full py-1">
    <span class="text-gray-500 text-xs font-medium">Price : 70$</span>
    <span class="p-0.5 px-2 text-xs rounded-md font-semibold cursor-pointer text-white bg-sky-500 hover:bg-gray-700">FILTER</span>
            </div>
           
       <br />
</div>
</div>
</div> : ''}  
   
     </>
  )
}

export default Filter