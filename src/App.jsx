import { useState } from 'react'
import MainHeader from './shared/components/Navigation/MainHeader'
import Main from './shared/components/Main'
import Bids from './shared/components/Bids'
import CreateNFTSteps from './shared/components/CreateNFTSteps'

function App() {
  return (
    <>
     <MainHeader />
     <Main />
     <Bids />
     <CreateNFTSteps />
    </>
  )
}

export default App
