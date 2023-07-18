import React from 'react'
import Seller from '../components/Seller'

const TopSeller = () => {
  return (
    <section class=" bg-gray-100 mx-auto  px-4 md:px-12 lg:px-28">
          <h3 class='font-bold text-4xl'>Top Seller in <span class="text-sky-500">1 day</span></h3>
          <div class="h-4 mb-10">
          </div>
          <div class= "grid auto-cols-auto sm:grid-cols-2 lg:grid-cols-4 w-full gap-16">
             <Seller />
             <Seller />
             <Seller />
             <Seller />
             <Seller />
             <Seller />
             <Seller />
             <Seller />
             <Seller />
             <Seller />
          </div>
      </section>
  )
}

export default TopSeller