import React from "react";

function About() {
  return (
    <div className="about-container">
      <section className="about-content-container">
        
        <h1>About me</h1>
        <p>
          Hi, I am Yao Lu, from Häemeen University of Applied Sciences (HAMK)
          Finland. My major is information and communication technology. I love
          programming and I enjoy learning new programming topics and doing
          projects in my leisure time.
          <br />
          Whenever I do something, whether it’s a job or a school task, I always
          try my best. During the first-year study in HAMK, I have earned 60
          credits which average score is 4.7/5. Besides school lectures and
          assignments, I also do programming related self-studies to extend my
          programming knowledge.
          <br />I believe success and failure are the best ways to sculpt
          ourselves to reach our goals. And persistence is the key to success.
          That’s why I never give up.
        </p>
        
        
        <br />
        <h1>About this project</h1>
        <p>
          This is the second website I have done so far. Based on the experience
          of the last website building I kept the reusability and the simplicity
          of later modification in mind though the whole building time.
          <br />
          React.js is the main frame of this project, thanks for the React.js,
          this project is made of bunch of components and certain components are
          once again made of components with slight variation applied such us
          the projects part of this website.
          <br />
          During the building of this projects, I have faced numerous
          challenges, problems with CSS, challenges with Reacts. Fortunately the
          google has always been my best friend, sometimes I have to read
          documentation for quite a while but project is finally completed.
          <br />
          In this project, I have used <b>React.js</b> for the frame of the
          whole project, <b>React Router Dom</b> for the routing,{" "}
          <b>React-spring</b> package for the animation effects of the
          progressbar, FormBold API for processing the forms user submitted,
          Moments.js for formatting time and so much more time-consuming
          challenges/tricks with CSS, JavaScript which I couldn’t even recall at
          this moment.
          <br />
          Regardless of the challenges I really enjoyed this project and want to
          make it so much better, but I know it’s time to move on.
          
        </p>
      </section>
    </div>
  );
}

export default About;
