import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLinks } from "./Navbar/links"
import { Link } from "react-router-dom";

import {
  faFacebook,
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { ScrollNavContext } from "../context/ScrollNavContext";
{
  /* <FontAwesomeIcon icon={faFacebookF} className="icon" />
      <FontAwesomeIcon icon={faGithub} className="icon" />
      <FontAwesomeIcon icon={faTwitter} className="icon" /> */
}

function Footer() {
  const {targetDivs,setTargetDivs} = useContext(ScrollNavContext)
  const handleScrollDestination = (targetDivId)=>{
    targetDivs[targetDivId].div.scrollIntoView({behavior:'smooth'})
  }
  return (
    <>
      <section className="footer-control">
        <div className="footer-nav">
          <ul className="footer-list">
          {navLinks.map((link, index) => {
              return (
                <li key={index} className=" text-decoration-none">
                  <button
                    // to={link.url} used to be navLink, after redesign the react dom is not going to be used any more, the multiple page design is not cool
                    onClick={()=>handleScrollDestination(link.targetDivId)}
                    className="d-flex align-items-center nav-link position-relative header-button"
                  >
                    <div className="d-flex  justify-content-end   align-content-center  ">
                    <div>
                        <small>{link.name}</small>
                      </div>
                      
                      <div className="text-end "><link.icon className={"footer-icon"} /></div>
                      {/* <SplitLine/> */}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer-get-in-touch">
          <h4>Get in touch</h4>
          <div className="footer-icon-container">
            <a href="https://www.hamk.fi/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} className="old-icon" />
            </a>{" "}
            <a href="https://www.linkedin.com/in/yao-lu-2022it" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="old-icon" />
            </a>{" "}
            <a href="https://github.com/TecJoJo" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="old-icon" />
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          <span>design&code by Yao Lu </span>
          <span>
            <FontAwesomeIcon icon={faCopyright} />
          </span>
          <span> all rights reserved</span>
        </div>
      </section>
    </>
  );
}

export default Footer;
