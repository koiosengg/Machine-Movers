import React, { useEffect, useRef, useState } from "react";
import Logo from "../../../assets/Projects/Case/EMMVEE/Logo.png";
import Image1 from "../../../assets/Projects/Case/EMMVEE/Image 1.jpg";

function EMMVEE() {
  return (
    <article className="projects-case-set">
      <div className="projects-case-set-heading">
        <img src={Logo} alt="EMMVEE Logo" />
        <h3>Emmvee Energy Pvt. Ltd.</h3>
      </div>

      <div className="projects-case-set-container">
        <div className="projects-case-set-imgs">
          <div className="projects-case-set-imgs-slide">
            <img src={Image1} alt="EMMVEE Image" />
          </div>
        </div>
        <div className="projects-case-set-content">
          <div className="home-reach">
            <article className="home-reach-set">
              <h3>Solar Energy Manufacturing</h3>
              <p>Industry</p>
            </article>
            <article className="home-reach-set">
              <h3>Dabaspet & Sulibele Plants</h3>
              <p>Karnataka, India</p>
            </article>
          </div>
          <p className="home-about-para">
            We successfully executed the unloading, internal shifting, and
            positioning of 3,000+ tons of solar manufacturing machinery for
            Emmvee Energy Pvt. Ltd. as part of their 6.5 GW solar plant
            expansion. <br />
            The scope included handling critical equipment such as laminators,
            conveyors, and production line machinery, completed twice across two
            plants with strict adherence to safety and timelines.
          </p>
          <article className="about-company-set">
            <div className="about-company-set-text">
              <h3>Results</h3>
              <p>
                Zero damage, on-time completion, and high client satisfaction.
              </p>
            </div>
          </article>
        </div>
      </div>
    </article>
  );
}

export default EMMVEE;
