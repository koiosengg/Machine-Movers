import React from "react";
import GearImage1 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Gear/Gear Image 1.jpg";
import GearImage2 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Gear/Gear Image 2.jpg";
import GearImage3 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Gear/Gear Image 3.png";
import GearImage4 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Gear/Gear Image 4.jpg";
import GearImage5 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Gear/Gear Image 5.jpg";

function Gear() {
  return (
    <section className="template">
      <header className="template-heading">
        <h2>
          Safety Standards & <br className="desktop" /> Worker Coverage
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam.
          Mattis ac arcu sodales id quam urna.
        </p>
      </header>
      <div className="services-gear">
        <article className="home-fleet-set blue-overlay">
          <img src={GearImage1} alt="Gear Image 1" />
          <div className="home-fleet-set-text">
            <p>SAFETY SHOE</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={GearImage2} alt="Gear Image 2" />
          <div className="home-fleet-set-text">
            <p>SAFETY BELT</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={GearImage3} alt="Gear Image 3" />
          <div className="home-fleet-set-text">
            <p>SAFETY HELMET</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={GearImage4} alt="Gear Image 4" />
          <div className="home-fleet-set-text">
            <p>GOGGLE</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={GearImage5} alt="Gear Image 5" />
          <div className="home-fleet-set-text">
            <p>HAND GLOVES</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Gear;
