import React, { useContext } from "react";
import { ScrollNavContext } from "../../context/ScrollNavContext";
import CV from "../../sources/YaoLuCV.pdf"
import office from "../../sources/office-932926_1920.jpg";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import {
  selfIntroduction,
  secondaryIntro,
  welcome1,
  welcome2,
} from "./messages";
import useTargetDiv from "../../hooks/useTargetDiv";

import "../../static/landing.css";
function Landing() {
  const targetDiv = useTargetDiv();

  return (
    <>
      <section
        ref={targetDiv}
        id="landing"
        className=" container-lg  py-5  position-relative border-bottom  "
      >
        <div className="row  align-items-stretch mb-5">
          <div className="col-md-6 d-flex  flex-column justify-content-between  ">
            <div className="gradient-text-bb">
              <h5 className="merriweather">
                <FormattedMessage
                  id={welcome1.id}
                  description={welcome1.description}
                  defaultMessage={welcome1.defaultMessage}
                />
              </h5>
              <h5 className="merriweather">
                <FormattedMessage
                  id={welcome2.id}
                  description={welcome2.description}
                  defaultMessage={welcome2.defaultMessage}
                />
              </h5>
            </div>
            <div>
              <h2 className="merriweather display-6  text-break ">
                <FormattedMessage
                  id={selfIntroduction.id}
                  description={selfIntroduction.description}
                  defaultMessage={selfIntroduction.defaultMessage}
                />
              </h2>
            </div>
            <div>
              <small className="merriweather">
                <FormattedMessage
                  id={secondaryIntro.id}
                  description={secondaryIntro.description}
                  defaultMessage={secondaryIntro.defaultMessage}
                />
              </small>
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
            {/* NavLink --> div all the classNames remains the same */}
            <a
              href={CV} download="YaoLuCV.pdf"
              // to="contact"
              className="  btn overflow-visible  btn-primary text-nowrap   rounded-5   d-flex align-items-center  justify-content-center  py-2   "
            >
              <h5 className=" m-0 flex-shrink-1 ">Download CV</h5>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="landing-icon  ps-2  flex-shrink-1    "
                
                fill="currentColor"
                
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing;
