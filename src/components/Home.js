import React, { useState } from "react";
import { Link } from "react-router-dom";
import CV from "../sources/YaoLuCV.pdf";
import Progressbar from "./Progressbar";
import { useRef, useEffect } from "react";
import moment from "moment";

function Home() {
  const windowInnerHeight = window.innerHeight;
  const progressbarWrapper = useRef(null);
  const [dimensions, setDimensions] = useState({});
  const [time, setTime] = useState(
    moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
  );

  const calculateOffset = () => {
    try {
      const { top, height } =
        progressbarWrapper.current.getBoundingClientRect();
      const togglePoint = windowInnerHeight - height / 2;
      setDimensions({ top, height, togglePoint });
      // console.log(top, height, windowInnerHeight, togglePoint);
    } catch (TypeError) {}
  };
  useEffect(() => {
    window.addEventListener("scroll", calculateOffset);
    // return () => {
    //   window.removeEventListener("scroll", calculateOffset);
    // };
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTime(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [time]);

  return (
    <>
      <section className="hero-head-container">
        <div className="circle-container"></div>

        <div className="horizontal-line"></div>
      </section>
      <section className="hero-text-container">
        <h1>Welcome to my website</h1>
        <br />

        <p>
          Hi, I am Yao Lu, from Hämeen University of Applied Sciences (HAMK)
          Finland. My major is information and communication technology. This is
          the second website made by me. This project is made mostly with
          React.js, CSS3, and HTML5. The reason that I decide to make this
          project is trying to enhance my understanding of those programming
          techniques above and showcase my web-development skills. Check the
          source code{" "}
          <a
            className="text-github-link"
            href="https://github.com/TecJoJo/MyReactResumeWebsite"
          >
            here
          </a>
          .
        </p>
        <p className="date-and-time">{time}</p>
      </section>
      <section className="hero-button-container">
        <button className="CV-download-btn">
          <a href={CV} download="YaoLuCV.pdf">
            <h1>Download CV</h1>
          </a>
        </button>
      </section>
      <div className="blank-space"></div>
      <h1 className="skillTitle">Programming skills</h1>
      <div ref={progressbarWrapper} className="progressbar-wrapper">
        <Progressbar
          togglePoint={dimensions.togglePoint}
          top={dimensions.top}
          skill="React.js"
          skillColor="blue"
          score={75}
          duration={2000}
          bgcolor1="rgb(66, 197, 245,0.3)"
          bgcolor2="rgb(201, 125, 245,0.8)"
        />
        <Progressbar
          togglePoint={dimensions.togglePoint}
          top={dimensions.top}
          skill="Javascript"
          skillColor="green"
          score={80}
          duration={2000}
          bgcolor1="rgb(66, 197, 245,0.3)"
          bgcolor2="rgb(201, 125, 245,0.8)"
        />
        <Progressbar
          togglePoint={dimensions.togglePoint}
          top={dimensions.top}
          skill="typescript"
          skillColor="pink"
          score={40}
          duration={2000}
          bgcolor1="rgb(66, 197, 245,0.3)"
          bgcolor2="rgb(201, 125, 245,0.8)"
        />
        <Progressbar
          togglePoint={dimensions.togglePoint}
          top={dimensions.top}
          skill="C#"
          skillColor="orange"
          score={50}
          duration={2000}
          bgcolor1="rgb(66, 197, 245,0.3)"
          bgcolor2="rgb(201, 125, 245,0.8)"
        />
        <Progressbar
          togglePoint={dimensions.togglePoint}
          top={dimensions.top}
          skill="Python"
          skillColor="purple"
          score={50}
          duration={2000}
          bgcolor1="rgb(66, 197, 245,0.3)"
          bgcolor2="rgb(201, 125, 245,0.8)"
        />
      </div>
    </>
  );
}

export default Home;
