import React, { useState } from "react";
import logo from "../../../images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={`${nav ? "nav active" : "nav"} navbar-home`}>
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="/" style={{ textDecoration: "none" }}>
            Home
          </a>
        </li>
        <li>
          <a href="#features" style={{ textDecoration: "none" }}>
            Features
          </a>
        </li>
        <li>
          <a href="#contacts" style={{ textDecoration: "none" }}>
            Contact
          </a>
        </li>
        <li>
          <a href="/Signin" style={{ textDecoration: "none" }}>
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;