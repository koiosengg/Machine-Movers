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
          Professional industrial machinery installation services across South
          India, ensuring precise alignment, safe commissioning, and minimal
          operational downtime
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
