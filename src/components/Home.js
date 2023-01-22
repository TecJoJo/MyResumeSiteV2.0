import React, { useState } from "react";
import { Link } from "react-router-dom";
import CV from "../sources/YaoLuCV.pdf";
import Progressbar from "./Progressbar";
import { useRef, useEffect } from "react";
import moment from "moment";
import { useSpring,animated,config } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";


function Home() {


  const windowInnerHeight = window.innerHeight;
  const progressbarWrapper = useRef(null);
  const flipcardBackside = useRef(null)
  const [dimensions, setDimensions] = useState({});
  const [time, setTime] = useState(
    moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
  );

  //flipcard effect 
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config:config.gentle
  });
 
  
  //initial track of the dimension useState after the initial render

  useEffect(()=>{
    calculateOffset()
    
  },[])

  //callback, calculate the demensions of the flipcard front page.
  const calculateOffset = () => {
    try {
      // console.log(progressbarWrapper.current.getBoundingClientRect());
      const {top,height,width} =
        progressbarWrapper.current.getBoundingClientRect();
     
      const togglePoint = windowInnerHeight - height;

      setDimensions({ top, height, togglePoint, width});
      // console.log(flipcardBackside.current);
      flipcardBackside.current.style.width = `${dimensions.width}px`;
      flipcardBackside.current.style.height = `${dimensions.height}px`
      // console.log("dimentions setted");
      
      // console.log(top, height, windowInnerHeight, togglePoint);
    } catch (TypeError) {}
  };
  useEffect(() => {
    // console.log("scroll even litsener is added");
    

    window.addEventListener("scroll", calculateOffset);
    // console.log("resize even litsener is added");
    window.addEventListener("resize", calculateOffset);
    return () => {
      // console.log("scroll even litsener is removed");
      
      window.removeEventListener("scroll", calculateOffset);
      // console.log("resize even litsener is removed");
      window.removeEventListener("resize", calculateOffset)
    };
  },[dimensions]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setTime(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [time]);
  
  //set the flipcard-backside width and height as soon as component is rendered
  try {
    flipcardBackside.current.style.width = `${dimensions.width}px`;
    flipcardBackside.current.style.height = `${dimensions.height}px`
  } catch (error) {
    console.log("component is not exsit");
  }
  

  // console.log("page render");
  // console.log(dimensions);
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
      <section className="flip-card-container"  onClick={() => set((flipped) => !flipped)}>

      
      <animated.div 
      ref={progressbarWrapper}
      className="progressbar-wrapper"
      style={{opacity:opacity.to(o=>1 - o),transform}}
      >
        <h1 className="attention">flip the card to check more info</h1>
        <div className="rotation-controll">
          <FontAwesomeIcon icon={faRotate}></FontAwesomeIcon>
          
        </div>
        <Progressbar
          togglePoint={dimensions.togglePoint}
          top={dimensions.top}
          skill="React.js"
          skillColor="green"
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
          skillColor="green"
          score={40}
          duration={2000}
          bgcolor1="rgb(66, 197, 245,0.3)"
          bgcolor2="rgb(201, 125, 245,0.8)"
        />
        <Progressbar
          togglePoint={dimensions.togglePoint}
          top={dimensions.top}
          skill="C#"
          skillColor="green"
          score={50}
          duration={2000}
          bgcolor1="rgb(66, 197, 245,0.3)"
          bgcolor2="rgb(201, 125, 245,0.8)"
        />
        <Progressbar
          togglePoint={dimensions.togglePoint}
          top={dimensions.top}
          skill="Python"
          skillColor="green"
          score={50}
          duration={2000}
          bgcolor1="rgb(66, 197, 245,0.3)"
          bgcolor2="rgb(201, 125, 245,0.8)"
        />
        <h1 className="skillTitle">Programming skills</h1>
       
      </animated.div>
      <animated.div 
      className="flipcard-backside" 
      ref={flipcardBackside}
      style={{opacity,transform,rotateY:"180deg",}}
      >
        <h1 className="attention">flip the card to check more info</h1>
        <div className="rotation-controll">
          <FontAwesomeIcon icon={faRotate}></FontAwesomeIcon>
          
        </div>
        <div className="flipcard-grid">
          <p>Education</p>
          <p>1.2022-2024(estimatd)</p>
          <p>Hämeen University of Applied Sciences Information and communication engineering(in Finnish) </p>

          <p>Work Experience</p>
          <p>8.2019-1.2022</p>
          <p>Atoy Car Workshop</p>

          <p>Hobbies</p>
          <p></p>
          <p>Programming Movies TV-series</p>

        </div>
        <h1 className="skillTitle">Brief background info</h1>

        

       
      </animated.div>
      </section>
    </>
  );
}

export default Home;
