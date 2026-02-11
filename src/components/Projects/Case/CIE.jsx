import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../assets/Projects/Case/CIE/Logo.png";
import Image1 from "../../../assets/Projects/Case/CIE/Image 1.jpg";

function CIE() {
  return (
    <article className="projects-case-set">
      <div className="projects-case-set-heading">
        <img src={Logo} alt="CIE LIMITED Logo" />
        <h3>CIE LIMITED</h3>
      </div>

      <div className="projects-case-set-container">
        <div className="projects-case-set-imgs">
          <div className="projects-case-set-imgs-slide">
            <img src={Image1} alt="CIE LIMITED" />
          </div>
        </div>
        <div className="projects-case-set-content">
          <div className="home-reach">
            <article className="home-reach-set">
              <h3>Automotive Components Manufacturing</h3>
              <p>Industry</p>
            </article>
            <article className="home-reach-set">
              <h3>Jigani, Bengaluru</h3>
              <p>Karnataka, India</p>
            </article>
            <article className="home-reach-set">
              <h3>Hosur</h3>
              <p>Tamil Nadu, India</p>
            </article>
          </div>
          <p className="home-about-para">
            We successfully executed the complete plant relocation of CIE
            Limited – PB6 within a tight timeline of 5 days, involving the
            shifting of 80+ machines.
          </p>
          <p className="home-about-para">
            The scope included dismantling, packing, transportation, unloading,
            internal shifting, and positioning of production and supporting
            machinery, planned to ensure continuity of operations.
          </p>
          <article className="about-company-set">
            <div className="about-company-set-text">
              <h3>Results</h3>
              <p>
                Production was restarted the very next day at the new facility
                without any issues, achieving zero damage and minimal downtime.
              </p>
            </div>
          </article>
        </div>
      </div>
    </article>
  );
}

export default CIE;
