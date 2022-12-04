import React from "react";

function Project() {
  return (
    <section className="single-project-container">
      <div className="single-project-image-container">
        <img
          src={require("../sources/computer-and-chair.jpg")}
          alt="computer and chair"
          className="project-image"
        />
      </div>
      <h1>First website finnished with vanilla javascript</h1>
    </section>
  );
}

export default Project;
