import React from "react";
import "./about.scss";

function About() {
  return (
    <div className="about" id="about">
      <div>
        <img
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-offset="-50"
          src="/assets/about-me.png"
        />
      </div>
      <div data-aos="fade-left">
        <h1>About Me</h1>
        <p>
          I am Full-stack web/mobile developer from India. <br />
          <br /> I enjoy taking up complex problems and turning them into simple
          and beautiful interface designs. I also love logic and structure of
          coding and alway strive to white elegant and efficient code, weather
          it be HTML, CSS, or JavaScript. I have been coding when I was at age
          of 11.
          <br />
          <br />
          Here are some of the my fav languages/frameworks: <br />
          <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>Node.js</b>,{" "}
          <b>Express</b>, <b>GraphQL</b>, <b>Socket.io</b>, <b>Angular</b>,{" "}
          <b>React</b>, <b>MongoDb</b>, <b>MySQL</b>, <b>Python</b>, <b>Php</b>,{" "}
          <b>Arduino</b>
        </p>
      </div>
    </div>
  );
}

export default About;
