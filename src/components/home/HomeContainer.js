import React from 'react'
import Landing from "./Landing"
import Company from './Company'
import StackCarousel from './StackCarousel'
import Contact from '../Contact'
import InfoBar from './InfoBar'
function HomeContainer() {
  return (
    <>
    {/* <InfoBar/> */}
    <Landing/>
    <Company/>
    <StackCarousel/>
    
    </>
    
  )
}

export default HomeContainer