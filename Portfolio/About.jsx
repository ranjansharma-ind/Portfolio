import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Portfolio.css";
import mine from "./Images/mine.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function About(props) {
  useEffect(() => {
    document.title = `${props.capital(props.category)} - Ranjan Sharma`;
  });
  return (
    <>
      <div className="container" style={{ height: "92.5vh" }}>
        <div className="row" id="about">
          <div className="col-lg-6">
            <div id="circle"></div>
            <img src={mine}></img>
          </div>
          <div className="col-lg-6">
            <p>
              Hey...! I am from Kanpur Nagar, India. I am a Software Developer
              this is my first created portfolio using ReactJS and this is so
              useful for me. I completed my 30 days of React Course then i build
              this mini project if wanna contact me and watching my other
              projects. Do follow me on Social Links.
            </p>
            <div style={{textAlign:'center'}}>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
