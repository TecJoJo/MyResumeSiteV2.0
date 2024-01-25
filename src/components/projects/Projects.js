import React from 'react'
import  "../../static/projects.css"
import useTargetDiv from "../../hooks/useTargetDiv"
import SingleProject from './SingleProject'
import resume from "../../sources/projectsScreenShots/resumeWebsite.png"
import gallery from "../../sources/projectsScreenShots/gallery.png"
function Projects() {

  const targetDiv = useTargetDiv()
  
 
  return (
    <div ref={targetDiv} id='projects' className='projects-container'>
      <SingleProject img={resume} isDarkBackGround={false}/>
      <SingleProject img={gallery} isDarkBackGround={true}/>
    </div>
  )
}

export default Projects