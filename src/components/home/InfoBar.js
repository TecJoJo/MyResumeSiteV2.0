import React from 'react'
import { info1,info2 } from './messages'
import horn from "../../sources/icons/icons8-horn-100.png"
import { FormattedMessage } from 'react-intl'
import "../../static/infobar.css"

function InfoBar() {
  return (
    <div className='custom-carousel-container container-fluid bg-warning-subtle info-bar '>
        
        <div className="custom-carousel-slow">
        
        <img className = "icon"src={horn} alt="horn" style={{height:"2rem",width:"2rem"}}/>
        {" "}<span><FormattedMessage 
                  id={info1.id}     
                  description={info1.description}
                  defaultMessage={info1.defaultMessage}         
                /></span>

        {" "}<a target= "blank"href="https://welcome-to-yao-website.netlify.app/">Portfolio site V1.0 design&code by Yao Lu</a>
        {" "}<span><FormattedMessage 
                  id={info2.id}     
                  description={info2.description}
                  defaultMessage={info2.defaultMessage}         
                /></span>
        {" "}
        
        
        <img className = "icon"src={horn} alt="horn" style={{height:"2rem",width:"2rem"}}/>
        {" "}<span><FormattedMessage 
                  id={info1.id}     
                  description={info1.description}
                  defaultMessage={info1.defaultMessage}         
                /></span>
        {" "}<a target= "blank"href="https://welcome-to-yao-website.netlify.app/">Portfolio site V1.0 design&code by Yao Lu</a>
        {" "}<span><FormattedMessage 
                  id={info2.id}     
                  description={info2.description}
                  defaultMessage={info2.defaultMessage}         
                /></span>
        {" "}
        </div>
    </div>

  )
}

export default InfoBar