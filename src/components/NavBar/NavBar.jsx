import React from "react";

import Logo from "../../assets/logo.jpg";

import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-items">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <ul className="link-container">
          <li className="nav-links nav-text">Community</li>
          <li className="nav-links nav-text">Resources</li>
          <li className="nav-links nav-text">
            <svg
              className="sun-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </li>
          <li className="nav-links nav-text">
            <button>Join Waitlist</button>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
