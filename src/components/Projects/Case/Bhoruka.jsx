import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../assets/Projects/Case/Bhoruka/Logo.png";
import Image1 from "../../../assets/Projects/Case/Bhoruka/Image 1.png";

function Bhoruka() {

  return (
    <article className="projects-case-set">
      <div className="projects-case-set-heading">
        <img src={Logo} alt="Bhoruka Extrusions Pvt. Ltd. Logo" />
        <h3>Bhoruka Extrusions Pvt. Ltd.</h3>
      </div>

      <div className="projects-case-set-container">
        <div className="projects-case-set-imgs">
          <div className="projects-case-set-imgs-slide" >
              <img
                src={Image1}
                alt="Bhoruka Extrusions Pvt. Ltd. Image"
              />
          </div>
        </div>
        <div className="projects-case-set-content">
          <div className="home-reach">
            <article className="home-reach-set">
              <h3>Aluminium Extrusion Manufacturing</h3>
              <p>Industry</p>
            </article>
            <article className="home-reach-set">
              <h3>Mysuru</h3>
              <p>Karnataka, India</p>
            </article>
          </div>
          <p className="home-about-para">
            We successfully executed unloading, shifting inside, unpacking, and
            positioning of furnaces and related accessories in three phases,
            strictly as per the approved packing list.
            <br />
            The project involved handling material received in approximately 40
            containers, executed using suitable mobile cranes, forklifts, open
            canters, manual labour, and other necessary equipment.
          </p>
          <article className="about-company-set">
            <div className="about-company-set-text">
              <h3>Results</h3>
              <p>
                Phase-wise completion with safe handling, accurate placement,
                and adherence to schedule and safety standards.
              </p>
            </div>
          </article>
        </div>
      </div>
    </article>
  );
}

export default Bhoruka;
