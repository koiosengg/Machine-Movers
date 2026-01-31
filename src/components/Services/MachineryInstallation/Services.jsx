import React, { useEffect, useRef, useState } from "react";
import ServicesImage1 from "../../../assets/Services/MachineryInstallation/Services/Services Image 1.png";

function Services() {
  return (
    <section className="template blue-template">
      <header className="template-heading">
        <h2>Our Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam.
          Mattis ac arcu sodales id quam urna.
        </p>
      </header>

      <div className="services-services">
        <div className="services-services-text">
          <h3 className="active-services-services">Leveling & alignment support</h3>
        </div>
        <div className="services-services-imgs">
          <div className="services-services-img active-services-services-img">
            <img src={ServicesImage1} alt={`Services Image 1`} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
