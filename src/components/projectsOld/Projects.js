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
        backgroundColor="#C0EEE4"
        imgIsLeft={false}
        url="https://tecjojo-personal-website.netlify.app"
      />
      <Project
        img="/asset/breakfast.jpg"
        imgName="computer
      and
      chair"
        subtitle="Recipe Search project forked from John Smilga's Cocktail API"
        backgroundColor="#FFCAC8"
        imgIsLeft={true}
        url="https://project-recipe-search.netlify.app/"
      />
      <Project
        img="/asset/github.jpg"
        imgName="computer
      and
      chair"
        subtitle="Check out my GitHub!"
        backgroundColor="#DAD0D7"
        imgIsLeft={false}
        url="https://github.com/TecJoJo"
      />
    </>
  );
}

export default Projects;
