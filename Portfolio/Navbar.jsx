import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" style={{ marginLeft: "20px" }} to="/">
          PORTFOLIO
        </Link>
        <div
          className="collapse navbar-collapse"
          style={{ marginLeft: "65%" }}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                BLOG
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/works">
                WORKS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
