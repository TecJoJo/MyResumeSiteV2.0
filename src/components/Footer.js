import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navLinks } from "../data";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

{
  /* <FontAwesomeIcon icon={faFacebookF} className="icon" />
      <FontAwesomeIcon icon={faGithub} className="icon" />
      <FontAwesomeIcon icon={faTwitter} className="icon" /> */
}

function Footer() {
  return (
    <>
      <section className="footer-control">
        <div className="footer-nav">
          <ul className="footer-list">
            <li>
              <Link to="/" className="link-component">
                Home
              </Link>
            </li>
            {navLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={`/${link}`} className="link-component">
                    {link}
                  </Link>
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
