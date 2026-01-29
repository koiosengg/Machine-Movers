import React from "react";
import InfrastructureImage1 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Infrastructure/Infrastructure Image 1.png";
import InfrastructureImage2 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Infrastructure/Infrastructure Image 2.png";
import InfrastructureImage3 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Infrastructure/Infrastructure Image 3.png";
import InfrastructureImage4 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Infrastructure/Infrastructure Image 4.png";
import InfrastructureImage5 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Infrastructure/Infrastructure Image 5.png";
import InfrastructureImage6 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Infrastructure/Infrastructure Image 6.png";

function Infrastructure() {
  return (
    <section className="template">
      <header className="template-heading">
        <h2>Our Infrastructure </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam.
          Mattis ac arcu sodales id quam urna.
        </p>
      </header>
      <div className="home-equipment">
        <article className="home-fleet-set blue-overlay">
          <img src={InfrastructureImage1} alt="Infrastructure Image 1" />
          <div className="home-fleet-set-text">
            <p>Professional crane and trailer partners</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={InfrastructureImage2} alt="Infrastructure Image 2" />
          <div className="home-fleet-set-text">
            <p>Skilled and experienced rigging team</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={InfrastructureImage3} alt="Infrastructure Image 3" />
          <div className="home-fleet-set-text">
            <p>Ability to handle machinery up to several tons</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={InfrastructureImage4} alt="Infrastructure Image 4" />
          <div className="home-fleet-set-text">
            <p>Vehicle support for transportation</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={InfrastructureImage5} alt="Infrastructure Image 5" />
          <div className="home-fleet-set-text">
            <p>Dedicated project supervisor</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={InfrastructureImage6} alt="Infrastructure Image 6" />
          <div className="home-fleet-set-text">
            <p>Safety equipment tools</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Infrastructure;
