import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../assets/Projects/Case/Barani/Logo.png";
import Image1 from "../../../assets/Projects/Case/Barani/Image 1.png";

function Barani() {
  return (
    <article className="projects-case-set">
      <div className="projects-case-set-heading">
        <img src={Logo} alt="Barani Hydraulics India Private Limited Logo" />
        <h3>Barani Hydraulics India Private Limited</h3>
      </div>

      <div className="projects-case-set-container">
        <div className="projects-case-set-imgs">
          <div className="projects-case-set-imgs-slide">
            <img
              src={Image1}
              alt="Barani Hydraulics India Private Limited Image"
            />
          </div>
        </div>
        <div className="projects-case-set-content">
          <div className="home-reach">
            <article className="home-reach-set">
              <h3>Heavy Engineering / Press Manufacturing</h3>
              <p>Industry</p>
            </article>
            <article className="home-reach-set">
              <h3>Authorized Handling & Installation Vendor</h3>
              <p>Role</p>
            </article>
          </div>
          <p className="home-about-para">
            We executed the unloading and installation of a 50-ton press for
            Barani Hydraulics across two project sites:
          </p>
          <ul>
            <li>Racaero, Bidadi Industrial Area</li>
            <li>CIM Tools, Devanahalli SEZ</li>
          </ul>
          <p className="home-about-para">
            The scope included safe unloading, internal shifting, and precise
            positioning of the press, including lowering and installation into a
            4 ft deep foundation pit, using suitable lifting equipment and
            experienced manpower.
          </p>
          <article className="about-company-set">
            <div className="about-company-set-text">
              <h3>Results</h3>
              <p>
                Successful installation at both locations with zero damage and
                strict adherence to safety and schedule.
              </p>
            </div>
          </article>
        </div>
      </div>
    </article>
  );
}

export default Barani;
