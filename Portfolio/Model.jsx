import React from "react";
import "./Portfolio.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaWindowClose } from "react-icons/fa";

function Model(porps) {
  return (
    <div className="model">
      <div className="overlay">
        <div className="model-content">
          <h2>Login Page</h2>
          <p>Add Details to Create a new Blog</p>
          <button className="close-model" onClick={porps.click}>
            <FaWindowClose
              style={{ background: "white", color: "#fdae38" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;
