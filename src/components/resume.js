import React from "react";

const Resume = () => {
  let Resume =
    "https://docs.google.com/document/d/1OZIl89_P_4xPm57YHzyF4uPKMYUL-zw_3Tzfvs5_5Ok/edit?usp=sharing";

  return (
    <div className="resume-section" id="resume-section">
      <h2 className="resume-heading">Contact</h2>
      <div className="resume-container">
        <p className="resume-para">
          Want to get in touch? Contact me on any of the platform
        </p>
        <a href={Resume} target="_blank">
          <button className="resume-btn">Download Resume</button>
        </a>
      </div>
      <div className="resume-icon">
        <a href="https://github.com/mxiong22" target="_blank"> 
          <img
            src="https://usmanasif961507868.files.wordpress.com/2021/08/github.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Resume;
