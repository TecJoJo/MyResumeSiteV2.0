import React from "react";
import Project from "./Project";
function Projects() {
  return (
    <>
      <Project
        img="/asset/computer-and-chair.jpg"
        imgName="computer
      and
      chair"
        subtitle="First website finnished with vanilla javascript"
        backgroundColor="rgb(66,105,215)"
        imgIsLeft={false}
        url="https://www.hamk.fi/"
      />
      <Project
        img="/asset/computer-and-chair.jpg"
        imgName="computer
      and
      chair"
        subtitle="First website finnished with vanilla javascript"
        backgroundColor="rgb(105,215,66)"
        imgIsLeft={true}
        url="https://www.hamk.fi/"
      />
      <Project
        img="/asset/computer-and-chair.jpg"
        imgName="computer
      and
      chair"
        subtitle="First website finnished with vanilla javascript"
        backgroundColor="rgb(175,66,215)"
        imgIsLeft={false}
        url="https://www.hamk.fi/"
      />
    </>
  );
}

export default Projects;
