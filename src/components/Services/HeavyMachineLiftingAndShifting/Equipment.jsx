import React from "react";

function Equipment() {
  return (
    <section className="template blue-template">
      <header className="template-heading">
        <h2>Equipment & Capabilities</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam.
          Mattis ac arcu sodales id quam urna.
        </p>
      </header>
      <div className="services-equipment">
        <div className="services-equipment-set">
          <h3>Crane Capacity Range</h3>
          <div className="services-equipment-set-container">
            <p>cranes from 12 tons to 500 tons</p>
            <p>small lifts to extremely heavy industrial jobs.</p>
            <span>
              * We operate a versatile fleet of cranes from 12 to 500
              tons,delivering solutions for everything from light lifts to
              massive industrial moves.
            </span>
          </div>
        </div>
        <div className="services-equipment-set">
          <h3>Types of Machinery Available</h3>
          <div className="services-equipment-set-container">
            <p>Hydraulic Cranes</p>
            <p>Pick & Carry Cranes</p>
            <p>Forklifts</p>
            <p>Boom Cranes</p>
          </div>
        </div>
        <div className="services-equipment-set">
          <h3>Specialized Handling Equipment</h3>
          <div className="services-equipment-set-container">
            <p>Skates/Rollers</p>
            <p>M.S. Sheets</p>
            <p>Heavy-duty Jack Systems</p>
            <p>Low-Bed Trailers & Multi-Axle Vehicles</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Equipment;
