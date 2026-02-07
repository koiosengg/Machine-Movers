import React from "react";
import PF from "../../../assets/Services/HeavyMachineLiftingAndShifting/Standards/PF.png";
import ESIC from "../../../assets/Services/HeavyMachineLiftingAndShifting/Standards/ESIC.png";

function Standards() {
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
      <div className="services-standards">
        <p className="services-standards-para">
          *Our work is driven by 100% commitment to{" "}
          <span>safety, compliance, and methodical execution,</span> ensuring
          smooth, risk-free operations every time.
        </p>
        <article className="services-standards-set">
          <img
            src={PF}
            alt="Employee’s Provident Fund of India (PF Compliance)"
          />
          <h3>Employee’s Provident Fund of India (PF Compliance)</h3>
        </article>
        <article className="services-standards-set">
          <img
            src={ESIC}
            alt="Employee’s State Insurance Corporation Scheme (ESIC)"
          />
          <h3>Employee’s State Insurance Corporation Scheme (ESIC)</h3>
        </article>
      </div>
    </section>
  );
}

export default Standards;
