import React, { useEffect, useRef, useState } from "react";
import GalleryImg1 from "../../../assets/Services/MachineryDismantling/Banner/Gallery Image 1.jpg";

function Banner() {
  return (
    <section className="home-banner other-banner">
      <header>
        <h1>
          Machinery
          <br className="desktop" /> Dismantling
        </h1>
        <p>
          Professional industrial machinery dismantling services across South
          India, ensuring safe decommissioning, systematic disassembly, and
          damage-free relocation support
        </p>
      </header>

      <div className="home-banner-gallery">
        <div className="home-banner-gallery-slide">
          <img src={GalleryImg1} alt="Machinery Dismantling" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
