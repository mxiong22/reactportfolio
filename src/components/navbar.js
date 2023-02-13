import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <h2 className="Navbar-heading">Moony Xiong</h2>
      </div>
      <div>
        <ul className="Navbar-list">
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#resume-section">
            <li>Resume</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
