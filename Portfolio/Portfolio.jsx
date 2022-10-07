import React, { useEffect } from "react";
import "./Portfolio.css";
import {
  FaGithub,
  FaTwitter,
  FaStackOverflow,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import MyImage from "./Images/mine.png";
import "bootstrap/dist/css/bootstrap.css";
import Services from './Services';

function Portfolio(props) {
  useEffect(() => {
    document.title = `${props.capital(props.category)} - Ranjan Sharma`;
  });

  return (
    <div>
      <div className="App" style={{ height: "70vh" }}>
        <div className="Child">
          <img src={MyImage} alt="myimage" />
          <h1>
            Hello, I'm{" "}
            <span style={{ color: "#fdae38" }}>{props.name.text}</span>!
          </h1>
          <p>React Dev | Open-Source Enthusiast | Blogger</p>
          <span>
            <a
              href="https://github.com/ranjansharma-ind"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/ranjansharmaind"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/ranjansharma-ind/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://stackoverflow.com/users/19744872/ranjan-sharma"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaStackOverflow />
            </a>
            <a href="/">
              <FaDiscord />
            </a>
          </span>
        </div>
      </div>
      <Services/>
    </div>
  );
}

export default Portfolio;
