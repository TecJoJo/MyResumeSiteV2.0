import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
// img:"../sources/computer-and-chair.jpg"
// imgName: "computer and chair"
// subtitle:"First website finnished with vanilla javascript"
function Project(props) {
  const [isHover, setIsHover] = useState(false);
  const wrapper = useRef(null);

  useEffect(() => {
    if (isHover) {
      wrapper.current.classList.add("effect");
      wrapper.current.style.backgroundColor = props.backgroundColor;
    } else {
      wrapper.current.classList.remove("effect");
      wrapper.current.style.backgroundColor = "transparent";
    }
  }, [isHover]);
  if (props.imgIsLeft) {
    return (
      <section ref={wrapper} className="single-project-container">
        <div className="single-project-image-container">
          <a href={props.url}>
            <img
              src={props.img}
              alt={props.imgName}
              className="project-image"
              onMouseOver={() => {
                setIsHover(true);
              }}
              onMouseOut={() => {
                setIsHover(false);
              }}
            />
          </a>
        </div>
        <h1>{props.subtitle}</h1>
      </section>
    );
  } else {
    return (
      <section ref={wrapper} className="single-project-container">
        <h1>{props.subtitle}</h1>
        <div className="single-project-image-container">
          <a href={props.url}>
            <img
              src={props.img}
              alt={props.imgName}
              className="project-image"
              onMouseOver={() => {
                setIsHover(true);
              }}
              onMouseOut={() => {
                setIsHover(false);
              }}
            />
          </a>
        </div>
      </section>
    );
  }
}

export default Project;
