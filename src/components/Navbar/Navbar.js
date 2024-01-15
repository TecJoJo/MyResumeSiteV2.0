import React from "react";
import { navLinks } from "./links";
import { NavLink } from "react-router-dom";
import SplitLine from "./seperateLine/SeperateLine";
import languageIcon from "../../sources/icons/earth.svg";
import "../../static/header.css"
import CVIcon from "../icons/CVIcon";
import cv from "../../sources/YaoLuCV.pdf"
import { useState, useEffect } from "react";
import brush from "../../sources/brushBlueCentered2.png"
import blackBrush from "../../sources/blackStroke111.png"
function Navbar({setUserLanguage}) {

  //I want a custom hook to: 
  //return the ref of the divs to the right section 
  //useTargetDiv return {projects:<div>projects</div>}

  //I also need a custom hook to monitor the intersection state of the divs
  //useSectionOnScreen
  //return OnScreenDivName: string 
  

  //with this i can highlight the active button 
  // <img src={brush} className={(link.name===OnScreenDivName)&&"active"} alt="brush background" />

  const [languageSelectionsIsOpen,setLanguageSelectionsIsOpen] = useState(false)
  const [language,SetLanguage] = useState("EN")

  const toggleLanguageSelections = ()=>{
    setLanguageSelectionsIsOpen(!languageSelectionsIsOpen)
  }

  const handleLanguageSelection = (e)=>{
    console.log(e);
    const pickedLanguage = e.target.innerText
    SetLanguage(pickedLanguage)
    
  }

  const handleScrollDestination = ()=>{

  }

  useEffect(()=>{
    setUserLanguage(language)
  },[language])

  const languageBtns = [
    "EN","FI","ZH"

  ]

  const visibleBtns = languageBtns.filter((btn)=>btn === language )

  return (
    <nav className="header-bar container-fluid   bg-body border-bottom ">
      <div className="row justify-content-between align-items-center ">
        <div className="  col-md-6 ">
          <ul style={{marginBottom:"0"}} className="d-flex  flex-row  align-content-center list-unstyled  ">
            {navLinks.map((link, index) => {
              return (
                <li key={index} className=" text-decoration-none">
                  <button
                    // to={link.url} used to be navLink, after redesign the react dom is not going to be used any more, the multiple page design is not cool
                    onClick={handleScrollDestination}
                    className="d-flex justify-content-center align-items-center nav-link position-relative header-button "
                  >
                    <img src={brush}  alt="brush background" />
                    <div className="d-flex align-items-center ">
                    <div>
                        <small>{link.name}</small>
                      </div>
                      
                      <div className="me-3"><link.icon className={"header-icon"}/></div>
                      {/* <SplitLine/> */}
                    </div>
                  </button>
                </li>
              );
            })}
            {/* <li className=" text-decoration-none">
                  <div
                    
                    className="d-flex justify-content-center align-items-center nav-link  "
                  >
                    <a href={cv} download="YaoLuCV.pdf" className=" text-decoration-none ">
                    <div className="d-flex align-items-center ">
                      
                    <div>
                        <small>CV</small>
                      </div>
                      
                      <div className="me-1"><CVIcon className={"header-icon"}/></div>
                      <SplitLine/>
                    </div>
                    </a>
                  </div>
                </li> */}
          </ul>
        </div>
        <h4 className="col-md-4 d-md-block   d-none  text-nowrap hand-writing gradient-text-by">Practice makes perfect</h4>
        <div className=" d-flex align-items-center col-md-2 justify-content-start ">
          <img className="header-icon"   src={languageIcon} alt="language Icon" />
          <div className=" btn-group" onClick={toggleLanguageSelections}>
            {
            languageSelectionsIsOpen?
            languageBtns.map((btn)=>{
              return <p key={btn} onClick={handleLanguageSelection} className="btn btn-outline-dark  m-0 p-0 small languagebtn">{btn}</p>
            })
            :
            visibleBtns.map((btn)=>{
              return <p key={btn} className="btn btn-outline-dark  m-0 p-0 small languagebtn ">{btn}</p>
            })
            }
          </div>
        </div>  
      
      </div>
    </nav>
  );
}


export default Navbar;
