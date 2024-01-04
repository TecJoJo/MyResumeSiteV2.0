import React from "react";
import { navLinks } from "./links";
import { NavLink } from "react-router-dom";
import SplitLine from "./seperateLine/SeperateLine";
import languageIcon from "../../sources/icons/earth.svg";
import "../../static/header.css"
import CVIcon from "../icons/CVIcon";
import cv from "../../sources/YaoLuCV.pdf"
function Navbar() {
  return (
    <nav className=" container-fluid   bg-body border-bottom ">
      <div className="row justify-content-between align-items-center ">
        <div className=" col-6 ">
          <ul style={{marginBottom:"0"}} className="d-flex  flex-row  align-content-center list-unstyled  ">
            {navLinks.map((link, index) => {
              return (
                <li key={index} className=" text-decoration-none">
                  <NavLink
                    to={link.url}
                    className="d-flex justify-content-center align-items-center nav-link  "
                  >

                    <div className="d-flex align-items-center ">
                    <div>
                        <small>{link.name}</small>
                      </div>
                      
                      <div className="me-1"><link.icon className={"header-icon"}/></div>
                      <SplitLine/>
                    </div>
                  </NavLink>
                </li>
              );
            })}
            <li className=" text-decoration-none">
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
                </li>
          </ul>
        </div>
        <h4 className="col-md-4 d-md-block   d-none  text-nowrap hand-writing gradient-text-by">Practice makes perfect</h4>
        <div className=" d-flex align-items-center col-2 justify-content-end ">
          <img className="header-icon"   src={languageIcon} alt="language Icon" />
          <p className="btn btn-outline-dark  m-0 p-0 small ">EN</p>
        </div>
      
      </div>
    </nav>
  );
}


{
  /* <nav className="navbar navbar-expand-lg bg-body-tertiary ro">
      
      <div>
        <ul className="nav  flex-row ">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={`/${link.name}`}
                  className=" d-flex  justify-content-center  align-items-center nav-link  "
                >
                  <div className=" d-flex  ">
                    <div className=" me-1">{link.img}</div>
                    <div>
                      <h3>{link.name}</h3>
                    </div>
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="d-flex align-items-center">
        <img className="header-icon" src={languageIcon} alt="language Icon" />
        <p className="mb-0">EN</p>
      
    </div>
  </nav> */
}

export default Navbar;