import React, { useState } from "react";
import { Link } from "react-router-dom";
import CV from "../sources/YaoLuCV.pdf";
import Progressbar from "./Progressbar";
import { useRef, useEffect } from "react";

function Home() {
  const windowInnerHeight = window.innerHeight;
  const progressbarWrapper = useRef(null);
  const [dimensions, setDimensions] = useState({});

  const calculateOffset = () => {
    try {
      const { top, height } =
        progressbarWrapper.current.getBoundingClientRect();
      const togglePoint = windowInnerHeight - height / 2;
      setDimensions({ top, height, togglePoint });
      console.log(top, height, windowInnerHeight, togglePoint);
    } catch (TypeError) {}
  };
  useEffect(() => {
    window.addEventListener("scroll", calculateOffset);
    // return () => {
    //   window.removeEventListener("scroll", calculateOffset);
    // };
  }, []);
  return (
    <>
      <section className="hero-head-container">
        <div className="circle-container"></div>

        <div className="horizontal-line"></div>
      </section>
      <section className="hero-text-container">
        <h1>Welcome to my website</h1>
        <br />
        <h2>This project is still under development</h2>
        <br />
        <h2>Tämä projecti on vielä työn alla</h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          aliquam amet ea deleniti saepe, iusto exercitationem rerum quidem
          tempora optio impedit repudiandae doloremque quia est fugit possimus
          similique blanditiis laudantium esse. Inventore mollitia quo,
          molestiae et saepe, consequatur quisquam optio, quia voluptas ipsa
          blanditiis quam ipsam quas! Deserunt voluptas, nemo ipsum quos tempora
          molestias fugiat cum mollitia deleniti corporis nobis! Quae libero
          autem earum voluptatibus nihil, quod dolorem eaque tenetur sunt
          perspiciatis a consectetur soluta unde voluptates quibusdam, sapiente
          dolorum commodi hic maxime? Culpa eum suscipit dolores nam deserunt
          consequuntur, natus animi, ducimus, officiis consectetur itaque
          distinctio minima eos voluptate!
        </p>
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
