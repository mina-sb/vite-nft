import React from 'react'
import Card from './UIelements/Card'
import CreateStep from './UIelements/CreateStep'

const CreateNFTSteps = () => {
  return (
    <section className=" bg-gray-100 mx-auto py-5 px-4 md:px-12 lg:px-28">
          <h3 className='font-bold text-4xl'>Create and sell your NFTs</h3>
          <div class= "grid auto-cols-auto sm:grid-cols-2 lg:grid-cols-3 w-full gap-8 my-10">
          <CreateStep />
          <CreateStep />
          <CreateStep />
          <CreateStep />

          </div>
      </section>
  )
}

export default CreateNFTSteps