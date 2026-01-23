import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";

function Footer() {
  return (
    <footer>
      <div className="newsletter">
        <header>
          <h2>
            Want Heavy Updates Delivered Light?
            <br className="desktop" /> <span> Join Us.</span>
          </h2>
          <p>
            Stay updated with light, easy newsletters covering new equipment,
            services, and industry insights.
          </p>
        </header>
        <form>
          <input type="email" placeholder="Your Email Address" />
          <button type="submit" className="primary-button">
            <p>Submit</p>
          </button>
        </form>
      </div>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <img src={Logo} alt="Company Logo" />
            <p>
              Lifting the Impossible
              <br className="desktop" /> Since 1999.
            </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-top-right-links">
              <h3>Quick Links</h3>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Our Projects</Link>
                <Link to="/contact">Contact</Link>
              </nav>
            </div>
            <div className="footer-top-right-links">
              <h3>Services</h3>
              <nav>
                <Link to="/">Heavy Machine Lifting & Shifting</Link>
                <Link to="/about">Machinery Installation</Link>
                <Link to="/projects">Machinery Dismantling</Link>
                <Link to="/contact">Packing Services</Link>
              </nav>
            </div>
            <div className="footer-top-right-links">
              <h3>Find Us</h3>
              <nav>
                <article>
                  <label>Our Office</label>
                  <a
                    href="https://maps.app.goo.gl/sqD61pVbL8e5x8qy6"
                    target="_blank"
                  >
                    #2102 & 2103, BCCHS Layout, Vajarahalli, Opp Sharma
                    Transport Metro Pillar Number 249, Kanakapura Main Road,
                    Bengaluru 560109
                  </a>
                </article>
                <article>
                  <label>Call us</label>
                  <div className="contact-number">
                    <a href="#" target="_blank">
                      +91 9980335552
                    </a>{" "}
                    <a>/</a>{" "}
                    <a href="#" target="_blank">
                      +91 9448263309
                    </a>
                  </div>
                </article>
                <article>
                  <label>Reach out to us</label>
                  <a href="#" target="_blank">
                    chinnappa@machinerymovers.co.in
                  </a>
                </article>
              </nav>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©All rights reserved.</p>
          <a href="#">Privacy Policy</a>
          <p>
            Crafted by{" "}
            <a href="" target="_blank">
              {" "}
              Koiostudio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
