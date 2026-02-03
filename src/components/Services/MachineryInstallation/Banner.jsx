import React, { useEffect, useRef, useState } from "react";
import Arrow from "../../../assets/Home/Banner/Arrow.svg";
import GalleryImg1 from "../../../assets/Services/MachineryInstallation/Banner/Gallery Image 1.mp4";

function Banner() {
  return (
    <section className="home-banner other-banner">
      <header>
        <h1>
          Machinery
          <br className="desktop" />
          Installation
        </h1>
        <p>
          South India’s complete service partner for container loading, machine
          movement, and recovery operations.
        </p>
      </header>

      <div className="home-banner-gallery">
        <div className="home-banner-gallery-slide">
          <video src={GalleryImg1} muted autoPlay loop playsInline />
        </div>
      </div>
    </section>
  );
}

export default Banner;
