import React from "react";
import SectorsImage1 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Sectors/Sectors Image 1.png";
import SectorsImage2 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Sectors/Sectors Image 2.png";
import SectorsImage3 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Sectors/Sectors Image 3.png";
import SectorsImage4 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Sectors/Sectors Image 4.png";
import SectorsImage5 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Sectors/Sectors Image 5.png";
import SectorsImage6 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Sectors/Sectors Image 6.png";
import SectorsImage7 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Sectors/Sectors Image 7.png";
import SectorsImage8 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Sectors/Sectors Image 8.png";
import SectorsImage9 from "../../../assets/Services/HeavyMachineLiftingAndShifting/Sectors/Sectors Image 9.png";

function Sectors() {
  return (
    <section className="template">
      <header className="template-heading">
        <h2>
          More Sectors to
          <br className="desktop" /> Power Your Projects
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam.
          Mattis ac arcu sodales id quam urna.
        </p>
      </header>
      <div className="home-equipment">
        <article className="home-fleet-set blue-overlay">
          <img src={SectorsImage1} alt="Sectors Image 1" />
          <div className="home-fleet-set-text">
            <p>MACHINE MANUFACTURING COMPANIES</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={SectorsImage2} alt="Sectors Image 2" />
          <div className="home-fleet-set-text">
            <p>CNC, VMC, HMC MACHINE INSTALLATIONS</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={SectorsImage3} alt="Sectors Image 3" />
          <div className="home-fleet-set-text">
            <p>Warehouse & logistics movement</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={SectorsImage4} alt="Sectors Image 4" />
          <div className="home-fleet-set-text">
            <p>Tool rooms & Fabrication units</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={SectorsImage5} alt="Sectors Image 5" />
          <div className="home-fleet-set-text">
            <p>Pharmaceutical industries</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={SectorsImage6} alt="Sectors Image 6" />
          <div className="home-fleet-set-text">
            <p>Automotive industries</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={SectorsImage7} alt="Sectors Image 7" />
          <div className="home-fleet-set-text">
            <p>Laboratory & R&D centers</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={SectorsImage8} alt="Sectors Image 8" />
          <div className="home-fleet-set-text">
            <p>Aerospace & defense</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={SectorsImage9} alt="Sectors Image 9" />
          <div className="home-fleet-set-text">
            <p>Heavy engineering</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Sectors;
