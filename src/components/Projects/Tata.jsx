import React from "react";
import Image from "../../assets/Projects/Tata/Image.png";
function Tata() {
  return (
    <section className="projects-tata">
      <header className="template-heading">
        <h2>TATA Safety Achievement Award </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. At et consequat nunc nullam.
          Mattis ac arcu sodales id quam urna.
        </p>
      </header>
      <div className="projects-tata-img">
        <img src={Image} alt="TATA Safety Achievement Award" />
      </div>
    </section>
  );
}

export default Tata;
