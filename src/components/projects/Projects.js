import React, { useEffect, useRef, useState } from 'react'
import  "../../static/projects.css"



function Projects() {
    const div1 = useRef(null)
    const div2 = useRef(null)
    const div3 = useRef(null)
    const div4 = useRef(null)
    const [nav1Active, setNav1Active] = useState(false)
    const [nav2Active, setNav2Active] = useState(false)
    const [nav3Active, setNav3Active] = useState(false)
    const [nav4Active, setNav4Active] = useState(false)
    const handleScroll = (e)=>{
        console.log(e);
        
        const value = Number(e.target.innerText)
        console.log(value);
        const divs =  document.querySelectorAll(".projects-container-right .projects-box ")
        console.log(divs);
        const index = value-1
        console.log(index);
        divs[index].scrollIntoView({behavior:'smooth'})
    }   
    
    const observer1 = new IntersectionObserver((entries)=>{
        
        setNav1Active(entries[0].isIntersecting)
        

    },{threshold:0.5})
    const observer2 = new IntersectionObserver((entries)=>{
        
        setNav2Active(entries[0].isIntersecting)
        

    },{threshold:0.5})
    const observer3 = new IntersectionObserver((entries)=>{
        
        setNav3Active(entries[0].isIntersecting)
        

    },{threshold:0.5})
    const observer4 = new IntersectionObserver((entries)=>{
        
        setNav4Active(entries[0].isIntersecting)
        

    },{threshold:0.5})
    useEffect(()=>{

    
        observer1.observe(div1.current)
        observer2.observe(div2.current)
        observer3.observe(div3.current)
        observer4.observe(div4.current)
        return ()=>{
            
            observer1.disconnect()
            observer2.disconnect()
            observer3.disconnect()
            observer4.disconnect()
        }
    })

   

    
  return (
    <div className='projects-main-container'>
        <section className='projects-container-left'>
            <div onClick={handleScroll} className={nav1Active&&"highlight"} ><p>1</p></div>
            <div onClick={handleScroll} className={nav2Active&&"highlight"} ><p>2</p></div>
            <div onClick={handleScroll} className={nav3Active&&"highlight"} ><p>3</p></div>
            <div onClick={handleScroll} className={nav4Active&&"highlight"}><p >4</p></div>
            
        </section>
        <section className='projects-container-right' >
            <div ref={div1} id='first' className="projects-box" style={{backgroundColor:"blue"}}><div>1</div></div>
            <div ref={div2} id='second' className="projects-box" style={{backgroundColor:"red"}}><div>2</div></div>
            <div ref={div3} id='third' className="projects-box" style={{backgroundColor:"yellow"}}><div>3</div></div>
            <div ref={div4} id='forth'  className="projects-box" style={{backgroundColor:"green"}}><div>4</div></div>
        </section>
    </div>
  ) 
}

export default Projects