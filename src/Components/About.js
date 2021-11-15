import React from "react";
import bpo from "../assets/bpo1.svg";
import {GrLinkBottom} from "react-icons/gr";

const About = ({aboutMe}) => {
  return (
    <>
    <div className="about-container" ref={aboutMe}>
      <div className="about">
        <h2>ABOUT ME</h2>
      </div>
      <div className="about-img-container">
        <img className="bpo-img" src={bpo} alt="bpo-img" />
      </div>
      <div className="about-desc">
        <p>
          Having worked in the customer service industry, I wish to break into
          tech and pursue my true dream of becoming a developer.
        </p><br/>
        <p>
          I enjoy learning about new technologies and having a deeper
          understanding of how the web works.
        </p><br/>
        <p>
        A Full Stack Web Development Student at Avion School.
        </p>
      </div>
      <div className="btn-res-container">
        <button className="btn-res">Resume <GrLinkBottom className="GrLinkBottom"/></button>
        </div>
    </div>
    </>
  );
};

export default About;
