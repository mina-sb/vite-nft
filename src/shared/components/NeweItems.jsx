import React from 'react'
import Card from './UIelements/Card'

const NeweItems = () => {
  return (
    <section class="bg-gray-100 mx-auto py-20 px-16 md:px-12 lg:px-28">
    <h3 className='font-bold text-4xl'>Newest Items</h3>
    <div class= "grid auto-cols-auto sm:grid-cols-2 lg:grid-cols-3 w-full gap-8 my-10" >
    <Card />
    <Card />
    <Card />
    <Card /> <Card /> 
  </div>
  </section>
  )
}

export default NeweItems