import React from 'react'
import  "../../static/projects.css"
import useTargetDiv from "../../hooks/useTargetDiv"
function Projects() {

  const [targetDiv,targetDivs] = useTargetDiv()
  
  console.log(targetDivs);
  return (
    <div ref={targetDiv} id='projects' className='projects-container'>Projects</div>
  )
}

export default Projects