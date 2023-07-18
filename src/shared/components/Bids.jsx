import React from 'react'
import Card from './UIelements/Card'

const Bids = () => {
  return (
    <section class="bg-gray-100 mx-auto py-40 px-16 md:px-12 lg:px-28">
    <h3 className='font-bold text-4xl'> Live Bidding</h3>
    <div class= "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 my-10 " >
    <Card />
    <Card />
    <Card />
    <Card /> 
  </div>
  </section>
  )
}

export default Bids