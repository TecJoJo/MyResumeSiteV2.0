import React from 'react'
import { techToolUsed } from './messages'
import figma from "../../sources/stackLogos/figma.png"
import javaScript from "../../sources/stackLogos/JavaScript-logo.png"
import cSharp from "../../sources/stackLogos/c-sharp-c-logo-02F17714BA-seeklogo.com.png"
import cypress from "../../sources/stackLogos/cypress-logo.svg"
import django from "../../sources/stackLogos/django-logo-positive.png"
import redux from "../../sources/stackLogos/redux.png"
import react from "../../sources/stackLogos/react.png"
import typeScript from "../../sources/stackLogos/typescript.png"
import python from "../../sources/stackLogos/python-logo-master-flat.png"

const stackLogos = [
    figma,javaScript,cSharp,cypress,django,redux,react,typeScript,python
]

function StackCarousel() {
  return (
    <>
    <div className=' container-lg '>
        <h2 className=' text-center gradient-text-by'>{techToolUsed}</h2>
        <div className="row  overflow-hidden justify-content-between   ">
            {stackLogos.map((logo,index)=>{
                return <img className=' col-1 object-fit-lg-contain  ' key={index} src={logo} alt="logo" />
            })}
        </div>

    </div>
    </>
  )
}

export default StackCarousel