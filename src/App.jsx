import { useState } from 'react'
import MainNavigation from './shared/components/Navigation/MainNavigation'
import Main from './shared/components/Main'
import Bids from './shared/components/Bids'

function App() {
  return (
    <>
     <MainNavigation />
     <Main />
     <Bids />
    </>
  )
}

export default App
