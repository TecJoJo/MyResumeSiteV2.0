import React from "react";
import { welcome, headline, secondary } from "./messages";
import office from "../../sources/office-932926_1920.jpg";

import "../../static/landing.css"
function Landing() {
  return (
    <>
      <section className=" container-fluid  mx-lg-2 my-5 position-relative  ">
        <div className="row  align-items-stretch mb-5">
          <div className="col-md-6 d-flex  flex-column justify-content-between  ">
            <div className="gradient-text-bb">
              <h5 className="merriweather">Hi, there!</h5>
              <h5 className="merriweather">Welcome to my website</h5>
            </div>
            <div>
              <h2 className="merriweather display-6 ">{headline}</h2>
            </div>
            <div>
              <small className="merriweather">{secondary}</small>
            </div>
          </div>

          <div className="col-md-6   ">
            <img
              className=" img-fluid object-fit-cover  shadow-sm rounded-2 "
              src={office}
              alt="office"
            />
          </div>
        </div>
        <div className="text-center">
          <a href="#" className="btn btn-primary">
            Contact me
            
            <svg className="icon ms-1 " xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"/></svg>
          </a>
        </div>
      </section>
    </>
  );
}

export default Landing;
