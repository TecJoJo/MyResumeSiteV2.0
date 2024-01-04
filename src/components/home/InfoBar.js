import React from 'react'
import { info1,info2 } from './messages'
import horn from "../../sources/icons/icons8-horn-100.png"

function InfoBar() {
  return (
    <div className='custom-carousel-container container-lg bg-warning-subtle  '>
        
        <div className="custom-carousel">
        {" "}<span>{info1}</span>
        <img className = "icon"src={horn} alt="horn" style={{height:"2rem",width:"2rem"}}/>

        {" "}<a target= "blank"href="https://welcome-to-yao-website.netlify.app/">Portfolio site V1.0 design&code by Yao Lu</a>
        {" "}<span>{info2}</span>
        {" "}
        
        {" "}<span>{info1}</span>
        <img className = "icon"src={horn} alt="horn" style={{height:"2rem",width:"2rem"}}/>
        {" "}<a target= "blank"href="https://welcome-to-yao-website.netlify.app/">Portfolio site V1.0 design&code by Yao Lu</a>
        {" "}<span>{info2}</span>
        {" "}
        </div>
    </div>

  )
}

export default InfoBar