import React from "react";
import { welcome, headline, secondaryIntro } from "./messages";
import office from "../../sources/office-932926_1920.jpg";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { selfIntroduction } from "./messages";

import "../../static/landing.css";
function Landing() {
  return (
    <>
      <section className=" container-lg  py-5  position-relative border-bottom  ">
        <div className="row  align-items-stretch mb-5">
          <div className="col-md-6 d-flex  flex-column justify-content-between  ">
            <div className="gradient-text-bb">
              <h5 className="merriweather">Hi, there!</h5>
              <h5 className="merriweather">Welcome to my website</h5>
            </div>
            <div>
              <h2 className="merriweather display-6 ">
                <FormattedMessage 
                  id={selfIntroduction.id}     
                  description={selfIntroduction.description}
                  defaultMessage={selfIntroduction.defaultMessage}         
                />
              </h2>
            </div>
            <div>
              <small className="merriweather">{secondaryIntro.defaultMessage}</small>
            </div>
          </div>

          <div className="col-md-6   ">
            <img
              className=" img-fluid object-fit-contain  shadow-sm rounded-2 "
              src={office}
              alt="office"
            />
          </div>
        </div>

        <div className="row d-flex  justify-content-center ">
        
          <div className="d-flex justify-content-center nav-link">
            <NavLink
              to="contact"
              className="  btn overflow-visible  btn-primary text-nowrap   rounded-5   d-flex align-items-center  justify-content-center  py-2   "
            >
              <h2>Contact me</h2>
              <svg
                className="icon  ps-1   "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                stroke-width="3"
                stroke="currentColor"
                fill="none"
              >
                <path d="M53.85,43.71H28.6l-10.75,8,.1-8H10.09a2,2,0,0,1-2-2V12.78a2,2,0,0,1,2-2H53.91a2,2,0,0,1,2,2V41.65A2.06,2.06,0,0,1,53.85,43.71Z" />
                <line x1="14.31" y1="18.91" x2="45.08" y2="18.91" />
                <line x1="14.31" y1="26.33" x2="32.17" y2="26.33" />
                <line x1="14.31" y1="33.75" x2="38.58" y2="33.75" />
              </svg>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
