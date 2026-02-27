import React, { useEffect, useRef, useState } from "react";
import GalleryImg1 from "../../../assets/Services/MachineryLoadingAndUnloading/Banner/Gallery Image 1.jpg";

function Banner() {
  return (
    <section className="home-banner other-banner">
      <header>
        <h1>
          Machinery Loading &
          <br className="desktop" /> Unloading
        </h1>
        <p>
          Safe, efficient machinery loading and unloading services across South
          India for factories and industrial projects
        </p>
      </header>

      <div className="home-banner-gallery">
        <div className="home-banner-gallery-slide">
          <img src={GalleryImg1} alt=" Machinery Loading & Unloading" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
