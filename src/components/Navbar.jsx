import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";
import Menu from "/menu.svg";
import MenuCancel from "/menu cancel.svg";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [hasToggled, setHasToggled] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
    setHasToggled(true);
  };

  const handleLinkClick = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false);
    }
  };

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
        <img src={Logo} alt="Company logo" />
      </Link>

      <nav className="nav-links desktop">
        <Link className="navbar-link" to="/">
          Home
        </Link>
        <Link className="navbar-link" to="/about">
          About
        </Link>
        <div className="navbar-link-container">
          <div className="navbar-link-text">
            <p> Services</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
            >
              <path
                d="M13.3333 1.18333L6.66667 7.85L0 1.18333L1.18333 -1.90735e-06L6.66667 5.48333L12.15 -1.90735e-06L13.3333 1.18333Z"
                fill="#959595"
              />
            </svg>
          </div>
          <div className="navbar-link-dropdown">
            <Link to="services/heavy-machine-lifting-and-shifting">
              Heavy Machine Lifting & Shifting
            </Link>
            <Link to="services/machinery-loading-and-unloading">
              Machinery Loading & Unloading
            </Link>
            <Link to="services/machinery-installation">
              Machinery Installation
            </Link>
            <Link to="services/machinery-dismantling">
              Machinery Dismantling
            </Link>
          </div>
        </div>
        <Link className="navbar-link" to="/projects">
          Our Projects
        </Link>
      </nav>

      <Link className="primary-button" to="/contact">
        <p>Contact Us</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <mask
            id="mask0_501_50"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="20"
            height="20"
          >
            <rect width="20" height="20" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_501_50)">
            <path
              d="M7.01683 16.6667L5.8335 15.4833L11.3168 10L5.8335 4.51667L7.01683 3.33333L13.6835 10L7.01683 16.6667Z"
              fill="#030F27"
            />
          </g>
        </svg>
      </Link>

      <div className="mobile-navbar-button mobile" onClick={toggleMobileNav}>
        <img
          src={Menu}
          alt="Mobile navbar open"
          style={{
            display: isMobileNavOpen ? "none" : hasToggled ? "block" : "",
          }}
        />
        <img
          src={MenuCancel}
          alt="Mobile navbar close"
          style={{
            display: isMobileNavOpen ? "block" : hasToggled ? "none" : "none",
          }}
        />
      </div>
      <div
        className={`mobileNavbar mobile ${
          isMobileNavOpen
            ? "activeMobileNavbar"
            : hasToggled
              ? "nonactiveMobileNavbar"
              : ""
        }`}
      >
        <div className="navbar-links desktop">
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/F&B" onClick={handleLinkClick}>
            Food & Beverage
          </Link>
        </div>
        <div className="mobileNavbar-bottom">
          <a
            href="#contact"
            className="primary-button"
            onClick={handleLinkClick}
          >
            Contact us
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
