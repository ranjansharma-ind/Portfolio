import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Portfolio.css";
import serviceImage from "./Images/services.jpg";

function Services() {
  const services = [
    "Web Developer",
    "Software Developer",
    "Mobile Application",
  ];
  return (
    <>
      <div className="container-fluid services" style={{ height: "90vh" }}>
        <h1><span style={{color:'#fdae38'}}>Services</span> I Provide</h1>
        <div className="row">
          <div className="col-lg-6">
            <img src={serviceImage} alt="serives-images" />
          </div>
          <div className="col-lg-6">
            <p>
              Hey...! I am from Kanpur Nagar, India. I am a Software Developer
              this is my first created portfolio using ReactJS and this is so
              useful for me. I completed my 30 days of React Course then i build
              this mini project if wanna contact me and watching my other
              projects. Do follow me on Social Links.
            </p>
            {services.map((value, id) => {
              return (
                <div key={id.service1}>
                  <ul>
                    <li>{value}</li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
