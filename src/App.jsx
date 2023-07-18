import { useState } from 'react'
import MainHeader from './shared/components/Navigation/MainHeader'
import Main from './shared/components/Main'
import Bids from './shared/components/Bids'
import CreateNFTSteps from './shared/components/CreateNFTSteps'
import NeweItems from './shared/components/NeweItems'

function App() {
  return (
    <>
     <MainHeader />
     <Main />
     <Bids />
     <CreateNFTSteps />
     <NeweItems />
    </>
  )
}

export default App
