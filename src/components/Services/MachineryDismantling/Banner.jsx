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
          South India’s complete service partner for container loading, machine
          movement, and recovery operations.
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
