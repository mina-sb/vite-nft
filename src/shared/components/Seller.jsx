import React from 'react'
import client1 from '../../assets/client-1.png'

const Seller = () => {
  return (
    <div class="flex items-center relative justify-center group mt-5">
         <img src={client1} className="w-14 h-14 left-0 absolute rounded-full  duration-1000 group-hover:scale-125 hover:cursor-pointer" /> 
         <div class="absolute left-14 pl-3">
         <h5 class=" text-xl font-semibold tracking-tight text-gray-900 hover:text-sky-500 cursor-pointer">
         Methods
        </h5>
        <p class="font-normal text-gray-500 ">
        $2100,000
      </p>
            </div>
            <span class="text-6xl absolute left-40  group-hover:text-4xl ml-8   duration-1000 font-bold tracking-tight text-gray-300">5</span>
    </div>
  )
}

export default Seller