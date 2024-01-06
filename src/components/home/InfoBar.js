import React from 'react'
import { info1,info2 } from './messages'
import horn from "../../sources/icons/icons8-horn-100.png"

function InfoBar() {
  return (
    <div className='custom-carousel-container container-fluid bg-warning-subtle  '>
        
        <div className="custom-carousel">
        
        <img className = "icon"src={horn} alt="horn" style={{height:"2rem",width:"2rem"}}/>
        {" "}<span>{info1.defaultMessage}</span>

        {" "}<a target= "blank"href="https://welcome-to-yao-website.netlify.app/">Portfolio site V1.0 design&code by Yao Lu</a>
        {" "}<span>{info2.defaultMessage}</span>
        {" "}
        
        
        <img className = "icon"src={horn} alt="horn" style={{height:"2rem",width:"2rem"}}/>
        {" "}<span>{info1.defaultMessage}</span>
        {" "}<a target= "blank"href="https://welcome-to-yao-website.netlify.app/">Portfolio site V1.0 design&code by Yao Lu</a>
        {" "}<span>{info2.defaultMessage}</span>
        {" "}
        </div>
    </div>

  )
}

export default InfoBar