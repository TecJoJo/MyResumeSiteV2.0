import React from 'react'
import Landing from "./Landing"
import Company from './Company'
import StackCarousel from './StackCarousel'
import Contact from '../Contact'
import About from "../About"
import InfoBar from './InfoBar'
import Projects from '../projects/Projects'
function HomeContainer() {
  return (
    <>
    {/* <InfoBar/> */}
    <Landing/>
    <About/>
    <Company/>
    <StackCarousel/>
    <Projects/>
    <Contact/>
    </>
    
  )
}

export default HomeContainer