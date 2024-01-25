import React from 'react'
import  "../../static/projects.css"
import useTargetDiv from "../../hooks/useTargetDiv"
import SingleProject from './SingleProject'
import resume from "../../sources/projectsScreenShots/resumeWebsite.png"
import gallery from "../../sources/projectsScreenShots/gallery.png"
import {resume as resumeMessage,photoGallery} from "./messages"
function Projects() {

  const targetDiv = useTargetDiv()
  
 
  return (
    <div ref={targetDiv} id='projects' className='projects-container'>
      <SingleProject img={resume} isDarkBackGround={false} title={resumeMessage.title} description={resumeMessage.description}/>
      <SingleProject img={gallery} isDarkBackGround={true} title={photoGallery.title} description={photoGallery.description}/>
    </div>
  )
}

export default Projects