import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function Project() {
  const [isHover, setIsHover] = useState(false);
  const wrapper = useRef(null);

  useEffect(() => {
    if (isHover) {
      wrapper.current.classList.add("effect");
    } else {
      wrapper.current.classList.remove("effect");
    }
  }, [isHover]);
  return (
    <section ref={wrapper} className="single-project-container">
      <div className="single-project-image-container">
        <img
          src={require("../sources/computer-and-chair.jpg")}
          alt="computer and chair"
          className="project-image"
          onMouseOver={() => {
            setIsHover(true);
          }}
          onMouseOut={() => {
            setIsHover(false);
          }}
        />
      </div>
      <h1>First website finnished with vanilla javascript</h1>
    </section>
  );
}

export default Project;
