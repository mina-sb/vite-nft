import React from 'react'
import portfolio from '../../../assets/portfolio-06.jpg'
import client1 from '../../../assets/client-1.png'
import client2 from '../../../assets/client-4.png'
import client3 from '../../../assets/client-11.png'
import { MdMoreHoriz } from "react-icons/md";
import { FaRegHeart} from "react-icons/fa";
import {item} from './Card.module.css'


const Card = () => {
  return (
    <div className={`${item}   bg-white border  border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700`}>
    <a href="#" className=' bg-white '>
      <div className="overflow-hidden mt-1.5 z-50 mx-1.5 rounded-md">
        <img
          class="rounded-t-lg w-full mx-auto hover:scale-110 transition duration-500  ease-in"
          src={portfolio}
          alt=""
        />
      </div>
    </a>
    <div class="p-5 bg-white rounded-lg">
      <div className='flex justify-between mb-2 items-center'>
            <ul className='flex relative'>
                <li>
                   <img src={client1} className="w-7 h-7 rounded-full hover:scale-125 hover:cursor-pointer duration-100" /> 
                </li>
                <li>
                   <img src={client2} className="w-7 h-7 rounded-full absolute left-5 hover:scale-125 hover:cursor-pointer duration-100" /> 
                </li>
                <li>
                   <img src={client3} className="w-7 h-7 rounded-full  absolute left-10 hover:scale-125 hover:cursor-pointer duration-100" /> 
                </li> 
                </ul>
                <span className="text-gray-500 text-xs">12+ Place Bit.</span>
                <MdMoreHoriz className="text-gray-500 bg-white text-4xl hover:text-white  hover:rounded-full p-2 hover:bg-sky-500 hover:cursor-pointer duration-100" />
        
      </div>
      <a href="#">
        <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Noteworthy
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest 
      </p>
      <div className='flex justify-between items-center'>
          <span className='text-sky-500  font-bold'>0.2128wETE</span>
          <div className='text-sm flex items-center text-gray-500 hover:text-white hover:rounded-lg py-0.5 px-1	 hover:bg-sky-500 cursor-pointer duration-1000'>
            <FaRegHeart  />
           <span className='ml-1'>
            90
          </span>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Card