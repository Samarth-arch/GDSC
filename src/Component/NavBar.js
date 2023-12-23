import "../Assets/css/navbar.css";
import React, { Component } from "react";
import gdsc from "../Assets/img/gdsc-gif.gif";
import { Link } from "react-router-dom";
export default class NavBarcomp extends Component {
  render() {
    return (
      <nav class="_navbar sticky" >
        <div className="navlogo">
          <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <img style={{ height: "30px", width: "auto" }} src={gdsc} alt="logo" />
            <h4 style={{ color: "black", marginLeft: "7px",lineHeight:"40px" }}>
              GDSC-AITR
            </h4>
          </Link>
        </div>

        <ul className="nav-links ">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            {" "}
            ☰{" "}
          </label>
          <div className="menu">
            <li>
              <Link className="link_text font-face-Bold " to="/">
                Home
              </Link>
            </li>
            {/* <li>
              <Link className="link_text font-face-Bold "  disabled   to="/">About</Link>
            </li> */}
            <li>
              <Link className="link_text font-face-Bold " to="/teams">
                Team
              </Link>
            </li>
            <li>
              <Link className="link_text font-face-Bold " to="/event">
                Events
              </Link>
            </li>
            <li>
              <Link
                className="link_text font-face-Bold "
                disabled
                to="/contact"
              >
                Contact
              </Link>
            </li>
            {/* <li>
              <Link className="link_text font-face-Bold "  to="/blogs">Blogs</Link>
            </li> */}

            <li>
              <a
                className="joinus"
                href="https://gdsc.community.dev/university-institute-of-technology-rgpv-bhopal/"
              >
                Join Us
              </a>
            </li>
          </div>
        </ul>
      </nav>
    );
  }
}
