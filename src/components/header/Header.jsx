import React from "react";
import Wave from "../utils/Wave";
import "./header.scss";

function Header() {
  return (
    <div className="header-container">
      <img src="/assets/illustration (1).png" className="header-ill  ill-1" />
      <img src="/assets/illustration (2).png" className="header-ill  ill-2" />
      <img src="/assets/illustration (3).png" className="header-ill  ill-3" />
      <img src="/assets/illustration (4).png" className="header-ill  ill-4" />
      <div className="header">
        <div>
          <h1 className="intro">
            Hi Coders,
            <br />I am Priyanshu
          </h1>
          <h4>Full-stack web developer</h4>
          <p>
            We live in a world constructed of code - <br />
            and coders are the ones who built it for us.
          </p>
          <a href="#connect">
            <button className="action-btn">Let's connect</button>
          </a>
        </div>
        <img src="/assets/astronaut.png" />
      </div>
      <Wave />
    </div>
  );
}

export default Header;
