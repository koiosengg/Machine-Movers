import React from "react";
import FleetImage1 from "../../assets/Home/Fleet/Fleet Image 1.jpg";
import FleetImage2 from "../../assets/Home/Fleet/Fleet Image 2.png";
import FleetImage3 from "../../assets/Home/Fleet/Fleet Image 3.png";
import FleetImage4 from "../../assets/Home/Fleet/Fleet Image 4.png";
import FleetImage5 from "../../assets/Home/Fleet/Fleet Image 5.png";
import FleetImage6 from "../../assets/Home/Fleet/Fleet Image 6.jpg";
import FleetImage7 from "../../assets/Home/Fleet/Fleet Image 7.png";

function Fleet() {
  return (
    <section className="template">
      <header className="template-heading">
        <h2>What we Provide?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam.
          Mattis ac arcu sodales id quam urna.
        </p>
      </header>
      <div className="home-fleet">
        <article className="home-fleet-set blue-overlay">
          <img src={FleetImage1} alt="Fleet Image 1" />
          <div className="home-fleet-set-text">
            <p>70 TON CRANE HYDRAULIC TELESCOPIC CRANE</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={FleetImage2} alt="Fleet Image 2" />
          <div className="home-fleet-set-text">
            <p>3 TON DIESEL OPERATED FORKLIFTS</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={FleetImage3} alt="Fleet Image 3" />
          <div className="home-fleet-set-text">
            <p>20 T PICK & CARRY CRANE</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={FleetImage4} alt="Fleet Image 4" />
          <div className="home-fleet-set-text">
            <p>17 TON PICK & CARRY CRANE</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={FleetImage5} alt="Fleet Image 5" />
          <div className="home-fleet-set-text">
            <p>23 TON PICK & CARRY CRANE</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={FleetImage6} alt="Fleet Image 6" />
          <div className="home-fleet-set-text">
            <p>5 TON FORKLIFT</p>
          </div>
        </article>
        <article className="home-fleet-set blue-overlay">
          <img src={FleetImage7} alt="Fleet Image 7" />
          <div className="home-fleet-set-text">
            <p>OPEN BODY CANTER</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Fleet;
