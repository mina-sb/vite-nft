import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import shape1 from '../../../assets/shape-1.png'


const CreateStep = () => {
  return (
    <div className="bg-white relative border rounded-lg px-8 py-8 hover:py-6 duration-1000 cursor-pointer group">
         <img src={shape1} class="absolute -right-4 -top-5 w-20 h-20" />
         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            STEP-1
         </p>
         <h5 class="mt-10 text-2xl font-semibold  text-gray-900 group-hover:text-sky-500  duration-1000">
          Noteworthy
        </h5>
        <p class="mt-3 font-normal text-gray-500">Powerful features and inclusions, which makes Nuron standout, easily customizable and scaleble. </p>
        <AiOutlineArrowRight class="mt-6 font-semibold text-2xl text-gray-500 group-hover:text-sky-500  duration-1000" />
    </div>
  )
}

export default CreateStep