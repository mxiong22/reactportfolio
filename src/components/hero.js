import React from "react";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero-left">
        <p className="hero-para">
          Hello there👋 I am <span> Moony </span> 
          I am a social worker, who has a broad variety in working 
          in the mental health field, with the homeless community, and with non-profits.
          I am a current Full Stack Flex Coding Student at The University of Minnesota!
        </p>
      </div>
      <div className="Hero-right">
        <img className="hero-img"
          src="./resumepic.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
