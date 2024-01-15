import React from "react";
import { FormattedMessage } from "react-intl";

function About() {
  return (
    <div id="about" className="about-container">
      <section className="">
        <h1 className=" text-center merriweather ">About me</h1>

        <div className=" m-5 row justify-content-center ">
          <p className=" col-md-8 ">
            <FormattedMessage
              id="about.aboutMe"
              description="about me"  
              defaultMessage="I am currently serving as a Software Trainee at Beamex
          Oy since May 2023, I have learned practical experience in 
          large-scale cloud based software project, leveraging tools such
          as React.js and the Cypress framework.
          As  Information Technology student at HAMK, I have been working hard to achieve an grade point average of 4.5/5. "
            />
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
