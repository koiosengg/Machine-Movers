import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../assets/Projects/Case/TE/Logo.png";
import Image1 from "../../../assets/Projects/Case/TE/Image 1.jpg";

function TE() {
  return (
    <article className="projects-case-set">
      <div className="projects-case-set-heading">
        <img src={Logo} alt="TE Connectivity Logo" />
        <h3>TE Connectivity</h3>
      </div>

      <div className="projects-case-set-container">
        <div className="projects-case-set-imgs">
          <div className="projects-case-set-imgs-slide">
            <img src={Image1} alt="TE Connectivity Image" />
          </div>
        </div>
        <div className="projects-case-set-content">
          <div className="home-reach">
            <article className="home-reach-set">
              <h3>Electrical & Electronics Manufatcuring</h3>
              <p>Industry</p>
            </article>
            <article className="home-reach-set">
              <h3>Whitefield, Bengaluru → Dharwad </h3>
              <p>Karnataka, India</p>
            </article>
          </div>
          <p className="home-about-para">
            We successfully executed the complete plant relocation of TE
            Connectivity from Whitefield, Bengaluru to Dharwad, involving 200+
            transport trips.
            <br />
            The project included dismantling, shifting, unloading, and
            positioning of heavy and precision machinery such as Bruder presses,
            punching machines, power presses, assembly lines, material handling
            systems, and supporting shop-floor equipment.
          </p>
          <article className="about-company-set">
            <div className="about-company-set-text">
              <h3>Results</h3>
              <p>
                End-to-end plant relocation completed safely, on schedule, and
                without damage, ensuring minimal disruption to client
                operations.
              </p>
            </div>
          </article>
        </div>
      </div>
    </article>
  );
}

export default TE;
