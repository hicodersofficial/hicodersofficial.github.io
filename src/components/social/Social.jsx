import React from "react";
import SayHi from "./SayHi";
import "./social.scss";

function Social() {
  return (
    <div className="social-media-container">
      <div className="social">
        <img src="/assets/social-media.png" data-aos="zoom-in-up" />
        <div className="social-container" data-aos="zoom-in-left">
          <h1>
            Follow me on other <br />
            social media
          </h1>
          <p>Stay connect with us via social media or email.</p>
          <div className="email">
            <a href="mailto:hicodersofficial@gmail.com">
              <i className="fas fa-envelope"></i> hicodersofficial@gmail.com
            </a>
          </div>
          <div className="social-icon">
            <a href="https://instagram.com/hi.coders">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com/hicoders">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://linkedin.com/company/hi-coders">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/hicodersofficial">
              <i className="fab fa-discord"></i>
            </a>
            <a href="https://github.com/hicodersofficial">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://codepen.io/hi.coder">
              <i className="fab fa-codepen"></i>
            </a>
          </div>
        </div>
      </div>
      <svg
        data-aos="zoom-out-down"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow"
        viewBox="0 0 929.748 831.076"
      >
        <g
          id="Group_3388"
          data-name="Group 3388"
          transform="translate(-400.821 -6964.582)"
        >
          <path
            id="Path_8070"
            data-name="Path 8070"
            d="M1223.5,18246.6s-19.6-262.3,151.828-387.645,348.184-15.088,533.883-113.74,208.911-280.869,208.911-280.869"
            transform="translate(-794 -10498.943)"
            fill="none"
            stroke="#fff"
            stroke-width="13"
          />
          <g
            id="Polygon_63"
            data-name="Polygon 63"
            transform="translate(456.821 7795.658) rotate(180)"
            fill="#fff"
          >
            <path
              d="M 55.12949371337891 47.5 L 0.8705254793167114 47.5 L 28.00000381469727 0.9923227429389954 L 55.12949371337891 47.5 Z"
              stroke="none"
            />
            <path
              d="M 28.00000381469727 1.984634399414063 L 1.741031646728516 47 L 54.25896453857422 47 L 28.00000381469727 1.984634399414063 M 28.00000381469727 0 L 56.00000381469727 48 L -7.62939453125e-06 48 L 28.00000381469727 0 Z"
              stroke="none"
              fill="#fff"
            />
          </g>
        </g>
      </svg>

      <SayHi />
    </div>
  );
}

export default Social;
