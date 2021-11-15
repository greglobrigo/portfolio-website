import React from "react";
import blg from "../assets/blg.JPG";


const Projects = ({projects}) => {
  return (
    <>
      <div className="projects-container" ref={projects}>
        <div className="projects">
          <h2>PROJECTS</h2>
        </div>
        <h2 className="blg">BLG Bank</h2>
        <div className="projects-desc">
          <p>
            A banking app created via React that allows users to add and delete
            clients as well as make transactions such as withdrawals, transfers
            and deposits.
          </p>
          <br />
          <p>
            Features input validation, local-storage as mock database, search
            and sorting functionalities.
          </p>
        </div>
        <div className="blg-btn-container">
        <a href="https://www.google.com/" target="blank" className="btn-blg-demo">Demo</a>
        <a href="https://www.google.com/" target="blank" className="btn-blg-code">Code💻</a>
        </div>
        <div className="blg-img-container">
          <img src={blg} alt="blg-bank" className="blg-img"/>
        </div>

        <h2 className="blg">ChitChat</h2>
        <div className="projects-desc">
          <p>
            A messaging application where users can sign-up / sign-in,
            create and send messages via a channel or direct message
          </p>
          <br />
          <p>
            Features Axios, Rest API, search query and authentication.
            Real time sending and receiving of messages is also observed.
          </p>
        </div>
        <div className="blg-btn-container">
        <a href="https://www.google.com/" target="blank" className="btn-blg-demo">Demo</a>
        <a href="https://www.google.com/" target="blank" className="btn-blg-code">Code💻</a>
        </div>
        <div className="blg-img-container">
          <img src={blg} alt="blg-bank" className="blg-img"/>
        </div>
      </div>
    </>
  );
};

export default Projects;
